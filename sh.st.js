#!/usr/bin/env node

var url = require('url');
var http = require('http');

var newUrl = process.argv[2];
var options = {
	host: url.parse(newUrl).host,
	path: url.parse(newUrl).pathname
};

http.request(options, function (res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		var body = chunk.match(/<title>Redirecting\s+to\s*(.*)<\/title>/);
		if (body != null) {
			var usercloud = body[1];
			console.log(usercloud);
		};
	});		
}).end();






//console.log(get);
//var match = get.match(/href="(.*)"<\/a>/);
//console.log(match);
		//console.log(body)
		//var match = body.match(/sessionId: "([a-z0-9]+)",/i);
		//console.log(match);
		//var token = match[0];
		//var now = Math.round(Date.now() / 1000);
		//var url = 'http://sh.st/adSession/callback?sessionId=' + token + '&browserToken=' + now + '&callback=reqwest_' + now;
		//console.log(url);
		/*setTimeout(function () {
			http.request({host: 'sh.st', path: options['path'], headers: {'Referer': enteredUrl}}, function (res) {
				res.on('data', function (chunk) {
					var match = chunk.match(/url":"(.*?)"/i);
					console.log(match);
					var res = match[0].replace(/\\\//g, '/');
					console.log(res);
				});
			}).end();
		}, 5000);*/
