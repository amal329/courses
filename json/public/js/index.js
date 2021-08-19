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
"id":id,
"dname":"John Smith",
"loc":"Pune"
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
"id":2,
"dname":"Quality",
"loc":"Kolkatta"
}
fetch("http://localhost:3000/dept/",{
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
let id = await generateId();
id--;

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
    console.log(createItem(item.id,item.dname,item.loc));
    res.innerHTML += createItem(item.id,item.dname,item.loc);
});
})
}
    