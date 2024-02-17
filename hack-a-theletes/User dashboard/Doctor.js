// $(document).ready(function() {
//     $("#searchForm").submit(function(event) {
//         event.preventDefault(); // Prevent form submission

//         // Get search criteria
//         var specialty = $("#specialty").val();
//         var location = $("#location").val();

//         // Clear previous search results
//         $("#searchResults").empty();

//         // Perform search (you can replace this with actual backend API call)
//         var searchResults = [
//             { name: "Dr. John Doe", specialty: "General Practitioner", location: "New York" },
//             { name: "Dr. Jane Smith", specialty: "Cardiology", location: "Los Angeles" }
//             // Add more search results as needed
//         ];

//         // Display search results
//         if (searchResults.length > 0) {
//             $.each(searchResults, function(index, doctor) {
//                 var resultHtml = `
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${doctor.name}</h5>
//                             <p class="card-text"><strong>Specialty:</strong> ${doctor.specialty}</p>
//                             <p class="card-text"><strong>Location:</strong> ${doctor.location}</p>
//                         </div>
//                     </div>
//                 `;
//                 $("#searchResults").append(resultHtml);
//             });
//         } else {
//             $("#searchResults").html("<p>No doctors found.</p>");
//         }
//     });
// });



// $(document).ready(function(){
//     // Function to handle form submission
//     $('#searchForm').submit(function(event){
//         event.preventDefault(); // Prevent the form from submitting normally
        
//         // Get selected values
//         var specialty = $('#specialty').val();
//         var location = $('#location').val();
        
//         // Filter doctors based on selected values
//         var filteredDoctors = doctors.filter(function(doctor){
//             return (doctor.specialty === specialty && doctor.location === location);
//         });
        
//         // Display search results
//         displaySearchResults(filteredDoctors);
//     });
    
//     // Sample list of doctors (you can replace this with your actual data)
//     var doctors = [
//         { name: 'Dr. John Doe', specialty: 'General Practitioner', location: 'Akola' },
//         { name: 'Dr. Jane Smith', specialty: 'Dermatologists', location: 'Mumbai' },
//         { name: 'Dr. David Brown', specialty: 'Physiatrists', location: 'Chennai' },
//         { name: 'Dr. Emily Johnson', specialty: 'Plastic Surgeons', location: 'Pune' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' },
//         { name: 'Dr. Michael Clark', specialty: 'Neurologistsc', location: 'Delhi' }
//         // Add more doctors as needed
//     ];
    
//     // Function to display search results
//     function displaySearchResults(doctors){
//         var resultsContainer = $('#searchResults');
//         resultsContainer.empty(); // Clear previous results
        
//         if(doctors.length === 0){
//             resultsContainer.append('<p>No doctors found for the selected criteria.</p>');
//         } else {
//             var resultList = $('<ul class="list-group"></ul>');
//             doctors.forEach(function(doctor){
//                 resultList.append('<li class="list-group-item">' + doctor.name + ' - ' + doctor.specialty + ' (' + doctor.location + ')</li>');
//             });
//             resultsContainer.append(resultList);
//         }
//     }
// });


