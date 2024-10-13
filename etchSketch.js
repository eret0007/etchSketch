
let cont = document.querySelector("#cont")
let btn = document.querySelector("#btn")
var x 
const btnClick = function () {
const button = document.querySelector("#button")


    x = +prompt("How many squares per side would you like?")
  
    if(isNaN(x)) alert("CHoose a number you silly ")
    else if (x > 100 ) {alert("max number is 100, please select lover number") 
                 throw new Error("too high of a number") }
                       

   return x 


}

const hvr = function (element) {
    let color  = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + color
}




function divNum() {
    let i = 0
    cont.innerHTML = ""
        while (i < x * x){
            newDiv = document.createElement("div")
            newDiv.classList.add("grids")
            newDiv.style.width = (498/x) + "px"
            newDiv.style.height = (498/x) + "px"
            cont.appendChild(newDiv)
        i++
        }

        document.querySelectorAll(".grids").forEach((element) => {
            element.addEventListener("mouseenter", () => {
                hvr(element)
            })
        })

    }
    
    btn.addEventListener("click", () => {
    btnClick()
    divNum()
    })
 

function clear( ) {
    let newDiv = document.querySelectorAll(".grids")
    newDiv.forEach((div) => 
    div.style.backgroundColor = "rgba(228, 221, 214, 0.383)"
    )
}



button.addEventListener("click", clear)
 
 
 
   


