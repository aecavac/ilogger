# ilogger
###Helper web logger for developers and testers if there is no console.

Helps tracking js logs via ui. It is useful if there is no browser console. (like PhoneGap, Cordova hybrid apps)

Every log kept in a single line for user experience, just scroll to see long logs.

**Prerequisites:** JQuery

Usage: *see example folder*

```html
<link href="dist/ilogger.css" rel="stylesheet">
<script src="dist/ilogger.js"></script>
```

```js
$(document).ready(function() {
	ilog.init();
	
	ilog.log('hello world');
	ilog.log('im a cool log');
	ilog.log('this is another long log for scrolling..');
});
```
![alt tag](https://raw.githubusercontent.com/aecavac/ilogger/master/example/scr/ilogger1.png)
![alt tag](https://raw.githubusercontent.com/aecavac/ilogger/master/example/scr/ilogger2.png)
