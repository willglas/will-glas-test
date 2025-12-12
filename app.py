import os
import sys

# Bad practice: No docstrings, poor variable names
def calc(a, b):
    return a + b

# Security issue: Using eval
def process_input(user_input):
    result = eval(user_input)
    return result

# No error handling
def read_file(filename):
    f = open(filename, 'r')
    data = f.read()
    return data

# Poor performance: O(n^2) when O(n) is possible
def has_duplicates(items):
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[i] == items[j]:
                return True
    return False

# No input validation
def divide(x, y):
    return x / y

# Hard-coded values
def connect_to_db():
    host = "localhost"
    port = 5432
    user = "admin"
    password = "password123"
    return f"Connecting to {host}:{port} with {user}:{password}"

# Poor naming and structure
def do_stuff(data):
    temp = []
    for item in data:
        if item > 0:
            temp.append(item * 2)
    return temp

# No logging or error handling
class DataProcessor:
    def __init__(self):
        self.data = []
    
    def process(self, items):
        for item in items:
            self.data.append(item.upper())
        return self.data

if __name__ == "__main__":
    print(calc(5, 3))
    print(divide(10, 2))
    print(has_duplicates([1, 2, 3, 4, 5]))
