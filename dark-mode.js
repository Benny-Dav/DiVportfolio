document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const header = document.querySelector('header'); // Select the header element

    // Check localStorage for saved mode
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        // Add dark mode class to body
        document.body.classList.add('dark-mode');
    
        // Show light mode icon, hide dark mode icon
        darkModeIcon.classList.add('hidden');
        lightModeIcon.classList.remove('hidden');
    
        // Save preference to localStorage
        localStorage.setItem('darkMode', 'enabled');
    }
    

    function disableDarkMode() {
        // Remove dark mode class
        document.body.classList.remove('dark-mode');
    
        // Show dark mode icon, hide light mode icon
        darkModeIcon.classList.remove('hidden');
        lightModeIcon.classList.add('hidden');
    
        // Save preference to localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
});
