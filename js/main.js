const email = "01di4r@gmail.com";
const typed = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const text = "Passionate software developer with a desire to learn more.";
let temp = "";
let charindex = 0;

function type() {
    if(charindex < text.length) {
        typed.textContent += text.charAt(charindex);
        charindex++;
        setTimeout(type, 80);
    }
    else {
        cursor.classList.remove('typing')
    }
}

const span = document.querySelector(".email");
const status = document.querySelector(".status");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

span.onclick = function() {
    setTimeout(document.execCommand("copy"), 2000);
    sleep(2000).then(()=>{ span.innerHTML = temp });
    sleep(4000).then(()=>{ status.classList.add("hidden")});
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", email);
    temp = span.innerHTML;
    span.innerHTML = "<div><p>"+email+"</p></div>";
    status.classList.remove("hidden")
  }
});

type();