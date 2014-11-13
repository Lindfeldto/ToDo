montageDefine("2fadc1d","lru-map",{dependencies:["./shim","./lru-set","./generic-collection","./generic-map","./listen/property-changes","lru-map"],factory:function(e,t,n){"use strict";function i(e,t,n,a,s){return this instanceof i?(n=n||Object.equals,a=a||Object.hash,s=s||Function.noop,this.contentEquals=n,this.contentHash=a,this.getDefault=s,this.store=new r(void 0,t,function(e,t){return n(e.key,t.key)},function(e){return a(e.key)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,a,s)}e("./shim");var r=e("./lru-set"),a=e("./generic-collection"),s=e("./generic-map"),o=e("./listen/property-changes");n.exports=i,i.LruMap=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,o.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},i.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)},i.prototype.addMapChangeListener=function(){if(!this.dispatchesMapChanges){var e=this;this.store.addBeforeRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchBeforeMapChange(n[0].key,void 0)}),this.store.addRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchMapChange(n[0].key,void 0)})}s.prototype.addMapChangeListener.apply(this,arguments)}}});