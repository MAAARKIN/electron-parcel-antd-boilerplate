const { app, BrowserWindow } = require('electron');
const path = require('path');
const { setMainMenu } = require('./app-menu');
const { startParcelProcess } = require('./parcel');

if (!process.env.NODE_ENV) {
  require('electron-debug')({ showDevTools: true });
}

let mainWindow;

app.on('ready', async () => {
  if (!process.env.NODE_ENV) {
    // Start the parcel process to launch the development server
    await startParcelProcess();
  }

  // Create the browser main window
  mainWindow = new BrowserWindow({
    show: false,
    titleBarStyle: "hidden",
    resizable: true,
    frame: true,
    webPreferences: {
      nodeIntegration: false
    }
  });
  if (!process.env.NODE_ENV) {
    // Set the load URL to the development server
    mainWindow.loadURL('http://localhost:1234');
  } else {
    // If it's not the development build then load the production index
    mainWindow.loadURL(path.join('file://', __dirname, 'app/index.html'));
  }
  // Set the menu of the main window's application
  setMainMenu();

  // When the main window is ready, show it
  mainWindow.on('ready-to-show', () => mainWindow.show());
});
