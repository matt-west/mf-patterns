/* Author:
	Matt West
*/

$(function() {

	$('#pattern').live('keyup', function() {
		var regExp = $('#pattern').val();

		$('#test').attr('pattern', regExp);
	});

	$('#test').live('keyup', function() {
		if ($('#test')[0].validity.patternMismatch) {
			$('#test').removeClass('pass');
			$('#test').addClass('fail');
		} else {
			$('#test').removeClass('fail');
			$('#test').addClass('pass');
		}
	});

});




