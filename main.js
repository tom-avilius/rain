
// all declarations are mentioned below

// importing electron modules
const { app, ipcMain, BrowserWindow } = require('electron');
// importing the path module
const path = require('path');

// ----------------END OF IMPORTS-----------------------


// function to create main window
// this is the function that gets called first when 
// the app is initialized and ready.
const rain = () => {

    const rainPrimaryWindow = new BrowserWindow( {

        frame: false,

        webPreferences: {

            // adding the preload script
            preload: path.join(__dirname, 'assets/html/preload.js'),
        }
    });

    // loading the main html file
    rainPrimaryWindow.loadFile('./assets/html/index.html');

    // removing the menu
    rainPrimaryWindow.setMenu(null);

    rainPrimaryWindow.webContents.openDevTools();

    // listening to the menu-click channel to know when the menu button is clicked
    ipcMain.on('menu-click', (event, flag) => {

        if (flag) {

            console.log('Why click menu??');
        }
    })
}


// actual start of electron app
try {

    app.whenReady().then( () => {

        rain();
    })
} catch (err) {

    console.log("Error while creating main window for rain.");
    console.trace(err);
}
