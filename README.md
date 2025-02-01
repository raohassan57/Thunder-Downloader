# Thunder Downloader Setup and Installation
   Welcome to Thunder Downloader! This guide will walk you through the installation process.

[![Watch the video](https://img.youtube.com/vi/_5tFXJQIzi4/0.jpg)](https://www.youtube.com/watch?v=_5tFXJQIzi4)

## Step 1: Install Required Software

You'll need to install two software packages:

1. **Node.js:**
   - Download the appropriate Windows installer (64-bit recommended) from: [https://nodejs.org/dist/v22.13.1/node-v22.13.1-x64.msi](https://nodejs.org/dist/v22.13.1/node-v22.13.1-x64.msi)
   - Run the installer and follow the on-screen instructions. The default settings are usually fine.

2. **FFmpeg:**
   - Download the latest Windows build from: [https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/)
   - The downloaded file will be a zip archive. Extract the contents to a suitable location on your computer (e.g., `C:\Program Files\FFmpeg`).
   - **Important:** Add the `bin` folder inside the extracted FFmpeg directory to your system's PATH environment variable. This allows other programs to find FFmpeg. You can find instructions for this online by searching for "add ffmpeg to windows path". Make sure to restart your computer or command prompt after adding it to the PATH.

## Step 2: Run the Setup Script

1. Double-click the `setup.bat` file located in the same directory as this setup guide.
2. The script will install any necessary dependencies. Wait for it to finish.

## Step 3: Configure Task Scheduler

1. Open **Task Scheduler**. You can find it by searching for "Task Scheduler" in the Windows Start Menu.

2. Create a new task:
   - In the right-hand pane, click **Create Basic Task...**
   - Give the task a name: `Start_Thunder_Downloader`
   - Add a description (optional).
   - Click **Next**.

3. Configure the trigger:
   - Select **When the computer starts**.
   - Click **Next**.

4. Configure the action:
   - Select **Start a program**.
   - Click **Next**.

5. Specify the program/script:
   - Browse to and select the `start_thunder_downloader.bat` file (located in the same directory as this setup guide).
   - Click **Next**.

6. Review and finish:
   - Review the task summary.
   - Click **Finish**.

7. **Crucial Step: Run with Highest Privileges**
   - In the Task Scheduler, go to **Task Scheduler Library**.
   - Find your newly created task (`Start_Thunder_Downloader`).
   - Right-click on it and select **Properties**.
   - Go to the **General** tab.
   - Check the box that says **Run with highest privileges**.
   - Click **OK**.

## Step 4: Restart Your Computer

Restart your computer for the changes to take effect.

## Step 5: Use Thunder Downloader

After restarting, open your web browser and go to: `http://localhost:8000`

You should now be able to use Thunder Downloader!

## Troubleshooting

If you encounter any problems, please check the following:

* **FFmpeg PATH:** Ensure you correctly added the FFmpeg `bin` directory to your system's PATH environment variable.
* **Task Scheduler Configuration:** Double-check that the Task Scheduler task is configured to run with highest privileges and that the path to the `start_thunder_downloader.bat` file is correct.
* **Server Logs:** If the downloader doesn't seem to be working, check the server logs for any errors. The location of the logs will depend on how your application is configured.

If you still have issues, please refer to the project's documentation or contact support for further assistance.
