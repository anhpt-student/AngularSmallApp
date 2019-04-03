
$('#file_select_icon').on('click', function() {
    $('#selectFile').click();
});

$('#selectFile').on('change', function() {
    $('#file_name').val($('#selectFile').prop('files')[0].name);
});

$('#checkAndImport').on('click', function() {
	var fileExist = $("#file_name").val();
	if(fileExist == null || fileExist == ""){
		alert("Let's selecting a csv file.");
	} else {
		$('#insertProduct').submit();
	}
	
});
$('#selectFile').on('change', function() {
    var response = chkSession();

    if (response == "") {
    	var fileExtension = $('#selectFile').prop('files')[0].name.split('.').pop();
    	if(fileExtension == "csv"){
    		$('#insertProduct').attr('action', action);
            $('#insertProduct').submit();
    	} else {
			alert("CSV形式のファイルを選択してください。");
    	}
    } else if (response == "error") {
    } else {
        document.write(response);
    }
});
