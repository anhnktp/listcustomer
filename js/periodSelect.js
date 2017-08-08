$("#periodUnit li a").click(function(){
	$("#periodSelect").html($(this).text() + ' <span class="caret"></span>');
	$("#periodSelect").val($(this).data('value'));
});