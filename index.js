//Take screen or Output:
let screen = document.getElementById('screen');

//Now Take all buttons: 
buttons = document.querySelectorAll('button');

let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            //or we can do
            // screen.Value = buttonText;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

// From here I took help oniine
// Get all the anchor elements within the navigation
const links = document.querySelectorAll("header nav ul li a");

// Loop through all the links and add a click event listener
links.forEach(link => {
    link.addEventListener("click", e => {
        // Prevent the link from navigating to the href location
        e.preventDefault();

        // Remove the "active" class from all links
        links.forEach(link => {
            link.classList.remove("active");
        });

        // Add the "active" class to the clicked link
        e.target.classList.add("active");
    });
});

// Get the logo image
const logo = document.querySelector("header nav a img");

// Add a click event listener to the logo
logo.addEventListener("click", () => {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Get the header element
const header = document.querySelector("header");

// Add an event listener for scroll events
window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollPos = window.scrollY;

    if (scrollPos > 100) {
        header.style.backgroundColor = "#000";
    } else {
        header.style.backgroundColor = "transparent";
    }
});