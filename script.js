// $("#warboats").click(function(){
// 	$(this).css('filter', 'blur(5px)');
// 	console.log("ive been clicked");

// });
$("#links").hide();
$("#warboats").click(function(){	
	$("#links").toggle();
});
// $("#warboats").mouseover(function(){
// 	$(this).css('filter', 'blur(5px)');
// });
// $("#warboats").mouseout(function(){
// 	$(this).css('filter', 'none');
// });

// $("#about").resizable(function(){
//   	animate: true
//   	console.log('loaded!');
// });

// $("#portfolio").resizable(function(){
//   	animate: true
//   	console.log('loaded!');
// });


$('.parallax-window').parallax({
	imageSrc: 'https://cdn.pixabay.com/photo/2017/01/18/21/34/cyprus-1990939_960_720.jpg'
});

// checkLinks();