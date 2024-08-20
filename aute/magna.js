function scrollToPosition(x, y) {
    // Assuming `x` and `y` are coordinates relative to the scroll view

    // Get a reference to your scroll view element
    // Replace 'scroll-view' with the actual ID or class of your scroll view element
    var scrollView = document.getElementById('scroll-view'); // Use getElementById if it's an ID, or querySelector for class

    if (scrollView) {
        // Use `scrollTo` method to scroll to the specified position
        scrollView.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'  // Optional: Adds smooth scrolling effect
        });
    }
}
