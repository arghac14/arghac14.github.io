$(document).ready(function(){
	$("#resume").click(function(){
// 		alert("Temporarily unavailable!");
	});
	$("#blur").mouseenter(function(){
		$("#blur").css("filter","blur(0px)");
	});
	$("#blur").mouseleave(function(){
	$("#blur").css("filter","blur(1px)");
	});
	$("#skillbutton").click(function(){
		$("#skillmeter").slideToggle("slow");
	
	  });
	  $("#projectbutton").click(function(){
		$("#projectlist").slideToggle("slow");
	
	  });
	  $("#blogbutton").click(function(){
		$("#bloglist").slideToggle("slow");
	
	  });
	  $(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	  });
	  $('.preloader').delay(3000).fadeOut('slow');
	  $('.rest').delay(2990).fadeIn('fast');

	
});
