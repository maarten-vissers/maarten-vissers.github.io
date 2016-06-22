var driehoek = function()
{

}
driehoek.prototype = {
 rijen: new Array(),
 berekenen: function(rijNummer)
 {
   this.rijen = new Array();
   for(var i = 0; i < rijNummer; i++ ) {
     var r = i-1;
     var n = new Array();
     for(var d = 0; d < i; d++) {
       if(d == 0 || d+1 == i) {
         n.push(1);
       } else {
         n.push(this.rijen[r][d-1]+this.rijen[r][d]);
       }
     }
     this.rijen.push(n);
   }

 },
 verwerken: function() {
     var box1 = document.getElementById('box1');
     
   box1.innerHTML = '';
   box1.style.width = this.rijen.length * 28 + 'px';
  
   for(var o = 0; o < this.rijen.length; o++) {
       var tbl = document.createElement('table');
       
     box1.appendChild(tbl);
     var rij = tbl.insertRow(-1);
     tbl.id = "driehoek";
     rij.className = 'rij';
     for(var i = 0; i < this.rijen[o].length; i++) {
       var getal = rij.insertCell(-1)
       var s = new String(this.rijen[o][i]);
       getal.innerHTML = s.substring(0,3);
       getal.title = this.rijen[o][i];
       var classes = new Array();
       classes.push('box1');
       classes.push(this.rijen[o][i]%2 == 0);
       getal.className = classes.join(' ');
     }
   }
 }
}
var p;
window.onload = function() {
 p = new driehoek();
 p.berekenen(0);
 p.verwerken();
}
function setP() {
 var n = +document.getElementById('rij').value;
 p.berekenen(n);
 p.verwerken();
 TweenMax.staggerFrom(".box1", 0.5, { rotation: 180, y:100},0.4);
}
