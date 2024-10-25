function fnajax(url, funcao) {
    let pedido = new XMLHttpRequest();

    pedido.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            funcao(pedido);
        }
    }

    pedido.open('GET', url, true);
    pedido.send();

}

//Alteração da caixa1
function cmd1(p){
    document.getElementById('caixa1').innerHTML = p.responseText;
}
//Alteração da caixa2
function cmd2(p){
    document.getElementById('caixa2').innerHTML = p.responseText;
}
//Alteração da caixa3
function cmd3(p){
    document.getElementById('caixa3').innerHTML = p.responseText;
}