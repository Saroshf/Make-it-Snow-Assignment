// Make it Snow Assignment - Sarosh Fernando

// Initializing canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// Creating array of random snowflake objects
let snowflakes = [];
for (let n = 1; n <= 250; n++) {
    snowflakes.push(newRandomSnowflake());
}

// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    background("black");
    for (let i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i]);
        drawSnowflake(snowflakes[i]);
    }
    //Looping draw function
    requestAnimationFrame(draw);
}

// Event Listener
document.addEventListener("keydown", addSnowflakes);

function addSnowflakes(event) {
    if (event.keyCode === 39) {
        //Right Arrow - Add a new random snowflake
        addaSnowflake();
    } else if (event.keyCode === 37) {
        //Left Arrow - Remove the last snowflake
        snowflakes.pop();

    }
}


