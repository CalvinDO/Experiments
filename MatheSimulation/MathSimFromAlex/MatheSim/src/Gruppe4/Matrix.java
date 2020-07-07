package Gruppe4;

public class Matrix {

	private final int M; // number of rows/zeilen
	private final int N; // number of columns/spalten
	private final double[][] data;

	public Matrix(int _M, int _N) {
		this.M = _M;
		this.N = _N;
		data = new double[M][N];
	}

	public Matrix(double[][] _data) {
		M = _data.length;
		N = _data[0].length;
		this.data = new double[M][N];
		for (int rowIndex = 0; rowIndex < M; rowIndex++) {
			for (int colIndex = 0; colIndex < N; colIndex++) {
				this.data[rowIndex][colIndex] = _data[rowIndex][colIndex];
			}
		}
	}

	public static Matrix createRotationX(double _angle) {
		return new Matrix(new double[][] { { 1, 0, 0, 0 }, { 0, Math.cos(_angle), -Math.sin(_angle), 0 },
				{ 0, Math.sin(_angle), Math.cos(_angle), 0 }, { 0, 0, 0, 1 } });
	}

	public static Matrix createRotationY(double _angle) {
		return new Matrix(new double[][] { { Math.cos(_angle), 0, -Math.sin(_angle), 0 }, { 0, 1, 0, 0 },
				{ Math.sin(_angle), 0, Math.cos(_angle), 0 }, { 0, 0, 0, 1 } });
	}

	public static Matrix createRotationZ(double _angle) {
		return new Matrix(new double[][] { { Math.cos(_angle), -Math.sin(_angle), 0, 0 },
				{ Math.sin(_angle), Math.cos(_angle), 0, 0 }, { 0, 0, 1, 0 }, { 0, 0, 0, 1 } });
	}

	public static Matrix createFromPUN(Vector _p, Vector _u, Vector _n) {
		return new Matrix(new double[][] { { _p.getX(), _u.getX(), _n.getX(), 0 },
				{ _p.getY(), _u.getY(), _n.getY(), 0 }, { _p.getZ(), _u.getZ(), _n.getZ(), 0 }, { 0, 0, 0, 1 } });
	}

	public Matrix times(Matrix _B) {
		Matrix A = this;
		if (A.N != _B.M) {
			throw new RuntimeException("Illegal Matrix Dimensions!");
		}
		Matrix result = new Matrix(A.M, _B.N);
		for (int rowIndex = 0; rowIndex < result.M; rowIndex++) {
			for (int colIndex = 0; colIndex < result.N; colIndex++) {
				for (int k = 0; k < A.N; k++) {
					result.data[rowIndex][colIndex] += (A.data[rowIndex][k] * _B.data[k][colIndex]);
				}
			}
		}
		return result;
	}
	public Vector times(Vector _input) {
		Matrix A = this;
		Matrix vecM = _input.dataM;
		
		if (A.N != vecM.M) {
			throw new RuntimeException("Illegal Matrix Dimensions!");
		}
		Matrix result = new Matrix(A.M, vecM.N);
		for (int rowIndex = 0; rowIndex < result.M; rowIndex++) {
			for (int colIndex = 0; colIndex < result.N; colIndex++) {
				for (int k = 0; k < A.N; k++) {
					result.data[rowIndex][colIndex] += (A.data[rowIndex][k] * vecM.data[k][colIndex]);
				}
			}
		}
		return new Vector(result.getX(), result.getY(), result.getZ());
	}

	public Vector getProjected() {
		Matrix projected = YourGraphicsContent.projMatrix.times(this);
		Vector coordinates = new Vector(projected.getX(), projected.getY(), 0.0);
		return coordinates;
	}

	public double getX() {
		return data[0][0];
	}

	public double getY() {
		return data[1][0];
	}

	public double getZ() {
		return this.data[2][0];
	}

	public void show() {
		for (int rowIndex = 0; rowIndex < M; rowIndex++) {
			for (int colIndex = 0; colIndex < N; colIndex++) {
				System.out.printf("%9.4f ", data[rowIndex][colIndex]);
			}
			System.out.println();
		}
	}
}
