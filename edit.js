
function editDb() {
    let inpBox = document.getElementById("inpBox").value
    let chkBox = document.getElementById("chkBox").checked
    let payload = {
        "title":inpBox,
        "status":chkBox
    }
        fetch(`http://localhost:3000/tasks`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)})

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
