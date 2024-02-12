function save() {
  var read = document.getElementById("inputBookIsComplete");
  if (read.checked == true) {
    bookList = JSON.parse(localStorage.getItem("listItem3")) ?? [];
    var id;
    bookList.length != 0
      ? bookList.findLast((item) => (id = item.id))
      : (id = 0);

    if (document.getElementById("inputBookId").value) {
      bookList.forEach((value) => {
        if (document.getElementById("inputBookId").value == value.id) {
          (value.judul = document.getElementById("inputBookTitle").value),
            (value.penulis = document.getElementById("inputBookAuthor").value),
            (value.tahun = document.getElementById("inputBookYear").value),
            (value.isRead = 1);
        }
      });
      document.getElementById("id").value = "";
    } else {
      var item = {
        id: id + 1,
        judul: document.getElementById("inputBookTitle").value,
        penulis: document.getElementById("inputBookAuthor").value,
        tahun: document.getElementById("inputBookYear").value,
        isRead: 1,
      };
      bookList.push(item);
    }
    localStorage.setItem("listItem3", JSON.stringify(bookList));
  } else {
    bookList2 = JSON.parse(localStorage.getItem("listItem4")) ?? [];
    var id;
    bookList2.length != 0
      ? bookList.findLast((item) => (id = item.id))
      : (id = 0);
    if (document.getElementById("inputBookId").value) {
      bookList2.forEach((value) => {
        if (document.getElementById("inputBookId").value == value.id) {
          (value.judul = document.getElementById("inputBookTitle").value),
            (value.penulis = document.getElementById("inputBookAuthor").value),
            (value.tahun = document.getElementById("inputBookYear").value),
            (value.isRead = 0);
        }
      });
      document.getElementById("inputBookId").value = "";
    } else {
      var item = {
        id: id + 1,
        judul: document.getElementById("inputBookTitle").value,
        penulis: document.getElementById("inputBookAuthor").value,
        tahun: document.getElementById("inputBookYear").value,
        isRead: 0,
      };
      bookList2.push(item);
    }
    localStorage.setItem("listItem4", JSON.stringify(bookList2));
  }
  allData();
  document.getElementById("form").reset();
}

function allData() {}

function removedata() {}

function find(id) {}

function read() {}
