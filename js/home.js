
$(document).ready(function() {
	$.post('http://ferrero.x10host.com/get.php', {
		'type': 0
	}, function(response) {
		console.log(reponse);
		var data = JSON.parse(response);
		console.log(data);
		for (var name in data) {
			$('body').append('<h1>' + name + '</h1>');
			$('body').append('<p>' + data[name] + '</p>');
		}
	});
});
