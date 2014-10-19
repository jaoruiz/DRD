/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ventana(nombre,ancho,largo)
{    
  $(nombre).dialog({
    width: ancho,  
    height: largo,
    show: "scale",
    hide: "scale", 
    resizable: "false", 
    position: "center",
    modal: "true"
  });
}
  

function iniciosesion(){
    ventana("#iniciosesion",400,500);
}