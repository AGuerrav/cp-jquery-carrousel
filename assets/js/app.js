//almacenar slider en una variable
var slider = $('.slider');
//almacenar botones
var next = $('#btn-next');
var previous = $('#btn-prev');

//mover ultima imagen al primer lugar
$('.slider .slider__section:last').insertBefore('.slider .slider__section:first');
//muestra la primera imagen y le ponemos margen -100% para que se mueva a la posicion "que se ve en el slide"
slider.css('margin-left', '-'+100+'%');

function moveRight() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.slider .slider__section:first').insertAfter('.slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moveLeft() {
	slider.animate({
		marginLeft:0 /*hace que se mueva hacia el lado y se quede ahi */
	} ,700, function(){ /*"retraso"con el que se movera el slide*/
		$('.slider .slider__section:last').insertBefore('.slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

// function autoplay() {
// 	interval = setInterval(function(){
// 		moveRight();
// 	}, 5000);
// }
next.on('click',function() {
	moveRight();
	clearInterval(interval);
	autoplay();
});

previous.on('click',function() {
	moveLeft();
	clearInterval(interval);
	autoplay();
});


autoplay();
