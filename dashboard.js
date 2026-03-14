const API = "http://localhost:3000"

async function loadAlumni(){

const res = await fetch(API + "/alumni")
const data = await res.json()

let html=""
let found=0
let notTracked=0

data.forEach(a=>{

if(a.status==="Teridentifikasi") found++
else notTracked++

html+=`
<tr>
<td>${a.name}</td>
<td>${a.graduation_year}</td>
<td>${a.major}</td>
<td>${a.status}</td>
<td>${a.job || "-"}</td>
<td>${a.company || "-"}</td>
<td>${a.location || "-"}</td>
<td>
<button class="track-btn" onclick="track(${a.id})">Track</button>
</td>
</tr>
`

})

document.getElementById("table").innerHTML=html

document.getElementById("total").innerText=data.length
document.getElementById("found").innerText=found
document.getElementById("notTracked").innerText=notTracked

}

async function addAlumni(){

const name=document.getElementById("name").value
const year=document.getElementById("year").value
const major=document.getElementById("major").value

await fetch(API+"/alumni",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:name,
graduation_year:year,
major:major
})
})

closeForm()
loadAlumni()

}

async function track(id){

await fetch(API+"/track/"+id,{
method:"POST"
})

loadAlumni()

}

function openForm(){
document.getElementById("modal").style.display="flex"
}

function closeForm(){
document.getElementById("modal").style.display="none"
}

loadAlumni()