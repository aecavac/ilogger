# ilogger
Simple web logger for developers and testers if there is no console.

Helps tracking js logs via ui. It is useful if there is no browser console(PhoneGap, Cordova hybrid apps.).

**Prerequisites:** JQuery

Usage: 
```js
$(document).ready(function() {
	log.init();
	
	log.log('hello world');
	log.log('im a cool log');
	log.log('another long long long log which bla bla..');
});
```
