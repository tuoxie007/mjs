let x = 1, y = 2, z = 3;

let f = function(x, t) {
  let f2 = function(y) {
    return x - z + y;
  };
  return f2(7);
};

let o = {
  x: function(y) {
    return y * y;
  },
  y: function() {
    return this.z;
  },
  z: 123
};

f(5, 1) === 9 && o.x(12) === 144;
