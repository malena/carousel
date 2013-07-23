function Animations(){
}
Animations.prototype._highlightThumb = function (index){
	$('.thumbnails li').removeClass('active');
	$('.thumb-' + index).addClass('active');
}

Animations.prototype._resetStyles = function(element){
	$(element).removeAttr('style');
}

Animations.prototype._slideLeft = function(panel){
	this._resetStyles('.panels li');
	$(panel).css({'left':'900px','zIndex' :'2'});
	TweenMax.to($(panel), 0.5, {css:{
		left: '0px'},
		ease: Strong.easeOut
	});
}

Animations.prototype._timer = function(){
	var that = this;
	var counter = 1;
	var timer = setInterval(function(){
			var panel = '.panel-' + counter;
			that._slideLeft(panel);
			that._highlightThumb(counter);
			if(counter == 4 ){
				clearInterval(timer);
				that._timer();
			}
			counter++;
	},3000);	
}
