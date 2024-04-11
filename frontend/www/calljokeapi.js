var url = "http://34.168.33.188:8080/api/jokes";
function postJoke() {
	console.log(url);

var myUrl = $('#url').val();
var mySetup = $('#setup').val();
var myPunchline = $('#punchline').val();
var myType = $('#type').val();

var myjoke = {
	url : myUrl,
	setup : mySetup,
	punchline : myPunchline,
	type : myType
};
console.log(myjoke);

$.ajax({
	url: url, 
	type: 'post',
	dataType: 'json',
	contentType: 'application/json',
	success: function(data) {
		console.log(data);
	$('#resultado').html(JSON.stringify(data.joke));
	},
	data: JSON.stringify(myjoke)
});
}

function getJokes() {
	console.log(url);

	$.getJSON(url,
	function(json) {
	console.log(json);
	var arrJokes= json.jokes;
	var htmlTableJokes = '<table border=1>';

	arrJokes.forEach(function(item) {
		console.log(item);
		htmlTableJokes += '<tr>' + 
			'<td>' + item.type + '</td>' + 
			'<td>' + item.url + '</td>' +
			'<td>' + item.setup + '</td>' +
			'<td>' + item.punchline + '</td>' + 
			'</tr>';
	});
		htmlTableJokes += '</table>';
		$('#resultado').html(htmlTableJokes);
	}
	);
}

