const dogImages = document.querySelector(".dog-images");
const button = document.getElementById("dog-btn");
const select = document.querySelector("select");
const form = document.querySelector("form");
const submit = document.querySelector("#submit");

//Fetches the API when the page loads for the array of dog breeds
fetch("https://dog.ceo/api/breeds/list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //stores the array to the variable breed
    const breeds = data.message;
    //iterates through each breed in the array
    breeds.forEach((breed) => {
      //creates the option HTML element
      const option = document.createElement("option");
      //sets the option value to breed
      option.value = breed;
      //Sets the text of the options to the different breeds
      option.innerText = breed;
      //appends the new option to the select HTML dropdown list
      select.append(option);
    });
  });

//adds event listener to the form element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //sets the button's text while it is still fetching api
  submit.innerText = "Fetching Image";
  //fetches the api with the value inputed on the form's dropdown list
  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //creates new image element
      const img = document.createElement("img");
      //sets the src to the appropriate url
      img.src = data.message;
      //appends the image to the div
      dogImages.append(img);
      //changes the text on the button
      submit.innerText = "Get New Dog Image";
    });
});