$(document).ready(function(){
    // Function to handle form submission
    $('#searchForm').submit(function(event){
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get selected values
        var specialty = $('#specialty').val();
        var location = $('#location').val();
        
        // Filter doctors based on selected values
        var filteredDoctors = doctors.filter(function(doctor){
            return (doctor.specialty === specialty && doctor.location === location);
        });
        
        // Display search results
        displaySearchResults(filteredDoctors);
    });
    
    // Sample list of doctors (you can replace this with your actual data)
var doctors = [
    { name: 'Dr. John Doe', specialty: 'General Practitioner', location: 'Akola', bio: 'Dr. John Doe is an experienced General Practitioner with expertise in various medical fields.' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologists', location: 'Mumbai', bio: 'Dr. Jane Smith specializes in dermatology and offers comprehensive skin care services.' },
    { name: 'Dr. David Brown', specialty: 'Physiatrists', location: 'Chennai', bio: 'Dr. David Brown is a physiatrist focusing on physical medicine and rehabilitation.' },
    { name: 'Dr. Emily Johnson', specialty: 'Plastic Surgeons', location: 'Pune', bio: 'Dr. Emily Johnson is a renowned plastic surgeon known for her expertise in cosmetic procedures.' },
    { name: 'Dr. Michael Clark', specialty: 'Neurologists', location: 'Delhi', bio: 'Dr. Michael Clark specializes in neurology and provides comprehensive care for neurological disorders.' },
    { name: 'Dr. Sarah Patel', specialty: 'Gynecologists', location: 'Akola', bio: 'Dr. Sarah Patel is an expert gynecologist offering compassionate care for women\'s health.' },
    { name: 'Dr. James Wilson', specialty: 'Oncologists', location: 'Mumbai', bio: 'Dr. James Wilson is an oncologist dedicated to providing personalized cancer treatment.' },
    { name: 'Dr. Jessica Lee', specialty: 'Ophthalmologists', location: 'Chennai', bio: 'Dr. Jessica Lee is an ophthalmologist specializing in eye care and surgeries.' },
    { name: 'Dr. William Brown', specialty: 'Urologists', location: 'Pune', bio: 'Dr. William Brown is a urologist with extensive experience in treating urinary tract disorders.' },
    { name: 'Dr. Samantha Taylor', specialty: 'Hematologists', location: 'Delhi', bio: 'Dr. Samantha Taylor is a hematologist providing advanced care for blood-related disorders.' },
    { name: 'Dr. Christopher Davis', specialty: 'Cardiologists', location: 'Akola', bio: 'Dr. Christopher Davis is a cardiologist specializing in heart diseases and cardiovascular care.' },
    { name: 'Dr. Olivia Garcia', specialty: 'Pediatricians', location: 'Mumbai', bio: 'Dr. Olivia Garcia is a pediatrician committed to providing quality healthcare for children.' },
    { name: 'Dr. Ethan Martinez', specialty: 'Endocrinologists', location: 'Chennai', bio: 'Dr. Ethan Martinez is an endocrinologist focusing on hormonal disorders and diabetes management.' },
    { name: 'Dr. Ava Thompson', specialty: 'Rheumatologists', location: 'Pune', bio: 'Dr. Ava Thompson is a rheumatologist specializing in the treatment of rheumatic diseases.' },
    { name: 'Dr. Jacob Wilson', specialty: 'Orthopedic Surgeons', location: 'Delhi', bio: 'Dr. Jacob Wilson is an orthopedic surgeon providing advanced surgical and non-surgical care for musculoskeletal conditions.' },
    { name: 'Dr. Lily Taylor', specialty: 'Psychiatrists', location: 'Mumbai', bio: 'Dr. Lily Taylor is a psychiatrist specializing in mental health diagnosis and treatment.' },
    { name: 'Dr. Benjamin White', specialty: 'Allergists', location: 'Chennai', bio: 'Dr. Benjamin White is an allergist offering expert care for allergies and immunological disorders.' },
    { name: 'Dr. Sophia Brown', specialty: 'Gastroenterologists', location: 'Pune', bio: 'Dr. Sophia Brown is a gastroenterologist providing comprehensive care for digestive system disorders.' },
    { name: 'Dr. Noah Wilson', specialty: 'Pulmonologists', location: 'Delhi', bio: 'Dr. Noah Wilson is a pulmonologist specializing in respiratory diseases and lung disorders.' },
    { name: 'Dr. Mia Clark', specialty: 'Nephrologists', location: 'Akola', bio: 'Dr. Mia Clark is a nephrologist focusing on kidney diseases and renal disorders.' },
    { name: 'Dr. Lucas Garcia', specialty: 'Otolaryngologists', location: 'Mumbai', bio: 'Dr. Lucas Garcia is an otolaryngologist providing care for ear, nose, and throat conditions.' },
    { name: 'Dr. Ella Martinez', specialty: 'Neonatologists', location: 'Chennai', bio: 'Dr. Ella Martinez is a neonatologist specializing in the care of newborn infants.' },
    { name: 'Dr. Ethan Patel', specialty: 'Geriatricians', location: 'Pune', bio: 'Dr. Ethan Patel is a geriatrician providing specialized care for elderly patients.' },
    { name: 'Dr. Ava Wilson', specialty: 'Rheumatologists', location: 'Delhi', bio: 'Dr. Ava Wilson is a rheumatologist specializing in the diagnosis and treatment of rheumatic diseases.' },
    { name: 'Dr. Liam Taylor', specialty: 'Ophthalmologists', location: 'Akola', bio: 'Dr. Liam Taylor is an ophthalmologist specializing in eye surgeries and treatments.' },
    { name: 'Dr. Emma Johnson', specialty: 'Urologists', location: 'Mumbai', bio: 'Dr. Emma Johnson is a urologist providing care for urinary tract disorders and conditions.' },
    { name: 'Dr. Noah White', specialty: 'Gynecologists', location: 'Chennai', bio: 'Dr. Noah White is a gynecologist offering comprehensive women\'s healthcare services.' },
    { name: 'Dr. Lily Brown', specialty: 'Endocrinologists', location: 'Pune', bio: 'Dr. Lily Brown is an endocrinologist specializing in hormonal disorders and diabetes management.' },
    { name: 'Dr. Benjamin Garcia', specialty: 'Pediatricians', location: 'Delhi', bio: 'Dr. Benjamin Garcia is a pediatrician providing care for children and adolescents.' },
    { name: 'Dr. Ella Wilson', specialty: 'Dermatologists', location: 'Akola', bio: 'Dr. Ella Wilson is a dermatologist specializing in skin conditions and treatments.' },
    { name: 'Dr. Ethan Clark', specialty: 'Cardiologists', location: 'Mumbai', bio: 'Dr. Ethan Clark is a cardiologist specializing in heart diseases and cardiovascular care.' },
    { name: 'Dr. Mia Martinez', specialty: 'Orthopedic Surgeons', location: 'Chennai', bio: 'Dr. Mia Martinez is an orthopedic surgeon providing surgical and non-surgical care for orthopedic conditions.' },
    { name: 'Dr. Lucas White', specialty: 'Oncologists', location: 'Pune', bio: 'Dr. Lucas White is an oncologist specializing in cancer diagnosis and treatment.' },
    { name: 'Dr. Ava Garcia', specialty: 'Gastroenterologists', location: 'Delhi', bio: 'Dr. Ava Garcia is a gastroenterologist providing care for gastrointestinal disorders and diseases.' },
    { name: 'Dr. Liam Brown', specialty: 'Nephrologists', location: 'Akola', bio: 'Dr. Liam Brown is a nephrologist specializing in kidney diseases and renal care.' },
    { name: 'Dr. Emma Taylor', specialty: 'Otolaryngologists', location: 'Mumbai', bio: 'Dr. Emma Taylor is an otolaryngologist specializing in ear, nose, and throat disorders.' },
    { name: 'Dr. Noah Johnson', specialty: 'Neonatologists', location: 'Chennai', bio: 'Dr. Noah Johnson is a neonatologist specializing in the care of newborn infants.' },
    { name: 'Dr. Lily Martinez', specialty: 'Geriatricians', location: 'Pune', bio: 'Dr. Lily Martinez is a geriatrician providing care for elderly patients.' },
    { name: 'Dr. Benjamin Wilson', specialty: 'Rheumatologists', location: 'Delhi', bio: 'Dr. Benjamin Wilson is a rheumatologist specializing in the diagnosis and treatment of rheumatic diseases.' },
    { name: 'Dr. Ella Clark', specialty: 'Ophthalmologists', location: 'Akola', bio: 'Dr. Ella Clark is an ophthalmologist specializing in eye surgeries and treatments.' },
    { name: 'Dr. Ethan Taylor', specialty: 'Urologists', location: 'Mumbai', bio: 'Dr. Ethan Taylor is a urologist providing care for urinary tract disorders and conditions.' },
    { name: 'Dr. Mia Brown', specialty: 'Gynecologists', location: 'Chennai', bio: 'Dr. Mia Brown is a gynecologist offering comprehensive women\'s healthcare services.' },
    { name: 'Dr. Lucas Martinez', specialty: 'Endocrinologists', location: 'Pune', bio: 'Dr. Lucas Martinez is an endocrinologist specializing in hormonal disorders and diabetes management.' },
    { name: 'Dr. Ava White', specialty: 'Pediatricians', location: 'Delhi', bio: 'Dr. Ava White is a pediatrician providing care for children and adolescents.' },
    { name: 'Dr. Liam Garcia', specialty: 'Dermatologists', location: 'Akola', bio: 'Dr. Liam Garcia is a dermatologist specializing in skin conditions and treatments.' },
    { name: 'Dr. Emma Clark', specialty: 'Cardiologists', location: 'Mumbai', bio: 'Dr. Emma Clark is a cardiologist specializing in heart diseases and cardiovascular care.' },
    { name: 'Dr. Noah Martinez', specialty: 'Orthopedic Surgeons', location: 'Chennai', bio: 'Dr. Noah Martinez is an orthopedic surgeon providing surgical and non-surgical care for orthopedic conditions.' },
    { name: 'Dr. Lily White', specialty: 'Oncologists', location: 'Pune', bio: 'Dr. Lily White is an oncologist specializing in cancer diagnosis and treatment.' },
    { name: 'Dr. Benjamin Brown', specialty: 'Gastroenterologists', location: 'Delhi', bio: 'Dr. Benjamin Brown is a gastroenterologist providing care for gastrointestinal disorders and diseases.' },
    { name: 'Dr. Ella Garcia', specialty: 'Nephrologists', location: 'Akola', bio: 'Dr. Ella Garcia is a nephrologist specializing in kidney diseases and renal care.' },
    { name: 'Dr. Ethan Wilson', specialty: 'Otolaryngologists', location: 'Mumbai', bio: 'Dr. Ethan Wilson is an otolaryngologist specializing in ear, nose, and throat disorders.' },
    { name: 'Dr. Mia Clark', specialty: 'Neonatologists', location: 'Chennai', bio: 'Dr. Mia Clark is a neonatologist specializing in the care of newborn infants.' },
    { name: 'Dr. Lucas Martinez', specialty: 'Geriatricians', location: 'Pune', bio: 'Dr. Lucas Martinez is a geriatrician providing care for elderly patients.' },
    { name: 'Dr. Ava White', specialty: 'Rheumatologists', location: 'Delhi', bio: 'Dr. Ava White is a rheumatologist specializing in the diagnosis and treatment of rheumatic diseases.' },
    { name: 'Dr. Liam Clark', specialty: 'Ophthalmologists', location: 'Akola', bio: 'Dr. Liam Clark is an ophthalmologist specializing in eye surgeries and treatments.' },
    { name: 'Dr. Emma Taylor', specialty: 'Urologists', location: 'Mumbai', bio: 'Dr. Emma Taylor is a urologist providing care for urinary tract disorders and conditions.' },
    { name: 'Dr. Noah Brown', specialty: 'Gynecologists', location: 'Chennai', bio: 'Dr. Noah Brown is a gynecologist offering comprehensive women\'s healthcare services.' },
    { name: 'Dr. Lily Martinez', specialty: 'Endocrinologists', location: 'Pune', bio: 'Dr. Lily Martinez is an endocrinologist specializing in hormonal disorders and diabetes management.' },
    { name: 'Dr. Benjamin Wilson', specialty: 'Pediatricians', location: 'Delhi', bio: 'Dr. Benjamin Wilson is a pediatrician providing care for children and adolescents.' },
    { name: 'Dr. Ella Clark', specialty: 'Dermatologists', location: 'Akola', bio: 'Dr. Ella Clark is a dermatologist specializing in skin conditions and treatments.' },
    { name: 'Dr. Ethan Taylor', specialty: 'Cardiologists', location: 'Mumbai', bio: 'Dr. Ethan Taylor is a cardiologist specializing in heart diseases and cardiovascular care.' },
    { name: 'Dr. Mia Martinez', specialty: 'Orthopedic Surgeons', location: 'Chennai', bio: 'Dr. Mia Martinez is an orthopedic surgeon providing surgical and non-surgical care for orthopedic conditions.' },
    { name: 'Dr. Lucas White', specialty: 'Oncologists', location: 'Pune', bio: 'Dr. Lucas White is an oncologist specializing in cancer diagnosis and treatment.' },
    { name: 'Dr. Ava Garcia', specialty: 'Gastroenterologists', location: 'Delhi', bio: 'Dr. Ava Garcia is a gastroenterologist providing care for gastrointestinal disorders and diseases.' },
    { name: 'Dr. Liam Brown', specialty: 'Nephrologists', location: 'Akola', bio: 'Dr. Liam Brown is a nephrologist specializing in kidney diseases and renal care.' },
    { name: 'Dr. Emma Taylor', specialty: 'Otolaryngologists', location: 'Mumbai', bio: 'Dr. Emma Taylor is an otolaryngologist specializing in ear, nose, and throat disorders.' },
    { name: 'Dr. Noah Johnson', specialty: 'Neonatologists', location: 'Chennai', bio: 'Dr. Noah Johnson is a neonatologist specializing in the care of newborn infants.' },
    { name: 'Dr. Lily Martinez', specialty: 'Geriatricians', location: 'Pune', bio: 'Dr. Lily Martinez is a geriatrician providing care for elderly patients.' },
    { name: 'Dr. Benjamin Wilson', specialty: 'Rheumatologists', location: 'Delhi', bio: 'Dr. Benjamin Wilson is a rheumatologist specializing in the diagnosis and treatment of rheumatic diseases.' },
    { name: 'Dr. Ella Clark', specialty: 'Ophthalmologists', location: 'Akola', bio: 'Dr. Ella Clark is an ophthalmologist specializing in eye surgeries and treatments.' },
    { name: 'Dr. Ethan Taylor', specialty: 'Urologists', location: 'Mumbai', bio: 'Dr. Ethan Taylor is a urologist providing care for urinary tract disorders and conditions.' },
    { name: 'Dr. Mia Brown', specialty: 'Gynecologists', location: 'Chennai', bio: 'Dr. Mia Brown is a gynecologist offering comprehensive women\'s healthcare services.' },
    { name: 'Dr. Lucas Martinez', specialty: 'Endocrinologists', location: 'Pune', bio: 'Dr. Lucas Martinez is an endocrinologist specializing in hormonal disorders and diabetes management.' },
    { name: 'Dr. Ava White', specialty: 'Pediatricians', location: 'Delhi', bio: 'Dr. Ava White is a pediatrician providing care for children and adolescents.' },
    { name: 'Dr. Liam Clark', specialty: 'Dermatologists', location: 'Akola', bio: 'Dr. Liam Clark is a dermatologist specializing in skin conditions and treatments.' },
    { name: 'Dr. Emma Taylor', specialty: 'Cardiologists', location: 'Mumbai', bio: 'Dr. Emma Taylor is a cardiologist specializing in heart diseases and cardiovascular care.' },
    { name: 'Dr. Noah Martinez', specialty: 'Orthopedic Surgeons', location: 'Chennai', bio: 'Dr. Noah Martinez is an orthopedic surgeon providing surgical and non-surgical care for orthopedic conditions.' },
    { name: 'Dr. Lily White', specialty: 'Oncologists', location: 'Pune', bio: 'Dr. Lily White is an oncologist specializing in cancer diagnosis and treatment.' },
    { name: 'Dr. Benjamin Brown', specialty: 'Gastroenterologists', location: 'Delhi', bio: 'Dr. Benjamin Brown is a gastroenterologist providing care for gastrointestinal disorders and diseases.' },
    { name: 'Dr. Ella Garcia', specialty: 'Nephrologists', location: 'Akola', bio: 'Dr. Ella Garcia is a nephrologist specializing in kidney diseases and renal care.' },
    { name: 'Dr. Ethan Wilson', specialty: 'Otolaryngologists', location: 'Mumbai', bio: 'Dr. Ethan Wilson is an otolaryngologist specializing in ear, nose, and throat disorders.' },
    { name: 'Dr. Mia Clark', specialty: 'Neonatologists', location: 'Chennai', bio: 'Dr. Mia Clark is a neonatologist specializing in the care of newborn infants.' },
    { name: 'Dr. Lucas Martinez', specialty: 'Geriatricians', location: 'Pune', bio: 'Dr. Lucas Martinez is a geriatrician providing care for elderly patients.' },
    { name: 'Dr. Ava White', specialty: 'Rheumatologists', location: 'Delhi', bio: 'Dr. Ava White is a rheumatologist specializing in the diagnosis and treatment of rheumatic diseases.' },
    { name: 'Dr. Liam Clark', specialty: 'Ophthalmologists', location: 'Akola', bio: 'Dr. Liam Clark is an ophthalmologist specializing in eye surgeries and treatments.' },
    { name: 'Dr. Emma Taylor', specialty: 'Urologists', location: 'Mumbai', bio: 'Dr. Emma Taylor is a urologist providing care for urinary tract disorders and conditions.' },
    { name: 'Dr. Noah Brown', specialty: 'Gynecologists', location: 'Chennai', bio: 'Dr. Noah Brown is a gynecologist offering comprehensive women\'s healthcare services.' },
    { name: 'Dr. Lily Martinez', specialty: 'Endocrinologists', location: 'Pune', bio: 'Dr. Lily Martinez is an endocrinologist specializing in hormonal disorders and diabetes management.' },
    { name: 'Dr. Benjamin Wilson', specialty: 'Pediatricians', location: 'Delhi', bio: 'Dr. Benjamin Wilson is a pediatrician providing care for children and adolescents.' }
    // Add more doctors as needed
];

    // // Function to display search results
    // function displaySearchResults(doctors){
    //     var resultsContainer = $('#searchResults');
    //     resultsContainer.empty(); // Clear previous results
        
    //     if(doctors.length === 0){
    //         resultsContainer.append('<p class="text-center">No doctors found for the selected criteria.</p>');
    //     } else {
    //         var row = $('<div class="row"></div>');
    //         doctors.forEach(function(doctor){
    //             var col = $('<div class="col-md-4 mb-4"></div>');
    //             var card = $('<div class="card h-100"></div>');
    //             var cardBody = $('<div class="card-body"></div>');
    //             cardBody.append('<h5 class="card-title">' + doctor.name + '</h5>');
    //             cardBody.append('<h6 class="card-subtitle mb-2 text-muted">' + doctor.specialty + '</h6>');
    //             cardBody.append('<p class="card-text">' + doctor.bio + '</p>');
    //             card.append(cardBody);
    //             col.append(card);
    //             row.append(col);
    //         });
    //         resultsContainer.append(row);
    //     }
    // }

    // Function to display search results
// Function to display search results
function displaySearchResults(doctors){
    var resultsContainer = $('#searchResults');
    resultsContainer.empty(); // Clear previous results
    
    if(doctors.length === 0){
        resultsContainer.append('<p class="text-center">No doctors found for the selected criteria.</p>');
    } else {
        var row = $('<div class="row"></div>');
        doctors.forEach(function(doctor){
            var col = $('<div class="col-md-4 mb-4"></div>');
            var card = $('<div class="card h-100 border border-primary"></div>'); // Add border classes for decoration
            var cardBody = $('<div class="card-body"></div>');
            cardBody.append('<h5 class="card-title text-primary">' + doctor.name + '</h5>'); // Add text-primary class for the card title
            cardBody.append('<h6 class="card-subtitle mb-2 text-muted">' + doctor.specialty + '</h6>');
            cardBody.append('<p class="card-text">' + doctor.bio + '</p>');

            // Create a button
            var button = $('<button class="btn btn-primary">Book an Appointment</button>'); // Use btn-primary class for the button
            // Set the URL to redirect to
            var pageURL = './Userinfo/info.html';// Assuming the page URLs follow a specific pattern
            // Add click event listener to the button to redirect to the page
            button.click(function() {
                window.location.href = pageURL;
            });

            // Append the button to the card body
            cardBody.append(button);

            card.append(cardBody);
            col.append(card);
            row.append(col);
        });
        resultsContainer.append(row);
    }
}


});
