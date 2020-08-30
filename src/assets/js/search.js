let shown = false 
document.getElementById("search_icon").addEventListener("click", function(){
    
    if(shown == false){
        document.getElementById("search").style.display = "block";
        shown = true; 
    }
    else{
        document.getElementById("search").style.display = "none";
        shown = false; 
    }
  }); 