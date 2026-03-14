let alumni = JSON.parse(localStorage.getItem("alumni")) || []

function saveData(){
localStorage.setItem("alumni",JSON.stringify(alumni))
}

function loadAlumni(){

let html=""
let found=0
let notTracked=0

alumni.forEach((a,index)=>{

if(a.status==="Teridentifikasi") found++
else notTracked++

html+=`
<tr>
<td>${a.name}</td>
<td>${a.graduation_year}</td>
<td>${a.major}</td>
<td>${a.status}</td>
<td>${a.job || "-"}</td>
<td>
<button class="track-btn" onclick="track(${index})">Track</button>
</td>
</tr>
`

})

document.getElementById("table").innerHTML=html
document.getElementById("total").innerText=alumni.length
document.getElementById("found").innerText=found
document.getElementById("notTracked").innerText=notTracked
}

function addAlumni(){

let name=document.getElementById("name").value
let year=document.getElementById("year").value
let major=document.getElementById("major").value

if(name==="" || year==="" || major===""){
alert("Semua field harus diisi")
return
}

let data={
name:name,
graduation_year:year,
major:major,
status:"Belum Dilacak",
job:null
}

alumni.push(data)

saveData()
closeForm()
loadAlumni()

document.getElementById("name").value=""
document.getElementById("year").value=""
document.getElementById("major").value=""

}

function track(index){

alumni[index].status="Teridentifikasi"
alumni[index].job="Software Engineer"

saveData()
loadAlumni()

}

function openForm(){
document.getElementById("modal").style.display="flex"
}

function closeForm(){
document.getElementById("modal").style.display="none"
}

loadAlumni()