/*
fetch an LOLCAT GIF from Giphy API
parse and render it using Javascript/jQuery

adapted from: https://davidwalsh.name/fetch and http://www.mkyong.com/javascript/how-to-access-json-object-in-javascript/
*/

jQuery(function($) {
	fetch('https://api.giphy.com/v1/gifs/random?tag=funny+cat&rating=pg&api_key=dc6zaTOxFJmzC&limit=1').then(function(response) { 
		return response.json();
	}).then(function(my_result) {
		console.log(my_result);
		$('#fetch-result').html('<img src="'+my_result.data.fixed_height_downsampled_url+'" class="img-responsive center-block">');
	});
});

