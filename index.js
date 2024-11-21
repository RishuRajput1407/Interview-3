// Create a button , on click of which new Heading tag h1 should be added with text 
// as "MERN stack" on the screen above button------------------------------------------------

function addHeading() {
    const heading = document.createElement('h2');
    heading.textContent = 'MERN stack';
    const container = document.getElementById('container');
    container.insertBefore(heading, container.firstChild);
}

// Write code to get 1st H1 element from a webpage using DOM-----------------------------------------



function getFirstH1() {
    const firstH1 = document.querySelector('h1');
    console.log('First H1 element:', firstH1);
    if (firstH1) {
        alert('The first H1 text is: ' + firstH1.textContent);
    } else {
        alert('No H1 element found on the page.');
    }
}


// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second---------------------------------

function ShowTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ':' + m + ':' + s + '';
    document.getElementById("MyClock").innerText = time;
    setTimeout(ShowTime, 1000);
}
// ShowTime();


// Create an HTML page having content as Hello world and a button named Replace Text.
//  When user will click on this button page content should be changed to "Welcome to Elevation academy"---------------------------------------------------------

function replaceText() {
    document.getElementsByTagName("div")[1].innerText = "Welcome to Elevation Academy";
}


//Create an HTML page having content as Hello world and a button named "Hide Text." When user will
// click on this button hide the "Hello World" text------------------------------------------

function hideText() {
    document.getElementsByTagName("div")[2].innerText = " ";
}