const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/jonathanmeninezt")
    xhr.send(null)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4){
            const res = JSON.parse(xhr.responseText)
            console.log(res)
        }
    }
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)

