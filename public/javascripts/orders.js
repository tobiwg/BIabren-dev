function newOrder(){
    $('#newOrder').show();
}
function showOrder(){
    $('#pedidos').hide();
    $('#orden').show();
    
}

function saveOrder(){
    
}
function deleteOrder(){
    
}
function updateOrder(){
    
}
function newItem(){
    $('#items').append("<tr><td>1</td><td> <input type='text' class='form-control ' id='articulo'  placeholder='Articulo'></td><td>887766</td><td>45m</td><td> <input type='number' class='form-control  ' id='metros'  placeholder='metros'></td><td>250$</td></tr>");
}