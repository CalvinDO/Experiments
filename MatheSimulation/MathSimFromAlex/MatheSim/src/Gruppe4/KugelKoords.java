package Gruppe4;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;

public class KugelKoords {
	public static double r = Constants.scale;
	public static double res = Constants.resolution;

	public static double currentDelta;

	public static double[][] KugelArray;
	public static Matrix KugelMatrix;
	public static Matrix projected;

	public static Vector oldPos;
	public static Vector newPos;
	public static Vector firstPos;

	public static double time;

	public static void setTime(double _time) {
		time = _time;
	}

	public static Vector getVectorFromSpherical(double _phi, double _theta) {
		double x = r * Math.cos(_theta) * Math.cos(_phi);
		double y = r * Math.cos(_theta) * Math.sin(_phi);
		double z = r * Math.sin(_theta);
		return new Vector(x, y, z);
	}

	public static void drawBreitenGrad(Graphics _g, Color _color, double _angle) {
		double theta = _angle;
		firstPos = oldPos = getVectorFromSpherical(0, theta).getProjected();
		for (int resIndex = 0; resIndex <= res; resIndex++) {
			double phi = resIndex / res * 2 * Math.PI;

			newPos = getVectorFromSpherical(phi, theta).getProjected();
			oldPos.drawConnectionTo(_g, _color, 1, newPos);
			oldPos = newPos;
		}
		oldPos.drawConnectionTo(_g, _color, 1, firstPos);
	}

	public static void drawL�ngenGrad(Graphics _g, Color _color, double _angle) {
		double phi = _angle;
		oldPos = getVectorFromSpherical(phi, -Math.PI / 2).getProjected();
		for (int resIndex = 0; resIndex <= res; resIndex++) {
			double theta = resIndex / res * Math.PI;
			theta -= Math.PI / 2;

			newPos = getVectorFromSpherical(phi, theta).getProjected();
			oldPos.drawConnectionTo(_g, _color, 1, newPos);
			oldPos = newPos;
		}
	}

	public static void drawOutline(Graphics _g, Color _color) {
		double s1 = YourGraphicsContent.s1;
		double alpha = YourGraphicsContent.alpha;

		double phiP = -Math.atan(-s1 * Math.sin(Math.toRadians(alpha)));
		double thetaP = -Math.atan(s1 * Math.cos(Math.toRadians(alpha)) * Math.cos(phiP));

		double phi = Math.PI / 2;
		for (int resIndex = 0; resIndex <= res; resIndex++) {
			double theta = (resIndex / res) * 2 * Math.PI;
			theta -= Math.PI / 2;

			newPos = (Matrix.createRotationZ(phiP)
					.times(Matrix.createRotationY(thetaP).times(getVectorFromSpherical(phi, theta)))).getProjected();

			oldPos = resIndex == 0 ? newPos : oldPos;
			oldPos.drawConnectionTo(_g, _color, 3, newPos);
			oldPos = newPos;
		}
	}

	public static double distanceOnCircle(double _delta) {
		return r * _delta;
	}

	public static void drawGeodesic(Graphics _g, Color _color, Vector _p, Vector _q, OBJReader _meshObject,
			boolean _isPrimary) {
		double delta = _p.angleBetweenRad(_q);

		if (time <= Constants.maxTime) {
			currentDelta = time / Constants.maxTime * delta;
		}

		Vector pDach = _p.normalize();
		Vector nDach = _p.kreuzprodukt(_q).normalize();
		Vector uDach = nDach.kreuzprodukt(pDach).normalize();

		// F�r Visualisierung
		/*
		if (_isPrimary) {
			_p.drawConnectionTo(_g, Color.RED, 4, pDach.times(Constants.scale / 2).getAdded(_p));
			_p.drawConnectionTo(_g, Color.GREEN, 4, uDach.times(Constants.scale / 2).getAdded(_p));
			_p.drawConnectionTo(_g, Color.BLUE, 4, nDach.times(Constants.scale / 2).getAdded(_p));
		}
*/
		drawRotatedEquatorPart(_g, _color, currentDelta, Matrix.createFromPUN(pDach, uDach, nDach), _meshObject, _q);
	}

	public static void drawRotatedEquatorPart(Graphics _g, Color _color, double _delta, Matrix _drehMatrix,
			OBJReader _meshObject, Vector _goal) {
		double theta = 0;

		Vector cartFromSphere = getVectorFromSpherical(0, theta).getProjected();
		for (int resIndex = 0; resIndex <= res; resIndex++) {
			double phi = resIndex / res * _delta;

			cartFromSphere = getVectorFromSpherical(phi, theta);
			newPos = _drehMatrix.times(cartFromSphere).getProjected();

			firstPos = resIndex == 0 ? oldPos = newPos : firstPos;

			oldPos.drawConnectionTo(_g, _color, 5, newPos);
			oldPos = newPos;
		}

		Vector objectPos = _drehMatrix.times(cartFromSphere);

		Vector pDach = objectPos.normalize();
		Vector nDach = objectPos.kreuzprodukt(_goal).normalize();
		Vector uDach = nDach.kreuzprodukt(pDach).normalize();

		Matrix drehung = Matrix.createFromPUN(pDach, uDach, nDach);

		_meshObject.drawTranslRotFaces(_g, Color.GREEN, Color.WHITE, 120, 1, Constants.E1, drehung);
	}
}