/**
 * Bài 1: TÍNH LƯƠNG NHÂN VIÊN
 * 
 * Đầu vào:
 * - Lương 1 ngày
 * - Ngày làm
 * 
 * Xử lý:
 * - Tạo biến luong1Ngay cho Lương 1 ngày và tạo biến ngayLam cho Ngày làm
 * - Tạo biến luong cho tiền lương nhân viên
 * - Gán giá trị cho luong1Ngay và ngayLam
 * - Sử dụng công thức : luong = luong1Ngay * ngayLam
 * 
 * Đầu ra:
 * - lương nhân viên
 */
var luong1Ngay = 100000;
var ngayLam = 30;

var luong = luong1Ngay * ngayLam;
console.log("Luong Nhan vien: "+ new Intl.NumberFormat().format(luong));

/**
 * Bài 2: Tính giá trị trung bình
 * 
 * Đầu vào:
 * - 5 số thực
 * 
 * Xử lý:
 * - Tạo biến cho 5 số thực: st1, st2, st3, st4, st5
 * - Tạo biến cho giá trị trung bình: tb
 * - Gán giá trị cho 5 số thực vào st1, st2, st3, st4, st5
 * - Sử dụng công thức: tb = (st1 + st2 + st3 + st4 + st5) / 5
 * 
 * Đầu ra:
 * - Giá trị trung bình
 */

var st1 = 4;
var st2 = 5;
var st3 = 6;
var st4 = 7;
var st5 = 8;

var tb = (st1 + st2 + st3 + st4 + st5) / 5;

console.log("Gia tri trung binh: "+ tb);

/**
 * Bài 3: Quy đổi tiền
 * 
 * Đầu vào:
 * - Số tiền USD
 * - Giá USD hiện nay 
 * 
 * Xử lý:
 * - Tạo biến cho Số tiền USD là stUSD và tạo biến cho Giá USD hiện nay là giaUSD
 * - Tạo biến cho Số tiền quy đổi là soTienQuyDoi
 * - Gán giá trị cho stUSD và giaUSD
 * - Sử dụng công thức: soTienQuyDoi = stUSD * giaUSD
 * 
 * Đầu ra:
 * - Số tiền quy đổi
 */

var stUSD = 2;
var giaUSD = 23500;

var soTienQuyDoi = stUSD * giaUSD;

console.log("So tien quy doi: "+ new Intl.NumberFormat().format(soTienQuyDoi) + " VND");

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * Đầu vào:
 * - Chiều dài
 * - Chiều rộng
 * 
 * Đầu ra:
 * - Tạo biến cho chiều dài và chiều rộng là: cd và cr
 * - Tạo biến cho chu vi và diện tích là : cv và dt
 * - Gán giá trị chiều dài cho cd và chiều rộng cho cr
 * - Sử dụng công thức: dt = cd * cr
 *                      cv = (cd + cr) * 2
 * 
 * Đầu ra:
 * - Diện tích
 * - Chu vi
 */

var cd = 5;
var cr = 4;

var dt = cd * cr;
var cv = (cd + cr) * 2;

console.log("Dien tich: "+ dt);
console.log("Chu vi: "+ cv);

/**
 * Bài 5: Tính tổng 2 ký số
 * 
 * Đầu vào:
 * - Số có 2 chữ số
 * 
 * Xử lý:
 * - Tạo biến cho số có 2 chữ số là so
 * - Tạo biến cho số hàng đơn vị và số hàng chục là: soHDV và soHC
 * - Tạo biến tong cho tổng 2 ký số
 * - Sử dụng công thức: soHDV = so % 10
 *                      soHC = Math.floor(so / 10) : để lấy phần nguyên
 * - tính tổng 2 ký số theo công thức : tong = soHDV + soHC
 * 
 * Đầu ra:
 * - Tổng 2 ký số
 */

var so = 44;

var soHDV = so % 10;
var  soHC = Math.floor(so / 10);

var tong = soHDV + soHC;

console.log("Tong 2 ky so: " + tong);