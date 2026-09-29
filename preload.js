const { contextBridge, ipcRenderer } = require('electron');

// Expose the secure bridge APIs to the React renderer window global state safely
contextBridge.exposeInMainWorld('api', {
  sendTerminalCommand: (commandString) => ipcRenderer.invoke('execute-command', commandString)
});
