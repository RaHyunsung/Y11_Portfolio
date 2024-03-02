function Loader() {
    var projectListElement = document.getElementById("project-list");
    Projects.forEach(function(project) {
        console.log(project)
        var projectCard = document.createElement("li");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.url}/cover.png" alt="${project.title}">
            <div class="info">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
        `;
        projectCard.addEventListener("click", function() {
            redirectTo(project.url);
        });
        projectListElement.appendChild(projectCard);
    });
}

function redirectTo(url) {
    window.location.href = url;
}