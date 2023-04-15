import * as PIXI from "pixi.js";
import Victor from "victor";
//import Matter from "matter-js";

let canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
  view: canvas,
  width: canvasSize,
  height: canvasSize,
  backgroundColor: 0x5c812f
});

let player = new Player({app});

let enemyRadius = 16;
const enemy = new PIXI.Graphics();
let r = randomSpawnPoint();
enemy.position.set(r.x, r.y);
enemy.beginFill(0xFF0000, 1);
enemy.drawCircle(0, 0, enemyRadius);
enemy.endFill();
app.stage.addChild(enemy);

app.ticker.add((delta) => {
  
});

function randomSpawnPoint() {
  let edge = 0; //= Math.floor(Math.random() * 4);
  let spawnPoint = new Victor (0, 0);
  switch(edge) {
    case 0:
      spawnPoint.x = canvasSize * Math.random();
      break;
    case 1:
      spawnPoint.x = canvasSize;
      spawnPoint.y = canvasSize * Math.random();
      break;
    case 2:
      spawnPoint.x = canvasSize * Math.random();
      spawnPoint.y = canvasSize;
      break;
    default:
      spawnPoint.x = 0;
      spawnPoint.y = canvasSize * Math.random();
      break;
  }

  return spawnPoint;

}
