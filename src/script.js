
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Designer", "Passionate Coder", "Creative Thinker", "Problem Solver"],
  typeSpeed: 50,
  backSpeed: 80,
  startDelay: 500,
  backDelay: 1000,
  loop: true,
});
// show color once click any specific menu 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.navbar a');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// Close the menu and remove the toggle icon when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

function setActive(sectionId) {
  // Remove active class from all links
  var links = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  // Add active class to the clicked link
  var selectedLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
  selectedLink.classList.add('active');
}
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_rrv28tn", "template_evspk1t", parms)
    .then(function () {
      alert("Email Sent Successfully");
      window.location.href = "file:///Users/manveer/Desktop/manveer_portfolio/index.html";
    });
}


