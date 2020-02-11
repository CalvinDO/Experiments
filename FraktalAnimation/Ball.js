var FraktalAnimation;
(function (FraktalAnimation) {
    var V2 = Vector.Vector2D;
    class Ball {
        constructor(_x, _y, _radius, _level, _colorAngle) {
            this.position = new V2(0, 0);
            this.speed = new V2(0, 0);
            this.color = "";
            this.position.setXY(_x, _y);
            this.radius = _radius;
            this.level = _level;
            this.colorAngle = _colorAngle;
            this.color = "HSLA(" + this.colorAngle + ",100%,50%, 0.6)";
        }
        draw() {
            FraktalAnimation.crc2.beginPath();
            FraktalAnimation.crc2.fillStyle = this.color;
            FraktalAnimation.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, null);
            FraktalAnimation.crc2.fill();
        }
        createChildren(_nChildren) {
            this.level += 1;
            this.colorAngle += FraktalAnimation.gradientFactor;
            this.gradColorAngle = this.colorAngle;
            for (let i = 0; i < _nChildren; i++) {
                this.gradColorAngle += FraktalAnimation.internGradientFactor;
                let angle = ((Math.PI / 32) * FraktalAnimation.rotationAngle) + (i * 1 / _nChildren * FraktalAnimation.currentSpread * Math.PI);
                let x = this.position.x + this.radius * Math.sin(angle);
                let y = this.position.y + this.radius * Math.cos(angle);
                let ball = new Ball(x, y, this.radius / FraktalAnimation.sizeFactor, this.level, this.gradColorAngle);
                ball.draw();
                if (this.level < FraktalAnimation.maxRecursionLevel) {
                    ball.createChildren(_nChildren);
                }
            }
        }
    }
    FraktalAnimation.Ball = Ball;
})(FraktalAnimation || (FraktalAnimation = {}));
//# sourceMappingURL=Ball.js.map