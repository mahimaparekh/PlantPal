// change from frame1 to frame2
document.querySelector(".start-btn").addEventListener("click", function () {
  document.querySelector(".frame1").style.display = "none";
  document.querySelector(".frame2").style.display = "block";
});

const numOfButtons = document.querySelectorAll(".plant-containers").length;

for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".select-btn")[i].addEventListener("click", function () {
    document.querySelectorAll(".select-btn")[i].style.display = "none";
    document.querySelectorAll(".deselect-btn")[i].style.display = "block";
    document.querySelectorAll(".plant-containers")[i].classList.add("selected");
    document.querySelectorAll(".plant-containers")[i].classList.remove("deselected");
  });
  document.querySelectorAll(".deselect-btn")[i].addEventListener("click", function () {
    document.querySelectorAll(".deselect-btn")[i].style.display = "none";
    document.querySelectorAll(".select-btn")[i].style.display = "block";
    document.querySelectorAll(".plant-containers")[i].classList.remove("selected");
    document.querySelectorAll(".deselect-btn")[i].classList.add("deselected");
  });
  
}

// change from frame2 to frame 3
document.querySelector(".continue-btn").addEventListener("click", function () {
  let selected_plants = []; 

  for(let i =0;i<document.querySelectorAll(".selected").length;i++){
    const plant_id = document.querySelectorAll(".selected")[i].children[0].children[0].id;
    selected_plants.push(plant_id);
  }
  if (selected_plants.length == 0) {
    alert("Please select at least one plant before continuing.");
  } else {
    document.querySelector(".frame2").style.display = "none";
    document.querySelector(".frame3").style.display = "block";

    // const numofPlants = document.querySelectorAll(".f3-plants");
    for(let i=0;i<document.querySelectorAll(".selected").length;i++){//selected = apple, cactus, iris flowers
      for(let j=0;document.querySelectorAll(".f3-plants").length;j++){//slected = apples, mushrooms, cactus,,,all 7
        
        // i = 0, j=0
        if(document.querySelectorAll(".selected")[i].children[0].children[0].src == document.querySelectorAll(".f3-plants")[j].children[0].children[0].src){
          document.querySelectorAll(".f3-plants")[j].classList.remove("f3-unselected");
          document.querySelectorAll(".f3-plants")[j].classList.add("f3-selected");
          break;
        }
      } 
    }
  }
});