var scrollpos = window.scrollY;
var nav = document.getElementsByClassName('navbar-fixed');

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > 70) {
        nav[0].classList.add("scrolled");
    }
    else {
        nav[0].classList.remove("scrolled");
    }
});

$('#top').click(function(){ 
    $('html,body').animate({ scrollTop: 0 }, 100);
    return false; 
});

function skill(evt, lang) {
    var skillbar = document.getElementById('skillbar');
    skillbar.removeAttribute('data-bs-original-title');

    let value;
    if (lang == 'python') {
        value = '30%'
    } else if (lang == 'laravel') {
        value = '15%'
    } else if (lang == 'javascript') {
        value = '10%'
    } else if (lang == 'flutter') {
        value = '40%'
    } else if (lang == 'eat') {
        value = '100%'
    }
    skillbar.style.width = value;
    skillbar.innerHTML = value;
    skills = document.getElementsByClassName('skills');
    for (let i = 0; i < skills.length; i++) {
        skills[i].className = skills[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

};
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// $("#myCanvas").outerHeight($(window).height() - $("#myCanvas").offset().top - Math.abs($("#myCanvas").outerHeight(true) - $("#myCanvas").outerHeight()));
// $(window).on("resize", function () {
//     $("#myCanvas").outerHeight($(window).height() - $("#myCanvas").offset().top - Math.abs($("#myCanvas").outerHeight(true) - $("#myCanvas").outerHeight()));
// });
// let me = ["Frontend Developer", "Backend Developer", "Database Administrator", "Mobile Programmer", "Web Programmer", "Not Fine"];
// let random = Math.floor(Math.random() * me.length);
// document.getElementById("work").innerHTML = "Mahasiswa TI Politeknik Negeri Banyuwangi | " + me[random];

// const switcher = document.querySelector('.theme');
// switcher.addEventListener('click', function () {
//     document.body.classList.toggle('dark');
//     let tabel = document.getElementsByClassName('table');
//     tabel[0].classList.toggle('dark');
//     tabel[1].classList.toggle('dark');
//     let kelas = document.body.className;
//     if (kelas == 'dark') {
//         this.innerHTML = '<button type="button" class="btn btn-light"><i class="fas fa-sun"></i></button>';
//     } else {
//         this.innerHTML = '<button type="button" class="btn btn-dark"><i class="fas fa-moon"></i></button>';
//     }
// });