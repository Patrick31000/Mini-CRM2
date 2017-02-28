$(document).ready(function() {
	console.log('coucou')
	$.ajax({
		url: "data/crm.json",
		success: function(data){
			cust = data.customers;
			var i = 0;
			$(cust).each(function() {
				id = (cust[i].id)-1;
				name = cust[i].first_name;
				last_name = cust[i].last_name;
				role = cust[i].role;
				mail = cust[i].email;
				$("#deroul").append($('<option>', { value:id, text: last_name + " " + name}));
				i++
			})
		},
		error: function(){
			alert("404 Not Found!!!!!");
		}
	})

	// $('#submit').on('submit', function(event){
	// 	event.preventDefault()
	// 	console.log('submit');
	// 	$.post("data/crm.json", function(){
	// 		alert( "Data Loaded: " + data );
	// 	})
	// 	$.ajax({
	// 		url: 'data/crm.json', // url where to submit the request
	// 		type : "POST", // type of action POST || GET
	// 		dataType : 'json', // data type
	// 		data : $("#form").serialize(), // post data || get data
	// 		success : function(data) {
	// 			// you can see the result from the console
	// 			// tab of the developer tools
	// 			console.log(data);
	// 		},
	// 		error: function(xhr, resp, text) {
				
	// 			console.log(xhr, resp, text);
	// 			alert('404 pas encore found')
	// 		}
	// 	})
	// })

	$('#deroul').change(function(){
		value = this.value;
		id = cust[value].id;
		name = cust[value].first_name;
		last_name = cust[value].last_name;
		role = cust[value].role;
		mail = cust[value].email;
		$('#receiver').html(name +" "+ last_name +" "+ role +" "+ mail)
	})

});