@echo off
setlocal

:: Définir le dossier à parcourir avec un chemin relatif
set "Dossier=.\septembre"

:: Vérifier si le dossier existe
if not exist "%Dossier%" (
    echo Le dossier "%Dossier%" n'existe pas.
    exit /b
)

:: Parcourir tous les dossiers de "septembre" et renommer les fichiers PNG
for /d %%D in ("%Dossier%\*") do (
    echo Traitement du dossier: %%D
    setlocal enabledelayedexpansion
    set count=0
    set firstFileName=

    for /f "delims=" %%F in ('dir /b /a:-d /o:d "%%D\*.png"') do (
        set /a count+=1
        if !count! == 1 set "firstFileName=%%F"
    )

    if not defined firstFileName (
        echo Aucun fichier PNG trouvé dans %%D
        endlocal
        goto :continue
    )

    set prefix=!firstFileName:~0,2!
    set count=0

    for /f "delims=" %%F in ('dir /b /a:-d /o:d "%%D\*.png"') do (
        set /a count+=1
        if /i "!prefix!" == "NQ" (
            if !count! == 1 ren "%%D\%%F" "NQH1.png"
            if !count! == 2 ren "%%D\%%F" "ESH1.png"
            if !count! == 3 ren "%%D\%%F" "NQM15.png"
            if !count! == 4 ren "%%D\%%F" "ESM15.png"
            if !count! == 5 ren "%%D\%%F" "NQM5.png"
            if !count! == 6 ren "%%D\%%F" "ESM5.png"
            if !count! == 7 ren "%%D\%%F" "NQM1.png"
            if !count! == 8 ren "%%D\%%F" "ESM1.png"
        ) else (
            if !count! == 1 ren "%%D\%%F" "ESH1.png"
            if !count! == 2 ren "%%D\%%F" "NQH1.png"
            if !count! == 3 ren "%%D\%%F" "ESM15.png"
            if !count! == 4 ren "%%D\%%F" "NQM15.png"
            if !count! == 5 ren "%%D\%%F" "ESM5.png"
            if !count! == 6 ren "%%D\%%F" "NQM5.png"
            if !count! == 7 ren "%%D\%%F" "ESM1.png"
            if !count! == 8 ren "%%D\%%F" "NQM1.png"
        )
    )

    :continue
    endlocal
)

pause

@REM To avoid files not found error, rename files before executing the script
@REM Get-ChildItem -Path ".\septembre" -Recurse -Filter "*.png" | ForEach-Object {
@REM     $newName = $_.Name -replace "NQ1!", "NQ1"
@REM     if ($newName -ne $_.Name) {
@REM         Rename-Item -Path $_.FullName -NewName $newName
@REM     }
@REM }

@REM To avoid files not found error, rename files before executing the script
@REM Get-ChildItem -Path ".\septembre" -Recurse -Filter "*.png" | ForEach-Object {
@REM     $newName = $_.Name -replace "ES1!", "ES1"
@REM     if ($newName -ne $_.Name) {
@REM         Rename-Item -Path $_.FullName -NewName $newName
@REM     }
@REM }