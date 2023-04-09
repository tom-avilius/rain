
// all declarations are mentioned below

// importing electron modules
const { app, ipcMain, BrowserWindow } = require('electron');

// ----------------END OF IMPORTS-----------------------


// function to create main window
// this is the function that gets called first when 
// the app is initialized and ready.
const rain = () => {

    const rainPrimaryWindow = new BrowserWindow();

    rainPrimaryWindow.loadFile('./assets/html/index.html');
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
