$(".button-collapse").sideNav();

$('body').on('click', '.button-collapse', function() {
    window.alert('too bad :(. This event will never be triggered because the sideNav is stopping propagation.');
}); 