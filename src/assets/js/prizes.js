let prizes = false;
let menu = document.getElementById("prizes")
menu.addEventListener("click", function(){
    
    if(prizes == false){
        document.getElementById("prizes_menu").style.display = "block";
        document.getElementById("hidden_img").style.transform = "rotate(-90deg)"
        prizes = true; 
    }
    else{
        document.getElementById("prizes_menu").style.display = "none";
        document.getElementById("hidden_img").style.transform = "rotate(0deg)"
        prizes = false; 
    }
  }); 