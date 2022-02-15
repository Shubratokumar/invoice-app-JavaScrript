// event handler with submit button
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

// event handler with add button
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

    // append elements : adoption
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr)

})