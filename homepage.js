
// Unified function to open video modal with a given YouTube ID
function openVideoById(videoId) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = 'flex';
}

// Close modal and stop video
function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('youtubePlayer');
  modal.style.display = 'none';
  player.src = ""; 
}

// Section2: Bind the IGN review button
const section2Btn = document.getElementById('playVideoBtn');
if (section2Btn) {
  section2Btn.addEventListener('click', function () {
    openVideoById('ZdVO_fYoF5g'); // Hardcoded video ID for Section2
  });
}

// Section3: Bind all video-item buttons with data-video-id
const buttons = document.getElementsByClassName('play-video-btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const videoId = buttons[i].getAttribute('data-video-id');
    if (videoId) {
      openVideoById(videoId);
    }
  });
}


// Control the volume of background animation(muted or unmuted)
const video = document.getElementById('main-theme');
const unmutedBtn = document.getElementById('unmuted-btn1');
const mutedBtn = document.getElementById('muted-btn1');
mutedBtn.style.display = 'none';

unmutedBtn.addEventListener('click', function () {
  video.muted = false;
  video.volume = 0.5;
  video.play();
  unmutedBtn.style.display = 'none';
  mutedBtn.style.display = 'inline-block';
});

mutedBtn.addEventListener('click', function () {
  video.muted = true;
  video.volume = 0.5;
  video.play();
  mutedBtn.style.display = 'none';
  unmutedBtn.style.display = 'inline-block';
});



