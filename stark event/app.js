// Event details are kept in one simple list.
const events = [
  {
    title: "Code Red Hackathon",
    date: "25 November 2026 · 10:00 AM",
    description: "A collaborative coding challenge where students build creative solutions to real-world problems. Bring your laptop, your ideas, and your team spirit.",
    location: "Computer Science Lab "
  },
  {
    title: "Stark Design Lab",
    date: "28 November 2026 · 02:00 PM",
    description: "Explore UI/UX design, wireframes, color systems, and prototyping. Beginners are welcome; no previous design experience is required.",
    location: "Innovation Centre "
  },
  {
    title: "Avengers Assemble",
    date: "02 December 2026 · 11:00 AM",
    description: "Meet other students, discover campus clubs, exchange ideas, and find people who share your interests.",
    location: "Main Auditorium"
  }
];

const dialog = document.getElementById("registration-dialog");
const form = document.getElementById("registration-form");
const message = document.getElementById("form-message");

// When an event button is clicked, show its details and registration form.
document.querySelectorAll("[data-event]").forEach(function (button) {
  button.addEventListener("click", function () {
    const event = events[Number(button.dataset.event)];

    document.getElementById("dialog-title").textContent = event.title;
    document.getElementById("dialog-date").textContent = event.date;
    document.getElementById("dialog-description").textContent = event.description;
    document.getElementById("dialog-location").textContent = "LOCATION: " + event.location;
    document.getElementById("selected-event").value = event.title;

    form.reset();
    document.getElementById("selected-event").value = event.title;
    message.textContent = "";
    dialog.showModal();
  });
});

// The X button closes the popup.
document.querySelector(".close-dialog").addEventListener("click", function () {
  dialog.close();
});


// Save a registration in this browser when the form is submitted.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("student-name").value.trim();
  const email = document.getElementById("student-email").value.trim();
  const selectedEvent = document.getElementById("selected-event").value;

  if (!name || !email || !selectedEvent) {
    message.textContent = "Please complete all fields before registering.";
    return;
  }

});
