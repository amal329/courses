function createItem(id,name,loc){
    var item = `<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${loc}</td>
                    <td> <button class="btn btn-secondary" onclick="editDetails(\`${id}\`,\`${name}\`,\`${loc}\`)">Edit</button> </td>
                    <td> <button class="btn btn-danger" onclick="deleteDept(${id})">Delete</button> </td>
                </tr>`;

    return item;
}


async function addDept(id,name,loc){

let dept ={
    "id":parseInt(id),
    "dname":name,
    "loc":loc
}
fetch('http://localhost:3000/dept/',{
method: 'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify(dept)
}).then((res)=>{
console.log(res);
getDept();
toggleWindow();
})
}

function editDept(id,name,loc){
let dept ={
"id":id,
"dname":name,
"loc":loc
}
fetch("http://localhost:3000/dept/"+dept.id,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(dept)
}).then((res)=>{
console.log(res);
getDept();
toggleWindow();
})
}

async function deleteDept(id){
    
fetch("http://localhost:3000/dept/"+id,{
method:"DELETE",
headers:{
"Content-Type":"application/json"
}
}).then((res)=>{
console.log(res);
getDept();
});
}

function getDept(){

    var res=document.querySelector("#table");

fetch("http://localhost:3000/dept").then((res)=>{
return res.json();
}).then((dept)=>{
res.innerHTML = `<thead class="thead-dark">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Location</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>
</thead>`;
dept.forEach(item => {
    res.innerHTML += createItem(item.id,item.dname,item.loc);
});
});
}
    
function toggleWindow(){
    var window = document.getElementById("window");
    window.classList.toggle("hide");

    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("location").value="";
}

function editDetails(id,name,loc){
    console.log("id is",id,"name is ",name," and loc is ",loc);
    toggleWindow();

    let id_i = document.getElementById("id");
    let name_i = document.getElementById("name");
    let location_i = document.getElementById("location");
    let submit = document.getElementById("submit");

    console.log("Value of of is "+id_i.innerHTML);

    id_i.value = id;
    name_i.value = name;
    location_i.value = loc;

    submit.onclick=() => editDept(id_i.value,name_i.value,location_i.value);
}

function newUser(){
    toggleWindow();
    let id_i = document.getElementById("id");
    let name_i = document.getElementById("name");
    let location_i = document.getElementById("location");
    let submit = document.getElementById("submit");

    submit.onclick=() => addDept(id_i.value,name_i.value,location_i.value);
}
