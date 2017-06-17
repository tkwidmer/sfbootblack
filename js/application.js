$(document).ready(function() {
    // show active tab on reload
    // if (location.hash !== '') {
    //   $('a[href="' + location.hash + '"]').tab('show');
    // }

    // remember the hash in the URL without jumping
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
