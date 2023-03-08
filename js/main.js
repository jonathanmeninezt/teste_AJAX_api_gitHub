const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/jonathanmeninezt")
    xhr.send(null)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4){
            const res = JSON.parse(xhr.responseText)
            
            const avatarUrl = res.avatar_url
            const name = res.name
            const bio = res.bio
            const followers = res.followers
            const location = res.location

            const avatarEl = document.createElement("img")
            avatarEl.setAttribute("width", "128")
            avatarEl.setAttribute("src", avatarUrl)
           
            const nameEl = document.createElement("h1")
            nameEl.innerText = name

            const bioEl = document.createElement("h2")
            bioEl.innerText = bio
            
            const followersEl = document.createElement("p")
            followersEl.innerText = followers
            
            const locationEl = document.createElement("span")
            locationEl.innerText = location
            console.log(locationEl)


        }
    }
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)

