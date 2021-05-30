/**BÀI 4 
 * 1/Input
 * -chieuDaiHcn, chieuRongHcn
 *  2/Handle
 * -Tạo biến chieuDaiHcn, chieuRongHcn, dienTichHcn, chuViHcn
 * -dienTichHcn = chieuDaiHcn * chieuRongHcn
 * -chuViHcn = (chieuDaiHcn + chieuRongHcn)*2
 *  3/Output
 * -Tính và xuất ra diện tích ,chu vi của HCN đó
 */

var chieuDaiHcn = document.getElementById('chieuDaiHcn')

var chieuRongHcn = document.getElementById('chieuRongHcn');

var dienTichHcn = 0;

var chuViHcn = 0;

var btnNhapemdi = document.getElementById('btnNhapemdi').onclick = function
() {
    dienTichHcn = chieuDaiHcn.value * chieuRongHcn.value

    chuViHcn = chieuDaiHcn.value * 2 + chieuRongHcn.value * 2

    alert( 'Diện tích HCN là: ' +  dienTichHcn )

    alert ( 'Chu vi HCN là: ' + chuViHcn )
}


/** BÀI 5
 * Input
 * -Tổng của só có 2 chữ số
 * -Biết tổng của 2 số = (value % 10) + (value / 10)
 * Handle
 * -Tạo biến soHaiChuSo, sumHaiSo
 * Output
 * -Kết quả
 */

var soHaiChuSo = document.getElementById('soHaiChuSo');

var sumHaiSo = 0;

var btnPushHere = document.getElementById('btnPushHere').onclick = function
() {
    sumHaiSo = Math.round(Math.abs(soHaiChuSo.value % 10) + (soHaiChuSo.value / 10))

    alert ( 'Tổng của số này là: ' +  sumHaiSo)
}

/** BÀI 3
 * Input
 * -Biết 1usd = 23500vnd
 * Handle
 * -Tạo biến usd, vnd, sauKhiQuyDoi
 * -sauKhiQuyDoi = usd * vnd
 * Output
 * -Xuất ra số vnd sau quy đổi
*/

var usd = document.getElementById('usd');

var vnd = 23500;

var sauKhiQuyDoi = 0;

var btnPush = document.getElementById('btnPush').onclick = function
() {
    sauKhiQuyDoi = vnd * usd.value

    alert(
        'Số tiền sau khi quy đổi là: ' + sauKhiQuyDoi + 'VND'
    )
}

/** BÀI 1
 * Input
 * -Biết lương 1 ngày = 100.000
 * Handle
 * -Tạo biến soNgayLam, tienLuong, luongMotNgay
 * Output
 * -Ra số tiền lương của nhân viên
*/

var soNgayLam = document.getElementById('soNgayLam');

var luongMotNgay = 100000;

var tienLuong = 0;

var btnPushEmDi = document.getElementById('btnPushEmDi').onclick = function
() {
    tienLuong = soNgayLam.value * luongMotNgay

    alert(
        'Tiền lương của bạn là: ' + tienLuong + 'VND'
    )
}

/** BÀI 2
 * Input
 * -5 số thực
 * GTTB = tổng 5 số / 5
 * Handle
 * -Tạo biến GTTB, sumCacSo, firstNum, secondNum, thirdNum, fourthNum, lastNum 
 * -Biết giaTriTrungBinh = sumCacSo / 5
 * Output
 * -GTTB của 5 số thực
*/

document.getElementById('btnPushMe').onclick = function
() {
    var firstNum = document.getElementById('firstNum').value;

    var secondNum = document.getElementById('secondNum').value;

    var thirdNum = document.getElementById('thirdNum').value;

    var fourthNum = document.getElementById('fourthNum').value;

    var lastNum = document.getElementById('lastNum').value;

    var GTTB = 0;

    GTTB = (Number(firstNum) + Number(secondNum) + Number(thirdNum) + Number(fourthNum) + Number(lastNum)) / 5

    alert('Giá trị trung bình của 5 số thực là: '+ GTTB)
}
