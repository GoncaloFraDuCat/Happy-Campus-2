// include.js
async function includeHTML(file, elementId) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}

// Call this function to include components
window.addEventListener('DOMContentLoaded', () => {
    includeHTML('head.html', 'head-content');
    includeHTML('navbar.html', 'navbar-content');
});