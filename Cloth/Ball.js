var Cloth;
(function (Cloth) {
    var V2 = Vector.Vector2D;
    class Ball {
        constructor(_x, _y, _r, _f) {
            this.position = new V2(0, 0);
            this.speed = new V2(0, 0);
            this.accels = [];
            this.color = "black";
            this.position.setXY(_x, _y);
            this.radius = _r;
            this.fixed = _f;
        }
        draw() {
            Cloth.crc2.beginPath();
            if (this.fixed) {
                this.color = "red";
            }
            Cloth.crc2.fillStyle = this.color;
            Cloth.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, null);
            Cloth.crc2.fill();
        }
        setNeighbours(_n) {
            this.neighbours = _n;
        }
        calculate() {
            this.resultAcc = new V2(0, 0);
            if (!this.fixed) {
                try {
                    for (let accIndex = 0; accIndex < this.neighbours.length; accIndex++) {
                        //t negatedNeighPos: V2 = this.neighbours[accIndex].position.getDiff;
                        //negatedNeighPos.scale(-1);
                        let currentPull = this.neighbours[accIndex].position.getDiff(this.position);
                        this.accels.push(currentPull);
                        this.resultAcc.add(this.accels[accIndex]);
                    }
                }
                catch (_error) {
                }
                console.log(this.resultAcc);
                this.resultAcc.add(Cloth.gravity);
                this.speed.add(this.resultAcc);
            }
        }
        move() {
            this.position.add(this.speed);
        }
    }
    Cloth.Ball = Ball;
})(Cloth || (Cloth = {}));
//# sourceMappingURL=Ball.js.map