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
// Hàm chuyển tiếng Việt có dấu sang không dấu
function removeVietnameseTones(str) {
  return str
      .normalize('NFD')                      // Tách dấu khỏi chữ
      .replace(/[\u0300-\u036f]/g, '')       // Loại bỏ các dấu
      .replace(/đ/g, 'd').replace(/Đ/g, 'D') // Chuyển đ -> d
      .toLowerCase();
}

document.querySelector('.timkiem').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('search').value.trim();
  const keyword = removeVietnameseTones(input);

  const allSongs = document.querySelectorAll('.block-element');

  let matchCount = 0;

  allSongs.forEach(song => {
      const artist = song.querySelector('.artist')?.textContent || '';
      const title = song.querySelector('.song-info, p')?.textContent || '';
      const combined = `${artist} ${title}`;
      const normalized = removeVietnameseTones(combined);

      if (normalized.includes(keyword)) {
          song.style.display = 'block';
          matchCount++;
      } else {
          song.style.display = 'none';
      }
  });

  if (matchCount === 0) {
      alert("Không tìm thấy bài hát hoặc nghệ sĩ.");
  }
});
