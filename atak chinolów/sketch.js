

//NAJLEPSZA GRA NA ŚWIECIE


let f22;
let cutscenka;
let cutscenka2;
let niebo;
let usa;
let zycia = 2;
let poz_x = 60;  
let poz_y = 80;
let speed_p = 4;
let gra= 0;
let muzyka;
let ballon;
let listaballon = [];
let listanowa = [];
let niemozesz = false;
let cutscen = false;
let poczatek = 60;
let balony;
let punkty = 0;
let defult;

function preload(){
  
  cutscenka = createVideo('jeden.MOV');
  cutscenka.size(500,400);
  cutscenka.position(0,0);
  cutscenka.hide();
  
  cutscenka2 = createVideo('dwa.mov');
  cutscenka2.size(500,400);
  cutscenka2.position(0,0);
  cutscenka2.hide();
  
  cutscenka3 = createVideo('meganigga.mp4');
  cutscenka3.size(500,400);
  cutscenka3.position(0,0);
  cutscenka3.hide();
  
}

function setup() {
  createCanvas(500, 400);
  f22 = loadImage('f222.png');
  niebo = loadImage('USA.jpg');
  usa = loadImage("usa2.jpg");
  muzyka= loadSound("muzyka4.mp3");
  defult = loadSound("def.mp3")
  ballon= loadImage("ballon.png");
  ballon_koniec = loadImage("nigger.png");
}



function draw() {   
  
  background(niebo);
  image(f22,poz_x-25, poz_y-25, 50, 50);
  fill("black");
  textSize(14);
  
  
  
  if(gra == 1){
    
    listanowa = [];
  
  for(let x in listaballon){
    if(listaballon[x]!== undefined){
      listaballon[x][0]--;
      image(ballon, listaballon[x][0]-50, listaballon[x][1]-40, 100, 80);
      if(listaballon[x][0]<-50){
        listanowa.push(x);
        zycia--;
        if(zycia == 0){
          gra = 2;
        }  
      }
      if(dist(listaballon[x][0],listaballon[x][1],poz_x,poz_y)<50){
        listanowa.push(x);
        punkty++;
        if(punkty>25){
          gra = 3;
        }
      }
    }
  }
  
  for(let x of listanowa){
    listaballon.splice(x,1)
  }
    
    if(poczatek>0){
      poczatek--;
      fill("rgba(255,140,0,"+poczatek/100+")");
      rect(-25,-25,width+50,width+50);
    }
    
    if(keyIsPressed && key == " "){
      poz_y= poz_y-speed_p;
    }else{
      poz_y=poz_y+speed_p*0.7;
    }
     
    if(poz_y > 525){
      poz_y = -25;
    }
    if(poz_y < -25){
      poz_y = 520;
     
    } 
    fill(255);
    textSize(25);
    stroke(0);
    strokeWeight(5);
    text("pozostałe wieże: " + zycia,width/2,50);
  }
  
  if(gra == 3){
    if(niemozesz == false){
    clearInterval(balony);
    niemozesz = true;
    cutscen = true;
    cutscenka3.show();
    setTimeout(() =>{cutscenka3.hide();cutscen = false;},10010);
    muzyka.stop();
    }
    
    if(!defult.isPlaying()){
      defult.play()
    }
    
    fill(0);
    rect(0,0,width,height)
    if(cutscen == true){
    cutscenka3.play();
    }else{
    image(ballon_koniec,0,0,width,height);
    textSize(25);
    textAlign(CENTER,TOP);
    fill(255);
    stroke("black");
    textWrap(WORD);
      
    text("Wygrałeś!",width/2-(width-150)/2,50,width-150);
      textSize(18);
    text("Odwróciłeś chinskie balony na kanade a chinczyką wywaliłeś  atomówke na ryj, gg ez",width/2-(width-150)/2,100,width-150);
    textWrap(CHAR);
    text("中國的氣球撞上了你的塔。結果，越來越多的中國氣球襲擊美國，導致了文明的隕落。撞擊一年後，氣球覆蓋了的美國，遮擋了陽光，也導致了所有生物的滅絕",width/2-(width-150)/2,270,width-150);
    }
  }
  
  if(gra == 2 && zycia == 0){
    if(niemozesz == false){
    clearInterval(balony);
    niemozesz = true;
    cutscen = true;
    cutscenka2.show();
    setTimeout(() =>{cutscenka2.hide();cutscen = false;},3555);
    muzyka.stop();
    }
    fill(0);
    rect(0,0,width,height)
    if(cutscen == true){
    cutscenka2.play();
    }else{
    image(ballon_koniec,0,0,width,height);
    textSize(25);
    textAlign(CENTER,TOP);
    fill(255);
    stroke("black");
    textWrap(WORD);
      
    text("Niestey przgrałeś!",width/2-(width-150)/2,50,width-150);
      textSize(18);
    text("Chińskie balony uderzły w twoją wieże.Przez to coraz więcej ataków chińskich balonów na ameryke doprowadziło do upadku cywilizacji. Po roku od uderzenia, balony zasłoniły 100% ameryki, zasłaniając słońce co doprowadziło również do wymarcia wszystkiego co żywe",width/2-(width-150)/2,100,width-150);
    textWrap(CHAR);
    text("中國的氣球撞上了你的塔。結果，越來越多的中國氣球襲擊美國，導致了文明的隕落。撞擊一年後，氣球覆蓋了100%的美國，遮擋了陽光，也導致了所有生物的滅絕",width/2-(width-150)/2,270,width-150);
    }
  }
  start();
}
function start(){
  if(gra == 0){
    textAlign(CENTER);
    background(usa);
    textSize(28);
    fill("lime");
    stroke("black");
    text("POTRZEBA WOLNOŚCI!",220,75);
    fill('pink');
    noStroke();
    textSize(30);
    text("Kliknij ENTER, aby  zacząć!",250,175);
    fill('rgb(148,230,148)');
    noStroke();
    textSize(14);
    text("(latasz klikając SPACJE)",250,200)
    if(gra == 0 && (keyCode === ENTER || cutscen == true)){
      
    if(niemozesz == false){
    cutscen = true;
    niemozesz = true;
    setTimeout(() =>{niemozesz = false;cutscen = false;gra = 1; balony = setInterval(() =>{listaballon.push([width+50,random(0,400)])},1500);cutscenka.hide();},12966);
    muzyka.play();
    }
      
    fill(0);
    rect(0,0,width,height)
    cutscenka.show();
    cutscenka.play();

      
    }
  }
}