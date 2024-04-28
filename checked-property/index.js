

const myCheckbox = document.getElementById('myCheckbox')
const visaBtn = document.getElementById('visaBtn')
const masterCardBtn = document.getElementById('masterCardBtn')
const payPalBtn = document.getElementById('payPalBtn')
const mySubmit = document.getElementById('mySubmit')
const subResult = document.getElementById('subResult')
const paymentResult = document.getElementById('paymentResult')

mySubmit.onclick = () => {

    if (myCheckbox.checked){
          subResult.textContent = 'You have subscribed'
    }
    else {
        subResult.textContent = 'You are not subscribed'
    }

    if (visaBtn.checked){
        let payment = 'Visa'
        paymentResult.textContent = `You are paying with ${payment}`
    }

    else if (masterCardBtn.checked){
        let payment = 'MasterCard'
        paymentResult.textContent = `You are paying with ${payment}`
    }
    else if (payPalBtn.checked) {
        let payment = 'PayPal'
        paymentResult.textContent = `You are paying with ${payment}`
    }
    else {
        paymentResult.textContent = 'You must select a payment'
    }
}