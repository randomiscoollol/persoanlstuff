document.getElementById('phone-btn').addEventListener('click', function() {
    changeBackground('https://www.youtube.com/watch?v=fNmIkPHmTo4');
});

document.getElementById('toilet-btn').addEventListener('click', function() {
    changeBackground('https://www.youtube.com/watch?v=NQMD79O1amw');
});

document.getElementById('liquid-btn').addEventListener('click', function() {
    changeBackground('https://www.youtube.com/watch?v=X636hyDTu1s');
});

function changeBackground(videoUrl) {
    const video = document.getElementById('bg-video');
    const videoSource = document.getElementById('bg-video-source');
    videoSource.src = videoUrl;
    video.load(); // Reload the video
    video.play(); // Start the new video
}
