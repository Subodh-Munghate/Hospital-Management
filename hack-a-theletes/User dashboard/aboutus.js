document.addEventListener("DOMContentLoaded", function() {
    // Fetch mission and history data from server (simulated with setTimeout)
    setTimeout(function() {
        document.getElementById("missionText").innerText = "Our mission is to provide high-quality healthcare services to every patient.";
        document.getElementById("historyText").innerText = "Our company was founded in 2005 with the goal of revolutionizing healthcare.";
    }, 1000);

    // Fetch team members from server (simulated with setTimeout)
    setTimeout(function() {
        var teamMembers = [
            { name: "John Doe", position: "CEO", image: "team_member1.jpg" },
            { name: "Jane Smith", position: "CTO", image: "team_member2.jpg" }
            // Add more team members as needed
        ];

        var teamMembersHtml = "";
        teamMembers.forEach(function(member) {
            teamMembersHtml += `
                <div class="team-member">
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.position}</p>
                </div>
            `;
        });

        document.getElementById("teamMembers").innerHTML = teamMembersHtml;
    }, 1500);
});
