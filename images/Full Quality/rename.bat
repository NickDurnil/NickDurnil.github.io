@echo off
setlocal ENABLEDELAYEDEXPANSION
set/a fileNum = 1

for %%f in (*.webp) do (
  ren %%~nf%%~xf !fileNum!%%~xf
  set/a fileNum += 1
)