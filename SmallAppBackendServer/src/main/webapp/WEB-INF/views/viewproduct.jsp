
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<h1>Products List</h1>
<table border="2" width="70%" cellpadding="2">
	<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Salary</th>
		<th>Designation</th>
		<th>Delete</th>
	</tr>
	<%-- <c:forEach var="emp" items="${list}">  --%>
	<tr>
		<td>a</td>
		<td>b</td>
		<td>c</td>
		<td>
			<%-- ${emp.designation} --%>
		</td>
		<td><a<%-- href="deleteemp/${emp.id}" --%>>Delete</a></td>
	</tr>
	<%-- </c:forEach>   --%>
</table>
<br />
<div>
	<a href="ProductForm" style="margin-right:20px">Add New Product</a>
	<button type="button" id="file_select_icon">
		<span aria-hidden="true">Export CSV</span>
	</button>
</div>
