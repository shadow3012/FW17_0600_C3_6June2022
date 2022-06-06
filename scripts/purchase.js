let user = JSON.parse(localStorage.getItem("user"))
let amountDiv = document.getElementById("wallet_balance")
amountDiv.innerText=user.amount

let purchase = JSON.parse(localStorage.getItem("purchase"))||[]
purchase.forEach(({name,image,price})=>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = image
    let Name = document.createElement("h3")
    let Price = document.createElement("h3")
    Name.innerText = name
    Price.innerText=price
    div.append(img,Name,Price)
    document.getElementById("purchased_vouchers").append(div)
})