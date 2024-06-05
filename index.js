fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)
.then(function(res){
    return res.json()
})
.then (function(res){
    console.log(res)
    displayData(res.data)
})
function displayData(data){
    data.forEach(function(user){
        let container = document.getElementById("container")
        let card = document.createElement("div")

        let country = document.createElement("h4")
        country.innerText = user.country

        let id = document.createElement("h4")
        id.innerText = user.id

        let rank = document.createElement("h4")
        rank.innerText = user.rank

        let population = document.createElement("h4")
        population.innerText = user.population

        card.append(country,id,rank,population)
        container.append(card)
        })
}