const arr = []
        for(let i=0; i<10; i++){
            arr.push(Math.floor(Math.random()*100));
        }
        console.log(arr);
        sortowanie(arr)

function sortowanie() {
  for (let n=0; n < arr.length; n++){
  for (let i=0; i < arr.length - 1; i++){
    if (arr[i] > arr[i + 1]){
      const buff = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = buff;
    }
  }

}
console.log(arr)
}

function setup() {
  createCanvas(400, 400);
}

function slupek(poz_x, war) {
  fill("white")
  rect(poz_x,400,30,-war);
}
function draw() {
  background(220);
  
  
  for(i=0; i<arr.length; i++){
      slupek(i*40,arr[i]);
    
  }  
}
