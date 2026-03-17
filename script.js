$(document).ready(function() {
    $(".main-container").addClass("show");
    
    // 페이지 로드 시와 창 크기 조절 시 배율 조정 실행
    $(window).on('resize', function() {
        adjustLayoutScale();
    });
    adjustLayoutScale();
});
$(document).on('click', '.center-img-area', function(e) {
    e.preventDefault();

    $(".main-container").removeClass("show");

    $(".sub-container").addClass("show");
})

$(document).on('click', '.btn', function(e) {
    e.preventDefault();
    $(".sub-center-img-area").children().remove();

    const id = $(this).attr("id");
    console.log(id);
    const img = $('<img>').attr('src', `./assets/260317/orgImg/${id}.png`);
    $(".sub-center-img-area").append(img);
})

function adjustLayoutScale() {
    const targetWidth = 1920;
    const targetHeight = 1080;
    
    // 현재 브라우저의 실제 가용 가로/세로 크기
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 1920x1080 대비 현재 창의 비율 중 더 작은 값을 선택 (화면에 꽉 차게)
    const scale = Math.min(windowWidth / targetWidth, windowHeight / targetHeight);
    
    // main-container와 sub-container에 배율 적용
    // 중앙을 기준으로 축소/확대되도록 설정합니다.
    $(".main-container, .sub-container").css({
        "transform": `scale(${scale})`,
        "transform-origin": "center center",
        "width": `${targetWidth}px`,
        "height": `${targetHeight}px`,
        "position": "fixed",
        "left": "50%",
        "top": "50%",
        "margin-left": `-${targetWidth / 2}px`,
        "margin-top": `-${targetHeight / 2}px`
    });
}