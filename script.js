function Loader() {
    var projectListElement = document.getElementById("project-list");
    var projectDropdownElement = document.getElementById("dropdown-content");
    Projects.forEach(function(project) {
        console.log(project)
        var projectCard = document.createElement("li");
        var dropdownElement = document.createElement("a");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.url}/cover.png" alt="${project.title}">
            <div class="info">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
        `;``
        dropdownElement.href = project.url;
        dropdownElement.text = project.title;
        projectCard.addEventListener("click", function() {
            redirectTo(project.url);
        });
        projectListElement.appendChild(projectCard);
        projectDropdownElement.appendChild(dropdownElement);
    });
}

function redirectTo(url) {
    window.location.href = url;
}