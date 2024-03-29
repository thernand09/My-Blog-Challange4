// Select elements
const backButton = document.querySelector('#back');
const posts = document.querySelector('#posts');

function createObject() {
    // Clear the posts container before populating it with new content
    posts.innerHTML = '';
  
    // Check if "postArray" exists in localStorage
    const blogPostArray = JSON.parse(localStorage.getItem("postArray")) || [];
  
    // Loop through each blog post object in the array
    blogPostArray.forEach((element, index) => {
      // Create a new section element for each blog post
      const section = document.createElement('section');
      section.setAttribute('id', `blog-container-${index}`);
      section.setAttribute('class', 'post-container');
      
      // Create elements for title, content, and username
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const h4 = document.createElement('h4');
      h2.setAttribute('id', `title-${index}`);
      p.setAttribute('id', `content-${index}`);
      h4.setAttribute('id', `username-${index}`);
  
      // Append elements to the section
      section.appendChild(h2);
      section.appendChild(p);
      section.appendChild(h4);
  
      // Set text content for elements
      h2.textContent = element.title;
      p.textContent = element.content;
      h4.textContent = "Created by: " + element.username;
  
      // Append the section to the posts container
      posts.appendChild(section);
    });
  }
  

// Call the createObject function to populate posts on page load
createObject();

// Event listener for back button click
backButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Navigate to the index.html page
  window.location.href = "index.html";
});