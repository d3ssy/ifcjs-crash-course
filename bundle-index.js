const projects = [  
    
    {
        name: "Project 01" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus fringilla egestas.",
        id: 1,
        url: "IFC/01.ifc"
    },

    {
        name: "Project 02" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus fringilla egestas.",
        id: 2,
        url:     "IFC/02.ifc"
    },

    {
        name: "Project 03" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus fringilla egestas.",
        id: 3,
        url: "IFC/03.ifc"
    },

    {
        name: "Project 04" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus fringilla egestas.",
        id: 4,
        url: "IFC/04.ifc"
    },

    {
        name: "Project 05" ,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus fringilla egestas.",
        id: 5,
        url: "IFC/05.ifc"
    }
];

const projectsContainer = document.getElementById("projects-container");
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
}

  function createProjectCard(project)
  {
    const viewerUrl = "./viewer.html";

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
