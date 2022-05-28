function postTodo() {
    let inpBox = document.getElementById("inpBox").value
    let chkBox = document.getElementById("chkBox").checked
    console.log(inpBox,chkBox)
    let payload = {
        "title":inpBox,
        "status":chkBox
    }
    if (inpBox.length) {
        let res = fetch(`http://localhost:3000/todo`,{
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
    fetch(`http://localhost:3000/todo`).then(res=>res.json()).then(data=>{
        console.log(data)
    })
}
paintPage()