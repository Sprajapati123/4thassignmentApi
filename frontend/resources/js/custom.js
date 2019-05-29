$(document).ready(function () {

	$('#registerForm').submit(function (event) {
		event.preventDefault();

		var userForm = {
			first_name:$('#firstname').val(),
			last_name : $('#lastname').val(),
			username : $('#username').val(),
			password : $('#password').val()

		}

		$.ajax({

			url:'http://localhost:3000/v1/users/register',
			method:'POST',
			contentType:'application/json',
			data: JSON.stringify(userForm),

			success: function(result,status) {
				$('#message').html(result.message)
			},

			error:function(jqXHR,status) {
				console.log(jqXHR);
			}
		})

	})


	$('#loginForm').submit(function (event) {
		event.preventDefault();

		var userForm2 = {

			username : $('#usernamelogin').val(),
			password : $('#passwordlogin').val()

		}


		$.ajax({

			url:'http://localhost:3000/v1/users/auth',
			method:'POST',
			contentType:'application/json',
			data: JSON.stringify(userForm2),

			success: function(result,status) {
				$('#message2').html(result.message)
				window.location.href="items.html"
				// console.log('hello');
			},


			error:function(jqXHR,status) {
				console.log(jqXHR);
			}
		})

	})

	$('#itemForm').submit(function (event) {
		event.preventDefault();

		var userForm3 = {

			item_name : $('#itemname').val(),
			item_price: $('#itemprice').val(),
			item_description: $('#itemdescription').val(),
			itemImage: $('#itemimage').val()


		}

		$.ajax({

			url:'http://localhost:3000/v1/addItems',
			method:'POST',
			contentType:'application/json',
			data: JSON.stringify(userForm3),

			success: function(result,status) {
				$('#message3').html(result.message)
				// window.location.href="items.html"
				console.log('hello');
			},


			error:function(jqXHR,status) {
				console.log(jqXHR);
			}
		})

	})
})