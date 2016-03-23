// Love the fact that the for loops are now iterations in jQuery. The old way of doing loops like this:

var $elements = $(".myclass");
for (var x=0; x< $elements.length; x++){
       $elements[x].toggleClass("shadow");
}

//Can now look like this in jQuery 3

var $elements = $(".myclass");
for (var element of $elements){
       element.toggleClass("shadow");
}
