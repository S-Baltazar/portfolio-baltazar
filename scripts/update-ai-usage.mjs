import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(ROOT_DIR, "src", "data", "ai-usage.json");

const WINDOW_DAYS = 30;
const CUTOFF_MS = Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000;

const BRAIN_DIRS = [
  path.join(os.homedir(), ".gemini", "antigravity-cli", "brain"),
  path.join(os.homedir(), ".gemini", "antigravity", "brain"),
];

const seenConversations = new Set();
let sessions = 0;
let inputTokens = 0;
let cacheReadTokens = 0;
let outputTokens = 0;

for (const brainDir of BRAIN_DIRS) {
  if (!fs.existsSync(brainDir)) continue;

  for (const entry of fs.readdirSync(brainDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const conversationId = entry.name;
    if (seenConversations.has(conversationId)) continue;

    const transcriptPath = path.join(
      brainDir,
      conversationId,
      ".system_generated",
      "logs",
      "transcript.jsonl"
    );
    if (!fs.existsSync(transcriptPath)) continue;

    seenConversations.add(conversationId);
    let hasRecentActivity = false;

    const content = fs.readFileSync(transcriptPath, "utf8");
    for (const line of content.split("\n")) {
      if (!line.trim()) continue;
      let step;
      try {
        step = JSON.parse(line);
      } catch {
        continue;
      }

      const timestamp = step.created_at ? Date.parse(step.created_at) : NaN;
      if (!Number.isFinite(timestamp) || timestamp < CUTOFF_MS) continue;

      hasRecentActivity = true;
      if (typeof step.input_tokens === "number") inputTokens += step.input_tokens;
      if (typeof step.cache_read_tokens === "number") {
        cacheReadTokens += step.cache_read_tokens;
      }
      if (typeof step.output_tokens === "number") outputTokens += step.output_tokens;
    }

    if (hasRecentActivity) {
      sessions += 1;
    }
  }
}

const totalTokens = inputTokens + cacheReadTokens + outputTokens;

const payload = {
  windowDays: WINDOW_DAYS,
  sessions,
  inputTokens,
  cacheReadTokens,
  outputTokens,
  totalTokens,
  updatedAt: new Date().toISOString().slice(0, 10),
};

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log("Updated AI usage:", payload);
