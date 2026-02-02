# Git Push Script for nvwHOMESITE
# Date: February 1, 2026

Write-Host "=== nvwHOMESITE Git Status Check ===" -ForegroundColor Cyan

# Navigate to project directory
Set-Location "c:\Users\Owner\nvwHOMESITE"

# Check current branch
Write-Host "`n1. Current Branch:" -ForegroundColor Yellow
git branch --show-current

# Check remote
Write-Host "`n2. Remote Repository:" -ForegroundColor Yellow
git remote -v

# Check status
Write-Host "`n3. Git Status:" -ForegroundColor Yellow
git status

# Show uncommitted changes
Write-Host "`n4. Uncommitted Changes:" -ForegroundColor Yellow
git diff --stat

# Stage all changes
Write-Host "`n5. Staging all changes..." -ForegroundColor Green
git add .

# Show what will be committed
Write-Host "`n6. Files to be committed:" -ForegroundColor Yellow
git status --short

# Commit with message
Write-Host "`n7. Committing changes..." -ForegroundColor Green
git commit -m "Fix: Update Our Story section, restore translation support, and update video sections

- Updated Our Story heading with enhanced styling
- Updated Our Story content to spotlight Napa Valley wineries
- Maintained bilingual support (EN/ES) throughout
- Updated video section structure with new booking CTA
- Preserved responsive design and glassmorphism styling
- Resolved merge conflict from previous session"

# Check which branch we're on and push
$currentBranch = git branch --show-current
Write-Host "`n8. Pushing to origin/$currentBranch..." -ForegroundColor Green
git push origin $currentBranch

Write-Host "`n=== Push Complete! ===" -ForegroundColor Cyan
Write-Host "Branch: $currentBranch" -ForegroundColor Green
Write-Host "All changes have been committed and pushed to GitHub." -ForegroundColor Green
