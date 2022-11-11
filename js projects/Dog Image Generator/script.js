let breedImage = $("#breed-image");
let dropdown = $("#dog-breeds");
let allowSubmit = true;
let breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (event) {
    event.preventDefault();

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next a").click(function (event) {
    event.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}