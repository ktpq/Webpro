let check = 0; // 0 = thai , 1 = eng

const thaiList = ['เลือกประเทศ', 'ไทย', 'เวียดนาม', 'ลาว', 'มาเลเซีย', 'สิงคโปร์', 'ฟิลิปปินส์', 'เมียนมาร์', 'กัมพูชา', 'บรูไน']
const engList = ['select a country', 'Thai', 'Vietnam', 'Lao', 'Malaysia', 'Singapore', 'Philippines', 'Myanmar', 'Cambodia', 'Brunai'];

const button = document.querySelector('.btn');
button.addEventListener('click', changeLang);
function changeLang(){
    let nameTag = document.querySelector('.name-tag');
    let surnameTag = document.querySelector('.surname-tag');
    let countryTag = document.querySelector('.country-tag');
    let countryList = document.querySelector('.country-list');
    if (check === 0){
        nameTag.innerHTML = 'First Name :';
        surnameTag.innerHTML = 'Last Name :';
        countryTag.innerHTML = 'Country :'
        button.innerHTML = 'Change to Thai';

        countryList.innerHTML = '';
        engList.forEach((item) =>{
            let opt = document.createElement('option');
            opt.innerHTML = `${item}`;
            countryList.append(opt);
        })
        
        check = 1;
    } else {
        nameTag.innerHTML = 'ชื่อ :';
        surnameTag.innerHTML = 'นามสกุล :';
        countryTag.innerHTML = 'ประเทศ :'
        button.innerHTML = 'เปลี่ยนเป็นภาษาอังกฤษ';

        countryList.innerHTML = '';
        thaiList.forEach((item) =>{
            let opt = document.createElement('option');
            opt.innerHTML = `${item}`;
            countryList.append(opt);
        })
        check = 0;
    }
}