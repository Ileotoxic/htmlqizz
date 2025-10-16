// Lấy các phần tử HTML cần thiết
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Xử lý sự kiện khi click vào nút "Menu"
menuToggle.addEventListener('click', function(event) {
    // Ngăn sự kiện click lan ra ngoài (tới window)
    event.stopPropagation();
    // Thêm hoặc xóa lớp 'is-open' để hiện/ẩn menu
    dropdownMenu.classList.toggle('is-open');
});

// Xử lý sự kiện khi nhấn phím trên toàn bộ trang
document.addEventListener('keydown', function(event) {
    // Nếu menu đang mở và người dùng nhấn phím Escape
    if (dropdownMenu.classList.contains('is-open') && event.key === 'Escape') {
        // Đóng menu lại
        dropdownMenu.classList.remove('is-open');
    }
});

// Xử lý sự kiện đóng menu khi click ra ngoài
document.addEventListener('click', function(event) {
    // Nếu click không phải là nút menu và menu đang mở
    if (menuToggle !== event.target && dropdownMenu.classList.contains('is-open')) {
        // Đóng menu lại
        dropdownMenu.classList.remove('is-open');
    }
});