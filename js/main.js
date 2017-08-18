(function(){
  var Alti = function(options) {
    this.defaultAlti = options.alti || 4000;
    this.arrow = options.arrow;
    this.fallingSpeed = options.fallingSpeed || 50;
    this.start = options.startButton;
  };

  Alti.prototype = {
    init: function () {
      this.addEvents();
      this.alti = this.defaultAlti;
      this.drawArrow();
    },
    addEvents: function() {
      this.start.onclick = this.startFalling.bind(this);
    },
    setAlti: function(alti){
      this.alti = alti;
    },
    startFalling: function() {
      if (this.falling) {
        clearInterval(this.falling);
      }

      this.falling = setInterval(function(){
        this.alti -= this.fallingSpeed / 10;
        console.log(this.alti);

        if (this.alti <= 0) {
          this.alti = 0;
          clearInterval(this.falling);
        }

        this.drawArrow();
      }.bind(this), 100);
    },
    pauseFalling: function() {
      clearInterval(this.falling);
    },
  /*  stopFalling: function() {
      clearInterval(this.falling);

      this.drawArrow();
    },*/
   // reset
    drawArrow: function() {
      var deg = this.alti * 360 / 4000;
      this.arrow.style.transform = `rotate(${deg}deg)`;
    }
  }



  var alti = new Alti({
    alti: 1000,
    fallingSpeed: 200,
    startButton: document.getElementsByClassName('start')[0],
    arrow: document.getElementsByClassName('arrow')[0]
  });
  alti.init();

})()