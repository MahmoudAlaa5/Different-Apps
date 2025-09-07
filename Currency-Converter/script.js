// Your Api Key
const myApiKey = '';

// Async function to get currencies
async function getCurrencies() {
    try {
        // the website link that you will get data from
        const response = await fetch(``);
        const currencyData = await response.json();
        return currencyData ;
    } catch (error) {
        console.error('Error fetching currencies:', error);
        return null;
    }
}






// Call the function
getCurrencies().then((currency) => {
    if (currency) {

        function optionsDisplay(firstSelector, secondSelector) {
            const currencies = Object.keys(currency.conversion_rates);
            
            if (firstSelector) {
                firstSelector.innerHTML = '<option value="">Select Currency</option>';
                currencies.forEach(currency => {
                    const option = document.createElement('option');
                    option.value = currency;
                    option.textContent = currency;
                    firstSelector.appendChild(option);
                });
            }
            
            if (secondSelector) {
                secondSelector.innerHTML = '<option value="">Select Currency</option>';
                currencies.forEach(currency => {
                    const option = document.createElement('option');
                    option.value = currency;
                    option.textContent = currency;
                    secondSelector.appendChild(option);
                });
            }
        }


        let amount = document.getElementById('amount');
        const firstCurrency = document.getElementById('from-currency-select');
        const secondCurrency = document.getElementById('to-currency-select');
        
        // Populate the selectors with currency options
        optionsDisplay(firstCurrency, secondCurrency);

        let convertBtn = document.querySelector('button');
        convertBtn.addEventListener('click', () => {
            // Remove previous result if it exists
            let existingResult = document.getElementById('result');
            if (existingResult) {
                existingResult.remove();
            }
            
            let firstCurrType = currency.conversion_rates[firstCurrency.value];
            let secondCurrType = currency.conversion_rates[secondCurrency.value];
            
            if (amount.value && firstCurrency.value && secondCurrency.value) {
                let result = amount.value * (secondCurrType / firstCurrType);
                
                // Create new result div
                let resultDiv = document.createElement('div');
                resultDiv.id = 'result';
                resultDiv.classList.add('result');
                convertBtn.parentNode.insertBefore(resultDiv, convertBtn.nextSibling);
                
                resultDiv.innerHTML = `${amount.value} ${firstCurrency.value} = ${result.toFixed(2)} ${secondCurrency.value}`;
                resultDiv.classList.add('show');
            } else {
                alert('Please fill in all fields');
            }
        })
    }

    
});
