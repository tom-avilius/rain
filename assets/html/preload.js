const {contextBridge, ipcRenderer} = require('electron');

// API requiring menu operations
contextBridge.exposeInMainWorld('menu', {

    // to send info to the main script that the menu button was clicked
    // flag is sent as true
    click: (flag) => ipcRenderer.send('menu-click', flag),
})