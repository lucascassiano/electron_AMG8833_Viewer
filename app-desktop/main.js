// Basic init
const electron = require('electron');
const { app, BrowserWindow, Menu, MenuItem } = electron;

//changing the topbar menu
const menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))
//Menu.setApplicationMenu(menu);

// Let electron reloads by itself when webpack watches changes in ./app/
//require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow;

//quit on macOS
app.on('window-all-closed', () => {
    //if (process.platform != 'darwin') {
    app.quit();
    //}
});

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800, height: 600, transparent: false,
        frame: true, titleBarStyle: 'visible'
    });
    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
})
