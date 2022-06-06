let user = JSON.parse(localStorage.getItem("user"))
let amountDiv = document.getElementById("balance")
if(user!=null){
    amountDiv.innerText=user.amount
}
console.log(user)
    class User{
        constructor(name,email,address,amount){
            this.name = name
            this.email = email
            this.address = address
            this.amount = amount
        }
        addUser(){
            let user = {
                name :this.name,
                email:this.email,
                address:this.address,
                amount:+this.amount
            }
            localStorage.setItem("user",JSON.stringify(user))
            document.getElementById("balance").innerText=this.amount
             document.getElementById("name").value=null
            document.getElementById("email").value=null
             document.getElementById("address").value=null

            document.getElementById("amount").value=null
        }
    }

let newUser = document.getElementById("user")
newUser.addEventListener("submit",()=>{
    event.preventDefault()

    let Name = document.getElementById("name")
let email = document.getElementById("email")
let address = document.getElementById("address")
let amount = document.getElementById("amount")
    let user = new User(Name.value,email.value,address.value,amount.value)
    user.addUser()
})


