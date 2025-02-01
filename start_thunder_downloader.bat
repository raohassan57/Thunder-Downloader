@echo off
set "appDirc_path=%~dp0\ecosystem.config.js"

@REM cd E:\Software\Download manger\Video-Downloader\
pm2 start "%appDirc_path%"