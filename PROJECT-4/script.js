console.log("Starting JS!!")

// Set the initial icon to moon
document.getElementById("icon").classList.add("fa-sun");

function change(){
    document.body.classList.toggle("dark-mode");
    var iconElement = document.getElementById("icon");
    // Toggle between sun and moon icons
    if (iconElement.classList.contains("fa-sun")) {
        iconElement.classList.remove("fa-sun");
        iconElement.classList.add("fa-moon");
    } else {
        iconElement.classList.remove("fa-moon");
        iconElement.classList.add("fa-sun");
    }
}
// ---------------------------------TOPSONGS----------------------------------
function addTop10Songs(pic,heading,description){
    var root=document.getElementById("top");
    var elem=document.createElement("div");
    elem.classList.add("card");
    elem.innerHTML=`<div class="play">
    <svg width="16" height="16" fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
           <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
   </svg>
</div>
<img src=${pic} alt="">
<h2>${heading}</h2>
<p>${description}
</p>`
    root.append(elem);
}
addTop10Songs("https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9","ANIMAL","Manan Bhardwaj, Vishal Mishra, Jaani");
addTop10Songs("https://i.scdn.co/image/ab67616d00001e0285efa87a5eafe030b2495b7e","SeethaRamam","By Geeshna");
addTop10Songs("img/ashiqi.jpg","Ashiqui 2","Mithoon,Nakit Tiwaari,jeet Ganguli");
addTop10Songs("img/yeh.jpg","Yeh Jawaani Hai Deewani","Pritam");
addTop10Songs("img/leo.jpg",`I'm Scared (From "Leo")`,"Anirudh Ravichander");
addTop10Songs("img/hanuman.jpg",`Poolamme Pilla`,"GowraHari,Kasarla Shyam");
addTop10Songs("https://i.scdn.co/image/ab67616d00001e02ab23f0fba2fe563bc5544126",`Hi Nanna`,"Hesham wahab abdula");
addTop10Songs("https://i.scdn.co/image/ab67616d00001e026d7009c6abdb966deac1fa86",`JAILER `,"Anirudh Ravichander");


//--------------------------------------MADEFORHARI-----------------------------------
function madeForHari(pic,heading,description){
    var root=document.getElementById("madeforhari");
    var elem=document.createElement("div");
    elem.classList.add("card");
    elem.innerHTML=`<div class="play">
    <svg width="16" height="16" fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
           <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
   </svg>
    </div>
    <img src=${pic} alt="">
    <h3>${heading}</h3>
    <p>${description}
    </p>`
    root.append(elem);
}

madeForHari("img/m1.jpg","Daily Mix 2","Vishal Chandrashekhar, Devi Sri Prasad, Prudhvi Chandra and more");
madeForHari("img/m2.jpg","Daily Mix 3","Pritam, Tanishk Bagchi, Yohani and more");
madeForHari("img/m3.jpg","Daily Mix 4","Ghibran, Anirudh Ravichander, Thaman S and more");
madeForHari("img/m4.jpg","Daily Mix 5","A.R. Rahman, Anirudh Ravichander, Santhosh Narayanan and more");
madeForHari("img/m5.jpg","Daily Mix 6","GowraHari, Kala Bhairava, Vishal Mishra and more");
madeForHari("img/m6.jpg","Daily Mix 2","Devi Sri Prasad, Vishal Chandrashekhar, R. P. Patnaik and more");















