let myForm = document.querySelector('.myForm');
let clearBtn = document.querySelector('.clear-btn');

showData()

clearBtn.addEventListener('click', () =>{
    localStorage.clear()
    location.reload();
})

myForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('No page Refresh !')
    checkForm();
})
let count = 1;

let tmpId = ''
let tmpFront = ''
let tmpFname = ''
let tmpLname = ''
let tmpAddress = ''
let tmpKwang = ''
let tmpKhet = ''
let tmpProvince = ''
let tmpPost = ''

function checkForm(){
    let id = checkId();
    let front = checkFront();
    let fname = checkFname();
    let lname = checkLname();
    let address = checkAdress();
    let kwang = checkKwang();
    let khet = checkKhet();
    let province = checkProvince();
    let post = checkPost();

    if (id & front & fname & lname & address & kwang & khet & province & post){  // ผ่านทุกกรณี
        saveData(new Person())
    }
}
function Person(){
    this.id = tmpId
    this.front = tmpFront
    this.fname = tmpFname
    this.lname = tmpLname
    this.address = tmpAddress
    this.kwang = tmpKwang
    this.khet = tmpKhet
    this.province = tmpProvince
    this.post = tmpPost
}



function saveData(person){
    const arrayPerson = JSON.stringify(person);
    const personKey = `person${count}`;
    localStorage.setItem(personKey, arrayPerson);
    
    // จัดการลำดับของ keys
    let order = JSON.parse(localStorage.getItem('order')) || [];
    order.push(personKey);
    localStorage.setItem('order', JSON.stringify(order));
    
    count += 1;
    showData();
}

function showData() {
    let allPerson = document.querySelector('.all-person');
    allPerson.innerHTML = '';
    
    let order = JSON.parse(localStorage.getItem('order')) || [];
    order.forEach(key => {
        const value = localStorage.getItem(key);
        const objValue = JSON.parse(value);

        let person = document.createElement('div');
        person.classList.add('person');

        let h2 = document.createElement('h2');
        h2.innerHTML = `Key : ${key}`;

        let id = document.createElement('p');
        id.innerHTML = `หมายเลขบัตรประชาชน : ${objValue.id}`;

        let name = document.createElement('p');
        name.innerHTML = `ชื่อ : ${objValue.front}${objValue.fname}${objValue.lname}`;

        let khet = document.createElement('p');
        khet.classList.add('p-in');
        khet.innerHTML = `เขต/อำเภอ : ${objValue.khet}`;

        let kwang = document.createElement('p');
        kwang.classList.add('p-in');
        kwang.innerHTML = `แขวง/ตำบล : ${objValue.kwang}`;

        let province = document.createElement('p');
        province.innerHTML = `จังหวัด : ${objValue.province} ${objValue.post}`;

        person.append(h2, id, name, khet, kwang, province);
        allPerson.append(person);
    });
}

// showData()

function isNumber(value) {
    return !isNaN(value);
}

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
        tmpId = id
        return true
    } else{
        topicId.innerHTML = 'หมายเลขบัตรประชาชน Invalid !';
        topicId.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkFront(){
    let front = document.querySelector('.input-front').value;
    let topicFront = document.querySelector('.topic-front');
    if (front.length !== 0){
        topicFront.innerHTML = 'คำนำหน้านาม Valid !';
        topicFront.style.color = 'rgb(56, 235, 56)';
        tmpFront = front
        return true
    } else {
        topicFront.innerHTML = 'คำนำหน้านาม Invalid !';
        topicFront.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkProvince(){
    let province = document.querySelector('.input-province').value;
    let topicProvince = document.querySelector('.topic-province');
    if (province.length !== 0){
        topicProvince.innerHTML = 'จังหวัด Valid !';
        topicProvince.style.color = 'rgb(56, 235, 56)';
        tmpProvince = province
        return true
    } else {
        topicProvince.innerHTML = 'จังหวัด Invalid !';
        topicProvince.style.color = 'rgb(255, 0, 55)';
        return false
        
    }
}

function checkFname(){
    let fname = document.querySelector('.input-fname').value;
    let topicFname = document.querySelector('.topic-fname');
    if (!hasSpecialCharacter(fname) && (fname.length >= 2 && fname.length <= 20)){
        topicFname.innerHTML = 'ชื่อ Valid !';
        topicFname.style.color = 'rgb(56, 235, 56)';
        tmpFname = fname
        return true
    } else {
        topicFname.innerHTML = 'ชื่อ Invalid !';
        topicFname.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkLname(){
    let lname = document.querySelector('.input-lname').value;
    let topicLname = document.querySelector('.topic-lname');
    if (!hasSpecialCharacter(lname) && (lname.length >= 2 && lname.length <= 20)){
        topicLname.innerHTML = 'นามสกุล Valid !';
        topicLname.style.color = 'rgb(56, 235, 56)';
        tmpLname = lname
        return true
    } else {
        topicLname.innerHTML = 'นามสกุล Invalid !';
        topicLname.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkAdress(){
    let address = document.querySelector('.input-address').value;
    let topicAddress = document.querySelector('.topic-address');
    if (!hasSpecialCharacter(address) && address.length >= 15){
        topicAddress.innerHTML = 'ที่อยู่ Valid !';
        topicAddress.style.color = 'rgb(56, 235, 56)';
        tmpAddress = address
        return true
    } else {
        topicAddress.innerHTML = 'ที่อยู่ Invalid !';
        topicAddress.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkKwang(){
    let kwang = document.querySelector('.input-kwang').value;
    let topicKwang = document.querySelector('.topic-kwang');
    if (!hasSpecialCharacter(kwang) && kwang.length >= 2){
        topicKwang.innerHTML = 'ตำบล/แขวง Valid !';
        topicKwang.style.color = 'rgb(56, 235, 56)';
        tmpKwang = kwang
        return true
    } else {
        topicKwang.innerHTML = 'ตำบล/แขวง Invalid !';
        topicKwang.style.color = 'rgb(255, 0, 55)';
        return false
    }
}

function checkKhet(){
    let khet = document.querySelector('.input-khet').value;
    let topicKhet = document.querySelector('.topic-khet');
    if (!hasSpecialCharacter(khet) && khet.length >= 2){
        topicKhet.innerHTML = 'อำเภอ/เขต Valid !';
        topicKhet.style.color = 'rgb(56, 235, 56)';
        tmpKhet = khet
        return true
    } else {
        topicKhet.innerHTML = 'อำเภอ/เขต Invalid !';
        topicKhet.style.color = 'rgb(255, 0, 55)';
        return false
    }
}



function checkPost(){
    let post = document.querySelector('.input-post').value;
    let topicPost = document.querySelector('.topic-post');
    if (isNumber(post) && post.length === 5){
        topicPost.innerHTML = 'รหัสไปรษณีย์ Valid !';
        topicPost.style.color = 'rgb(56, 235, 56)';
        tmpPost = post
        return true
    } else {
        topicPost.innerHTML = 'รหัสไปรษณีย์ Invalid !';
        topicPost.style.color = 'rgb(255, 0, 55)';
        return false
    }
}