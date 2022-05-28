function postTodo() {
    let inpBox = document.getElementById("inpBox").value
    let chkBox = document.getElementById("chkBox").checked
    console.log(inpBox,chkBox)
    let payload = {
        "title":inpBox,
        "status":chkBox
    }
    if (inpBox.length) {
        fetch(`http://localhost:3000/tasks`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)})
    }
    // console.log(res)
}

function paintPage() {
    let display = document.getElementById("display")
    if (display) {
        fetch(`http://localhost:3000/tasks`).then(res=>res.json()).then(data=>{
            console.log(data)
            data.forEach(element => {
                let parent = document.createElement("div")
                parent.setAttribute("class", "parent")
                let card = document.createElement("div")
                card.setAttribute("class", "card")
                
                card.innerText = element.title
                
                if (element.status === true){
                    card.style.color = "green"
                }else{
                    card.style.color = "red"
                }

                card.addEventListener("click",()=>{
                    localStorage.setItem("taskId",element.id)
                    location.href = "./edit.html"
                })
                let delBut = document.createElement("div")
                delBut.setAttribute("class", "delBut")
                delBut.addEventListener("click",()=>{
                    fetch(`http://localhost:3000/tasks/${element.id}`,{
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                    })
                    .then(response=>response.json())
                    .then(data=>{console.log(data)})
                })
                delBut.innerText = "DELETE"
                parent.append(card,delBut)
                display.append(parent)           
            });     
        })
    }
}
paintPage()
