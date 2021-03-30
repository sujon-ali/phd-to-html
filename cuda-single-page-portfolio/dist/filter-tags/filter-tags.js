(function () {
  var $items = $('#gallery .item');
  var $buttons = $('#filter-buttons');
  var tagged = {};

  $items.each(function () {
    var item = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function (tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(item);
      });
    }
  });

  $('<button/>', {
    text: 'SHOW ALL',
    class: 'active',
    click: function () {
      $(this).addClass('active').siblings().removeClass('active');
      $items.show('slow');
    },
  }).appendTo($buttons);

  $.each(tagged, function (tagName) {
    $('<button/>', {
      text: tagName,
      // text: tagName + ' (' + tagged[tagName].length + ')',
      click: function () {
        $(this).addClass('active').siblings().removeClass('active');
        $items.hide('slow').filter(tagged[tagName]).show('slow');
      },
    }).appendTo($buttons);
  });
})();
