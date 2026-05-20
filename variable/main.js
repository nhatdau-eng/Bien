//Bài 1 :
let i = 10
document.write('i = ' + i)
document.write('<br/>')
let f = 20.5
document.write('f = ' + f)
document.write('<br/>')
let b = true
document.write('b = ' + b)
document.write('<br/>')
let s = 'Hà Nội'
document.write('s = ' + s)
//Bài 2:
let width = 50
let height = 60
let area = width * height
document.write('Area = ' + area)
//Bài 3:
let c = 20
let d = 4
if (d === 0) {
    alert("Không thể chia cho 0");
} else if (c % d === 0) {
    alert(c + " là bội số của " + d);
} else {
    alert(c + " không phải là bội số của " + d);
}