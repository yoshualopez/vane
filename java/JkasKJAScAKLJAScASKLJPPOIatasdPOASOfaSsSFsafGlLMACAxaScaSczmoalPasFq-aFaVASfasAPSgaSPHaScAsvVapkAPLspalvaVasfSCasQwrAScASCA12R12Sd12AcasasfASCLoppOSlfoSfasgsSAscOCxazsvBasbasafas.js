$(document).ready(function(event){
   $('.but').click(function(event){
       $('.hey').show(200);
       $('.tu').show(5000);
       $('.yes').show(10000);
       $('.vane').show(2000);
   }); 
    
});
/*
var mensaje = "hey tu!", pause="200";
function inicio(){
    var i = 0; var m = mensaje.split('');
    var t = setInterval(function(){
        if(i >= m.length-1)clearInterval(t);
        $('.hey').innerHTML+=m[i];
        i++;
    },pausa);
}
window.onload=inicio;
*/