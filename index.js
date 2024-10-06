function createCard(user){
    let div = document.createElement('div')
    let name = document.createElement('p')
    let email = document.createElement('p')
    let image = document.createElement('img')
    image.src = user.avatar
    name.textContent = user.first_name +' '+ user.last_name
    email.textContent = user.email

    div.append(image,name,email)

    return div
}

function getUsers(users){

    let main = document.getElementById('main')

    users.forEach(item=>{
        main.appendChild(createCard(item))
    })
}



function getFetchUser(){

    let button = document.getElementById('bts')
    
    fetch('https://reqres.in/api/users/')
    .then(res=>{
        if(res.ok){return res.json()}
        throw new Error('Something Went Wrong')
    })
    .then(users=>{
        getUsers(users.data)
    })
    .catch(error=>{
        throw new Error('Fetching failed',error)
    })
    
    button.style.display = 'none';

}




