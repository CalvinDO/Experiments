namespace FraktalAnimation {
    import V2 = Vector.Vector2D;
    export class Ball {
        public position: V2 = new V2(0, 0);
        public speed: V2 = new V2(0, 0);
        public radius: number;
        public level: number;
        public color: string = "";
        public colorAngle: number;
        public gradColorAngle: number;

        constructor(_x: number, _y: number, _radius: number, _level: number, _colorAngle: number) {
            this.position.setXY(_x, _y);
            this.radius = _radius;
            this.level = _level;
            this.colorAngle = _colorAngle;
            this.color = "HSLA(" + this.colorAngle + ",100%,50%, 0.6)";
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, null);
            crc2.fill();
        }

        createChildren(_nChildren: number): void {
            this.level += 1;
            this.colorAngle += gradientFactor;
            this.gradColorAngle = this.colorAngle;
            for (let i: number = 0; i < _nChildren; i++) {
                this.gradColorAngle += internGradientFactor;
                let angle: number = (i * 1 / _nChildren * 2 * Math.PI);
                let x: number = this.position.x + this.radius * Math.sin(angle);
                let y: number = this.position.y + this.radius * Math.cos(angle);
                let ball: Ball = new Ball(x, y, this.radius / sizeFactor, this.level, this.gradColorAngle);
                ball.draw();
                if (this.level < maxRecursionLevel) {
                    ball.createChildren(_nChildren);
                }
            }
        }
    }
}
