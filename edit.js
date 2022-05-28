
function editDb() {
    let inpBox = document.getElementById("inpBox").value
    let chkBox = document.getElementById("chkBox").checked
    let payload = {
        "title":inpBox,
        "status":chkBox
    }
    const id = localStorage.getItem("taskId")
        fetch(`http://localhost:3000/tasks/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)})
    location.href = "./index.html"

}

function paintEdit() {
    let inpBox = document.getElementById("inpBox")
    let chkBox = document.getElementById("chkBox")
    const id = localStorage.getItem("taskId")
    if (id) {
    fetch(`http://localhost:3000/tasks/${id}`).then(res=>res.json()).then(data=>{
        console.log(data)
        inpBox.value = data.title
        chkBox.checked = data.status
    })
    
}
}

paintEdit()
