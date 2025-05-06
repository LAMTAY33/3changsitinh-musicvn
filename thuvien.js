/* Tìm kiếm*/
const searchInput = document.getElementById('search');
const songs = document.querySelectorAll('.block-element');

searchInput.addEventListener('input', function () {
  const keyword = this.value.toLowerCase();

  songs.forEach(song => {
    const img = song.querySelector('img');
    const altText = img?.alt?.toLowerCase() || '';
    const titleText = song.querySelector('.song-title')?.textContent.toLowerCase() || '';
    const artistText = song.querySelector('h3')?.textContent.toLowerCase() || '';

    // Lấy tất cả .song-info trong block-element
    const songInfoElements = song.querySelectorAll('.song-info');
    let songInfoMatch = false;

    songInfoElements.forEach(info => {
      if (info.textContent.toLowerCase().includes(keyword)) {
        songInfoMatch = true;
      }
    });

    if (
      altText.includes(keyword) ||
      titleText.includes(keyword) ||
      artistText.includes(keyword) ||
      songInfoMatch
    ) {
      song.style.display = '';
    } else {
      song.style.display = 'none';
    }
  });
});


  /* Ẩn hiện danh sách*/
  document.querySelectorAll('.toggle-title').forEach(title => {
    title.addEventListener('click', function () {
      const currentContainer = this.nextElementSibling;

      document.querySelectorAll('.slide-container').forEach(container => {
        if (container !== currentContainer) {
          container.style.maxHeight = null;
        }
      });

      if (currentContainer.style.maxHeight) {
        currentContainer.style.maxHeight = null;
      } else {
        currentContainer.style.maxHeight = currentContainer.scrollHeight + "px";
      }
    });
  });
/* Dừng phát nhạc*/
  document.addEventListener("DOMContentLoaded", function () {
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", function () {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});