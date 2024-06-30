var CANVAS;
var CONTEXT;
var BODY;

const sprite = new Image();
sprite.src = "./sprite.png";
const explosion = new Image();
explosion.src = "./explosion.png";

const fps = 50;
var loop = null;
var startButton = null;
var SUNANGLE = 0;
var center = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const endGameTemplate = `
<div class="back">
</div>
        <div class="card">
        <h1>Game Over</h1>
        </hr>
        <button>play again</button>
    </div>
`;
