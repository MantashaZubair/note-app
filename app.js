const addbtn = document.getElementById("addbutton")
const main = document.querySelector("#main")
const savenote =()=>{
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes)
    const data=[]
    notes.forEach((item)=>data.push(item.value))
    //console.log(data)
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
    localStorage.setItem("notes",JSON.stringify(data))
    }
}

addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

{/* <div class="note">
<div class="tool">
    <i class="fa-solid fa-floppy-disk"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>
</div> */}
const addNote=(text="")=>{
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML= `
    <div class="tool">
    <i class="fa-solid fa-floppy-disk"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>

    `;
    note.querySelector(".fa-floppy-disk").addEventListener(
        "click",
        function(){
            savenote()
        }
    )
 
    note.querySelector(".fa-trash").addEventListener(
        "click",
        function(){
            note.remove()
            savenote()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            savenote()
        }
    )

    main.appendChild(note);
    savenote()
}
(
    function(){
        const lsnotes= JSON.parse(localStorage.getItem("notes"))
       
        if(lsnotes===null){
           addNote()
        }else{
            lsnotes.forEach((lsnote)=>{
                addNote(lsnote)
            })
        }

    }
)()