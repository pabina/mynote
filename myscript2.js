showNotes();
//for add btn
let mybtn=document.getElementById('addbtn');
mybtn.addEventListener('click',function(e){
let mytxt=document.getElementById('mytext');
let mynotes=localStorage.getItem('notes');
if(mytxt.value!==""){
    if(mynotes==null){
        mynotesObj=[];
    }
    else{
        mynotesObj=JSON.parse(mynotes);
    }
    mynotesObj.push(mytxt.value);
    localStorage.setItem('notes',JSON.stringify(mynotesObj));
    mytxt.value="";
    showNotes();
} else {
    alert('Box is empty.');
}
})


 //to show my typed notes
function showNotes(){
    let mynotes=localStorage.getItem('notes');
 if(mynotes==null){
        mynotesObj=[];
    }
    else{     mynotesObj=JSON.parse(mynotes);
    } 
    let myplacepart="";
     mynotesObj.forEach((value,index)=>{
myplacepart+=`<div class="card" style="width: 12rem">
<div class="card-body">
<h5 class="card-title">Note ${index + 1}</h5>
<hr />
<p class="card-text">${value}</p>
<a href="#" class="deleteMe btn btn-primary" id="${index}" onclick="deleteme(this.id)")">Delete</a>
</div>
</div>`;   
    }) 
    let mynotesele=document.getElementById("mysecond");
    if(mynotesObj.length!=0){
        mynotesele.innerHTML=myplacepart;
    }
    else{
    mynotesele.innerHTML="you add nothing";
}}

//for delete btn 
function deleteme(index){
    let mynotes=localStorage.getItem('notes');

    if(mynotes==null){
        mynotesObj=[];
    }
    else{
        mynotesObj=JSON.parse(mynotes);
    } 
    mynotesObj.splice (index,1); 
    localStorage.setItem('notes',JSON.stringify(mynotesObj));
    showNotes();
}









