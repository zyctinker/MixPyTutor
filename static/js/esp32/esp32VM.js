class mixgo{
  led = {
    "led1": 0,
    "led2": 0,
    setonoff: function (op,bright) {
      this['led'+ op] = bright;
    },
    getonoff: function (op) {
      return this['led'+ op];
    }
  }
}
