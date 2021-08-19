//Adding Data to db.json using json server

function createItem(id,dname,loc){
    var item = `<div class="item text-center"> Id: ${id}<br/> Name: ${dname}<br/> Location: ${loc}<br/></div><br/>`
    return item;
}


async function generateId(){
    let res = await fetch("http://localhost:3000/dept/");
    let dept = await res.json();
    return dept.length+1;
}


async function addDept(){

    let id = await generateId();

let dept ={
    "id":parseInt(prompt("Enter id")),
    "dname":prompt("Enter name"),
    "loc":prompt("Enter location")
}
fetch('http://localhost:3000/dept/',{
method: 'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify(dept)
}).then((res)=>{
console.log(res);

})
}

//Updating the Data in db.json using json server
function editDept(){
let dept ={
"id":parseInt(prompt("Enter id")),
"dname":prompt("Enter name"),
"loc":prompt("Enter location")
}
fetch("http://localhost:3000/dept/"+dept.id,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(dept)
}).then((res)=>{
console.log(res);
})
}

//Deleting Data in db.json using json server
async function deleteDept(){
let id = parseInt(prompt("Enter user id to delete"));

fetch("http://localhost:3000/dept/"+id,{
method:"DELETE",
headers:{
"Content-Type":"application/json"
}
}).then((res)=>{
console.log(res);
})
}

//Fetching the Data from db.json using json server
function getDept(){

    var res=document.querySelector("#res");

fetch("http://localhost:3000/dept").then((res)=>{
return res.json();
}).then((dept)=>{
res.innerHTML = "";
dept.forEach(item => {
    res.innerHTML += createItem(item.id,item.dname,item.loc);
});
})
}
    