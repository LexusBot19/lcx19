let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: LexusBot
╠➥ Script: LexusBot19
║
╠➥ Github: https://github.com/LexusBot19
╠➥ Instagram: @Lxcyz._
╠➥ YouTube: LexusCH
║
╠═〘 Thanks To 〙 ═
╠➥ NaBot
╠➥ MfarelS
╠➥ STm4Gpt
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Saweria: https://saweria.co/donate/LexusCH
╠➥ Trakteer: https://trakteer.id/LexusCH
╠➥ Pulsa: 0821-2432-8193
║
║>Request? Wa.me/088806756044
║
╠═〘 LEXUS BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

