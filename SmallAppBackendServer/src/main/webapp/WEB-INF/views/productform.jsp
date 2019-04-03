<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- <script type="text/javascript">
$('#file_select_icon').on('click', function() {
    $('#selectFile').click();
});

$('#selectFile').on('change', function() {
    $('#file_name').val($('#selectFile').prop('files')[0].name);
});

$('#checkAndImport').on('click', function() {
	var fileExist = $("#file_name").val();
	if(fileExist == null || fileExist == ""){
		alert("Let's Selecting a *.csv file ");
	} else {
		$('#insertProduct').submit();
	}
	
});
</script> -->
<title>Insert data here</title>
</head>
<body>
  <h1>Add New Product</h1>  
      <%--  <form:form  method="post" action="save" id = "insertProduct">      --%>
        <table >    
         <tr>    
          <td>Name : </td>   
          <td><<%-- form: --%>input path="name"  maxlength="30"/></td>  
          <td></td>
         </tr>    
         <tr>    
          <td>Price :</td>    
          <td><<%-- form: --%>input path="salary" maxlength="9"/></td>
          <td></td>  
         </tr>   
         <tr>    
          <td>Note :</td>    
          <td colspan="2" ><<%-- form: --%>input path="note" style="width: 100%" maxlength="50"/></td>  
         </tr>   
         <tr>    
          <td> </td>    
          <td><input type="submit" value="Save" /></td>    
          <td><input type="button" value="Import CSV" id="checkAndImport"/></td>
         </tr>    
        </table>
		<div style="margin-top:20px">
			<input type="file" id="selectFile" name="selectFile"  style="display: none;" accept=".csv" />
			<span>
				<button type="button" id="file_select_icon">
					<span aria-hidden="true">Open file CSV</span>
				</button>
			</span> 
			<input type="text" id="file_name" placeholder="Select file ..." value="${fileName}" readonly style="width:400px">
			${file}
		</div>
	<%-- </form:form>    --%> 
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script type="text/javascript" src="js/productform.js"></script>
</body>
</html>