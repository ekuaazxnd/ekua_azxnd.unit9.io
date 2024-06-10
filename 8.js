document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');

     // Change cursor to click-cursor.png on mousedown
    body.addEventListener('mousedown', function() {
        body.style.cursor = 'url(eyes4.png), auto';
    });

    // Revert cursor to default-cursor.png on mouseup
    body.addEventListener('mouseup', function() {
        body.style.cursor = 'url(eyes3.png), auto';
        
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
