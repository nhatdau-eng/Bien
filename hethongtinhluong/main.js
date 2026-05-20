const taxRate = 0.1; // Cần sửa thành const
let baseSalary = 5000;
let overTimeHours = 10;
const bonusRate = 1.5;
// LỖI 1: Biến bị ghi đè do dùng var không kiểm soát ở đâu đó trong hệ thống
// LỖI 2: Sai thứ tự toán tử (Tính sai lương)
// Đáng lẽ phải tính: (Lương cơ bản + (Giờ OT * Hệ số)) - Thuế
const finalSalary = (baseSalary + overTimeHours * bonusRate )-  (baseSalary + overTimeHours * bonusRate) * taxRate;
console.log(finalSalary);