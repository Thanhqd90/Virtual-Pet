var petInfo = {
    "name": "Frijolito",
    "weight": 3,
    "happiness": 0
}

$(function() {
  
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    
  })
  
    // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet
  
    function clickedTreatButton() {
      // Increase pet happiness
        petInfo.happiness += 1;

      // Increase pet weight
        petInfo.weight += 1;

        checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
        petInfo.happiness += 1;

      // Decrease pet weight
        petInfo.weight -= 1;

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
        petInfo.happiness -= 1;

      // Decrease pet weight
        petInfo.weight -= 1;

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
            if (petInfo.weight < 1) {
                petInfo.weight = 1;
            }

            if (petInfo.happiness < 1) {
                petInfo.happiness = 1;
            }

    }
    
    console.log(petInfo.weight);
    // Updates your HTML with the current values in your pet_info dictionary

    function updatePetInfoInHtml() {
      $('.name').text(petInfo["name"]);
      $('.weight').text(petInfo["weight"]);
      $('.happiness').text(petInfo["happiness"]);
    }
  