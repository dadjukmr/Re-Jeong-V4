require("./database/module")

//GLOBAL PAYMENT
global.storename = "Re-Jeong "
global.dana = "-"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "237698575608" //masukin no lu
global.namabot = "Re-Jeong V4"
global.nomorbot = "237698575608" //masukin no lu
global.namaCreator = "Re-Jeong "
global.linkyt = "-"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = "https://chat.whatsapp.com/DuQU3pbRi4s6kwd5SW5der"
global.imageurl = 'https://telegra.ph/file/019207dd7bf306d343b7e.jpg'
global.isLink = 'https://whatsapp.com/channel/0029ValVRdpI1rcfS1rAJq3h'
global.packname = "Re-Jeong"
global.author = "Re-Jeong"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
