function togglePlay(video) {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(video, toggle) {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(video, button) {
  video.currentTime += parseFloat(button.dataset.skip);
}

function handleRangeUpdate(video, range) {
  video[range.name] = range.value;
}

function handleProgress(video, progressBar) {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e, video, progress) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function challenge11() {
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');

  video.addEventListener('click', () => togglePlay(video));
  video.addEventListener('play', () => updateButton(video, toggle));
  video.addEventListener('pause', () => updateButton(video, toggle));
  video.addEventListener('timeupdate', () => handleProgress(video, progressBar));
  toggle.addEventListener('click', () => togglePlay(video));
  skipButtons.forEach(button => button.addEventListener('click', () => skip(video, button)));
  ranges.forEach(range => range.addEventListener('change', () => handleRangeUpdate(video, range)));
  ranges.forEach(range => range.addEventListener('mousemove', () => handleRangeUpdate(video, range)));

  let mousedown = false;
  progress.addEventListener('click', (e) => scrub(e, video, progress));
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e, video, progress));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
}

export { challenge11 }
