// Lấy danh sách cũ từ localStorage khi load trang
document.addEventListener("DOMContentLoaded", function() {
    const dsNhanXet = document.getElementById("ds-nhanxet");
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    savedComments.forEach(comment => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${comment.name}</strong>: ${comment.message}`;
        dsNhanXet.appendChild(li);
    });
});

// Lưu nhận xét mới vào localStorage
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Cảm ơn ${name} đã liên hệ! Chúng tôi sẽ phản hồi qua email ${email}.`);

    const dsNhanXet = document.getElementById("ds-nhanxet");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong>: ${message}`;
    dsNhanXet.prepend(li);

    // Lưu vào localStorage
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.unshift({ name, message }); // Thêm vào đầu
    localStorage.setItem("comments", JSON.stringify(savedComments));

    this.reset();
});
