allData();

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

function allData() {
  table.innerHTML = ``;
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList.forEach(function (value, i) {
    var table = document.getElementById("table");
    // if(value.isComplete == 0){
    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.judul}</td>
                <td>${value.penulis}</td>
                <td>${value.tahun}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read(${
                  value.id
                },'${value.judul}','${value.penulis}',${value.tahun})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${
                      value.id
                    })">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData4(${
                      value.id
                    })">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
    // }
  });
  table2.innerHTML = ``;
  bookList2 = JSON.parse(localStorage.getItem("listItem3")) ?? [];

  bookList2.forEach(function (value2, i) {
    var table2 = document.getElementById("table2");
    // console.log(value2.isComplete);
    // if(value2.isComplete == 1){
    table2.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value2.judul}</td>
                <td>${value2.penulis}</td>
                <td>${value2.tahun}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read2(${
                  value2.id
                },'${value2.judul}','${value2.penulis}',${value2.tahun})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${
                      value2.id
                    })">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData3(${
                      value2.id
                    })">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
    // }
  });
}

function removeData3(id) {
  bookList = JSON.parse(localStorage.getItem("listItem3")) ?? [];
  bookList = bookList.filter(function (value) {
    return value.id != id;
  });
  // localStorage.clear();
  localStorage.setItem("listItem3", JSON.stringify(bookList));
  allData();
}
function removeData4(id) {
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList = bookList.filter(function (value) {
    return value.id != id;
  });
  localStorage.setItem("listItem4", JSON.stringify(bookList));
  allData();
}

function find(id) {
    bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
    bookList.forEach(function (value) {
      if (value.id == id) {
        console.log(id);
        document.getElementById("inputBookId").value = id;
        document.getElementById("inputBookTitle").value = value.judul;
        document.getElementById("inputBookAuthor").value = value.penulis;
        document.getElementById("inputBookYear").value = value.tahun;
      }
    });
  }