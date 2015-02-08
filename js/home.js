
$(document).ready(function() {
	$.ajax({
		url: 'http://ferrero.x10host.com/index.php',
		data: 1,
		type: 'GET',
		crossDomain: true,
		success: function() {
			alert('Success');
		},
		error: function() {
			alert('Failure');
		}
	});
});
