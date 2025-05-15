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
// Hàm loại bỏ dấu tiếng Việt
function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// Biến DOM
const searchInput = document.getElementById('search');
const songs = document.querySelectorAll('.block-element');
// Thêm phần hiển thị thông báo nếu không có kết quả
let noResultMessage = document.createElement('p');
noResultMessage.textContent = 'Không tìm thấy bài hát phù hợp.';
noResultMessage.style.textAlign = 'center';
noResultMessage.style.color = 'red';
noResultMessage.style.fontWeight = 'bold';
noResultMessage.style.display = 'none';
document.body.appendChild(noResultMessage);
// Hàm xử lý tìm kiếm
function handleSearch() {
  const keyword = removeDiacritics(searchInput.value.toLowerCase().trim());
  let hasResult = false;

  songs.forEach(song => {
    const altText = removeDiacritics(song.querySelector('img').alt.toLowerCase());
    const titleText = removeDiacritics(song.querySelector('.song-title')?.textContent.toLowerCase() || '');

    if (altText.includes(keyword) || titleText.includes(keyword)) {
      song.style.display = '';
      hasResult = true;
    } else {
      song.style.display = 'none';
    }
  });

  // Hiển thị hoặc ẩn thông báo "không có kết quả"
  noResultMessage.style.display = hasResult ? 'none' : 'block';
}


searchInput.addEventListener('input', handleSearch);
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
