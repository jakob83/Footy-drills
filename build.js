createButton = document.getElementById("createButton");
bigContainer = document.getElementById("bigContainer");
ct = 0;


//do not add the .value to these bcs it wont work because its defined here (before the user enters a value) as "leere Menge"
//and if i log it or use it it will be "" or undefined
sessionInput=[
    sessionName= document.getElementById("sessionNameInput"),
    sessionBenefits= document.getElementById("sessionBenefitsInput"),
    drillCoumter = document.getElementById("drillCounter")
]

drillInput = [
    drillInput1 = [
        drillName= document.getElementById("drillNameInput"),
        drillType=document.getElementById("drillTypeInput"),
        drillItems= document.getElementById("drillItemsInput"),
        drillLinkInput= document.getElementById("drillLinkInput"),
    
    ],
    drillInput2 = [
        drillName= document.getElementById("drillNameInput2"),
        drillType=document.getElementById("drillTypeInput2"),
        drillItems= document.getElementById("drillItemsInput2"),
        drillLinkInput= document.getElementById("drillLinkInput2"),
    ],
    drillInput3 = [
        drillName= document.getElementById("drillNameInput3"),
        drillType=document.getElementById("drillTypeInput3"),
        drillItems= document.getElementById("drillItemsInput3"),
        drillLinkInput= document.getElementById("drillLinkInput3"),
    ],
    drillInput4 = [
        drillName= document.getElementById("drillNameInput4"),
        drillType=document.getElementById("drillTypeInput4"),
        drillItems= document.getElementById("drillItemsInput4"),
        drillLinkInput= document.getElementById("drillLinkInput4"),
    ],
    drillInput5 = [
        drillName= document.getElementById("drillNameInput5"),
        drillType=document.getElementById("drillTypeInput5"),
        drillItems= document.getElementById("drillItemsInput5"),
        drillLinkInput= document.getElementById("drillLinkInput5"),
    ]
]




sessionInput[2].addEventListener("change", function(){
    for(i=1; i<5; i++){
        if(Number(sessionInput[2].value)>i){
            document.getElementById("drill"+i).style.display = "flex";
        }
        else{
            document.getElementById("drill"+i).style.display = "none";
        }
    }
})



createButton.addEventListener("click", function(){
    sessContainer = document.createElement("div");
    sessContainer.setAttribute("class", "session-container")

    sessContainer.innerHTML = ` 
    <h3 class="sess-name">${sessionInput[0].value}</h3>
    <p class="Benefits">${sessionInput[1].value}</p>
`
    
    drills = document.createElement("div")
    drills.setAttribute("class", "drills")




    count= 0
    count2 = 1
    drill=[
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div")
    ]
    if(Number(sessionInput[2].value)>5){
        alert("Your number is to big! \n max. drills 5")
    }
    else if(Number(sessionInput[2].value)==""){
        alert("Please enter a valid number")
    }
    else {while(Number(sessionInput[2].value)>count){
        valueName = drillInput[count][0]
        valueType = drillInput[count][0]
        valueItems = drillInput[count][0]
        drill[count].setAttribute("class", "drill")
        drill[count].innerHTML = `            
        <strong class="drill-name">${drillInput[count][0].value}</strong>
        <div class="description">
            <p>type: ${drillInput[count][1].value}</p>
            <p>items: ${drillInput[count][2].value}</p>
        </div>
        <a href="link" class="link">${drillInput[count][0].value}</a>`

        drills.appendChild(drill[count])
        sessContainer.appendChild(drills)
        count++
        }
            
    bigContainer.appendChild(sessContainer)

    }
});


saveDrills = document.getElementById("saveDrills");

saveDrills.addEventListener("click", function(){
    localStorage.setItem("sessContainer", bigContainer.innerHTML)
})

document.addEventListener('DOMContentLoaded', function(event) {
    // Retrieve data from localStorage
    var storedData = localStorage.getItem('sessContainer');
  
    // Use the retrieved data
    bigContainer.innerHTML = storedData
  });

// document.getElementById("deleteBtn").addEventListener("click", function(wich){
//    document.getElementsByClassName("session-name")[wich]
// })

  
