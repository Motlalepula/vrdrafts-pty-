window.onscroll = function(){onSticky()};
var navigation = document.getElementById("navigation");
var sticky = navigation.offsetTop;
function onSticky(){
if(window.pageYOffset>=sticky){
navigation.classList.add("sticky");
}else{
navigation.classList.remove("sticky");
}
}

function onDisabled(){
alert("Business page is not abled yet.");
}

function onDeveloper(){
alert("Link disabled due to website Maintenance");
}
function openMenu(){
	document.getElementById("hidden-menu").style.height="65%";
}
function closeMenu(){
	document.getElementById("hidden-menu").style.height="0%";
}