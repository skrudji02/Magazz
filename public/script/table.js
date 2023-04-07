$('body').on('click', '.button_delete', function () {
  let id = $(this).data('id');
  console.log(id);
  let promise = fetch('/admin/acoustic_guitars/' + id, {
  method: 'DELETE'
}).then(
  response => {
          return window.location.reload();  //$("form[data-id='" + id + "']").remove();
  }
)
});




  function openAdd(){
    window.open("http://localhost:3000/admin/acoustic_guitars/add", "hello", "width=200,height=400");
  }
