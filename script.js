document.getElementById("currencyForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let amt = parseFloat(document.getElementById("amount").value);
    let curr = document.getElementById("currency").value;
    let curr2 = document.getElementById("currency2").value;
    
   
    let convertedAmt = convertCurrency(amt, curr, curr2);
    
    
    document.getElementById("amount2").value = convertedAmt;
   
});

function clearForm() {
    // Clear the entered value
    document.getElementById("amount").value = '';
    
    // Clear the converted amount
    document.getElementById("amount2").value = '';
}



function convertCurrency(amount, fromCurrency, toCurrency) {
   
  
    if(fromCurrency==="USD" && toCurrency==="INR") return amount * 83.9305; 
    if(fromCurrency==="USD" && toCurrency==="EUR") return amount * 0.92494; 
    if(fromCurrency==="USD" && toCurrency==="AED") return amount * 3.67; 
    if(fromCurrency==="USD" && toCurrency==="GBP") return amount * 0.79211; 
    if(fromCurrency==="USD" && toCurrency==="CAD") return amount * 1.35057; 
    if(fromCurrency==="USD" && toCurrency==="CNY") return amount * 7.1896; 
    if(fromCurrency==="USD" && toCurrency==="JPY") return amount * 150.28183; 
    if(fromCurrency==="USD" && toCurrency==="MXN") return amount * 8.80659; 
    if(fromCurrency==="USD" && toCurrency==="RUB") return amount * 92.3361;

    if(fromCurrency==="EUR" && toCurrency==="USD") return amount * 1.08116; 
    if(fromCurrency==="EUR" && toCurrency==="INR") return amount * 89.6609; 
    if(fromCurrency==="EUR" && toCurrency==="AED") return amount * 3.97; 
    if(fromCurrency==="EUR" && toCurrency==="GBP") return amount * 0.85639; 
    if(fromCurrency==="EUR" && toCurrency==="CAD") return amount * 1.46018; 
    if(fromCurrency==="EUR" && toCurrency==="CNY") return amount * 7.77309; 
    if(fromCurrency==="EUR" && toCurrency==="JPY") return amount * 162.47826;
    if(fromCurrency==="EUR" && toCurrency==="MXN") return amount * 18.44962; 
    if(fromCurrency==="EUR" && toCurrency==="RUB") return amount * 99.82983; 

    if (fromCurrency === "INR" && toCurrency === "USD") return amount * 0.01206; 
    if (fromCurrency === "INR" && toCurrency === "EUR") return amount * 0.01115 ; 
    if (fromCurrency === "INR" && toCurrency === "AED") return amount * 0.04429; 
    if (fromCurrency === "INR" && toCurrency === "GBP") return amount * 0.00955; 
    if (fromCurrency === "INR" && toCurrency === "CAD") return amount * 0.01629;
    if (fromCurrency === "INR" && toCurrency === "CNY") return amount * 0.08669; 
    if (fromCurrency === "INR" && toCurrency === "JPY") return amount * 1.81214; 
    if (fromCurrency === "INR" && toCurrency === "MXN") return amount * 0.20577; 
    if (fromCurrency === "INR" && toCurrency === "RUB") return amount * 1.11342; 

    if (fromCurrency === "GBP" && toCurrency === "USD") return amount * 1.26245; 
    if (fromCurrency === "GBP" && toCurrency === "EUR") return amount * 1.16769; 
    if (fromCurrency === "GBP" && toCurrency === "AED") return amount * 4.63699;
    if (fromCurrency === "GBP" && toCurrency === "INR") return amount * 104.69582; 
    if (fromCurrency === "GBP" && toCurrency === "CAD") return amount * 1.70503;
    if (fromCurrency === "GBP" && toCurrency === "CNY") return amount * 9.07653; 
    if (fromCurrency === "GBP" && toCurrency === "JPY") return amount * 189.72368; 
    if (fromCurrency === "GBP" && toCurrency === "MXN") return amount * 21.54337; 
    if (fromCurrency === "GBP" && toCurrency === "RUB") return amount * 116.56995; 

    if (fromCurrency === "CAD" && toCurrency === "USD") return amount * 0.74043;
    if (fromCurrency === "CAD" && toCurrency === "EUR") return amount * 0.68485;
    if (fromCurrency === "CAD" && toCurrency === "AED") return amount * 2.71959;
    if (fromCurrency === "CAD" && toCurrency === "GBP") return amount * 0.5865;
    if (fromCurrency === "CAD" && toCurrency === "INR") return amount * 61.40412;
    if (fromCurrency === "CAD" && toCurrency === "CNY") return amount * 5.32339;
    if (fromCurrency === "CAD" && toCurrency === "JPY") return amount * 111.27298;
    if (fromCurrency === "CAD" && toCurrency === "MXN") return amount * 12.63519;
    if (fromCurrency === "CAD" && toCurrency === "RUB") return amount * 68.3683;

    if (fromCurrency === "CNY" && toCurrency === "USD") return amount * 0.13909;
    if (fromCurrency === "CNY" && toCurrency === "EUR") return amount * 0.12865;
    if (fromCurrency === "CNY" && toCurrency === "AED") return amount * 0.51088;
    if (fromCurrency === "CNY" && toCurrency === "GBP") return amount * 0.11017;
    if (fromCurrency === "CNY" && toCurrency === "INR") return amount * 11.53479 ;
    if (fromCurrency === "CNY" && toCurrency === "CAD") return amount * 0.18785;
    if (fromCurrency === "CNY" && toCurrency === "JPY") return amount * 20.90267;
    if (fromCurrency === "CNY" && toCurrency === "MXN") return amount * 2.37353;
    if (fromCurrency === "CNY" && toCurrency === "RUB") return amount * 12.84301;

    if (fromCurrency === "AED" && toCurrency === "USD") return amount * 0.27226;
    if (fromCurrency === "AED" && toCurrency === "EUR") return amount * 0.25139;
    if (fromCurrency === "AED" && toCurrency === "GBP") return amount * 0.2154;
    if (fromCurrency === "AED" && toCurrency === "CAD") return amount * 0.36713;
    if (fromCurrency === "AED" && toCurrency === "CNY") return amount * 1.95853;
    if (fromCurrency === "AED" && toCurrency === "JPY") return amount * 40.91872;
    if (fromCurrency === "AED" && toCurrency === "MXN") return amount * 4.64121;
    if (fromCurrency === "AED" && toCurrency === "RUB") return amount * 25.13984;

    if (fromCurrency === "JPY" && toCurrency === "USD") return amount * 0.00665;
    if (fromCurrency === "JPY" && toCurrency === "EUR") return amount * 0.00614;
    if (fromCurrency === "JPY" && toCurrency === "AED") return amount * 0.02444;
    if (fromCurrency === "JPY" && toCurrency === "GBP") return amount * 0.00526;
    if (fromCurrency === "JPY" && toCurrency === "INR") return amount * 0.55168;
    if (fromCurrency === "JPY" && toCurrency === "CAD") return amount * 0.00897;
    if (fromCurrency === "JPY" && toCurrency === "CNY") return amount * 0.04786;
    if (fromCurrency === "JPY" && toCurrency === "MXN") return amount * 0.11343;
    if (fromCurrency === "JPY" && toCurrency === "RUB") return amount * 0.61438;

    if (fromCurrency === "MXN" && toCurrency === "USD") return amount * 0.05866;
    if (fromCurrency === "MXN" && toCurrency === "EUR") return amount * 0.05416;
    if (fromCurrency === "MXN" && toCurrency === "AED") return amount * 0.21546;
    if (fromCurrency === "MXN" && toCurrency === "GBP") return amount * 0.04641;
    if (fromCurrency === "MXN" && toCurrency === "INR") return amount * 4.86381;
    if (fromCurrency === "MXN" && toCurrency === "CAD") return amount * 0.0791;
    if (fromCurrency === "MXN" && toCurrency === "CNY") return amount * 0.42199;
    if (fromCurrency === "MXN" && toCurrency === "JPY") return amount *  8.81639;
    if (fromCurrency === "MXN" && toCurrency === "RUB") return amount * 5.41666;

    if (fromCurrency === "RUB" && toCurrency === "USD") return amount * 0.01083;
    if (fromCurrency === "RUB" && toCurrency === "EUR") return amount * 0.01;
    if (fromCurrency === "RUB" && toCurrency === "AED") return amount * 0.03978;
    if (fromCurrency === "RUB" && toCurrency === "GBP") return amount * 0.00857;
    if (fromCurrency === "RUB" && toCurrency === "INR") return amount * 0.89794;
    if (fromCurrency === "RUB" && toCurrency === "CAD") return amount * 0.0146;
    if (fromCurrency === "RUB" && toCurrency === "CNY") return amount * 0.07791;
    if (fromCurrency === "RUB" && toCurrency === "JPY") return amount * 1.62764;
    if (fromCurrency === "RUB" && toCurrency === "MXN") return amount * 0.18462;
    else {
        
        return "Cannot convert";
    }
}