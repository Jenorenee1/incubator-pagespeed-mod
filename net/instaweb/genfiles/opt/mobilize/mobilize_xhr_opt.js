(function(){function b(a){this.a=a||new this.c;this.b=0;this.responseText="";this.a.onreadystatechange=this.e.bind(this);this.a.onload=this.d.bind(this)}var d=[],e={xhrSendHook:function(){d.push("s")},xhrResponseHook:function(a){d.push(a)}};window.pagespeedXhrHijackSetListener=function(a){e=a;for(a=0;a<d.length;++a){var c=d[a];"s"==c?e.xhrSendHook():e.xhrResponseHook(c)}d=null};b.prototype.c=XMLHttpRequest;b.prototype.d=function(){this.a.responseText&&(this.responseText=this.a.responseText);if(this.onload)this.onload()};
b.prototype.e=function(){this.b=this.a.readyState;this.status=this.a.status;this.responseText=this.a.responseText;4==this.b&&e.xhrResponseHook(this.status)};b.prototype.abort=function(){this.a.abort()};b.prototype.open=function(a,c,f,g,h){this.a.open(a,c,f,g,h)};b.prototype.send=function(a){e.xhrSendHook();this.a.send(a)};b.prototype.overrideMimeType=function(a){this.a.overrideMimeType(a)};b.prototype.setRequestHeader=function(a,c){this.a.setRequestHeader(a,c)};b.prototype.getAllResponseHeaders=function(){return this.a.getAllResponseHeaders()};
b.prototype.getResponseHeader=function(a){return this.a.getResponseHeader(a)};window.XMLHttpRequest=b;})();