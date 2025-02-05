#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

double f(double x) {
    return pow(x, 1.0/3);
}

int main() {
    double a = 0.2, b = 1.0, h = 0.2;
    int n = (b - a) / h;
    double sum = f(a) + f(b);
    double x;

    for (int i = 1; i < n; i++) {
        x = a + i * h;
        if (i % 2 == 0) {
            sum += 2 * f(x);
        } else {
            sum += 4 * f(x);
        }
    }

    double integral = (h / 3) * sum;

    cout << "The approximate value of the definite integral is: " << fixed << setprecision(4) << integral << endl;

    return 0;
}
