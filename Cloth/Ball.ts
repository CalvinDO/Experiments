namespace Cloth {
    import V2 = Vector.Vector2D;
    export class Ball {
        public position: V2 = new V2(0, 0);
        public speed: V2 = new V2(0, 0);
        public accels: V2[] = [];
        public resultAcc: V2;
        public radius: number;
        public color: string = "black";
        public fixed: boolean;
        public neighbours: Ball[];

        constructor(_x: number, _y: number, _r: number, _f: boolean) {
            this.position.setXY(_x, _y);
            this.radius = _r;
            this.fixed = _f;
        }

        draw(): void {
            crc2.beginPath();
            if (this.fixed) {
                this.color = "red";
            }
            crc2.fillStyle = this.color;
            crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, null);
            crc2.fill();
        }

        setNeighbours(_n: Ball[]): void {
            this.neighbours = _n;
        }

        calculate(): void {
            this.resultAcc = new V2(0, 0);
            if (!this.fixed) {
                try {
                    for (let accIndex: number = 0; accIndex < this.neighbours.length; accIndex++) {
                        //t negatedNeighPos: V2 = this.neighbours[accIndex].position.getDiff;
                        //negatedNeighPos.scale(-1);
                        let currentPull: V2 = this.neighbours[accIndex].position.getDiff(this.position);
                        this.accels.push(currentPull);
                        this.resultAcc.add(this.accels[accIndex]);
                    }
                } catch (_error) {

                }
                console.log(this.resultAcc);
                this.resultAcc.add(gravity);
                this.speed.add(this.resultAcc);
            }
        }
        move(): void {
            this.position.add(this.speed);
        }
    }
}