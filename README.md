# 🌟 Trang Web Cá Nhân

Một trang web cá nhân hiện đại, responsive và đẹp mắt được thiết kế dựa trên trang của Huỳnh Quốc Bảo.

## ✨ Tính Năng

- **Responsive Design**: Tương thích với mọi thiết bị
- **Modern UI/UX**: Giao diện hiện đại với animations mượt mà
- **Dark/Light Theme**: Chuyển đổi giữa chế độ sáng và tối
- **Smooth Scrolling**: Cuộn mượt mà giữa các section
- **Interactive Elements**: Các hiệu ứng hover và animations
- **Contact Form**: Form liên hệ với validation
- **Mobile Menu**: Menu hamburger cho thiết bị di động
- **Progress Bar**: Thanh tiến trình cuộn trang
- **Skill Bars**: Hiển thị kỹ năng với animation
- **Project Showcase**: Trưng bày dự án với hover effects

## 🚀 Cách Sử Dụng

### 1. Tùy Chỉnh Nội Dung

#### Thay Đổi Thông Tin Cá Nhân

Mở file `index.html` và thay đổi:

```html
<!-- Thay đổi tên -->
<h1 class="hero-title">Tên Của Bạn</h1>
<h2 class="hero-subtitle">Frontend Developer</h2>

<!-- Thay đổi mô tả -->
<p class="hero-description">
  Đam mê tạo ra những trải nghiệm web hiện đại và tương tác. Chuyên về React,
  Next.js và các công nghệ frontend tiên tiến.
</p>

<!-- Thay đổi thông tin liên hệ -->
<p>your.email@example.com</p>
<p>0123456789</p>
<p>TP. Hồ Chí Minh, Việt Nam</p>
```

#### Cập Nhật Skills

Trong phần Skills, thay đổi các kỹ năng và phần trăm:

```html
<div class="skill-item">
  <span>React</span>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 80%"></div>
  </div>
  <span class="skill-percentage">80%</span>
</div>
```

#### Thêm/Sửa Dự Án

Trong phần Projects, thay đổi hoặc thêm project cards:

```html
<div class="project-card">
  <div class="project-image">
    <i class="fas fa-code"></i>
  </div>
  <div class="project-content">
    <h3>Tên Dự Án</h3>
    <p>Mô tả dự án</p>
    <div class="project-tech">
      <span>React</span>
      <span>Node.js</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">Live Demo</a>
      <a href="#" class="project-link">GitHub</a>
    </div>
  </div>
</div>
```

### 2. Tùy Chỉnh Giao Diện

#### Thay Đổi Màu Sắc

Mở file `styles.css` và thay đổi các biến màu:

```css
/* Màu chủ đạo */
--primary-color: #2563eb;
--secondary-color: #1d4ed8;
--accent-color: #3b82f6;

/* Màu nền */
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
```

#### Thay Đổi Font

```css
body {
  font-family: "Your Font", -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 3. Thêm Hình Ảnh

#### Thay Thế Placeholder

Thay thế icon placeholder trong hero section:

```html
<div class="hero-image">
  <img src="path/to/your/photo.jpg" alt="Your Photo" class="profile-photo" />
</div>
```

Và thêm CSS tương ứng:

```css
.profile-photo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
}
```

### 4. Tùy Chỉnh Icons

Sử dụng Font Awesome icons. Thay đổi icon trong các section:

```html
<!-- Thay đổi icon cho project -->
<div class="project-image">
  <i class="fas fa-mobile-alt"></i>
  <!-- Thay đổi class icon -->
</div>

<!-- Thay đổi icon cho social links -->
<a href="#" class="social-icon">
  <i class="fab fa-github"></i>
  <!-- Thay đổi class icon -->
</a>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🎨 Tùy Chỉnh Theme

### Dark Theme

Trang web có sẵn chế độ tối. Người dùng có thể chuyển đổi bằng nút theme toggle ở góc trái.

### Custom Theme

Để tạo theme mới, thêm CSS vào file `styles.css`:

```css
.custom-theme {
  --primary-color: #your-color;
  --bg-primary: #your-bg-color;
  /* Thêm các biến màu khác */
}
```

## 🔧 Tùy Chỉnh JavaScript

### Thêm Animations

Trong file `script.js`, bạn có thể thêm animations mới:

```javascript
// Animation cho element mới
function animateElement(element) {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";

  setTimeout(() => {
    element.style.transition = "all 0.6s ease";
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, 100);
}
```

### Form Handling

Để xử lý form thực tế, thay đổi trong `script.js`:

```javascript
// Thay thế phần xử lý form
contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(this),
    });

    if (response.ok) {
      showNotification("Tin nhắn đã được gửi thành công!", "success");
      this.reset();
    }
  } catch (error) {
    showNotification("Có lỗi xảy ra!", "error");
  }
});
```

## 📁 Cấu Trúc File

```
Profile/
├── index.html          # File HTML chính
├── styles.css          # File CSS styles
├── script.js           # File JavaScript
└── README.md           # Hướng dẫn này
```

## 🌐 Deploy

### GitHub Pages

1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch (thường là main)
4. Trang web sẽ được deploy tại `https://username.github.io/repository-name`

### Vercel

1. Kết nối GitHub repository với Vercel
2. Vercel sẽ tự động deploy khi có thay đổi
3. Trang web sẽ có URL dạng `https://project-name.vercel.app`

### Netlify

1. Kéo thả thư mục project vào Netlify
2. Hoặc kết nối với GitHub repository
3. Trang web sẽ được deploy tự động

## 🎯 Tối Ưu Hóa

### Performance

- Sử dụng CDN cho Font Awesome
- Minify CSS và JavaScript khi deploy
- Tối ưu hình ảnh

### SEO

- Thêm meta tags
- Sử dụng semantic HTML
- Tối ưu title và description

### Accessibility

- Sử dụng alt text cho hình ảnh
- Đảm bảo contrast ratio
- Keyboard navigation support

## 🐛 Troubleshooting

### Menu Mobile Không Hoạt Động

- Kiểm tra console errors
- Đảm bảo script.js được load
- Kiểm tra CSS classes

### Animations Không Chạy

- Kiểm tra Intersection Observer support
- Đảm bảo elements có class `fade-in`
- Kiểm tra CSS transitions

### Form Không Gửi

- Kiểm tra JavaScript errors
- Đảm bảo form có ID `contactForm`
- Kiểm tra validation logic

## 📞 Hỗ Trợ

Nếu bạn gặp vấn đề hoặc cần hỗ trợ:

1. Kiểm tra console errors
2. Đảm bảo tất cả files được load
3. Kiểm tra browser compatibility
4. Tạo issue trên GitHub repository

## 📄 License

Dự án này được tạo ra để sử dụng cá nhân. Bạn có thể tự do tùy chỉnh và sử dụng cho mục đích cá nhân.

---

**Chúc bạn có một trang web cá nhân đẹp mắt và chuyên nghiệp! 🎉**
