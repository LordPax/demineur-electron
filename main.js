const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
let win

const mainWindow = () => {
    win = new BrowserWindow({
        width : 800,
        height : 600,
        resizable : false,
        webPreferences : {
            preload : path.join(__dirname, "script/canvas.min.js"),
            nodeIntegration : false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(mainWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (win === null) mainWindow()
})

const menu = Menu.buildFromTemplate([
    {
        label : 'Partie',
        submenu : [
            {
                label : 'Recharger',
                click : () => win.reload()
            }
        ]
    },
    {
        label : "Test",
        click : () => console.log('je suis un test')
    }
])

Menu.setApplicationMenu(menu)