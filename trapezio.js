function calcular()
{
    let bMaior = document.getElementById("bmaior").value;
    let bmenor = document.getElementById("bmenor").value;
    let h = document.getElementById("altura").value;

    let r = ((parseFloat(bMaior)+parseFloat(bmenor))/2)*h;

    document.getElementById("result").innerHTML = r;
}
