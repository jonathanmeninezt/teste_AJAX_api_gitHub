const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/jonathanmeninezt")
    xhr.send(null)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4){
            console.log(xhr.responseText)
        }
    }
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)

