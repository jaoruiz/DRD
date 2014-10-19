/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function changeImgimp(img){
document.getElementById("imgimp").a = img;
}
function changebackImgimp(img){
document.getElementById("imgimp").src= img;
}
function focusbusc()
{
   document.getElementById("txtbusc").value= ""; 
}
function lostfocusbusc()
{
   document.getElementById("txtbusc").value= "Ingrese el nombre o apellido de un usuario"; 
}