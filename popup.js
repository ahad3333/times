document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", startCounting);

  function startCounting() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValue = birthdateInput.value;

    if (!birthdateValue) {
      alert("Please select a valid birthdate.");
      return;
    }

    const dateOfBirth = new Date(birthdateValue);
    updateElapsedTime(dateOfBirth);

    setInterval(function () {
      updateElapsedTime(dateOfBirth);
    }, 100);
  }

  function updateElapsedTime(dateOfBirth) {
    const currentDate = new Date();
    const timeSince = currentDate - dateOfBirth;

    const milliseconds = timeSince % 1000;
    const seconds = Math.floor((timeSince / 1000) % 60);
    const minutes = Math.floor((timeSince / 1000 / 60) % 60);
    const hours = Math.floor((timeSince / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeSince / (1000 * 60 * 60 * 24));

    const timeSinceElement = document.getElementById("timeSince");
    const timeElement = document.getElementById("times");
    timeSinceElement.textContent = `Time since ${dateOfBirth.toDateString()}`;
    timeElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, and ${milliseconds} milliseconds.`
  }
});







