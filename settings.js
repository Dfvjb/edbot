/*
EM CASO DE DUVIDAS, ENTRE EM CONTATO COMIGO
WA.ME/➑➑➊➋➍➋➏➎➍➍

QUER ADQUIRIR O ARQUIVO DESCRIPTOGRAFADO?
PREÇO 35 REAIS


Creditos: 
 XEON : https://github.com/DGXeon/CheemsBot-MD2
 DikaArdnt: https://github.com/DikaArdnt
 https://github.com/MhankBarBar

*/

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
global.brizaskey = 'brizaloka'
//customize settings\\
global.owner = ['➑➑➊➋➍➋➏➎➍➍']
global.premium = ['➑➑➊➋➍➋➏➎➍➍']
global.ownernomer = '➑➑➊➋➍➋➏➎➍➍'
global.ownername = '🅔🅝🅖🅖🅐🅡'
global.botname = '🅔🅝🅖🅖🅐🅡MD V2'
global.footer = '🅔🅝🅖🅖🅐🅡BOT'
global.ig = '🅜🅐🅐🅕 🅣🅘🅓🅐🅚 🅐🅓🅐'
global.region = 'RS, Brasil'
global.sc = 'https://github.com/bruno918/edbot'
global.myweb = '🅔🅝🅖🅖🅐🅡 🅖🅐🅜🅘🅝🅖 ⓿➑➎'
global.packname = 'edbot'
global.author = 'bruno'
global.sessionName = 'edward'
global.prefa = ['*']
global.sp = '⭔'
global.mess = {
    success: 'Pronto ✓',
    admin: 'Comando exclusivo para administradores!',
    botAdmin: 'me da adm mano',
    owner: 'Ta se achando o meu dono?!',
    group: 'Comando exclusivo para grupos!',
    private: 'Esse comando so pode ser usado no pv!',
    bot: 'Comando exclusivo para mim!',
    wait: 'Estou fazendo ... 🤓',
    error: 'Erro, tente novamente ou comunique meu dono!',
    endLimit: 'Seu limite diário expirou, tente novamente mais tarde.',
    nomedono: 'Bruno'
}
    global.limitawal = {
    premium: "Infinity",
    free: 1000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./arquivos/img/edward.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado: '${__filename}'`))
	delete require.cache[file]
	require(file)
})
