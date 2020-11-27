



var cas = new Date ('March 7, 2023 00:00.00').getTime();
function ZemanKonec(){
    var tajm = new Date().getTime()
    cn = cas - tajm;

    var sekundy = 1000;
    var minuty = sekundy * 60;
    var hodiny = minuty * 60;
    var dny = hodiny * 24;
    var roky = dny * 365;

    var r = Math.floor(cn / (roky))
    var d = Math.floor((cn % (roky)) / (dny)) ;
    var h = Math.floor((cn % (dny)) / (hodiny)) ;
    var m = Math.floor((cn % (hodiny)) / (minuty));
    var s = Math.floor((cn % (minuty)) / sekundy);

    

    document.getElementById('Roky').innerText = r; 
    document.getElementById('Dny').innerText = d; 
    document.getElementById('Hodiny').innerText = h;
    document.getElementById('Minuty').innerText = m;
    document.getElementById('Sekundy').innerText = s;



}
setInterval(function(){ZemanKonec();},1000)  