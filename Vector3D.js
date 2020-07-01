var Vector;
(function (Vector) {
    class Vector3D {
        constructor(values) {
            this.epsilon = 0.00001;
            this.values = new Float32Array(3);
            if (values !== undefined) {
                this.xyz = values;
            }
        }
        get x() {
            return this.values[0];
        }
        get y() {
            return this.values[1];
        }
        get z() {
            return this.values[2];
        }
        get xy() {
            return [
                this.values[0],
                this.values[1],
            ];
        }
        get xyz() {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
            ];
        }
        set x(value) {
            this.values[0] = value;
        }
        set y(value) {
            this.values[1] = value;
        }
        set z(value) {
            this.values[2] = value;
        }
        set xy(values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        }
        set xyz(values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        }
        at(index) {
            return this.values[index];
        }
        reset() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        copy(dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = this.x;
            dest.y = this.y;
            dest.z = this.z;
            return dest;
        }
        negate(dest) {
            if (!dest) {
                dest = this;
            }
            dest.x = -this.x;
            dest.y = -this.y;
            dest.z = -this.z;
            return dest;
        }
        length() {
            return Math.sqrt(this.squaredLength());
        }
        equals(vector, threshold = this.epsilon) {
            if (Math.abs(this.x - vector.x) > threshold) {
                return false;
            }
            if (Math.abs(this.y - vector.y) > threshold) {
                return false;
            }
            if (Math.abs(this.z - vector.z) > threshold) {
                return false;
            }
            return true;
        }
        squaredLength() {
            const x = this.x;
            const y = this.y;
            const z = this.z;
            return (x * x + y * y + z * z);
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
            return this;
        }
        subtract(vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            this.z -= vector.z;
            return this;
        }
        multiply(vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
            return this;
        }
        divide(vector) {
            this.x /= vector.x;
            this.y /= vector.y;
            this.z /= vector.z;
            return this;
        }
        scale(value, dest) {
            if (!dest) {
                dest = this;
            }
            dest.x *= value;
            dest.y *= value;
            dest.z *= value;
            return dest;
        }
        normalize(dest) {
            if (!dest) {
                dest = this;
            }
            let length = this.length();
            if (length === 1) {
                return this;
            }
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                dest.z = 0;
                return dest;
            }
            length = 1.0 / length;
            dest.x *= length;
            dest.y *= length;
            dest.z *= length;
            return dest;
        }
        static cross(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            const x = vector.x;
            const y = vector.y;
            const z = vector.z;
            const x2 = vector2.x;
            const y2 = vector2.y;
            const z2 = vector2.z;
            dest.x = y * z2 - z * y2;
            dest.y = z * x2 - x * z2;
            dest.z = x * y2 - y * x2;
            return dest;
        }
        static dot(vector, vector2) {
            const x = vector.x;
            const y = vector.y;
            const z = vector.z;
            const x2 = vector2.x;
            const y2 = vector2.y;
            const z2 = vector2.z;
            return (x * x2 + y * y2 + z * z2);
        }
        static distance(vector, vector2) {
            const x = vector2.x - vector.x;
            const y = vector2.y - vector.y;
            const z = vector2.z - vector.z;
            return Math.sqrt(this.squaredDistance(vector, vector2));
        }
        static squaredDistance(vector, vector2) {
            const x = vector2.x - vector.x;
            const y = vector2.y - vector.y;
            const z = vector2.z - vector.z;
            return (x * x + y * y + z * z);
        }
        static direction(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            const x = vector.x - vector2.x;
            const y = vector.y - vector2.y;
            const z = vector.z - vector2.z;
            let length = Math.sqrt(x * x + y * y + z * z);
            if (length === 0) {
                dest.x = 0;
                dest.y = 0;
                dest.z = 0;
                return dest;
            }
            length = 1 / length;
            dest.x = x * length;
            dest.y = y * length;
            dest.z = z * length;
            return dest;
        }
        static mix(vector, vector2, time, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = vector.x + time * (vector2.x - vector.x);
            dest.y = vector.y + time * (vector2.y - vector.y);
            dest.z = vector.z + time * (vector2.z - vector.z);
            return dest;
        }
        static sum(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = vector.x + vector2.x;
            dest.y = vector.y + vector2.y;
            dest.z = vector.z + vector2.z;
            return dest;
        }
        static difference(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = vector.x - vector2.x;
            dest.y = vector.y - vector2.y;
            dest.z = vector.z - vector2.z;
            return dest;
        }
        static product(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = vector.x * vector2.x;
            dest.y = vector.y * vector2.y;
            dest.z = vector.z * vector2.z;
            return dest;
        }
        static quotient(vector, vector2, dest) {
            if (!dest) {
                dest = new Vector3D();
            }
            dest.x = vector.x / vector2.x;
            dest.y = vector.y / vector2.y;
            dest.z = vector.z / vector2.z;
            return dest;
        }
    }
    Vector3D.zero = new Vector3D([0, 0, 0]);
    Vector3D.one = new Vector3D([1, 1, 1]);
    Vector3D.up = new Vector3D([0, 1, 0]);
    Vector3D.right = new Vector3D([1, 0, 0]);
    Vector3D.forward = new Vector3D([0, 0, 1]);
    Vector.Vector3D = Vector3D;
})(Vector || (Vector = {}));
//# sourceMappingURL=Vector3D.js.map