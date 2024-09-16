// Clicking the profile image changes the page color
const themeSwitcher = document.getElementById("theme-switcher");

function determineNewTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    return newTheme;
}

function switchToNewButtonText(newTheme) {
    const newButtonText = newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    themeSwitcher.innerHTML = newButtonText;
}

function switchToNewTheme() {
    const newTheme = determineNewTheme();
    switchToNewButtonText(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
}

// Event Listener
themeSwitcher.addEventListener('click', switchToNewTheme);