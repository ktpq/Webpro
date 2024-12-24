let myForm = document.querySelector('.myForm');

myForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('No page Refresh !')
    checkForm();
})

function checkForm(){
    checkId();
    checkFront();
    checkFname();
    checkLname();
    checkAdress();
    checkKwang();
    checkKhet();
    checkProvince();
    checkPost();
}

function isNumber(value) {
    return !isNaN(value);
}

// function !hasSpecialCharacter(text) {
//     return /^[\u0E00-\u0E7F]+$/.test(text); // ตรวจสอบว่ามีแต่ตัวอักษรไทย
// }

function hasSpecialCharacter(text) {
    // Regular Expression สำหรับตรวจสอบอักขระพิเศษ
    const specialCharRegex = /[^a-zA-Z0-9ก-๙\s]/; 
    return specialCharRegex.test(text);
}

function checkId(){
    let id = document.querySelector('.input-id').value;
    let topicId = document.querySelector('.topic-id');
    if (id.length === 13 && isNumber(id)){
        topicId.innerHTML = 'หมายเลขบัตรประชาชน Valid !';
        topicId.style.color = 'rgb(56, 235, 56)';
    } else{
        topicId.innerHTML = 'หมายเลขบัตรประชาชน Invalid !';
        topicId.style.color = 'rgb(255, 0, 55)';
    }
}

function checkFront(){
    let front = document.querySelector('.input-front').value;
    let topicFront = document.querySelector('.topic-front');
    const listFront = ['นาย', 'นาง', 'นางสาว', 'เด็กชาย', 'เด็กหญิง'];
    if (listFront.includes(front)){
        topicFront.innerHTML = 'คำนำหน้านาม Valid !';
        topicFront.style.color = 'rgb(56, 235, 56)';
    } else {
        topicFront.innerHTML = 'คำนำหน้านาม Invalid !';
        topicFront.style.color = 'rgb(255, 0, 55)';
    }
}

function checkFname(){
    let fname = document.querySelector('.input-fname').value;
    let topicFname = document.querySelector('.topic-fname');
    if (!hasSpecialCharacter(fname) && (fname.length >= 2 && fname.length <= 20)){
        topicFname.innerHTML = 'ชื่อ Valid !';
        topicFname.style.color = 'rgb(56, 235, 56)';
    } else {
        topicFname.innerHTML = 'ชื่อ Invalid !';
        topicFname.style.color = 'rgb(255, 0, 55)';
    }
}

function checkLname(){
    let lname = document.querySelector('.input-lname').value;
    let topicLname = document.querySelector('.topic-lname');
    if (!hasSpecialCharacter(lname) && (lname.length >= 2 && lname.length <= 20)){
        topicLname.innerHTML = 'นามสกุล Valid !';
        topicLname.style.color = 'rgb(56, 235, 56)';
    } else {
        topicLname.innerHTML = 'นามสกุล Invalid !';
        topicLname.style.color = 'rgb(255, 0, 55)';
    }
}

function checkAdress(){
    let address = document.querySelector('.input-address').value;
    let topicAddress = document.querySelector('.topic-address');
    if (!hasSpecialCharacter(address) && address.length >= 15){
        topicAddress.innerHTML = 'ที่อยู่ Valid !';
        topicAddress.style.color = 'rgb(56, 235, 56)';
    } else {
        topicAddress.innerHTML = 'ที่อยู่ Invalid !';
        topicAddress.style.color = 'rgb(255, 0, 55)';
    }
}

function checkKwang(){
    let kwang = document.querySelector('.input-kwang').value;
    let topicKwang = document.querySelector('.topic-kwang');
    if (!hasSpecialCharacter(kwang) && kwang.length >= 2){
        topicKwang.innerHTML = 'ตำบล/แขวง Valid !';
        topicKwang.style.color = 'rgb(56, 235, 56)';
    } else {
        topicKwang.innerHTML = 'ตำบล/แขวง Invalid !';
        topicKwang.style.color = 'rgb(255, 0, 55)';
    }
}

function checkKhet(){
    let khet = document.querySelector('.input-khet').value;
    let topicKhet = document.querySelector('.topic-khet');
    if (!hasSpecialCharacter(khet) && khet.length >= 2){
        topicKhet.innerHTML = 'อำเภอ/เขต Valid !';
        topicKhet.style.color = 'rgb(56, 235, 56)';
    } else {
        topicKhet.innerHTML = 'อำเภอ/เขต Invalid !';
        topicKhet.style.color = 'rgb(255, 0, 55)';
    }
}

function checkProvince(){
    let province = document.querySelector('.input-province').value;
    let topicProvince = document.querySelector('.topic-province');
    if (province.length !== 0){
        topicProvince.innerHTML = 'จังหวัด Valid !';
        topicProvince.style.color = 'rgb(56, 235, 56)';
    } else {
        topicProvince.innerHTML = 'จังหวัด Invalid !';
        topicProvince.style.color = 'rgb(255, 0, 55)';
    }
}

function checkPost(){
    let post = document.querySelector('.input-post').value;
    let topicPost = document.querySelector('.topic-post');
    if (isNumber(post) && post.length === 5){
        topicPost.innerHTML = 'รหัสไปรษณีย์ Valid !';
        topicPost.style.color = 'rgb(56, 235, 56)';
    } else {
        topicPost.innerHTML = 'รหัสไปรษณีย์ Invalid !';
        topicPost.style.color = 'rgb(255, 0, 55)';
    }
}