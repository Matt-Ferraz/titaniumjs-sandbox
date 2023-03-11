$.win.addEventListener('open', function() {
  var listViewAnimation = Ti.UI.createAnimation({
    opacity: 1,
    duration: 500
  });
  $.listView.animate(listViewAnimation);
});

$.win.open()