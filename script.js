 /* TÌM KIẾM BÀI HÁT */
const searchInput = document.getElementById('search');
const songs = document.querySelectorAll('.block-element');

searchInput.addEventListener('input', function () {
 const keyword = this.value.toLowerCase();

 songs.forEach(song => {
 const altText = song.querySelector('img').alt.toLowerCase();
 const titleText = song.querySelector('.song-title')?.textContent.toLowerCase() || '';

 if (altText.includes(keyword) || titleText.includes(keyword)) {
 song.style.display = ''; // Trả về display mặc định (do CSS quyết định)
 } else {
 song.style.display = 'none';
 }
 });
});

/* Đặt  time  cho nhạc về ban đầu */
const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach(player => {
player.addEventListener('play', () => {
 audioPlayers.forEach(otherPlayer => {
 if (otherPlayer !== player) {
 otherPlayer.pause();
 otherPlayer.currentTime = 0; // Đặt lại thời gian về 0
 }
 });
 });
});
