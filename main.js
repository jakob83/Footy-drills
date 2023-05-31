createButton = document.getElementById("createButton");
bigContainer = document.getElementById("bigContainer")


//do not add the .value to these bcs it wont work because its defined here (before the user enters a value) as "leere Menge"
//and if i log it or use it it will be "" or undefined
sessionInput=[
    sessionName= document.getElementById("sessionNameInput"),
    sessionBenefits= document.getElementById("sessionBenefitsInput"),
    drillCoumter = document.getElementById("drillCounter")
]

drillInput1 = [
    drillName= document.getElementById("drillNameInput"),
    drillType=document.getElementById("drillTypeInput"),
    drillItems= document.getElementById("drillItemsInput"),
    drillLinkInput= document.getElementById("drillLinkInput"),

];
drillInput2 = [
    drillName= document.getElementById("drillNameInput2"),
    drillType=document.getElementById("drillTypeInput2"),
    drillItems= document.getElementById("drillItemsInput2"),
    drillLinkInput= document.getElementById("drillLinkInput2"),
]
drillInput3 = [
    drillName= document.getElementById("drillNameInput3"),
    drillType=document.getElementById("drillTypeInput3"),
    drillItems= document.getElementById("drillItemsInput3"),
    drillLinkInput= document.getElementById("drillLinkInput3"),
]
drillInput4 = [
    drillName= document.getElementById("drillNameInput4"),
    drillType=document.getElementById("drillTypeInput4"),
    drillItems= document.getElementById("drillItemsInput4"),
    drillLinkInput= document.getElementById("drillLinkInput4"),
]
drillInput5 = [
    drillName= document.getElementById("drillNameInput5"),
    drillType=document.getElementById("drillTypeInput5"),
    drillItems= document.getElementById("drillItemsInput5"),
    drillLinkInput= document.getElementById("drillLinkInput5"),
]

sessionInput[2].addEventListener("change", function(){
    for(i=2; i<=5; i++){
        if(Number(sessionInput[2].value)>=i){
            document.getElementById("drill"+i).style.display = "flex";
        }
        else{
            document.getElementById("drill"+i).style.display = "none";
        }
    }
})

createButton.addEventListener("click", function(){

    sessContainer = document.createElement("div");
    sessContainer.setAttribute("class", "session-container");

    sessContainer.innerHTML = `    
    <h3 class="sess-name">`+sessionInput[0].value+`</h3>
    <p class="Benefits">`+sessionInput[1].value+`</p>`

    for(i=1; i<=5; i++){
        
        if(Number(sessionInput[2].value)>=i){
            sessContainer.innerHTML = ` 


    <div class="drills">
        <div class="drill number1">
            <strong class="drill-name">`+drillInput+i+[0].value+`</strong>
            <div class="description">
                <p>type:`+drillInput+i+[1].value+`</p>
                <p>items:`+drillInput+i+[2].value+`</p>
            </div>
            <a href="`+drillInput+i+[3].value+`" class="link">link to video</a>
        </div>
    </div>`
        }
    }
    bigContainer.appendChild(sessContainer)
});
