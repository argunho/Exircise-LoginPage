var local = localStorage;
var wrapper = document.getElementById("wrapper");
var presentation = document.getElementById("presentation");
var p01 = document.getElementById("p_title");
var p02 = document.getElementById("p_student");
var p03 = document.getElementById("p_seconds");
var p04 = document.getElementById("p_start");
var login = document.getElementById("login");
var error = document.getElementById("error");
var success = document.getElementById("success");
var welcome = document.getElementById("welcome");
var form = document.getElementById("loginForm");

setStart();

// Check is user logged in or not
function checkAuth() {
    return local.getItem("name") == name;
}

// Set start
function setStart() {
    if (checkAuth()) {
        wrapper.classList.add("wrapper-bg");
        wrapper.classList.add("wrapper-scale");
        presentation.style.display = "none";
        doc.classList.remove("none");
        success.classList.add("success-changed");
        document.getElementById("success_msg").innerHTML = "Välkommen tillbaka Test";
        setBackground(success, "wrapper-success");
    } else {
        var sec = 0;
        var seconds = 3;
        var interval = setInterval(function() {
            sec += 1;
            p03.innerHTML = (seconds -= 1);

            if (sec == 3) {
                clearInterval(interval);
                hide();
            }
        }, 1000);
    }
}

// Get login form
function getStart() {
    presentation.style.display = "none";
    wrapper.classList.add("wrapper-bg");
    setTimeout(function() {
        setBackground(login, "wrapper-login");
        setTimeout(function() {
            welcome.classList.remove("none")
        }, 100)
        setTimeout(function() {
            wrapper.classList.add("wrapper-scale");
        }, 1000)
    }, 1500)
}

// Form reset
function resetForm() {
    document.querySelector('form').reset();
}

// Set background
function setBackground(param, val, skip = false) {
    var sec01 = 100;
    var sec02 = 2500;
    if (skip)
        sec01 = sec02 = 0;
    if (checkAuth())
        sec02 = 700;
    setTimeout(function() {
        wrapper.classList.add(val);
        param.classList.remove("none");
        setTimeout(function() {
            welcome.classList.add("none");
            param.classList.add("opacity");
            resetForm();
        }, sec02)
    }, sec01)
}

var name = "test";
var pass = "1234";

// Submit function
function submitForm() {
    var input_name = document.getElementById("name").value;
    var input_pass = document.getElementById("password").value;
    if (name == input_name && pass == input_pass) {
        local.setItem("name", input_name);
        login.classList.add("none");
        doc.classList.remove("none");
        setBackground(success, "wrapper-success", true);
    } else {
        login.classList.add("none")
        setBackground(error, "wrapper-error", true);
    }
}

// Try again
function tryAgain() {
    error.classList.add("none");
    wrapper.classList.remove("wrapper-error");
    setBackground(login, "wrapper-login", true);
}

// Close window
function closeForm() {
    var cl = ["login", "error", "success"];
    login.classList.add("none");
    error.classList.add("none");
    success.classList.add("none");
    wrapper.classList.remove("wrapper-scale");
    setTimeout(function() {
        for (var i in cl) {
            wrapper.classList.remove("wrapper-" + cl[i]);
            login.classList.remove("opacity");
            error.classList.remove("opacity");
            success.classList.remove("opacity");
        }
        setTimeout(function() {
            wrapper.classList.remove("wrapper-bg");
            presentation.removeAttribute("style");
            success.classList.remove("success-changed");
            document.getElementById("success_msg").innerHTML = "Välkommen Test";
        }, 1500)
    }, 1200)

    showHideText(true);
}

// Log out
function logOut() {
    local.removeItem("name");
    doc.classList.add("none");
    hide();
    closeForm();
}

// Hide variables
function hide() {
    p01.classList.add("opacity-0");
    p02.classList.add("opacity-0");
    p03.classList.add("opacity-0");
    p04.classList.add("p-visible-start");
}

// Show or hide text about how coden work
function showHideText(close = false) {
    var cl = "visible-text-div";
    var doc = document.getElementById("doc");
    var btn = document.getElementById("show_hide");

    if (doc.classList.contains(cl) || close) {
        success.classList.remove("minimize-block");
        doc.classList.remove(cl);
        btn.innerHTML = "Hur funkar koden?";
        btn.removeAttribute("style");
    } else {
        success.classList.add("minimize-block");
        doc.classList.add(cl);
        btn.innerHTML = "Dölj text block";
        btn.style.backgroundColor = "#cc0000";
    }
}