function calcular()
{
    let bMaior = document.getElementById("bmaior").value;
    let bmenor = document.getElementById("bmenor").value;
    let h = document.getElementById("altura").value;

    let r = [(bMaior+bmenor)/2]*h;

    document.getElementById("result").innerHTML = r;
}