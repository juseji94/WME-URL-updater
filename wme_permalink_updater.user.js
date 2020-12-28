// ==UserScript==
// @name         WME - Permalink Updater
// @namespace    https://github.com/musa11971
// @version      0.1
// @description  Automatically update WME permalink in the browser's address bar.
// @author       musa11971 (Waze: mewsa) - https://github.com/musa11971
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @run-at       document-end
// @exclude      https://www.waze.com/*user/*editor/*
// @downloadURL  https://gist.github.com/musa11971/0f439bb37479c6ed6e7b96c0cd001005/raw/wme_permalink_updater.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(function() {
        let permaElement = document.querySelector('a.permalink');

        if(permaElement != null) {
            let fullURL = document.querySelector('a.permalink').href;
            let index = fullURL.indexOf('/editor');
            let path = fullURL.substr(index, fullURL.length);
            window.history.replaceState('', '', path);
        }
    }, 1000);
})();