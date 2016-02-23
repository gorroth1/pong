!#/usr/bin/env node

'use strict'

var PingPong = {};

PingPong.play = () {};

PingPong.play.prototype = {


  function init() {
  
  };

 function preload() {
  
    this.load.image('background','assets/Imported.piskel.png');
    this.load.spritesheet('MOOK','assets/Imported.piskel.png',46,64,2);

 };   
  function create() {
  
s.background = this.add.tileSprite(0,0,320,568,'background');
      this.background.autoScroll(0,50);
      this.background.scale.set(1);
  };
