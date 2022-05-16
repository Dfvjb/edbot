/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '8b910f00cc',
}

// Other
global.owner = ['5555933005901']
global.packname = 'edward by bruno'
global.author = '14502314093'
global.sessionName = 'edward'
global.prefa = ['#','/','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Pronto ✓',
    admin: 'ta se achando o adm ?',
    botAdmin: 'me da adm cacete',
    owner: 'comando exclusivo para o bruno',
    group: 'comando exclusivo para grupos!!',
    private: 'comando exclusivo para chat privados!',
    bot: 'comando exclusivo para mim!',
    wait: 'carregando...',
}
global.thumb = fs.readFileSync('./arquivos/img/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`atualizado:'${__filename}'`))
	delete require.cache[file]
	require(file)
})
