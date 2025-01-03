fetch('employees.json')
    .then(res => res.json())
    .then(data => showData(data))
    .catch(error => console.log('error', error))

let table = document.querySelector('.table');

function showData(data){
    for (let i = 0; i < data.length; i++){
        let tr = document.createElement('tr');
        
        let id = document.createElement('td');
        id.innerHTML = `${data[i].id}`
        
        let name = document.createElement('td')
        name.innerHTML = `${data[i].FirstName} + ${data[i].LastName}`
        
        let gender = document.createElement('td')
        if (data[i].Gender === 'Female'){
            gender.innerHTML = 'F'
        } else {
            gender.innerHTML = 'M'
        }
        
        let position = document.createElement('td')
        position.innerHTML = `${data[i].Position}`

        let address = document.createElement('td')
        address.innerHTML = `${data[i].Address}`

        tr.append(id)
        tr.append(name)
        tr.append(gender)
        tr.append(position)
        tr.append(address)
        table.append(tr)
    }
}