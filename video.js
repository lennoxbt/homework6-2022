var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log("The current volume is" + video.volume)
	console.log("Current speed is " + video.playbackRate)
	document.querySelector("#volume").innerHTML = video.volume *100+ "%"
	video.play()

 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95 // to make the video s
	console.log("Current speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.95 // to make the video s
	console.log("Current speed is " + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted) //no para after video.muted because this an attribute
	//video.muted = true
	//video.muted 
	if (video.muted = true) {
		video.muted = false
	}
	else video.muted = false 

	//if I am currently muted (muted ==true )
	//set muted to false and update the text in the button
	// else
	//set muted to true and update the text button
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)

	// use this.value to update the video volume and uodate the volume element below
	// if we slide to 50% we want to video
	// we will say vidoe.

});
