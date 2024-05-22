document.addEventListener('DOMContentLoaded', (event) => {
    // Create the button
    const button = document.createElement('button');
    button.id = 'scrollToTopButton';
    button.innerHTML = '<img src="./public/scrollUp.svg" alt="Scroll to Top">';
   
    document.getElementById('scrollToTopButtonContainer').appendChild(button);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show the button when the user scrolls down 100px from the top of the document
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // Add click event to the button
    button.addEventListener('click', scrollToTop);
});
