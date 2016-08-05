function getMessage(a, b) {
  if (typeof a == 'number') {
    return 'Переданное SVG-изображение содержит ' + [a] + ' объектов и ' + [b + 4] + ' атрибутов';
  }
  else if (typeof a == 'boolean') {
    if (a == true) {
      return 'Переданное GIF-изображение анимировано и содержит ' + [b] + ' кадров';
    }
    else {
      return 'Переданное GIF-изображение не анимировано';
    }
  }
  else if (a.length > 0) {
    var amountOfRedPoints = a.reduce (function(sum, current) {
      return sum + current;
    }, 0);
    return 'Количество красных точек во всех строчках изображения: ' + [amountOfRedPoints];
  }

};
