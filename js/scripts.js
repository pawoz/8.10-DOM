var btn = document.getElementsByClassName('button');

for ( var i = 0 ; i < btn.length ; i++ ) {
	alert(btn[i].innerText);	
};

/*
console.log(window);

function zaalertuj() {
    alert('Wyświetlam się jednokrotnie po 2 sekundach.');
}

var opoznioneWywolanie = setTimeout(zaalertuj, 2000);

var opoznioneWywolanie = setTimeout(zaalertuj, 2000);

clearTimeout(opoznioneWywolanie);
*/

/*
function alertuj() {
    alert('Wyświetlam się co dwie sekundy.')
}

var interval = setInterval(alertuj, 2000);

function stop() {
    alert('Minęło 10 sekund. Następująca instrukcja przerywa interwał.');
    clearInterval(interval);
}

setTimeout(stop, 10000);
*/
//console.log(document);
//window.onload = function() {
 // console.log('Strona w pełni załadowana.');
  // reszta skryptu
//};
//console.log(location);
//window.location = 'http://www.kodilla.pl';
//var navigation = document.getElementById('nav');
//console.log(navigation);
/*
var withMenuItemsClass = document.getElementsByClassName('menuItem');

console.log(withMenuItemsClass);

var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);
*/
/*var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);
*/
/*var navigation = document.getElementById('nav');
var newElem = document.createElement('p');

newElem.innerHTML = 'Tekst wewnątrz tagu p, który znajduje się pod zmienną newElem';

var menu = document.getElementById('Menu');

menu.className += ' nowaKlasa';

console.log(menu.className);

navigation.appendChild(newElem);*/