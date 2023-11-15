// index.js
function submitForm() {
    var form = document.getElementById("recipeForm");

    // Get form values
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var recipeName = form.elements["recipeName"].value;
    var ingredients = form.elements["ingredients"].value;
    var directions = form.elements["directions"].value;
    var notes = form.elements["notes"].value;

    // Log form values to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", ingredients);
    console.log("Directions:", directions);
    console.log("Notes:", notes);
}
