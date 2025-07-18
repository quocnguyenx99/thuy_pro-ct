# Hướng dẫn Setup EmailJS cho Contact Form

## Bước 1: Tạo tài khoản EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Email Service
1. Trong dashboard, click "Add New Service"
2. Chọn email provider (Gmail, Outlook, Yahoo, etc.)
3. Làm theo hướng dẫn để kết nối email của bạn
4. Lưu lại **Service ID**

## Bước 3: Tạo Email Template
1. Click "Email Templates" → "Create New Template"
2. Thiết kế template với các biến sau:
   ```
   Subject: Liên hệ từ {{from_name}}
   
   Xin chào,
   
   Bạn có tin nhắn mới từ website:
   
   Tên: {{from_name}}
   Email: {{from_email}}
   
   Tin nhắn:
   {{message}}
   
   ---
   Email được gửi từ contact form website THACO
   ```
3. Lưu lại **Template ID**

## Bước 4: Lấy Public Key
1. Vào "Account" → "General"
2. Copy **Public Key**

## Bước 5: Cập nhật config
Mở file `src/config/emailjs.js` và thay thế:
```javascript
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',      // Thay bằng Service ID thực tế
  templateId: 'template_xxxxxxx',    // Thay bằng Template ID thực tế  
  publicKey: 'xxxxxxxxxxxxxxx',      // Thay bằng Public Key thực tế
};
```

## Bước 6: Test
1. Khởi động ứng dụng: `npm run dev`
2. Vào trang Contact
3. Điền form và nhấn "Send Inquiry"
4. Kiểm tra email `kimnguyen.525102250764@st.ueh.edu.vn`

## Ghi chú
- EmailJS miễn phí cho 200 email/tháng
- Nếu cần gửi nhiều hơn, cần upgrade plan
- Có thể thay đổi email nhận trong file contact/page.js
