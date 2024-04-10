let users=[];
let alertdiv=document.getElementById('alert');
let usercontainer=document.getElementById('user');
let ragistration=()=>{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value
   
   
   //check if mail exists
    let coutemail=users.filter((user)=>{
        return user.email==email;
    })
    console.log( coutemail);
    let tempuser={
        name:name,
        email:email
    }
    if(coutemail.length==0){
        users.push(tempuser);
        alertdiv.classList.remove('d-none');
        alertdiv.classList.add('alert');
        alertdiv.classList.add('success');
        setTimeout(() => {
            alertdiv.classList.remove('success');
            alertdiv.classList.remove('alert');
            alertdiv.classList.add('d-none');
            
        }, 2000);
       
    }
    else{
        console.log("mail id already exist");
        alertdiv.innerText="This mail id already exist";
        alertdiv.classList.remove('d-none');
        alertdiv.classList.add('alert');
        alertdiv.classList.add('denger');
        setTimeout(() => {
            alertdiv.classList.remove('denger');
            alertdiv.classList.remove('alert');
            alertdiv.classList.add('d-none');
            
        }, 2000);
       

    }
    usercontainer.innerText=" ";
    users.map((user)=>{
        let userdiv=document.createElement('div');
        let namecon=document.createElement('p');
        let emailcon=document.createElement('p');
        usercontainer.appendChild(userdiv);
        userdiv.classList.add('user');
        userdiv.appendChild(namecon);
        userdiv.appendChild(emailcon);
        emailcon.classList.add('email');
        namecon.innerText=user.name;
        emailcon.innerText=user.email;
    })
    console.log(users)
}