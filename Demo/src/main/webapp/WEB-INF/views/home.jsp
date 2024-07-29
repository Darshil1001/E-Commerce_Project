<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<title>Home Page</title>
</head>
<body>
<h1 class="text-center">Employee Management System</h1>
	<form action="/add" method="post">
		<div class="mb-3">
			<label class="form-label">Name</label> <input type="text"
				name="empName" class="form-control" aria-describedby="emailHelp">
		</div>
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Email Id</label> <input
				type="email" name="empEmail" class="form-control"
				id="exampleInputEmail1" aria-describedby="emailHelp">
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>