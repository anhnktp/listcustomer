$("#storageUnit li a").click(function(){
	$("#storageSelect").html($(this).text() + ' <span class="caret"></span>');
	$("#storageSelect").val($(this).data('value'));
});