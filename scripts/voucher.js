let user = JSON.parse(localStorage.getItem("user"))
let amountDiv = document.getElementById("wallet_balance")
amountDiv.innerText=user.amount

async function getData(){
let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

   try{
    let res = await fetch(url)
    let data = await res.json()
    append(data[0].vouchers)
   }catch(err){
       console.log(err)
   }
}
getData()
function append(data){
    console.log(data)
    data.forEach(({name,image,price})=>{
        let div = document.createElement("div")
        div.className = "voucher"
        let img = document.createElement("img")
        
        img.src = image
        let Name = document.createElement("h3")
        Name.innerText = name
        let Price = document.createElement("h3")
        Price.innerText=price
        let button = document.createElement("button")
        button.className = "buy_voucher"
        button.innerHTML = "Buy"
        let data = {name,image,price}
        button.onclick=()=>{
            purchase(data)
        }
        div.append(img,Name,Price,button)
        document.getElementById("voucher_list").append(div)
    })
}
function purchase(d){
if(user.amount>=d.price){
alert("Hurray! purchase successful")
user.amount = user.amount-d.price
let amountDiv = document.getElementById("wallet_balance")
amountDiv.innerText=user.amount
localStorage.setItem("user",JSON.stringify(user))
let purchaseItems = JSON.parse(localStorage.getItem("purchase"))||[]
purchaseItems.push(d)
localStorage.setItem("purchase",JSON.stringify(purchaseItems))
}
else{
    alert("Sorry! insufficient balance")
}
}