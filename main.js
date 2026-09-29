const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Connects the secure communication bridge
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load the visual interface skeleton structure file
  mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'));
}

// SECURE IPC BRIDGE LISTENER: Intercepts instructions from the UI and fires them directly into the OS shell
ipcMain.handle('execute-command', async (event, commandString) => {
  return new Promise((resolve) => {
    console.log(`📟 Executing OS Signal: ${commandString}`);
    
    // Natively executes the string command straight into Bash / PowerShell without copy-paste
    exec(commandString, (error, stdout, stderr) => {
      if (error) {
        resolve({ success: false, output: stderr || error.message });
      } else {
        resolve({ success: true, output: stdout || 'Command executed cleanly with zero return text payload.' });
      }
    });
  });
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
