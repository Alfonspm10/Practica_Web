/*CONTADOR
window.onload = function()
{
    var contador = 0
    var el = document.getElementById("add-text")
    el.onclick = function()
    {
        console.log("cucucucucu")
        contador ++
        console.log(contador)
    }
}
*/

window.onload = function()
{
    var btn = document.getElementById("add-text")
    var areaTexto = document.getElementById("area-texto")
    var currentUl = document.getElementById("lista-interactiva")

    btn.onclick = function()
    {
        var nuevoTexto = areaTexto.value;
        console.log(nuevoTexto)
    }
}