const {app, BrowserWindow} = require('electron')

const mainWindow = () => {
	let win = new BrowserWindow({
		width : 800,
		height : 600,
		webPreferences : {
			nodeIntegration : true
		}
	})

	win.loadFile('index.html')
	// win.loadURL("https://www.youtube.fr")

	win = null
}

app.whenReady().then(mainWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
	if (win === null) mainWindow()
})