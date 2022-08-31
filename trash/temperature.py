#!/usr/bin/env python3
fahrenheit= 0
print("Fahrenheit Celsius")
while fahrenheit <= 250:
    celsius = (fahrenheit -32) / 1.8 # change into fahrenheit
    print("{:5d} {:7.2f}".format(fahrenheit , celsius))
    fahrenheit = fahrenheit + 25
