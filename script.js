// Navbar shadow
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 60);

  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("scrollProgress").style.width = (scrollTop / height) * 100 + "%";
});

// Reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Typing effect
const typing = document.querySelector(".typing");
const words = ["Full Stack Developer", "Problem Solver", "Discipline Driven"];
let i = 0, j = 0, del = false;

function type() {
  if (!typing) return;
  typing.textContent = words[i].substring(0, j);
  if (!del && j++ === words[i].length) del = true;
  else if (del && j-- === 0) { del = false; i = (i+1)%words.length; }
  setTimeout(type, del ? 80 : 120);
}
type();

// GitHub projects
fetch("https://api.github.com/users/dhanusheelan-bit/repos")
.then(res=>res.json())
.then(data=>{
  document.getElementById("github-projects").innerHTML = data
    .filter(r=>!r.fork)
    .map(r=>`<div class="why-card"><h4>${r.name}</h4><p>${r.description||""}</p></div>`)
    .join("");
});

// Particles
particlesJS("particles-js",{
  particles:{number:{value:60},color:{value:"#ff0000"},line_linked:{enable:true,color:"#ff0000"}}
});
