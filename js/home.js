
$(document).ready(function() {
	$.post('http://ferrero.x10host.com/get.php', {
		type: 0
	}, function(data) {
		var data = JSON.parse(data);
		for (var name in data) {
			$('body').append('<h3>' + name + '</h3>');
			$('body').append('<p>' + data[name] + '</p>');
		}
	});
});
