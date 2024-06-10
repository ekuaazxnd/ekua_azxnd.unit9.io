document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');

    
        
    scrollContainer.addEventListener('wheel', function(event) {
        // Check if the element is scrollable
        if (scrollContainer.scrollHeight > scrollContainer.clientHeight) {
            // Prevent page scrolling when scrolling inside the scrollable element
            event.preventDefault();
            // Scroll the element instead
            scrollContainer.scrollTop += event.deltaY;
        }
    });
});
