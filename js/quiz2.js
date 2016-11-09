// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function olchange() {
	var x = document.getElementById("order");
	var xitem = x.getElementsByTagName("li");
	var start = "List item ";
	var end = " is not as good as me!";
	for (var i = 0; i < xitem.length; i++){
		xitem[i].innerHTML = start.concat(i+2, end);
		xitem[i].style.color = "yellow";
	}
})();

(function($){
	$(".links li a").click(function(e) {
		e.preventDefault();
		alert("you clicked a link, good for you");
	});

	console.log("this is a message for you!!!")
}(jQuery));

function accordion() {
	var a = document.getElementById("master");
	if(a.checked == false){
		document.getElementById("members").style.visibility = "hidden";
	}
	if(a.checked == true){
		document.getElementById("members").style.visibility = "visible";
	}
}

$(document).ready(
	$("h1").click(function(){
		$("h1").text("This makes me happy!");
	})
)

$(document).ready(function(){
	$(".fade").click(function(){
		$("body").fadeOut(function(){
			$("html").html("<h1><center>Later fellas!<center></h1>");
		});
	});
});
