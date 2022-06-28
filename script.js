function hamchuyendoinhietdo() {
    // alert('an vao : chuyen doi nheit do')

    // lay gia tri tu input c id = nhiet_do
    let c = document.getElementById('nhiet_do').value;
    // in ra console
    console.log('do c: ' + c);

    // tinh toan do f tu do c nhap vao input
    let f =(160+9*c)/5;
    // in ra console
    console.log('do f: ' + f);

    // gan gia tri do f vao inpur id = f
    document.getElementById('f').innerHTML = f;
}

function congHaiSo() {
    alert('goi ham thanh cong')
}