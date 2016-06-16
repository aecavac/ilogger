/**
 * ilogger: Simple web logger for developers and testers if there is no console.
 */
var log = (function(){
	
	var options = {
			append: false
	};

	var setOptions = function(newoptions) {
		for(var i in newoptions) {
			if(typeof options[i] !== 'undefined') {
				options[i] = newoptions[i];
			}
		}
	};

	var init = function(newoptions) {
	
		setOptions(newoptions);
		
		initLogDateFormat();
		
		//Init content
		var iLogger = 
		'<div id="iLogger">' +
			'<div id="iHeader">' +
				'<div id="iLogo">' +
					'iLogger' +
				'</div>' +
				'<div id="iconToggle">' +
					'<img src="' + iLoggerPath + 'img/icollapse.png' + '">' +
				'</div>' +
			'</div>' +			
			'<div id="iContent"></div>' +
		'</div>';
		
		$('body').append(iLogger);
		
		//Init events
		$('#iconToggle').click(toggle);
		
	}

	
	var initLogDateFormat = function() {
		
		Date.prototype.yyyyMMddHHmmssSSS = function() {
			var yyyy = this.getFullYear();
		   var MM = (this.getMonth()+1); // getMonth() is zero-based
		   var dd  = this.getDate();
		   var HH  = this.getHours();
		   var mm  = this.getMinutes();
		   var ss  = this.getSeconds();
		   var SSS  = this.getMilliseconds();
		   return yyyy + '-' + (MM < 10 ? '0' + MM : MM) + '-' + (dd < 10 ? '0' + dd : dd)
		   			+ ' ' + (HH < 10 ? '0' + HH : HH) + ':' + (mm < 10 ? '0' + mm : mm)  
		   			+ ':' + (ss < 10 ? '0' + ss : ss) + '.' + (SSS < 10 ? '00' + SSS : (SSS < 100 ? '0' + SSS : SSS));
		};		
	};
	
	var addLog = function(content) {
		
		var iLog =  
		'<div class="iLog">' +
			'<div class="iLogDate">' + (new Date()).yyyyMMddHHmmssSSS() + '</div>' +
			'<div class="iLogContent">' + content + '</div>' +
		'</div>';
		
		if(options.append){
			$('#iContent').append(iLog);
		}else{
			$('#iContent').prepend(iLog);
		}
	};
	
	var clearLogs = function() {
		$('#iContent').empty();
	};
	

	//Get iLogger path.
	//ref: https://github.com/Leaflet/Leaflet 
	var iLoggerPath = (function () {
		var scripts = document.getElementsByTagName('script'),
		iloggerRe = /[\/^]ilogger[\-\._]?([\w\-\._]*)\.js\??/;
		
		var i, len, src, matches, path;
		
		for (i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].src;
			matches = src.match(iloggerRe);
			
			if (matches) {
				path = src.split(iloggerRe)[0];
				return (path ? path + '/' : '');
			}
		}
	}());	
	
	var collapse = function(){
		$("#iLogger").toggleClass("iCollapse", true);
		$("#iconToggle img").attr("src", iLoggerPath + "img/iexpand.png");
	};
	
	var expand = function(){
		$("#iLogger").toggleClass("iCollapse", false);
		$("#iconToggle img").attr("src", iLoggerPath + "img/icollapse.png");
	};
	
	var toggle = function() {
		if($("#iLogger").hasClass('iCollapse')){
			expand();
		}else {
			collapse();
		}
	};
	
	return {
		init: init,
		log: addLog,
		clear: clearLogs,
		options: options
	}
	
})();