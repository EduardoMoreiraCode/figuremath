function calcular()
{
    let dMaior = document.getElementById("dmaior").value;
    let diagmenor = document.getElementById("dmenor").value;

    let r = (dMaior*diagmenor)/2;

    document.getElementById("result").innerHTML = r;
}