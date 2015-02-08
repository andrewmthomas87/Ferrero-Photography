
$(document).ready(function() {
	$.post('http://ferrero.x10host.com/get.php', {
		'type': 0
	}, function(data) {
		console.log(data);
		var data = JSON.parse(data);
		console.log(data);
		for (var name in data) {
			$('body').append('<h1>' + name + '</h1>');
			$('body').append('<p>' + data[name] + '</p>');
		}
	});
});
