# References
    - https://cs231n.github.io/python-numpy-tutorial/

# Classic quicksort algorithm
```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3,6,8,10,1,2,1]))
# "[1, 1, 2, 3, 6, 8, 10]"
```

# Basic data types
```python
x = 3
print(type(x))  # "<class 'int'>"
print(x)        # "3"
print(x + 1)    # "4"
print(x - 1)    # "2"
print(x * 2)    # "6"
print(x ** 2)   # "9"
x += 1
print(x)        # "4"
x *= 2
print(x)        # "8"
y = 2.5
print(type(y))  # "<class 'float'>"
print(y, y + 1, y * 2, y ** 2)  # "2.5 3.5 5.0 6.25"
```

# Booleans
```python
t = True
f = False
print(type(t))  # "<class 'bool'>"
print(t and f)  # "False"
print(t or f)   # "True"
print(not t)    # "False"
print(t != f)   # "True"
```

# Strings
```python
hello = 'hello'
world = "world"
print(hello)        # "hello"
print(len(hello))   # "5"
hw = hello + ' ' + world
print(hw)           # "hello world"
hw12 = '%s %s %d' % (hello, world, 12)
print(hw12)         # "hello world 12"
```
