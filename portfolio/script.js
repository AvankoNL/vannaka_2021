/*Button en lijst roep je aan met const. Aan de button geef je een eventListener zodat die iets kan doen als je erop klikt. Die eventlistener gaat kijken of showMenu al in de classlist zit, en dat zit die niet want die is niet in html aangegeven. Als die er in zit (if), haalt die hem eruit. Als hij er niet in zit (else), dan gooit hij hem erin. 

GEHOLPEN DOOR MAARTEN VEENSTRA*/

const menuButton = document.querySelector('.dropdown');
const menuLijst = document.querySelector('ul:nth-of-type(2)');

menuButton.addEventListener("click", function(){
console.log('check');

if(menuLijst.classList.contains("showMenu")){
    menuLijst.classList.remove("showMenu");
}

else{
menuLijst.classList.add("showMenu");

}

});

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });