$('body').on('click', '.button_add', async function () {
    let url = window.location.pathname;
    const id = url[url.length - 1];
    $.ajax({
        url: '/cart/' + id,
        contentType: 'application/json',
        method: 'POST',
        success: function (massage) {
           alert(massage);
          }
    });
});

/*const buttonAdd = document.getElementById('add');

buttonAdd.addEventListener('click', function (event) {
    event.preventDefault();
    let url = window.location.pathname;
    const id = url[url.length - 1];
    let request = new XMLHttpRequest();
    request.open('POST', '/cart/' + id, true);
    request.send();
});*/