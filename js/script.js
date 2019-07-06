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

//Anchors smooth scrolling
$(document).ready(function(){
    $(".header-menu-item").on('click', function(event) {
        $('html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800)
    });
});

//Btn to top
const $btn = $('.btn-to-top');

$(document).scroll(function() {

    let $heightClient = $(window).innerHeight();

    ($(window).scrollTop() > $heightClient) ? $('.btn-to-top').fadeIn('slow'): $('.btn-to-top').fadeOut('slow');
});

$btn.click(function() {
    $('html').animate({scrollTop: 0}, 800)
});

//slideToggle Hot News
$(".btn-toggle-news").html("Hide news");
const btnToggleNews = document.querySelector(".btn-toggle-news");
$(".btn-toggle-news").click(function() {
    $("#section4").slideToggle("slow");
    (btnToggleNews.innerText === "Hide news") ? btnToggleNews.innerText = "Show news": btnToggleNews.innerText = "Hide news";
});