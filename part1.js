class part1 extends Phaser.Scene {
  constructor() {
    super({key:'part1'});
  }
  preload() {
    this.load.image('stickgun', 'assets/stickgun.png');
  }
  create(){
    this.image = this.add.image(400,300,'stickgun');

    this.input.keyboard.on('keyup_D', function(event){
      this.image.x += 10;
    },this);

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.input.on('pointerdown', function(event){
      this.image.x = event.x;
      this.image.y = event.y;
    },this);

    this.input.keyboard.on('keyup_P', function(event){
      var physicsImage = this.physics.add.image(this.image.x, this.image.y, "stickgun");
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100),-300);
    },this);
  }
  update(delta){
    if(this.key_A.isDown)
      this.image.x--;
  }
}
