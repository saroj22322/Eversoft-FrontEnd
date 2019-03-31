
function action(){
    var element = document.querySelector("#smallbox");
    var margin = element.style.marginLeft;
    
    if(margin == "100px" ){
        document.getElementById("smallbox").style.marginLeft = "0px";
    }
    else
    {
        document.getElementById("smallbox").style.marginLeft = "100px";
    }
}