jQuery(function($){
var enterX=0,enterY=0,lastDeg=0,deg=0,degPlused=0;
$(".container").mouseenter(function(e){
	enterX = e.clientX;
	enterY = e.clientY;
});	
$(".container").mousemove(test);
		function test(e){	
			var offset = $(this).offset();
			var x1 = offset.left;
			var y1 = offset.top;
			
			var w = $(this).find(".house").width();
			var h = $(this).find(".house").height();
			var centerX = x1 + w/2.0;
			var centerY = y1 + h/2.0;
			
			var x2 = e.clientX;
			var y2 = e.clientY;
			
			var deltaX = x2 - x1;
			var deltaY = y2 - y1;
			
			//delta center
			var dcX = x2 - centerX;
			var dcY = y2 - centerY;
			
			//move delta
			var moveX = x2 - enterX;
			var moveY = y2 - enterY;
			console.log(e);
		}
});