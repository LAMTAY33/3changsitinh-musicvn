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
