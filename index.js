import * as PIXI from "pixi.js";

import {Player} from "./player.js";
import {Zombie} from "./zombie.js";
//import Matter from "matter-js";

const canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
  view: canvas,
  width: canvasSize,
  height: canvasSize,
  backgroundColor: 0x5c812f
});

let player = new Player({ app });
let zombie = new Zombie({ app, player });
console.log(player);

/* const squareWidth = 32;
const square = new PIXI.Sprite(PIXI.Texture.WHITE);
square.anchor.set(0.5);
square.position.set(app.screen.width / 2, app.screen.height / 2);
square.width = square.height = squareWidth;
square.tint = 0xea985d;

app.stage.addChild(square); */

app.ticker.add((delta) => {
  player.update();
  zombie.update();
});
