feather.replace();
const st = () => {
    var ze = $('.sidebar').width();
    $('.wrapper').css('--marleft',ze+'px');
    $('.select-control').select2();
}
$(document).ready(function() {
    st();
});
$(window).resize(function() {
    st();
})
$('.sidebar-backdrop').click(function() {
    $('.sidebar').toggleClass('collapse');
})