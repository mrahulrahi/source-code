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
