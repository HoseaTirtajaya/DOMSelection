//DOM Selection

const judul = document.getElementById("judul"); // mengembalikan element html
judul.style.color = "red";
judul.style.background = "cyan";
judul.innerHTML = "Ini dari javaScript";

//HTMLCollections(getelementsbytagname)
//getElementsByTagName tetap me return HTMLCollections walaupun element yang terdeteksi hanya 1

const p = document.getElementsByTagName("p");
// p[0].style.background = "green";
// p[1].style.background = "green";

for (let i = 0; i < p.length; i++) {
  p[i].style.background = "#ccc";
  p[i].innerHTML = "Iye Sumpah";
}

//HTMLCollections(getElementsByClassName)
//same like above, pretty much same.

const p1 = document.getElementsByClassName("p1");

for (let i = 0; i < p1.length; i++) {
  p1[i].innerHTML =
    "Diubah dari JavaScript, HTML nya kaga kek gini, sumpah cek sendiri cok.";
}
