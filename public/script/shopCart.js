$('body').on('click', '.button_delete', function () {
    let id = $(this).data('id');
    console.log(id)
    let promise = fetch('/cart/' + id, {
		method: 'DELETE'
	}).then(
		response => {
            return window.location.reload(true);  //$("form[data-id='" + id + "']").remove();
		}
	)
 });

 /*$('body').on('click', '.button_delete', function () {
    let id = $(this).data('id');
    $.ajax({
        url: '/cart/',
        method: 'DELETE',
        dataType: 'html',
        data: {text: `${id}` },
        success: async function (data) {
            $("form[data-id='" + data + "']").remove();
            //$(window).prop(location.href);
          }
    });
 });*/