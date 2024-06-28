
const Cart=()=>{
    cartButtons.forEach(button => {

        const price = parseFloat(button.getAttribute('data-price'))
        const item = button.getAttribute('data-item')
        const id = parseFloat(button.getAttribute('data-id'))
        button.addEventListener('click', ()=>{
            let qty;
            for (let i = 0; i < {props}.length; i++) {
                {props}[i].id == id ? qty = {props}[i].qty : null
            }
            addItems(price, qty, item, id)
        })
    })
    
    const addItems=(price, qty, item, id)=>{
        
        let itemObj = {
            id,
            item,
            qty,
            price,
            itemTotal: qty * price
        }
        
        receiptArray = [...receiptArray, itemObj]
        makeReceipt(itemObj, receipt)
    
        subtotal+=price
        cartSubtotal.innerText = subtotal.toFixed(2)
    }
    
    const btnSubtract = document.querySelectorAll('.btn-subtract')
    const btnAdd = document.querySelectorAll('.btn-add')
    
    btnSubtract.forEach(button => {
        button.addEventListener('click', ()=> {
            
            // const btnQty = parseFloat(button.getAttribute('data-qty'))
            const btnId = parseFloat(button.getAttribute('data-id'))
            const spanQty = document.getElementById(`quantity${btnId}`)
            
            for (let i = 0; i < menuItems.length; i++) {
                if(menuItems[i].id == btnId && menuItems[i].qty > 0) {
                    menuItems[i].qty-=1
                    spanQty.innerText = menuItems[i].qty
                }
            }
    
            
        })
    })
    
    btnAdd.forEach(button => {
        button.addEventListener('click', ()=> {
    
            // const btnQty = parseFloat(button.getAttribute('data-qty'))
            const btnId = parseFloat(button.getAttribute('data-id'))
            const spanQty = document.getElementById(`quantity${btnId}`)
    
            for (let i = 0; i < menuItems.length; i++) {
                if(menuItems[i].id == btnId 
                    && menuItems[i].qty < 20 
                    && cartButtons[i].dataset.id == btnId) {
                    menuItems[i].qty+=1
                    cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                    spanQty.innerText = menuItems[i].qty
                }
            }
        })
    })
}

export default Cart