
// les variables
var sp, btn_start, btn_stop, t, ms,s , mn, h;

// fonction pour initialiser les variables quand la page se charge

window.onload = function(){
    sp=document.getElementsByTagName('span');
    btn_start=document.getElementById('start');
    btn_reset=document.getElementById('reset');
    
    btn_stop=document.getElementById('stop');
    ms=0,s=0 , mn=0,h=0;
}

// mise en place du compteur 

function update_chrono(){
    
    ms+=1;
    if(ms==10){
        ms=1;
        s+=1;
    }

    if(s==60){
        s=0;
        mn+=1;
    }

    if(mn==60){
        mn=0;
        h+=1;
    }

    // insertion des valeurs dans les spans
    sp[0].innerHTML=h+ "h" ;
    sp[1].innerHTML=mn+ "min" ;
    sp[2].innerHTML=s+ "s" ;
    sp[3].innerHTML=ms+ "ms" ;
}

//  mise en place de la fonction start

function start(){
  
    t=setInterval(update_chrono,100);
   
    btn_start.disabled= true;
  
}

function stop(){
    clearInterval(t);
    btn_start.disabled=false;
}

function reset(){
    
    clearInterval(t);
    btn_start.disabled=false;
    ms=0,s=0 , mn=0,h=0;
    // insertions
    sp[0].innerHTML=h+ "h" ;
    sp[1].innerHTML=mn+ "min" ;
    sp[2].innerHTML=s+ "s" ;
    sp[3].innerHTML=ms+ "ms" ;

}