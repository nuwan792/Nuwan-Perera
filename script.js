// Example of dynamically adding portfolio items
document.addEventListener("DOMContentLoaded", function () {
    const portfolioContainer = document.querySelector('.portfolio-items');
  
    // Fetch portfolio data from an external source (replace with your actual data fetching logic)
    fetch("portfolio-data.json")  // Example using a JSON file
      .then(response => response.json())
      .then(portfolioItems => {
        portfolioItems.forEach(item => {
          const portfolioItem = document.createElement('div');
          portfolioItem.classList.add('portfolio-item');
          portfolioItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>  <a href="${item.link}">View Project</a>  `;
          portfolioContainer.appendChild(portfolioItem);
        });
      })
      .catch(error => console.error('Error fetching portfolio data:', error));
  });
  