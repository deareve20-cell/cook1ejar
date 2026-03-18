$(document).ready(function () {
    $('.main-container').addClass('show');
});

$(document).on('click', '.center-img-area', function (e) {
    e.preventDefault();

    $('.main-container').removeClass('show');

    $('.sub-container').addClass('show');
});

$(document).on('click', '.btn', function (e) {
    e.preventDefault();
    $('.sub-center-img-area').children().remove();

    const id = $(this).attr('id');
    console.log(id);
    const img = $('<img>').attr('src', `./assets/260317/orgImg/${id}.png`);
    $(".sub-center-img-area").append(img);
})
