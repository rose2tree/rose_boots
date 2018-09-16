$(document).ready(() => {
  $('.close-alert').click(() => {
    $('.alert').alert('close');

  });
  $('.carousel').carousel({
    interval: 1000
  })
})
