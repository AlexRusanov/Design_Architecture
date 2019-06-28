const changeThemeBtn = document.getElementById("changeThemeBtn"),
      sectionHeader = document.querySelectorAll(".section-header"),
      toggleSectionHeaderTheme = () => {
          sectionHeader.forEach((elem) => {
              if (elem.classList.contains("blue-section-header")) {
                  elem.classList.add("green-section-header");
                  elem.classList.remove("blue-section-header");
                  localStorage.setItem("colorTheme", "green");
              } else {
                  elem.classList.add("blue-section-header");
                  elem.classList.remove("green-section-header");
                  localStorage.setItem("colorTheme", "blue");
              }
          })
      };

let colorTheme = window.localStorage.getItem("colorTheme");

console.log(colorTheme);

switch (colorTheme) {
    case "green":
        sectionHeader.forEach((elem) => {
            elem.classList.add("green-section-header");
        });
        break;
    case "blue":
    default:
        sectionHeader.forEach((elem) => {
            elem.classList.add("blue-section-header");
        });
        break;
}

changeThemeBtn.onclick = (event) => {
    toggleSectionHeaderTheme();
};