montageDefine("69410ab","tests/00-runtests",{dependencies:["fs","assert"],factory:function(e){function t(e,n){if(typeof e!=typeof n)throw Error("types didn't match");if("object"==typeof e&&null!==e)for(var r in e){if(!(r in n))throw Error("result didn't contain property "+r);t(e[r],n[r])}else if(e!==n)throw Error("result doesn't equal expected")}function n(n){r.readdirSync(__dirname+n.dir).map(function(t){return"."===t[0]?!1:".json"===t.substr(-5)?JSON.parse(r.readFileSync(__dirname+n.dir+t)):e(__dirname+n.dir+t)}).forEach(function(e){if(e){var r=!1;a++,console.log("Testing:",e.name),n.test(e,function(n,o){i.ifError(n),t(e.expected,o),r?(a--,s++):r=!0})}}),console.log("->",n.dir.slice(1,-1),"started")}var r=e("fs"),i=e("assert"),a=0,s=0;["./02-dom_utils.js"].map(e).forEach(n),function o(){return 0!==a?process.nextTick(o):(console.log("Total tests:",s),void 0)}()}});