function calcular()
{
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;

    let r = (b*h);

    document.getElementById("result").innerHTML = r;
}