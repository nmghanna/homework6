var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = (volumeSlider.value + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log (video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log (video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log(video.currentTime);
	console.log(video.duration);
	if (video.currentTime < video.duration-5) {
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		video.innerHTML = "Mute";
		console.log("Unmute");
		
	}
	else {
		video.muted = true;
		video.innerHTML = "Unmute";
		console.log("Mute");
	}
  
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(video.volume);
	video.volume = volumeSlider.value /100;
	volume.innerHTML = (volumeSlider.value + "%");
	console.log(video.volume);
});


document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});