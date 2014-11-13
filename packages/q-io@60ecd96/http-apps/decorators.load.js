montageDefine("60ecd96","http-apps/decorators",{dependencies:["q","../http","./route","./status"],factory:function(e,t){var n=e("q"),i=e("../http"),r=e("./route"),a=e("./status");t.Normalize=function(e){return function(t,r){var t=i.normalizeRequest(t);return n.when(e(t,r),function(e){return i.normalizeResponse(e)})}},t.Date=function(e,t){return t=t||function(){return new Date},r.Trap(e,function(e){e.headers.date=""+t()})},t.Error=function(e,t){return function(i,r){return n.when(e(i,r),null,function(e){return t||(e=void 0),a.responseForStatus(i,500,e&&e.stack||e)})}},t.Debug=function(e){return t.Error(e,!0)},t.Log=function(e,t,i){return t=t||console.log,i=i||function(e){return(new Date).toISOString()+" "+e},function(r,a){var s=r.remoteHost+":"+r.remotePort,o=r.method+" "+r.path+" "+"HTTP/"+r.version.join(".");return t(i(s+" "+"-->     "+o)),n.when(e(r,a),function(e){return e?t(i(s+" "+"<== "+e.status+" "+o+" "+(e.headers["content-length"]||"-"))):t(i(s+" "+"... "+"... "+o+" (response undefined / presumed streaming)")),e},function(e){return t(i(s+" "+"!!!     "+o+" "+(e&&e.message||e))),n.reject(e)})}},t.Time=function(e){return function(t,i){var r=new Date;return n.when(e(t,i),function(e){var t=new Date;return e&&e.headers&&(e.headers["x-response-time"]=""+(t-r)),e})}},t.Headers=function(e,t){return function(i,r){return n.when(e(i,r),function(e){return e&&e.headers&&Object.keys(t).forEach(function(n){n in e.headers||(e.headers[n]=t[n])}),e})}};var s=31536e7;t.Permanent=function(e,t){return t=t||function(){return new Date((new Date).getTime()+s)},e=r.Tap(e,function(e){e.permanent=t}),e=r.Trap(e,function(e){e.headers.expires=""+t()})},t.Decorators=function(e,t){return e.reversed().forEach(function(e){t=e(t)}),t}}});