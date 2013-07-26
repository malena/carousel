$(document).ready(function(){

	var gallery_length = $('.panels li').length + 1;
	var gallery_model = 'null'; 
	var animations = new Animations();
	var counter = 1;


	$('.thumbnails li').on('click', function(){
		clearInterval(timer);

		var thumb = ($(this).index()) + 1;
		var panel = '.panel-' + thumb;

		if(gallery_model === thumb){
			console.log('nothing slides');	
		} else {
			animations._slideLeft(panel);
			animations._highlightThumb(thumb);
		}

		gallery_model = thumb;

	});

	function incrementCounter(){
		counter = (counter == 5 ? 1 : counter);
		
		counter++;
		var panel = '.panel-' + counter;
		animations._slideLeft(panel);
		animations._highlightThumb(counter);
		console.log(counter);
	}

	var timer = setInterval(incrementCounter, 5000);

	$('a.stop').on('click', function(){
		clearInterval(timer);
	});

	$('a.play').on('click', function(){
		timer = setInterval(incrementCounter, 5000);
	});


});