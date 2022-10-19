var typed = new Typed(".typing",{
    strings:["","Web Designer.","web Developer.","Front-end-developer.", "Content Writer."],
    typespeed:100,
    Backspeed:60,
    loop:true
})
var typed = new Typed(".typ",{
    strings:["","Web Designer.","web Developer.","Front-end-developer.", "Content Writer."],
    typespeed:100,
    Backspeed:60,
    loop:true
})

const nav = document.querySelectorAll(".nav"),
 navList= document.querySelectorAll("li"),
 totalnavList=navList.length;
 allSection= document.querySelectorAll(".section"),
 totalsection= allSection.length
 for(let i=0; i<totalnavList; i++)
 {
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let i= 0; i<totalsection; i++)
        {
            allSection[i].classList.remove("back-section")
        }
        for( let j=0; j<totalnavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("ac"))
            {
              allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("ac")
        }
        this.classList.add("ac")
        showSection(this)
        if(window.innerWidth<1200)
        {
            asideSectionTogglerBtn()
        }
    })
}
function showSection(element)
{
    for(let i= 0; i<totalsection; i++)
    {
        allSection[i].classList.remove("ac")
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("ac")
}
const navTogglerBtn= document.querySelector(".navTogler")
aside=document.querySelector(".aside")
navTogglerBtn.addEventListener('click', ()=>{
    asideSectionTogglerBtn()
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for(let i=0; i<totalsection; i++){
        allSection[i].classList.toggle("open")
    }
}