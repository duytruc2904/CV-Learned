"use strict";
// check email
document.querySelector(".check").addEventListener("click", function () {
  let email = document.querySelector("#email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    document.querySelector(".thongbaoloiemail").textContent =
      "Hay nhap dia chi email hop le.\nExample@gmail.com";
  } else {
    document.querySelector(".emailxacthuc").classList.remove("hidden");
    document.querySelector(".formemail").classList.add("hidden");
  }
});

// kinh nghiem
const viewmorekn = document.querySelector(".viewmorekinhnghiemjs");
const viewkn = document.querySelector(".viewkinhnghiemjs");
const kn = document.querySelector(".kinhnghiemjs");

viewmorekn.addEventListener("mouseover", function () {
  viewkn.classList.toggle("hiddenjs");
});
viewmorekn.addEventListener("mouseout", function () {
  viewkn.classList.toggle("hiddenjs");
});

viewkn.addEventListener("click", function () {
  if (viewkn.textContent == "view more") {
    viewkn.textContent = "view less";
    viewmorekn.classList.remove("heightjs");
  } else {
    viewkn.textContent = "view more";
    viewmorekn.classList.add("heightjs");
  }

  kn.classList.toggle("hidden");
});

// hocvan
const viewmorehv = document.querySelector(".viewmorehocvanjs");
const viewhv = document.querySelector(".viewhocvanjs");
const hv = document.querySelector(".hocvanjs");

viewmorehv.addEventListener("mouseover", function () {
  viewhv.classList.toggle("hiddenjs");
});
viewmorehv.addEventListener("mouseout", function () {
  viewhv.classList.toggle("hiddenjs");
});

viewhv.addEventListener("click", function () {
  if (viewhv.textContent == "view more") {
    viewhv.textContent = "view less";
    viewmorehv.classList.remove("heightjs");
  } else {
    viewhv.textContent = "view more";
    viewmorehv.classList.add("heightjs");
  }

  hv.classList.toggle("hidden");
});

// hoatdong
const viewmorehd = document.querySelector(".viewmorehoatdongjs");
const viewhd = document.querySelector(".viewhoatdongjs");
const hd = document.querySelector(".hoatdongjs");

viewmorehd.addEventListener("mouseover", function () {
  viewhd.classList.toggle("hiddenjs");
});
viewmorehd.addEventListener("mouseout", function () {
  viewhd.classList.toggle("hiddenjs");
});

viewhd.addEventListener("click", function () {
  if (viewhd.textContent == "view more") {
    viewhd.textContent = "view less";
    viewmorehd.classList.remove("heightjs");
  } else {
    viewhd.textContent = "view more";
    viewmorehd.classList.add("heightjs");
  }

  hd.classList.toggle("hidden");
});

// sothich
const viewmorest = document.querySelector(".viewmoresothichjs");
const viewst = document.querySelector(".viewsothichjs");
const st = document.querySelector(".sothichjs");

viewmorest.addEventListener("mouseover", function () {
  viewst.classList.toggle("hiddenjs");
});
viewmorest.addEventListener("mouseout", function () {
  viewst.classList.toggle("hiddenjs");
});

viewst.addEventListener("click", function () {
  if (viewst.textContent == "view more") {
    viewst.textContent = "view less";
    viewmorest.classList.remove("heightjs");
  } else {
    viewst.textContent = "view more";
    viewmorest.classList.add("heightjs");
  }

  st.classList.toggle("hidden");
});

// ngonngu
const viewmorenn = document.querySelector(".viewmorengonngujs");
const viewnn = document.querySelector(".viewngonngujs");
const nn = document.querySelector(".ngonngujs");

viewmorenn.addEventListener("mouseover", function () {
  viewnn.classList.toggle("hiddenjs");
});
viewmorenn.addEventListener("mouseout", function () {
  viewnn.classList.toggle("hiddenjs");
});

viewnn.addEventListener("click", function () {
  if (viewnn.textContent == "view more") {
    viewnn.textContent = "view less";
    viewmorenn.classList.remove("heightjs");
  } else {
    viewnn.textContent = "view more";
    viewmorenn.classList.add("heightjs");
  }

  nn.classList.toggle("hidden");
});

// kinang
const viewmoreknn = document.querySelector(".viewmorekinangjs");
const viewknn = document.querySelector(".viewkinangjs");
const knn = document.querySelector(".kinangjs");

viewmoreknn.addEventListener("mouseover", function () {
  viewknn.classList.toggle("hiddenjs");
});
viewmoreknn.addEventListener("mouseout", function () {
  viewknn.classList.toggle("hiddenjs");
});

viewknn.addEventListener("click", function () {
  if (viewknn.textContent == "view more") {
    viewknn.textContent = "view less";
    viewmoreknn.classList.remove("heightjs");
  } else {
    viewknn.textContent = "view more";
    viewmoreknn.classList.add("heightjs");
  }

  knn.classList.toggle("hidden");
});
//offsetHeight
