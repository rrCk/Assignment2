function reverseString() {
    const inputString = document.getElementById("inputString").value;
    let reverse ="";
    for(i=inputString.length-1;i>=0;i--)
    {
        reverse = reverse + inputString[i];
        
    }
    console.log(reverse);
    document.getElementById("result1").innerText = "Reversed String: " + reverse;
}

function pallindrome() {
    const inputString = document.getElementById("pallindromeinput").value;
    let reverse ="";
    for(i=inputString.length-1;i>=0;i--)
    {
        reverse = reverse + inputString[i];
        
    }
    if(reverse == inputString)
    {
        document.getElementById("result2").innerText = "Pallindrome";
    }
    else
    {
        document.getElementById("result2").innerText = "Not a Pallindrome";
    }
    
}

function calculateTip() {

    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tip = parseFloat(document.getElementById("tip").value);        
    const tipAmount = (tip / 100) * subtotal;
    const total = subtotal + tipAmount;

    document.getElementById("result3").textContent = `Total Amount including tip: $${total.toFixed(2)}`;
    
    
}
