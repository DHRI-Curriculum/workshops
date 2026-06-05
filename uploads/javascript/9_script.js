// script.js
$(document).ready(function() {
    console.log('Script loaded!');

    // Change heading HTML
    $('h1').html("jQuery Makes It <em>Easier</em>!");

    // Add initial text to output area
    $('#outputArea').text("Ready for clicks...");

    // Style the main button with jQuery
    $('#myButton').css({
        'background-color': 'cornflowerblue',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

    // Add the .highlight class to the first paragraph
    $('p:first').addClass('highlight');

    // Event handler for the main button click
    $('#myButton').on('click', function() {
        console.log("Button was clicked!");

        // CHALLENGE 2: Input Interaction
        // Read the current value from #textInput and display it in #outputArea
        const inputValue = $('#textInput').val();
        $('#outputArea').text(inputValue);
        // END CHALLENGE 2

        $('p:first').toggle();
        $('h1').toggleClass('active');

        // CHALLENGE 3: CSS Class Toggling
        // Toggle the .fancy class on #outputArea each time the button is clicked
        $('#outputArea').toggleClass('fancy');
        // END CHALLENGE 3
    });

    // Add a hover effect to the main button
    $('#myButton').hover(
        function() { $(this).css('background-color', 'darkblue'); },
        function() { $(this).css('background-color', 'cornflowerblue'); }
    );

    // CHALLENGE 1: Add More Interaction
    // Style the hide button to match the main button
    $('#hideButton').css({
        'background-color': 'slategray',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em',
        'margin-right': '8px'
    });

    // Click handler: hide the <h1> element when #hideButton is clicked
    $('#hideButton').on('click', function() {
        $('h1').hide();
    });
    // END CHALLENGE 1

}); // End of $(document).ready()
