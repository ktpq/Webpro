let balance = 0;

function setBalance(money, category){
    let balanceText = document.querySelector('.balance-text')
    if (category === 'รายรับ'){
        balance += money;
        balanceText.innerHTML = `${balance}`;
    } else {
        balance -= money;
        balanceText.innerHTML = `${balance}`;
    }
}

const button = document.querySelector('.btn');
button.addEventListener('click', newList);

function newList(){
    const table = document.querySelector('.table');
    const tableRow = document.createElement('tr');
    const detail = document.querySelector('.detail').value;
    const money = document.querySelector('.money').value;
    const date = document.querySelector('.date').value;

    const categoryTag = document.querySelector('.category');
    const category = categoryTag.options[categoryTag.selectedIndex].innerHTML;
    
    if (detail.length !== 0 &&  money.length !== 0 && date.length !== 0 && category.length !== 0){
        const dateCol = document.createElement('td')
        dateCol.innerHTML = `${date}`;

        const detailCol = document.createElement('td');
        detailCol.innerHTML = `${detail}`;
        if (category.length === 7){ // รายจ่าย
            const recieve = document.createElement('td');
            recieve.innerHTML = '0';
            const pay = document.createElement('td');
            pay.innerHTML = `${money}`
            tableRow.append(dateCol);
            tableRow.append(detailCol);
            tableRow.append(recieve);
            tableRow.append(pay);
            table.append(tableRow)
            setBalance(Number(money), category)
            
        } else { // รายรับ
            const recieve = document.createElement('td');
            recieve.innerHTML = `${money}`;
            const pay = document.createElement('td');
            pay.innerHTML = 0
            tableRow.append(dateCol);
            tableRow.append(detailCol);
            tableRow.append(recieve);
            tableRow.append(pay);
            table.append(tableRow)
            setBalance(Number(money), category)
        }
    }
}