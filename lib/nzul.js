exports.nzul = (id, XNZUL, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉

  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
  
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───

╔════════════════════
║ *MENU BOT ${XNZUL}*
╠════════════════════
║│1. _*#menu1*_
║│2. _*#menu2*_
║│3. _*#menu3*_
║│4. _*#menu4*_
║│5. _*#menuall*_
║│6. _*#info*_
║│7. _*#donasi*_
║│8. _*#creator*_
╠════════════════════
║ _*MADE BY XNZUL*_
╚════════════════════`
}
