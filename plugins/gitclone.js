function _0x52e0(){const _0x1a9241=['📥\x20*Downloading\x20repository...*\x0a\x0a*Repository:*\x20','/zipball','𝚃𝙴𝙲𝙷-𝙷𝙾𝚁𝙸𝚉𝙾𝙽','Invalid\x20GitHub\x20URL.','2948616dCygne','test','\x0a*Filename:*\x20','26fCBmJk','error','HEAD','❌\x20Failed\x20to\x20download\x20the\x20repository.\x20Please\x20try\x20again\x20later.','2331BbjIvZ','⚠️\x20Invalid\x20GitHub\x20link.\x20Please\x20provide\x20a\x20valid\x20GitHub\x20repository\x20URL.','597547bgEZfK','node-fetch','1071CshldX','sender','content-disposition','../command','match','downloader','14202tYsOtd','230890UOeIYt','5776910OWAHMk','https://api.github.com/repos/','8524720lJIXUM','Download\x20GitHub\x20repository\x20as\x20a\x20zip\x20file.','get','108084uuCxgh'];_0x52e0=function(){return _0x1a9241;};return _0x52e0();}const _0x2b144b=_0x2381;function _0x2381(_0x1dd0a3,_0x1b0bfd){const _0x52e0c5=_0x52e0();return _0x2381=function(_0x238174,_0xbde684){_0x238174=_0x238174-0xe4;let _0x26691e=_0x52e0c5[_0x238174];return _0x26691e;},_0x2381(_0x1dd0a3,_0x1b0bfd);}(function(_0x3b9102,_0x5c9f35){const _0x38f847=_0x2381,_0x481215=_0x3b9102();while(!![]){try{const _0x225fc6=parseInt(_0x38f847(0xf2))/0x1+-parseInt(_0x38f847(0xec))/0x2*(-parseInt(_0x38f847(0xe4))/0x3)+-parseInt(_0x38f847(0xe9))/0x4+parseInt(_0x38f847(0xfc))/0x5+parseInt(_0x38f847(0xfa))/0x6*(parseInt(_0x38f847(0xf0))/0x7)+parseInt(_0x38f847(0xfe))/0x8+parseInt(_0x38f847(0xf4))/0x9*(-parseInt(_0x38f847(0xfb))/0xa);if(_0x225fc6===_0x5c9f35)break;else _0x481215['push'](_0x481215['shift']());}catch(_0x2ad36b){_0x481215['push'](_0x481215['shift']());}}}(_0x52e0,0x9020d));const {cmd}=require(_0x2b144b(0xf7)),fetch=require(_0x2b144b(0xf3));cmd({'pattern':'gitclone','alias':['git'],'desc':_0x2b144b(0xff),'react':'📦','category':_0x2b144b(0xf9),'filename':__filename},async(_0x561853,_0x28e846,_0x7452c9,{from:_0x1fe782,quoted:_0x3792a2,args:_0x3f2025,reply:_0xcf8f0b})=>{const _0x55af35=_0x2b144b;if(!_0x3f2025[0x0])return _0xcf8f0b('❌\x20Where\x20is\x20the\x20GitHub\x20link?\x0a\x0aExample:\x0a.gitclone\x20https://github.com/username/repository');if(!/^(https:\/\/)?github\.com\/.+/[_0x55af35(0xea)](_0x3f2025[0x0]))return _0xcf8f0b(_0x55af35(0xf1));try{const _0x10d681=/github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?/i,_0x4452b7=_0x3f2025[0x0][_0x55af35(0xf8)](_0x10d681);if(!_0x4452b7)throw new Error(_0x55af35(0xe8));const [,_0x325408,_0x32dcf9]=_0x4452b7,_0x6527d0=_0x55af35(0xfd)+_0x325408+'/'+_0x32dcf9+_0x55af35(0xe6),_0x3e9f0b=await fetch(_0x6527d0,{'method':_0x55af35(0xee)});if(!_0x3e9f0b['ok'])throw new Error('Repository\x20not\x20found.');const _0xa5f1ff=_0x3e9f0b['headers'][_0x55af35(0x100)](_0x55af35(0xf6)),_0x33ea4c=_0xa5f1ff?_0xa5f1ff[_0x55af35(0xf8)](/filename=(.*)/)[0x1]:_0x32dcf9+'.zip';_0xcf8f0b(_0x55af35(0xe5)+_0x325408+'/'+_0x32dcf9+_0x55af35(0xeb)+_0x33ea4c+'\x0a\x0a>\x20*Powered\x20by\x20Tech\x20Horizon*'),await _0x561853['sendMessage'](_0x1fe782,{'document':{'url':_0x6527d0},'fileName':_0x33ea4c,'mimetype':'application/zip','contextInfo':{'mentionedJid':[_0x28e846[_0x55af35(0xf5)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':'120363401051383340@newsletter','newsletterName':_0x55af35(0xe7),'serverMessageId':0x8f}}},{'quoted':_0x28e846});}catch(_0x34527a){console[_0x55af35(0xed)]('Error:',_0x34527a),_0xcf8f0b(_0x55af35(0xef));}});