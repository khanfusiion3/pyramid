const generatePyramid = function(x = 0, y = 0, rows = 10, radius = 25, stack = []) {
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      stack.push(new Body(new Circle(radius), x - (((radius * 2) / 2) + ((j - i / 2) * (radius * 2))), (radius * 2) * (i + 1)));
    }
  }
  return stack;
};
