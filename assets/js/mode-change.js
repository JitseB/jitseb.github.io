// change theme mode and save to cookie
function changeMode() {
    // detect body data-theme attribute
    let theme = document.body.getAttribute("data-theme");
    // on first load, check if user has a preference in cookie
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === null) {
        theme = isDark ? "dark" : "light";
    }
    // toggle theme
    theme = theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    // save theme preference to cookie for 1 year and set SameSite to all pages
    document.cookie = `theme=${theme}; max-age=31536000; SameSite=Lax; path=/`;
}

// add event load to check cookie for theme preference and set the theme
window.addEventListener("load", () => {
    // check if user has a preference in cookie
    const theme = getCookie("theme");
    if (theme) {
        document.body.setAttribute("data-theme", theme);
    }
});
// auto change theme based data-theme attribute
function autoChangeMode() {
    // detect body data-theme attribute
    let theme = document.body.getAttribute("data-theme");
    // on first load, check if user has a preference in cookie
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === null) {
        theme = isDark ? "dark" : "light";
    }
}

// get cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}
// make it priority to load before other scripts
document.addEventListener("DOMContentLoaded", function () {
    // add event listener to mode button
    document.getElementById("mode").addEventListener("click", changeMode);
    // add event listener to auto change mode
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", autoChangeMode);
});