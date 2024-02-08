document.addEventListener('DOMContentLoaded', function() {
    // Add your content to the scrollable div
    var scrollContent = document.querySelector('.portfolio--section--card');
    // Example content
    for (var i = 1; i <= 10; i++) {
        var item = document.createElement('div');
        item.textContent = 'Item ' + i;
        scrollContent.appendChild(item);
    }

    // Get the scroll container and buttons
    var scrollContainer = document.getElementById('portfolio--section--container');
    var leftButton = document.createElement('button');
    var rightButton = document.createElement('button');

    // Set button labels
    leftButton.innerHTML = '&lt;';
    rightButton.innerHTML = '&gt;';

    // Append buttons to the scroll container
    scrollContainer.appendChild(leftButton);
    scrollContainer.appendChild(rightButton);

    // Add event listeners to the buttons
    leftButton.addEventListener('click', function() {
        scrollContent.scrollBy({ left: -100, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', function() {
        scrollContent.scrollBy({ left: 100, behavior: 'smooth' });
    });
});
