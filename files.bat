@echo off
setlocal

:: Set the folder path, or leave as "." to use the current folder
set "TARGET_FOLDER=."

:: Output the list to a text file (optional)
set "OUTPUT_FILE=folder_contents.txt"

:: List all files and folders recursively
dir "%TARGET_FOLDER%" /s /b > "%OUTPUT_FILE%"

echo Contents of %TARGET_FOLDER% have been saved to %OUTPUT_FILE%
endlocal
pause
