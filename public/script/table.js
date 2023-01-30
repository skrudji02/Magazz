function openObject(id){
    const table = document.querySelector(".entry-title").textContent;
    window.open("http://localhost:3000/admin/room/" + table + '/' + id, "_self");
  }

  function openAdd(){
    const table = document.querySelector(".entry-title").textContent;
    window.open("http://localhost:3000/admin/room/" + table + '/add', "hello", "width=200,height=400");
  }