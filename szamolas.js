function Szamolas(){
    var aoldal = document.getElementById("a_oldal").value;
    var boldal = document.getElementById("b_oldal").value;
    var coldal = document.getElementById("c_oldal").value;

    if (aoldal == 0 && boldal == 0 && coldal == 0)
    {
        window.alert("írj be adatokat!");
    }
    else if (aoldal == 0 && boldal == 0 || boldal == 0 && coldal == 0 || aoldal == 0 && coldal == 0)
    {
        window.alert("Nincs elég adat!")
    }
    else if (aoldal == 0)
    {
        var a = Math.sqrt(Math.pow(boldal, 2) + Math.pow(coldal, 2));
        document.getElementById("kiiras").innerHTML = "Az 'a' oldal hossza: " + a;
    }
    else if (boldal == 0)
    {
        if (coldal >= aoldal)
        {
            window.alert("Hibás bemenet!");
        }
        else
        {
            var b = Math.sqrt(Math.pow(aoldal, 2) - Math.pow(coldal, 2));
            document.getElementById("kiiras").innerHTML = "Az 'b' oldal hossza: " + b;
        }
    }
    else
    {
        if (boldal >= aoldal)
        {
            window.alert("Hibás bemenet!");
        }
        else
        {
            var c = Math.sqrt(Math.pow(aoldal, 2) - Math.pow(boldal, 2));
            document.getElementById("kiiras").innerHTML = "Az 'c' oldal hossza: " + c;
        }
    }
}
