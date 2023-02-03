$('body').on('click', '.button_delete', async function () {
    
     let id = $(this).data('id');
     $.ajax({
         url: '/cart/',
         method: 'DELETE',
         dataType: 'html',
         data: {text: `${id}` },
         success: function (data) {
             //$("div [class='col-6']").remove();
             console.log(data);
             $("div [class='col-6' data-id='" + data + "']").remove();
             
           }
     });
 });

 /*const buttonAdd = document.getElementById('submit');
 
 buttonAdd.addEventListener('click', function (event) {
     event.preventDefault();
     let url = window.location.pathname;
     const id = url[url.length - 1];
     let request = new XMLHttpRequest();
     request.open('POST', '/cart/' + id, true);
     request.send();
 });*/