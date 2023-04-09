System.register("chunks:///_virtual/httpSpeed.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,a,r,d,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,r=t.Label,d=t.randomRange,l=t.Component}],execute:function(){var p,h,c,u,m;s._RF.push({},"cb909zXZj1Oyp042xuacLaO","httpSpeed",void 0);var y=a.ccclass,f=a.property;t("httpSpeed",(p=y("httpSpeed"),h=f(r),p((m=e((u=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,i(e,"speedLabel",m,n(e)),e.startTime=0,e.endTime=0,e.totalBytes=0,e.downloadedBytes=0,e}o(e,t);var s=e.prototype;return s.onLoad=function(){this.startTime=0,this.endTime=0,this.totalBytes=0,this.downloadedBytes=0,this.open()},s.open=function(){var t=new XMLHttpRequest;t.open("GET","https://sao-br-ping.vultr.com/vultr.com.1000MB.bin?t="+d(0,100),!0),t.responseType="arraybuffer",t.onprogress=this.onDownloadProgress.bind(this),t.onload=this.onDownloadComplete.bind(this),t.send()},s.onDownloadProgress=function(t){if(0===this.startTime&&(this.startTime=Date.now()),t.lengthComputable){this.totalBytes=t.total,this.downloadedBytes=t.loaded;var e=(Date.now()-this.startTime)/1e3,o=this.downloadedBytes/e/1024;this.speedLabel.string=o.toFixed(2)+" KB/s"}},s.onDownloadComplete=function(t){if(this.endTime=Date.now(),this.endTime-this.startTime>0){var e=this.downloadedBytes/((this.endTime-this.startTime)/1e3)/1024;this.speedLabel.string=e.toFixed(2)+" KB/s"}t.target.abort()},s.start=function(){},s.update=function(t){},e}(l)).prototype,"speedLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=u))||c));s._RF.pop()}}}));

System.register("chunks:///_virtual/loadB.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,a,i,r,l,u,c,s,f,d;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,a=t.input,i=t.Input,r=t.KeyCode,l=t.game,u=t.assetManager,c=t.Asset,s=t.Prefab,f=t.instantiate,d=t.Component}],execute:function(){var p;o._RF.push({},"2840dIU+tBEebDwrd5ujhCf","loadB",void 0);var m=n.ccclass;n.property,t("loadB",m("loadB")(p=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.start=function(){a.on(i.EventType.KEY_UP,this.keyup,this)},n.keyup=function(t){var e=this;if(t.keyCode==r.KEY_A){var o=l.totalTime;u.loadBundle("demoPrefab",(function(t,e){console.log(l.totalTime-o),e.preloadDir("",c,(function(){}),(function(){e.loadDir("",c,(function(){}),(function(){}))}))}))}else{var n=l.totalTime;u.getBundle("demoPrefab").load("prefab/demoPrefab",s,(function(t,e){}),(function(t,o){console.log(t,o),console.log("loadPrefab时间:",l.totalTime-n),n=l.totalTime,f(o).setParent(e.node),console.log("克隆预制体时间:",l.totalTime-n)}))}},n.update=function(t){},o}(d))||p);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./httpSpeed.ts","./loadB.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});