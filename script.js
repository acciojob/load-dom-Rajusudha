//your JS code here. If required.
  // Add an event listener for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', function() {
      // Code to be executed when the DOM is fully loaded
      var messageParagraph = document.createElement('p');
      messageParagraph.textContent = 'DOM load success';
      document.body.innerHTML = ''; // Clear the body content
      document.body.appendChild(messageParagraph);
    });