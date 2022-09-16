import { projects } from "./project-data.js"

const projectsContainer = document.getElementById("projects-container");

let i=1;
for(const project of projects)
{      
  
    const projectCard = createProjectCard(
      {
        name: project.name,
        description: project.description,
        url: project.url,
        id: project.id
      }
    );

    console.log(projectCard);
    projectsContainer.append(projectCard);
    
    i++;
}

  function createProjectCard(project)
  {
    const viewerUrl = "/viewer.html"

    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.classList.add("project-icon");
    icon.textContent = "view_in_ar";    

    const card = document.createElement("div");    
    card.classList.add("card");

    const cardDetails = document.createElement("div");    
    cardDetails.classList.add("card-details");

    const title = document.createElement("p");
    title.textContent = project.name;
    title.classList.add("text-title");

    const date = document.createElement("p");
    date.textContent = project.date;
    date.classList.add("text-date");

    const description = document.createElement("p");
    description.textContent = project.description;
    description.classList.add("text-body");
    
    const openBtn = document.createElement("button");
    openBtn.textContent = "OPEN";
    openBtn.classList.add("card-button");

    openBtn.addEventListener("click", ()=>{
        const url = viewerUrl + `?projectId=${project.id}`;        
        window.location = url;        
    });

    cardDetails.appendChild(icon);
    cardDetails.appendChild(title);
    cardDetails.appendChild(date);
    cardDetails.appendChild(description);
    cardDetails.appendChild(openBtn);
    card.appendChild(cardDetails);
   
    return card;    
  }
