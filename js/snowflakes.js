// Functions for Snowflakes

function newSnowflake(initX, initY, initR, initColour) {
    return {
        x: initX,
        y: initY,
        r: initR,
        colour: initColour
    }

}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(1, 6),
        speed: randomDec(2, 5),
        colour: "white"
    };
}

function drawSnowflake(aSnowflake) {
    fill(aSnowflake.colour);
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}

function moveSnowflake(aSnowflake) {
    aSnowflake.y += aSnowflake.speed;
    if (aSnowflake.y >= cnv.height) {
        aSnowflake.y = 0;
        aSnowflake.x = randomInt(0, cnv.width);

    }
}

function addaSnowflake() {
    snowflakes.push(newRandomSnowflake());
    console.log(snowflakes);
}