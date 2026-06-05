// script.js
$(document).ready(function() {
    console.log('DOM ready, script running!');

    // Change heading HTML
    $('h1').html("jQuery Makes It <em>Easier</em>!");

    // Add initial text to output area
    $('#outputArea').text("Ready for clicks...");

    // Style the button with jQuery
    $('#myButton').css({
        'background-color': 'cornflowerblue',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

    // Example: Add a class to the first paragraph
    $('p:first').addClass('highlight');

    // Event handler for the button click
    $('#myButton').on('click', function() {
        console.log("Button was clicked!");
        $('#outputArea').html("<strong>Button clicked!</strong> Timestamp: " + Date.now());
        $('p:first').toggle();
        $('h1').toggleClass('active');
    });

    // Add a hover effect
    $('#myButton').hover(
        function() { $(this).css('background-color', 'darkblue'); },
        function() { $(this).css('background-color', 'cornflowerblue'); }
    );

}); // End of $(document).ready()
