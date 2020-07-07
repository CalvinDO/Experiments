package Gruppe4;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;

public class Vector {
	private final double[][] data;
	public final Matrix dataM;

	public Vector(double _x1, double _x2, double _x3) {
		this.data = new double[][] { { _x1 }, { _x2 }, { _x3 }, { 1 } };
		this.dataM = new Matrix(this.data);
	}

	public Vector getProjected() {
		Matrix projected = YourGraphicsContent.projMatrix.times(dataM);
		Vector coordinates = new Vector(projected.getX(), projected.getY(), 0.0);
		return coordinates;
	}

	public void draw(Graphics _g, Color _color, int _thickness) {
		_g.setColor(_color);
		Graphics2D g2 = (Graphics2D) _g;
		g2.setStroke(new BasicStroke(_thickness));
		g2.setColor(_color);
		g2.drawLine((int) Constants.O.getProjected().getX(), (int) Constants.O.getProjected().getY(),
				(int) this.getProjected().getX(), (int) this.getProjected().getY());
	}

	public void drawAsDot(Graphics _g, Color _color, int _radius) {
		_g.setColor(_color);
		_g.fillOval((int) this.getProjected().getX(), (int) this.getProjected().getY(), _radius, _radius);
	}

	public void drawConnectionTo(Graphics _g, Color _color, float _thickness, Vector _goal) {
		_g.setColor(_color);
		Graphics2D g2 = (Graphics2D) _g;
		g2.setStroke(new BasicStroke(_thickness));
		g2.drawLine((int) this.getX(), (int) this.getY(), (int) _goal.getX(), (int) _goal.getY());
	}

	public double getX() {
		return this.data[0][0];
	}

	public double getY() {
		return this.data[1][0];
	}

	public double getZ() {
		return this.data[2][0];
	}

	public double getLength() {
		double length = Math.sqrt(Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2) + Math.pow(this.getZ(), 2));
		return length;
	}

	public Vector normalize() {
		Vector result;
		result = new Vector(this.getX() / this.getLength(), this.getY() / this.getLength(),
				this.getZ() / this.getLength());
		return result;
	}

	public Vector kreuzprodukt(Vector _b) {
		double x1 = this.getY() * _b.getZ() - this.getZ() * _b.getY();
		double x2 = this.getZ() * _b.getX() - this.getX() * _b.getZ();
		double x3 = this.getX() * _b.getY() - this.getY() * _b.getX();

		Vector kreuzprodukt = new Vector(x1, x2, x3);

		return kreuzprodukt;
	}

	public Vector times(double _scalar) {
		Vector result;
		result = new Vector(this.getX() * _scalar, this.getY() * _scalar, this.getZ() * _scalar);
		return result;
	}

	public Vector getAdded(Vector _input) {

		Vector result;

		result = new Vector(this.getX() + _input.getX(), this.getY() + _input.getY(), this.getZ() + _input.getZ());
		return result;

	}

	public Vector getRotated(Matrix _rotation) {

		Vector result;
		Matrix resultMatrix = _rotation.times(dataM);

		result = new Vector(resultMatrix.getX(), resultMatrix.getY(), resultMatrix.getZ());

		return result;

	}

	public void add(Vector _input) {
		this.data[0][0] += _input.getX();
		this.data[1][0] += _input.getY();
		this.data[2][0] += _input.getZ();
	}

	public double angleBetweenRad(Vector _input) {
		double result;
		result = Math.acos(this.dotProduct(_input) / (this.getLength() * _input.getLength()));
		return result;
	}

	public double angleBetweenDeg(Vector _input) {
		double result;
		result = Math.acos(this.dotProduct(_input) / (this.getLength() * _input.getLength()));
		return Math.toDegrees(result);
	}

	public double dotProduct(Vector _b) {
		double result;
		result = this.getX() * _b.getX() + this.getY() * _b.getY() + this.getZ() * _b.getZ();
		return result;
	}

	public void show() {
		System.out.println("Vector: ");
		System.out.println(this.getX());
		System.out.println(this.getY());
		System.out.println(this.getZ());
		System.out.println("--------");
	}

}