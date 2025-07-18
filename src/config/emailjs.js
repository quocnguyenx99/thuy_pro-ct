// EmailJS Configuration
// Bạn cần tạo tài khoản tại https://www.emailjs.com/ và lấy các thông tin sau:

export const emailjsConfig = {
  serviceId: 'service_6bjieyw',      // Service ID từ EmailJS
  templateId: 'template_k12uoxk',    // Template ID từ EmailJS  
  publicKey: 'XehCB-M0AB2zKDU92',      // Public Key từ EmailJS
};

// Hướng dẫn setup EmailJS:
// 1. Đăng ký tài khoản tại https://www.emailjs.com/
// 2. Tạo Service (Gmail, Outlook, etc.)
// 3. Tạo Email Template với các biến: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
// 4. Lấy Service ID, Template ID, và Public Key
// 5. Thay thế các giá trị YOUR_* ở trên bằng các key thực tế
