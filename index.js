function currentTime()
{
    
    time = new Date();
    let sechands = time.getSeconds();
    let minhands = time.getMinutes();
    let hrhands = time.getHours();

    var digi = document.getElementById('digi');
    digi.innerHTML = hrhands+":"+minhands+":"+sechands;

    var obj= document.getElementById('seconds');
    sechands = 6*sechands;
    obj.style.transform = 'rotate('+sechands+'deg)';

    var minobj = document.getElementById('minutes');
    minhands = 6*minhands;
    minobj.style.transform = 'rotate('+minhands+'deg)';

    var hrobj = document.getElementById('hour');
    hrhands = 30*hrhands+(minhands/12);
    hrobj.style.transform = 'rotate('+hrhands+'deg)';

    

}

setInterval(currentTime,1000);