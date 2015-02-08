
$(document).ready(function() {
	$.post('http://ferrero.x10host.com/index.php', {
		'type': 0
	}, function(data) {
		console.log(data);
		$('h1').html(data);
	});
});
