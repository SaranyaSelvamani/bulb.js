function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="OFF BULB.jpg";

    }
    else
    {
        img.src="ON BULB.jpg";
    }
}