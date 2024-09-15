// Clicking the profile image changes the page color
const themeSwitcher = document.getElementById("theme-switcher");

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);