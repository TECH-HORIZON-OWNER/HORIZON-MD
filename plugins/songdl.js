const _0x190fd7=_0x83a1;(function(_0x51f812,_0x3089d9){const _0x58ea1a=_0x83a1,_0x5993ae=_0x51f812();while(!![]){try{const _0x1f4652=parseInt(_0x58ea1a(0xe4))/0x1*(-parseInt(_0x58ea1a(0xe8))/0x2)+parseInt(_0x58ea1a(0xbf))/0x3*(parseInt(_0x58ea1a(0xd0))/0x4)+-parseInt(_0x58ea1a(0xf4))/0x5*(parseInt(_0x58ea1a(0xee))/0x6)+-parseInt(_0x58ea1a(0xb5))/0x7+parseInt(_0x58ea1a(0xc2))/0x8*(-parseInt(_0x58ea1a(0xd8))/0x9)+parseInt(_0x58ea1a(0xd5))/0xa*(-parseInt(_0x58ea1a(0xbc))/0xb)+parseInt(_0x58ea1a(0xed))/0xc*(parseInt(_0x58ea1a(0xc4))/0xd);if(_0x1f4652===_0x3089d9)break;else _0x5993ae['push'](_0x5993ae['shift']());}catch(_0x59cf1d){_0x5993ae['push'](_0x5993ae['shift']());}}}(_0x2058,0xb5a06));const config=require(_0x190fd7(0xc1)),{cmd}=require(_0x190fd7(0xec)),yts=require(_0x190fd7(0xb7)),{ytsearch}=require(_0x190fd7(0xcf));cmd({'pattern':_0x190fd7(0xf5),'alias':[_0x190fd7(0xd2)],'react':'🎵','desc':_0x190fd7(0xdd),'category':_0x190fd7(0xf7),'use':_0x190fd7(0xbb),'filename':__filename},async(_0x6df5c1,_0x20c20d,_0x145151,{from:_0x54e96f,q:_0x5089b,reply:_0x4459f4})=>{const _0xeba275=_0x190fd7;try{if(!_0x5089b)return await _0x4459f4('❌\x20Please\x20provide\x20a\x20song\x20name\x20or\x20YouTube\x20URL!');let _0x209867,_0x1d6ab8;if(_0x5089b[_0xeba275(0xde)](/(youtube\.com|youtu\.be)/)){_0x209867=_0x5089b;const _0x5672bd=await yts({'videoId':_0x5089b[_0xeba275(0xe2)](/[=/]/)[_0xeba275(0xf9)]()});_0x1d6ab8=_0x5672bd[_0xeba275(0xd4)];}else{const _0x25a1a6=await yts(_0x5089b);if(!_0x25a1a6[_0xeba275(0xce)][_0xeba275(0xb3)])return await _0x4459f4(_0xeba275(0xdc));_0x209867=_0x25a1a6[_0xeba275(0xce)][0x0]['url'],_0x1d6ab8=_0x25a1a6[_0xeba275(0xce)][0x0][_0xeba275(0xd4)];}await _0x4459f4(_0xeba275(0xbd));const _0x1c8c24='https://api.davidcyriltech.my.id/download/ytmp3?url='+encodeURIComponent(_0x209867),_0x557f82=await fetch(_0x1c8c24),_0x47a380=await _0x557f82[_0xeba275(0xc8)]();if(!_0x47a380['success'])return await _0x4459f4(_0xeba275(0xda));await _0x6df5c1[_0xeba275(0xe0)](_0x54e96f,{'audio':{'url':_0x47a380[_0xeba275(0xcc)][_0xeba275(0xc5)]},'mimetype':_0xeba275(0xcd),'ptt':![]},{'quoted':_0x145151}),await _0x4459f4('✅\x20*'+_0x1d6ab8+_0xeba275(0xdb));}catch(_0x585144){console[_0xeba275(0xc0)](_0x585144),await _0x4459f4(_0xeba275(0xc7)+_0x585144[_0xeba275(0xeb)]);}}),cmd({'pattern':'song','alias':['ytdl',_0x190fd7(0xe5)],'react':'🎶','desc':_0x190fd7(0xe3),'category':_0x190fd7(0xe6),'use':'.song\x20<\x20Yt\x20url\x20or\x20Name\x20>','filename':__filename},async(_0x54625c,_0x14f2e5,_0x2dcb05,{from:_0x553657,prefix:_0x344a11,quoted:_0x2a0915,q:_0x368318,reply:_0x40d163})=>{const _0x4de8d1=_0x190fd7;try{if(!_0x368318)return await _0x40d163(_0x4de8d1(0xd7));const _0x557692=await ytsearch(_0x368318);if(_0x557692[_0x4de8d1(0xf8)][_0x4de8d1(0xb3)]<0x1)return _0x40d163(_0x4de8d1(0xf1));let _0x2f4b73=_0x557692[_0x4de8d1(0xf8)][0x0],_0x1538f8=_0x4de8d1(0xf2)+encodeURIComponent(_0x2f4b73[_0x4de8d1(0xe9)]),_0x3997ef=await fetch(_0x1538f8),_0x23be78=await _0x3997ef[_0x4de8d1(0xc8)]();if(_0x23be78[_0x4de8d1(0xbe)]!==0xc8||!_0x23be78['success']||!_0x23be78['result'][_0x4de8d1(0xb2)])return _0x40d163('Failed\x20to\x20fetch\x20the\x20audio.\x20Please\x20try\x20again\x20later.');let _0x40c461=_0x4de8d1(0xea)+_0x2f4b73[_0x4de8d1(0xd4)]+_0x4de8d1(0xd9)+_0x2f4b73[_0x4de8d1(0xc9)]+_0x4de8d1(0xe7)+_0x2f4b73[_0x4de8d1(0xf6)]+_0x4de8d1(0xe1)+_0x2f4b73[_0x4de8d1(0xf0)][_0x4de8d1(0xca)]+_0x4de8d1(0xba)+_0x2f4b73[_0x4de8d1(0xe9)]+'*\x0a┃✦╰──────────────\x0a╰━━━━━━━━━━━━━━━┈⊷\x0a✪⦁⦂⦁━━━━━━━━━━━━━━━━━⦁⦂⦁✪\x0a╭━━〔\x20*REPLAY\x20BELOW\x20NUMBER*\x20〕\x0a┃✰╭──────────────\x0a┃✰│\x201┃\x20DOCUMENT\x20DOWNLOAD\x0a┃✰│\x202┃\x20AUDIO\x20DOWNLOAD\x0a┃✰│\x203┃\x20VOICE\x20DOWNLOAD\x0a┃✰╰──────────────\x0a╰━━━━━━━━━━━━━━━┈⊷\x0a\x0a>\x20*©\x20ᴩᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ*',_0xe2223f={'mentionedJid':[_0x2dcb05[_0x4de8d1(0xb4)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x4de8d1(0xc6),'newsletterName':_0x4de8d1(0xcb),'serverMessageId':0x8f}};const _0x5acbc1=await _0x54625c['sendMessage'](_0x553657,{'image':{'url':_0x2f4b73[_0x4de8d1(0xd6)]},'caption':_0x40c461,'contextInfo':_0xe2223f},{'quoted':_0x14f2e5});_0x54625c['ev']['on'](_0x4de8d1(0xdf),async _0x463253=>{const _0x4e069e=_0x4de8d1,_0x53d238=_0x463253[_0x4e069e(0xd3)][0x0];if(!_0x53d238[_0x4e069e(0xeb)]||!_0x53d238['message']['extendedTextMessage'])return;const _0x39ff59=_0x53d238[_0x4e069e(0xeb)][_0x4e069e(0xb9)][_0x4e069e(0xd1)][_0x4e069e(0xb6)]();if(_0x53d238[_0x4e069e(0xeb)][_0x4e069e(0xb9)]['contextInfo']&&_0x53d238['message'][_0x4e069e(0xb9)][_0x4e069e(0xef)][_0x4e069e(0xb8)]===_0x5acbc1['key']['id']){await _0x54625c[_0x4e069e(0xe0)](_0x553657,{'react':{'text':'⬇️','key':_0x53d238['key']}});switch(_0x39ff59){case'1':await _0x54625c[_0x4e069e(0xe0)](_0x553657,{'document':{'url':_0x23be78[_0x4e069e(0xcc)]['downloadUrl']},'mimetype':_0x4e069e(0xcd),'fileName':_0x2f4b73[_0x4e069e(0xd4)]+_0x4e069e(0xf3),'contextInfo':_0xe2223f},{'quoted':_0x53d238});break;case'2':await _0x54625c['sendMessage'](_0x553657,{'audio':{'url':_0x23be78[_0x4e069e(0xcc)][_0x4e069e(0xb2)]},'mimetype':'audio/mpeg','contextInfo':_0xe2223f},{'quoted':_0x53d238});break;case'3':await _0x54625c[_0x4e069e(0xe0)](_0x553657,{'audio':{'url':_0x23be78[_0x4e069e(0xcc)]['downloadUrl']},'mimetype':_0x4e069e(0xcd),'ptt':!![],'contextInfo':_0xe2223f},{'quoted':_0x53d238});break;default:await _0x54625c[_0x4e069e(0xe0)](_0x553657,{'text':'*invalid\x20selection\x20please\x20select\x20between\x20\x201\x20or\x202\x20or\x203*'},{'quoted':_0x53d238});}}});}catch(_0x1c1b0b){console[_0x4de8d1(0xc3)](_0x1c1b0b),_0x40d163('An\x20error\x20occurred.\x20Please\x20try\x20again\x20later.');}});function _0x83a1(_0x3e07eb,_0x3155b3){const _0x2058c2=_0x2058();return _0x83a1=function(_0x83a1bb,_0x4cbe73){_0x83a1bb=_0x83a1bb-0xb2;let _0x9b7069=_0x2058c2[_0x83a1bb];return _0x9b7069;},_0x83a1(_0x3e07eb,_0x3155b3);}function _0x2058(){const _0x9d42da=['pop','downloadUrl','length','sender','9528988DtJCMt','trim','yt-search','stanzaId','extendedTextMessage','*\x0a┃✦│\x20*Link:*\x20*','.song\x20<query\x20or\x20url>','4941717lqoVYT','⏳\x20Downloading\x20audio...','status','15oltOmY','error','../config','3063464KoTeyc','log','4121VltggO','download_url','120363401051383340@newsletter','❌\x20Error:\x20','json','timestamp','name','𝚃𝙴𝙲𝙷-𝙷𝙾𝚁𝙸𝚉𝙾𝙽','result','audio/mpeg','videos','@dark-yasiya/yt-dl.js','424300LcxMzx','text','play2','messages','title','20xXzYfZ','thumbnail','Please\x20provide\x20a\x20YouTube\x20URL\x20or\x20song\x20name.','9MeoTqS','*\x0a┃✦│\x20*Duration:*\x20*','❌\x20Failed\x20to\x20download\x20audio!','*\x20downloaded\x20successfully!\x0a\x0a>\x20*©\x20ᴩᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ*','❌\x20No\x20results\x20found!','Download\x20audio\x20from\x20YouTube','match','messages.upsert','sendMessage','*\x0a┃✦│\x20*Author:*\x20*','split','Download\x20YouTube\x20song','1fNmQXP','play','main','*\x0a┃✦│\x20*Views:*\x20*','251824JiMiTl','url','╭━━〔\x20*SONG\x20DOWNLODER*\x20〕\x0a┃✦╭──────────────\x0a┃✦│\x20*Title:*\x20*','message','../command','150288UByXNK','1975836iCLRst','contextInfo','author','No\x20results\x20found!','https://apis.davidcyriltech.my.id/youtube/mp3?url=','.mp3','15pOVYhB','song2','views','download','results'];_0x2058=function(){return _0x9d42da;};return _0x2058();}