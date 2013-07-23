$(document).ready(function(){

	var gallery_length = $('.panels li').length + 1;
	var gallery_model = new Gallery(); 
	var animations = new Animations();

	animations._timer();

	$('.thumbnails li').on('click', function(){

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


});