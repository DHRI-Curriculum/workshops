// poem.js

$(document).ready(function() {
    console.log("Poem page ready.");

    // Use jQuery's getJSON method to fetch data from poem.json
    $.getJSON("poem.json", function(data) {
        console.log("Poem data loaded:", data);

        let poemHtml = "<blockquote>"; // Start the blockquote for the poem

        // Iterate through each line in the data (data.lines is the array of lines)
        data.lines.forEach(function(lineArray) {
            poemHtml += "<p>"; // Start a paragraph for the line

            // Iterate through each word object in the current lineArray
            lineArray.forEach(function(wordObject) {
                // Check if the word has an 'info' property
                if (wordObject.info) {
                    // If yes, wrap the word in an <a> tag, store info in data-info attribute
                    // Use template literals for easier string construction
                    poemHtml += `<a href="#" class="info-term" data-info="${wordObject.info}">${wordObject.text}</a> `;
                } else {
                    // If no info, just add the word text
                    poemHtml += wordObject.text + " ";
                }
            }); // End word loop

            poemHtml += "</p>"; // End the paragraph for the line
        }); // End line loop

        poemHtml += "</blockquote>"; // End the blockquote

        // Replace the content of the #poem div with the generated HTML
        $("#poem").html(poemHtml);

        // --- Add Event Listener AFTER poem is loaded ---
        // Select all elements with class 'info-term' INSIDE #poem
        // Use .on() for event delegation - handles elements added dynamically
        $("#poem").on("click", ".info-term", function(event) {
            event.preventDefault(); // Prevent the default link behavior (jumping to '#')

            // Get the info text stored in the data-info attribute of the clicked element
            const infoText = $(this).data("info"); // jQuery's .data() reads data-* attributes

            // --- CHALLENGE 3: Highlight Active Term ---
            // Remove the .active-term class from any previously highlighted term
            $(".info-term").removeClass("active-term");
            // Add the .active-term class to the term that was just clicked
            $(this).addClass("active-term");
            // --- END CHALLENGE 3 ---

            // --- CHALLENGE 2: Improve Info Display ---
            // Build the new info entry as a paragraph, including the clicked word as a label
            const newEntry = `<p><strong>${$(this).text()}:</strong> ${infoText}</p>`;

            // If the #info box still shows the default placeholder, clear it first
            // then start appending; otherwise just append below existing entries
            if ($("#info").hasClass("active-info")) {
                // Already has content, append below it
                $("#info").append(newEntry);
            } else {
                // First click: replace placeholder and mark the box as active
                $("#info").html(newEntry);
                $("#info").addClass("active-info");
            }
        });

        // --- CHALLENGE 2 cont'd: Clear Button ---
        // When the clear button is clicked, remove all appended entries,
        // restore the placeholder text, and reset the active-info state
        $("#clearButton").on("click", function() {
            $("#info").html("<p>Click on a highlighted term above.</p>");
            $("#info").removeClass("active-info");
            // Also remove active highlight from any term so the display stays in sync
            $(".info-term").removeClass("active-term");
        });
        // --- END CHALLENGE 2 ---

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Handle errors if poem.json cannot be loaded
        console.error("Error loading poem.json:", textStatus, errorThrown);
        $("#poem").html("<p style='color:red;'>Error loading poem data.</p>");
    }); // End of $.getJSON

}); // End of $(document).ready()
