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
	.options({speed: 100})
	.delete(3)
	.options({speed: 100})
	.pause(500)
	.type('<p><a target="_blank" href="https://jaderosse.bandcamp.com/">& Musician &</a></p>')
	.type('<p>Bibliophile & Dog Mom</p>')
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

	// $(".orb").hover(function(){
	// 	$(this).find('img').hide();
	// 	$(this).find('a').show();
	// }, function(){
	// 	$(".orb img").show();
	// 	$(".orb a").hide();
	// });

	// $(".orb").hover(function(){
	// 	$(this).find('i').hide();
	// 	$(this).find('a').show();
	// }, function(){
	// 	$(this).find('i').show();
	// 	$(this).find('a').hide();
	// });

	$('.modal').modal();
});

