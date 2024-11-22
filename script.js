let images = [
    "/img/bali-1774489_1280.jpg",
    "/img/bali-1774896_1280.jpg",
    "/img/bali-2170900_1280.jpg",
    "/img/bali-301461_1280.jpg",
    "/img/bali-7242256_1280.jpg",
    "/img/bridge-2767545_1280.jpg",
    "/img/elephant-592793_1280.jpg",
    "/img/indonesia-1578647_1280.jpg",
    "/img/indonesia-4031427_1280.jpg",
    "/img/mountain-3807667_1280.jpg",
    "/img/nature-3846403_1280.jpg",
    "/img/plumeria-4887944_1280.jpg",
    "/img/rice-plantation-1822444_1280.jpg",
    "/img/temple-211558_1280.jpg",
    "/img/woman-7790612_1280.jpg"
];

// function renderImages() {
//     // Get the container element by ID
//     var container = document.getElementById('container');

//     // Check if the container exists
//     if (container === null) {
//         console.error("No container found with ID 'container'.");
//         return;
//     }

//     // Clear any existing content in the container
//     container.innerHTML = '';

//     // Use a for loop to iterate through the images array
//     for (var i = 0; i < images.length; i++) {
//         // Create an img element
//         var img = document.createElement('img');
//         img.src = images[i];

//         // Set styles directly on the img element
//         img.style.margin = '10px';
//         img.style.width = '100px'; // Example: Set a default width

//         // Append the img element to the container
//         container.appendChild(img);
//     }
// }

function renderImages() {
    // Get the container element by ID
    var container = document.getElementById('container');

    // Check if the container exists
    if (container === null) {
        console.error("No container found with ID 'container'.");
        return;
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    // Use a for loop to build the HTML string
    for (var i = 0; i < images.length; i++) {
        container.innerHTML += `<img src="${images[i]}" style="margin: 10px; width: 100px;">`;
    }
}