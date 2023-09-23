function fetchUser(){
    showspinne();
    fetch('https://randomuser.me/api/')
    .then((res)=>res.json())
    .then((data)=>{
        hidespinner();
        displayuser(data.results[0]);
    });
}
function displayuser(user){
    const userdisplay=document.querySelector('#user');
    if(user.gender==='female'){
        document.body.style.backgroundColor='#7d53cab9';

    }
    else{
        document.body.style.backgroundColor='#ec2121af';
    }
    userdisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}"/>
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first}${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span>${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span>${user.location.street.number} ${user.location.street.name}<br> CITY:${user.location.city} STATE,COUNTRY:${user.location.state},${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div> 
  `;
}
function showspinne(){
    document.querySelector('.spinner').style.display='block';
}
function hidespinner(){
    document.querySelector('.spinner').style.display='none';
}
document.querySelector('#generate').addEventListener('click',fetchUser);
fetchUser();