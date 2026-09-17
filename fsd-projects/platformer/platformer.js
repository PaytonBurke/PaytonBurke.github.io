$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 102, 0)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 680, 400, 100);
    createPlatform(400, 550, 50, 20);
    createPlatform(110, 450, 100, 20);
    createPlatform(425, 325, 70, 20);
    createPlatform(700, 325, 80, 20);
    createPlatform(700, 200, 30, 2);
    createPlatform(600, 110, 40, 1);

    // TODO 3 - Create Collectables
    createCollectable("database", 300, 250, 0);
    createCollectable("database", 500, 0, 0);
    createCollectable("database", 900, 600, 0);
    
    // TODO 4 - Create Cannons
    createCannon("left", 650, 2);
    createCannon("left", 660, 2);
    createCannon("left", 670, 2);
    createCannon("left", 680, 2);
    createCannon("left", 690, 2);
    createCannon("top", 680, 900);
    createCannon("top", 900, 1200);
    createCannon("top", 300, 900)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
