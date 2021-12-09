console.log("script started");

const body = document.querySelector("body");
const content = document.querySelector(".content");

const router = new Navigo("/", { hash: true });

router
  .on({
    "/": () => {
      content.innerHTML = `<h1>My Portfolio</h1>
      <a href="/education" data-navigo>Education</a><br>
      <a href="/projects" data-navigo>Projects</a><br>
      <a href="/skills" data-navigo>Skills</a>`;
      router.updatePageLinks();
    },
    "/education": () => {
      content.innerHTML = `<h1>Education</h1><a href="/">Back home</a>`;
    },
    "/projects": () => {
      content.innerHTML = `<h1>Projects</h1><a href="/">Back home</a>`;
    },
    "/skills": () => {
      content.innerHTML = `<h1>Skills</h1><a href="/">Back home</a>`;
    },
  })
  .resolve();
