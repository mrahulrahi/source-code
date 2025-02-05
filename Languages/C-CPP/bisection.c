#include <stdio.h>
#include <math.h>

double f(double x) {
    return x*x*x - 5*x + 1;
}

void bisection(double a, double b, double tol) {
    if (f(a) * f(b) >= 0) {
        printf("Invalid interval.\n");
        return;
    }
    
    double c;
    while ((b - a) / 2.0 > tol) {
        c = (a + b) / 2.0;
        if (f(c) == 0.0) break;
        else if (f(c) * f(a) < 0) b = c;
        else a = c;
    }
    
    printf("Root: %.6f\n", c);
}

int main() {
    double a = 1, b = 2, tol = 0.0001;
    bisection(a, b, tol);
    return 0;
}


#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a[3][4], x, y, z;

    // Input the coefficients and constants
    cout << "Enter the coefficients and constants:\n";
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cin >> a[i][j];
        }
    }

    // Perform Gauss-Elimination
    for (int i = 0; i < 2; i++) {
        for (int j = i + 1; j < 3; j++) {
            double ratio = a[j][i] / a[i][i];
            for (int k = 0; k < 4; k++) {
                a[j][k] = a[j][k] - ratio * a[i][k];
            }
        }
    }

    // Back-substitution
    z = a[2][3] / a[2][2];
    y = (a[1][3] - a[1][2] * z) / a[1][1];
    x = (a[0][3] - a[0][1] * y - a[0][2] * z) / a[0][0];

    cout << "\nSolution:\n";
    cout << "x = " << fixed << setprecision(2) << x << "\n";
    cout << "y = " << fixed << setprecision(2) << y << "\n";
    cout << "z = " << fixed << setprecision(2) << z << "\n";

    return 0;
}
