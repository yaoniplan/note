#!/usr/bin/env python3
amount = float(input("Enter amount: ")) # Enter your amount
inrate = float(input("Enter Interest rate: ")) # Enter your Interest rate
period = int(input("Enter period: ")) # Enter your period
value = 0
year = 1
while year <= period:
    value = amount + (inrate * amount)
    print("Year {} Rs. {:.2f}".format(year, value))
    amount = value
    year = year + 1
