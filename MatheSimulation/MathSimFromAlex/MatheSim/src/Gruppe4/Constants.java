package Gruppe4;

public class Constants {
	public static int WINDOW_WIDTH = 1920;
	public static int WINDOW_HEIGHT = 1080;

	public static int FPS = 60;
	public static int TPF = 1000 / FPS;

	public static double TIMESCALE = 1.0;

	public static double scale = 400.0;
	public static double resolution = 100;
	public static double breitRes = 5;
	public static double laengsRes = 10;

	public static double increaseRate = 0.02;
	public static double alphaIncrease = 10;

	public static double maxTime = 15;

	public static float saturation = 1.0f;
	public static float brightness = 0.8f;

	public static Vector O = new Vector(0, 0, 0);
	public static Vector E1 = new Vector(scale, 0, 0);
	public static Vector E2 = new Vector(0, scale, 0);
	public static Vector E3 = new Vector(0, 0, scale);

	public static double[][] einheitsArray = new double[][] { { 1, 0, 0, 0 }, { 0, 1, 0, 0 }, { 0, 0, 1, 0 },
			{ 0, 0, 0, 1 } };
	public static Matrix einheitsMatrix = new Matrix(einheitsArray);

}
