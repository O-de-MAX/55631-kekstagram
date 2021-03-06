function prodArray(a, b) {
  var sum = 0;
  var minArray = a;
  var maxArray = b;

  if (a.length > b.length) {
    minArray = b;
    maxArray = a;
  }

  for (var i = 0; i < maxArray.length; i++) {
    if (i < minArray.length) {
      sum += minArray[i] * maxArray[i];
    } else {
      sum += maxArray[i];
    }
  }
  return sum;
}

function summArray(a) {
  var summ = 0;
  for (var i = 0; i < a.length; i++) {
    summ += a[i];
  }
  return summ;
}

function getMessage(a, b) {
  if (typeof a == 'number') {
    return 'Переданное SVG-изображение содержит ' + [a] + ' объектов и ' + [b * 4] + ' атрибутов';
  }
  else if (typeof a == 'boolean') {
    if (a == true) {
      return 'Переданное GIF-изображение анимировано и содержит ' + [b] + ' кадров';
    }
    else {
      return 'Переданное GIF-изображение не анимировано';
    }
  }
  else if (Array.isArray(a) && Array.isArray(b)) {
    return 'Общая площадь артефактов сжатия: ' + [prodArray(a, b)] + ' пикселей';
  }
  else if (Array.isArray(a)) {
    return 'Количество красных точек во всех строчках изображения: ' + [summArray(a)];
  }
}
