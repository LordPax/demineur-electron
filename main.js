const {app, BrowserWindow, Menu} = require('electron')
let win

const mainWindow = () => {
    win = new BrowserWindow({
        width : 800,
        height : 600,
        resizable : false,
        webPreferences : {
            nodeIntegration : true
        }
    })

    win.loadFile('index.html')
    // win = null
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