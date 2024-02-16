$(document).ready(function() {
    $("#searchForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get search criteria
        var specialty = $("#specialty").val();
        var location = $("#location").val();

        // Clear previous search results
        $("#searchResults").empty();

        // Perform search (you can replace this with actual backend API call)
        var searchResults = [
            { name: "Dr. John Doe", specialty: "General Practitioner", location: "New York" },
            { name: "Dr. Jane Smith", specialty: "Cardiology", location: "Los Angeles" }
            // Add more search results as needed
        ];

        // Display search results
        if (searchResults.length > 0) {
            $.each(searchResults, function(index, doctor) {
                var resultHtml = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${doctor.name}</h5>
                            <p class="card-text"><strong>Specialty:</strong> ${doctor.specialty}</p>
                            <p class="card-text"><strong>Location:</strong> ${doctor.location}</p>
                        </div>
                    </div>
                `;
                $("#searchResults").append(resultHtml);
            });
        } else {
            $("#searchResults").html("<p>No doctors found.</p>");
        }
    });
});
