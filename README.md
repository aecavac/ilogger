# ilogger
###Helper web logger for developers and testers if there is no console.

Helps tracking js logs via ui. It is useful if there is no browser console. (like PhoneGap, Cordova hybrid apps)

Every log kept in a single line for user experience, just scroll to see long logs.

**Prerequisites:** JQuery

Usage: 
```js
$(document).ready(function() {
	ilog.init();
	
	ilog.log('hello world');
	ilog.log('im a cool log');
	ilog.log('this is another long log for scrolling..');
});
```
