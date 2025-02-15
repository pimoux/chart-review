@echo off
setlocal

:: Définir le dossier à parcourir avec un chemin relatif
set "Dossier=.\decembre"

:: Vérifier si le dossier existe
if not exist "%Dossier%" (
    echo Le dossier "%Dossier%" n'existe pas.
    exit /b
)

:: Parcourir tous les dossiers de "decembre" et renommer les fichiers selon leur ancienneté
for /d %%D in ("%Dossier%\*") do (
    echo Traitement du dossier: %%D
    setlocal enabledelayedexpansion
    set count=0
    for /f "delims=" %%F in ('dir /b /o:d "%%D\*.png"') do (
        set /a count+=1
        if !count! == 1 ren "%%D\%%F" "H1.png"
        if !count! == 2 ren "%%D\%%F" "M15.png"
        if !count! == 3 ren "%%D\%%F" "M5.png"
        if !count! == 4 ren "%%D\%%F" "M1.png"
    )
    endlocal
)

pause
