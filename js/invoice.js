// event handler added to  submit button
document.getElementById('detail-submit-btn').addEventListener('click', function(){
    // access buyers details 
    const buyerDetails = document.getElementById('buyer-details-input');
    // access buyer info
    const buyerInfo = document.getElementById('buyer-info');
    // assign buyer details = invoice to
    buyerInfo.innerText = buyerDetails.value;
    // clean input field
    buyerDetails.value = '';
})

// event handler added to add button
document.getElementById('add-details-btn').addEventListener('click', function(){
    // access input field
    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    // creating element 
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    // assign input values
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = Number(itemPrice.value) * Number(itemQuantity.value);


    // add or generate class dynamically
    td3.classList.add('items-total');
    // append elements : adoption
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);  //<td class="items-total">820</td>
    infoTable.appendChild(tr);

    // call total calculation
    totalCalculation();

    // clean input field
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';

})

// total calculation with function
function totalCalculation(){
    // call subTotal function
    const subTotal = calculationSubTotal();
    const subTotalToDisplay = document.getElementById('sub-total');
    // asssign subTotal value to subtotal 
    subTotalToDisplay.innerText = subTotal;
    // tax calculation
    const tax = subTotal * .2;
    const taxToDisplay = document.getElementById('tax');
    // assign tax value
    taxToDisplay.innerText = tax.toFixed(2);
    // grand total calculation
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseFloat(subTotalToDisplay.innerText) + parseFloat(taxToDisplay.innerText);
    // total amount
    const totalAmount = document.getElementById('grand-total-2');
    totalAmount.innerText = grandTotal.innerText;
}

// sub-total calculation with function
function calculationSubTotal(){
    let subTotal = 0;
    const cost = document.getElementsByClassName('items-total');
    for(let i = 0; i < cost.length; i++){
        const element = cost[i]; //<td class="items-total">820</td>
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}
