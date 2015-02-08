
$(document).ready(function() {
	$.post('http://ferrero.x10host.com/index.php', {
		'type': 0
	}, function(response) {
		var data = JSON.parse(response);
		for (var name in data) {
			$('body').append('<h1>' + name + '</h1>');
			$('body').append('<p>' + data[name] + '</p>');
		}
	});
});
