$ErrorActionPreference = "Stop"

$RepoDir = Split-Path -Parent $PSScriptRoot
Set-Location $RepoDir

node scripts/update-ai-usage.mjs

$status = git status --porcelain src/data/ai-usage.json
if (-not [string]::IsNullOrWhiteSpace($status)) {
    git add src/data/ai-usage.json
    git -c user.name="Baltazar Salerno" -c user.email="S-Baltazar@users.noreply.github.com" commit -m "chore: update 30-day AI usage metrics"
    git push origin main
    npx --yes vercel --prod --yes
} else {
    Write-Output "No changes in src/data/ai-usage.json"
}
