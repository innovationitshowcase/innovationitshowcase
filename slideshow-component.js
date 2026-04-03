import { Project } from './Project.js';

function createCard(project) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <h3 class="card-title">
            ${project.projectTitle} — ${project.author}
        </h3>
        <img src="Wallpaper.png" style="width:200px">
    `;
    return div;
}

// TODO: automatically generate array from excel data
const projects = [
    new Project("gunship on crack", "alice", "https://www.youtube.com/"),
    new Project("paper mache computer", "bob", "https://www.youtube.com/"),
    new Project("irl death note", "charlie", "https://www.youtube.com/"),
    new Project("java cat", "david", "https://www.youtube.com/"),
    new Project("jumping a fence", "edgar", "https://www.youtube.com/"),
    new Project("virtual insanity", "felix", "https://www.youtube.com/"),
    new Project("headphones", "greg", "https://www.youtube.com/"),
    new Project("java drink", "jeffrey", "https://www.youtube.com/"),
];

const display = document.getElementById('display');
const PROJECTS_PER_PAGE = 4, TOTAL_PAGES = projects.length / PROJECTS_PER_PAGE;
let page = 0;

window.setInterval(() => {
    display.innerHTML = '';
    for (let i = 0; i < PROJECTS_PER_PAGE && i < projects.length; i++) {
        const card = createCard(projects[page * PROJECTS_PER_PAGE + i]);
        display.appendChild(card);
    }
    if (++page == TOTAL_PAGES) {
        page = 0;
    }
}, 10000);