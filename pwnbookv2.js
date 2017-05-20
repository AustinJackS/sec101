var ws = new WebSocket("ws://"+window.location.href.split('#')[1]+":9999");
ws.onmessage = function (event) {
  data=event.data;
  if(data.substr(0, 5)=="alert") {
     alert(data.substr(6, data.length));
     ws.send('rsp:Executed!')
  }
}
