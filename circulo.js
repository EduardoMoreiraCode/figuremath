function calcular()
{
    let x = document.getElementById("raio").value;
    let r = (x*x)*3.14;
    document.getElementById("result").innerHTML = r;
}