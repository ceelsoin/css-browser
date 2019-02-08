
# CSS Browser

A complete library for identifying browsers by css selectors

Add hosted js file to your web site application:

```
<script src="https://raw.githubusercontent.com/ceelsoin/css-browser/master/publish/lib/browser-selector-min.js"></script>
```

or add in your application with npm:

```
npm i css-browser
```

...or download complete libary:

```
https://github.com/ceelsoin/css-browser/archive/master.zip
```

# Example

It's easy!

You are in:

```
mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/71.0.3578.98 safari/537.36
```

...and made it with this:

```
<style type="text/css"> .ie .example {  background-color: yellow } .ie7 .example {  background-color: orange } .gecko .example {  background-color: gray } .win.gecko .example {  background-color: red } .linux.gecko .example {  background-color: pink } .opera .example {  background-color: green } .konqueror .example {  background-color: blue } .safari .example {  background-color: black } .chrome .example {  background-color: cyan } .no_js { display: block } .has_js { display: none } .js .no_js { display: none }. js .has_js { display: block }</style>
```

Basically defining it should set according to:

-   Internet Explorer: Yellow
-   Internet Explorer 7: Orange
-   Gecko Engine on Windows (Firefox, Mozilla, Camino): Red
-   Gecko Engine on Linux (Firefox, Mozilla, Camino): Pink
-   Gecko Engine on Other OS (Firefox, Mozilla, Camino): Gray
-   Opera: Green
-   Konqueror: Blue
-   Safari: Black
-   Chrome: Cyan

# Using

It's easy!

**Set CSS attributes with the code of each browser/os you want to hack**

-   html.gecko div#header { margin: 1em; }
-   .opera #header { margin: 1.2em; }
-   .ie .mylink { font-weight: bold; }
-   .mac.ie .mylink { font-weight: bold; }

```
.[os].[browser] .mylink { font-weight: bold; } /*without space between .[os] and .[browser]*/
```

**Avaliable OS Codes [os]:**

-   .win - Microsoft Windows (all versions)
-   .vista - Microsoft Windows Vista  new
-   .linux - Linux (x11 and linux)
-   .mac - Mac OS
-   .freebsd - FreeBSD
-   .ipod - iPod Touch
-   .iphone - iPhone
-   .ipad - iPad  new
-   .webtv - WebTV
-   .j2me - J2ME Devices (ex: Opera mini)  changed from mobile to j2me
-   .blackberry - BlackBerry  new
-   .android - Google Android  new
-   .mobile - All mobile devices  new

**Avaliable Browser Codes [browser]**

-   .ie - Internet Explorer (All versions)
-   .ie8 - Internet Explorer 8.x
-   .ie7 - Internet Explorer 7.x
-   .ie6 - Internet Explorer 6.x
-   .ie5 - Internet Explorer 5.x
-   .gecko - Mozilla, Firefox (all versions), Camino
-   .ff2 - Firefox 2
-   .ff3 - Firefox 3
-   .ff3_5 - Firefox 3.5
-   .ff3_6 - Firefox 3.6  new
-   .opera - Opera (All versions)
-   .opera8 - Opera 8.x
-   .opera9 - Opera 9.x
-   .opera10 - Opera 10.x
-   .konqueror - Konqueror
-   .webkit or safari - Safari, NetNewsWire, OmniWeb, Shiira, Google Chrome
-   .safari3 - Safari 3.x
-   .chrome - Google Chrome
-   .iron - SRWare Iron

**Extra codes:**

-   .js - Will be available when js is enable, so you can show/hide some stuffs

##### Happy Hacking!

Made with  **<3**  in Vila Isabel - RJ