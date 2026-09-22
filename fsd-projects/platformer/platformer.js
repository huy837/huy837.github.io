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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(600, 300, 20, 290);
createPlatform(0, 300, 100, 10)
createPlatform(0, 650, 200, 5)
createPlatform(300, 500, 100, 10)
createPlatform(600, 500, 100, 10)
createPlatform(200, 550, 100, 10)
createPlatform(1000,0,20,290)
createPlatform(850,300,100,10)
createPlatform(700,400,100,10)
createPlatform(500,400,100,10)
createPlatform(200,400,100,10)
createPlatform(1000,600,100,10)
createPlatform(0,150,200,10)
createPlatform(1200,500,100,10)
createPlatform(1100,400,100,10)
createPlatform(1200,650,100,10)
createPlatform(1200,200,100,10)
createPlatform(1150,300,100,10)
    // TODO 3 - Create Collectables
createCollectable("steve", 0, 700);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve",1350,50);
createCollectable("steve",650,450)
createCollectable("steve",0,250)
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1500);
createCannon("top", 600, 3000);
createCannon("right",800, 5000 );
createCannon("top",800, 750)
createCannon("right",300, 2500)
createCannon("left",470, 1750)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
