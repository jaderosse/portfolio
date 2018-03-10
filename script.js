$(document).ready( function() {
    $(".button-collapse").sideNav({
    	 closeOnClick: true
    });

    new TypeIt('#dev', {
    	speed: 100,
    	lifeLike: true,
    	autoStart: false,
    	cursor: false
	})
	.type('Full-Stack Web Developer...')
	.pause(500)
	.options({speed: 50})
	.delete(3)
	.options({speed: 100})
	.pause(500)
	.type('<p>& Musician & Bibliophile & Dog Mom</p>')
	.pause(1000)
	.type('<h2>&hearts;</h2>')

	new TypeIt('#about-type', {
		strings: 'About Me',
		speed: 50,
		lifeLike: true,
		autoStart: false
	});

	new TypeIt('#project-type', {
		strings: 'Projects',
		speed: 50,
		lifeLike: true,
		autoStart: false
	});

	$("#gold").hover(function(){
		$("#gold img").hide();
		$("#gold a").show();
	}, function(){
		$("#gold img").show();
		$("#gold a").hide();
	});

	$("#blues").hover(function(){
		$("#blues img").hide();
		$("#blues a").show();
	}, function(){
		$("#blues img").show();
		$("#blues a").hide();
	});


	$("#res").hover(function(){
		$("#res i").hide();
		$("#res a").show();
	}, function(){
		$("#res i").show();
		$("#res a").hide();
	});

	$('.modal').modal();
});