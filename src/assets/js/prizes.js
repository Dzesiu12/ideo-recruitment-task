let prizes = false;
const menu = document.getElementById('prizes');
const prizesMenu =  document.getElementById('prizes_menu');
const hiddenImg = document.getElementById('hidden_img');

menu.addEventListener('click', function() {
    if (prizes === false) {
        prizesMenu.style.display = 'block';
        hiddenImg.style.transform = 'rotate(-90deg)';
        prizes = true;
    } else {
        prizesMenu.style.display = 'none';
        hiddenImg.style.transform = 'rotate(0deg)';
        prizes = false; 
    }
  }); 