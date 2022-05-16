const { WAProto,  BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')

const { Aki } = require('aki-api')

/*
"aki-api": "^6.0.8",
*/

const Jogo_Akinator = JSON.parse(fs.readFileSync('./db/akt.json'))
const type = Object.keys(m.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(m.message)[2] : (Object.keys(m.message)[0] == 'messageContextInfo') ? Object.keys(m.message)[1] : Object.keys(m.message)[0]
selecaob = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const msgb = selecaob.trim().split(/ +/)


//BOTÕES

    const enviarbotao = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        sakatsumi.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
        const enviarlista = async (title, description, textButton, sections) => {
            var list = WAProto.Message.fromObject({
                listMessage: WAProto.ListMessage.fromObject({
                    title: title,
                    buttonText: textButton,
                    description: description,
                    listType: 1,
                    sections: sections
                })
            })
            await sakatsumi.relayMessage(m.chat, list, {messageId: m.key.id})
        }
    

         
//SWITCH CASES

