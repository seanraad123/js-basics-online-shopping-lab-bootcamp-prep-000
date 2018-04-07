var cart = [];

 function p(value){
    console.log(value);
 }

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randPrice = Math.floor(Math.random() * 100);
 var items = {itemName: item,itemPrice:randPrice}
 cart.push(items)
 return (`${item} has been added to your cart.`)
}


addToCart("Carrots")
addToCart("Blueberries")
addToCart("Pies")


function viewCart() {
  if (cart.length === 0 ){
    return ("Your shopping cart is empty.")
    
  }else if(cart.length === 1){
    var str = "In your cart, you have "
    for (var i of cart){
       str +=(`${i['itemName']} at $${i['itemPrice']}.`)
    }
    return str 
    
    //2 or more items
  }else if(cart.length === 2){
    str = "In your cart, you have "
    for (i of cart){
       str +=(`${i['itemName']} at $${i['itemPrice']}, and `)
    }
    str = str.slice(0, -6);
    str += '.'
    return str
  
  
  // 3 or more items
  }else if(cart.length >= 3){
      str = "In your cart, you have "
      var last_element = cart[cart.length - 1];
      for (i of cart){
        if (i === last_element){
          str += ('and ')
         }
        str +=(`${i['itemName']} at $${i['itemPrice']}, `)
      }
      str = str.slice(0, -2);
      str += '.'
      return str
    }
}

function total() {
  var sum = 0
  for (var i of cart){
    sum += parseFloat( i['itemPrice'] );
  }
   return (sum)
}


function removeFromCart(item) {
  for (var i of cart){
    if(item in cart['itemName']){
      for(i = 0; i < cart.length; i++) {
        if(cart[i].itemName === item) {
          cart.splice(i, 1);
          p(cart)
        }
      }
    }else{
       p(("That item is not in your cart."))
    }
  }
}
p(removeFromCart("Blueberries"))

function placeOrder(cardNumber) {
  // write your code here
}
