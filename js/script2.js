//document.querySelector()
//hanya mereturn 1 element dari html. Jika banyak tag yang dicari, maka yang di return adalah yang pertama.

const p4 = document.querySelector("#b p");
p4.style.color = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.background = "orange";

var a = document.querySelector("h1");
a.innerHTML =
  "I want to see her smile again, even if it's not reality..even if it doesn't belong to me- Future Naomi";
//document.querySelectorAll()
//mengembalikan nodelist dan mengembalikan semua element yang dicari sesuai dengan parameter tag.

const sectionA = document.getElementById("a");
const pA = sectionA.querySelectorAll("p");

for (let i = 0; i < pA.length; i++) {
  pA[i].style.background = "lightblue";
  pA[i].innerHTML = "Mantap JAVASCRIPT!!";
  if (i == "0") {
    pA[i].innerHTML = "Ini gua pisahin pake if, mampus gua rasis.";
  }
}

// scope pencarian dapat diganti
