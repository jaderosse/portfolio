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
	.pause(2000)
	.options({speed: 300})
	.delete(3)
	.options({speed: 100})
	.pause(1000)
	.type('<p>& Musician & Bibliophile & Dog Mom</p>')
	.pause(1000)
	.type('<h2>&hearts;</h2>')

	new TypeIt('#about-type', {
		strings: 'About Me',
		speed: 100,
		lifeLike: true,
		autoStart: false
	});

	new TypeIt('#project-type', {
		strings: 'Projects',
		speed: 100,
		lifeLike: true,
		autoStart: false
	});

});