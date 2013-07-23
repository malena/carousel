$(document).ready(function(){

	var gallery_length = $('.panels li').length + 1;
	var gallery_model = new Gallery(); 
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
		if(counter == 5 ){
			counter = 1;
		}

		var panel = '.panel-' + counter;
		animations._slideLeft(panel);
		animations._highlightThumb(counter);
		console.log(counter);
		counter++;
	}

	var timer = setInterval(incrementCounter, 2000);

	$('a.stop').on('click', function(){
		clearInterval(timer);
	});

	$('a.play').on('click', function(){
		timer = setInterval(incrementCounter, 2000);
	});


});