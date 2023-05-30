//-------------First Task-------------

let request = new XMLHttpRequest();
request.addEventListener('load', function(){
    let information = request.responseText;
    let informationjs = JSON.parse(information);
    let namesContainer = document.querySelector('.names-div');
    let colorsContainer = document.querySelector('.colors-div')
    let namesUl = document.createElement('ul');
    let colorsUl = document.createElement('ul');
    namesContainer.appendChild(namesUl);
    colorsContainer.appendChild(colorsUl)
    let arrayOfData = informationjs.data;

    for(item of arrayOfData){
        let color = document.createElement('li');
        let name = document.createElement('li');
        color.textContent = item.color;
        name.textContent = item.name;
        namesUl.appendChild(name);
        colorsUl.appendChild(color)
    }

})
request.open('GET','https://reqres.in/api/unknown');
request.send();


//-------------First Task-------------
let rqst = new XMLHttpRequest();
rqst.addEventListener('load', function(){
    let info = rqst.responseText;
    let infojs = JSON.parse(info);
    let firstnamesContainer = document.querySelector('.firstnames-div');
    let lastnamesContainer = document.querySelector('.lastnames-div');
    let emailsContainer = document.querySelector('.emails-div');
    let firstnamesUl = document.createElement('ul');
    let lastnamessUl = document.createElement('ul');
    let emailsUl =document.createElement('ul');
    firstnamesContainer.appendChild(firstnamesUl);
    lastnamesContainer.appendChild(lastnamessUl);
    emailsContainer.appendChild(emailsUl);
    let array = infojs.data;

    for(item of array){
        let name = document.createElement('li');
        let lastname = document.createElement('li');
        let email = document.createElement('li');
        name.textContent = item.first_name;
        lastname.textContent = item.last_name;
        email.textContent =item.email;
        firstnamesUl.appendChild(name);
        lastnamessUl.appendChild(lastname);
        emailsUl.appendChild(email);
    }

})
rqst.open('GET','https://reqres.in/api/users?page=2');
rqst.send();