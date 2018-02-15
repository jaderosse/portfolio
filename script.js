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
	imageSrc: 'imgs/tree.jpg'
});

// checkLinks();