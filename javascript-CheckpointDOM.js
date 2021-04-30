var itemList = document.getElementById("items");
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e.target.parentElement.parentElement;
            itemList.removeChild(li);
        }
    }
}
var button = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
    var box=document.getElementById('box');
    var total=totalPrice()
    box.innerHTML='<h2>The Total Price : '+total+' TND</h2>'
}
function totalPrice(e){
    var total=0;
    var itemPrice= document.getElementsByClassName('price');
    var itemQuantity=document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i< itemPrice.length; i++) {
        //var item= itemList[i];
        var price= parseFloat(itemPrice[i].textContent);
        var quantity= parseFloat(itemQuantity[i].value);
        if (quantity<0) {quantity=0;itemQuantity[i].value=0;itemQuantity[i].innerContent='0';}
        total= total + (price * quantity);
    }
    return total ;
}

function changeColor(e){
    var like = document.getElementsByTagName('i');
    for (let i = 0; i< like.length; i++) {
        if(i==e) {
        like[i].style.color='red'; like[i].parentElement.style.border='gold';}
    }
}