var time = new Date();
var timeOut = 20//time.getHours()
console.log(timeOut)
uname = window.prompt('enter your name>>')


    
    if (timeOut >=4 && timeOut <12) {
        document.getElementById('text').innerHTML = 'good morning ' + uname;

        var img = document.createElement("img");
        img.src = "morning.jpg";
        var src = document.getElementById("timeImg");
        src.appendChild(img);
    }

    else if(timeOut >12 && timeOut <16){
        document.getElementById('text').innerHTML = 'Good afternoon ' + uname;

        var img = document.createElement("img");
        img.src = "noon.jpg";
        var src = document.getElementById("timeImg");
        src.appendChild(img);
    }

    else if (timeOut >16 && timeOut <19){
        document.getElementById('text').innerHTML = 'Good evening ' + uname;

        var img = document.createElement("img");
        img.src = "twilight.jpg";
        var src = document.getElementById("timeImg");
        src.appendChild(img);
    }

    else{
        document.getElementById('text').innerHTML ='Good night ' + uname;

        var img = document.createElement("img");
        img.src = "night.jpg";
        var src = document.getElementById("timeImg");
        src.appendChild(img);

}


//freecodecamp