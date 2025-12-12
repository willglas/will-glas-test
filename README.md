# will-glas-test

A demonstration project showcasing code quality improvements, security best practices, and performance optimizations.

## Overview

This repository demonstrates common code issues and their improvements, including:

- **Security improvements**: Removing `eval()`, proper credential management
- **Error handling**: Comprehensive try-catch blocks and input validation
- **Performance optimizations**: Algorithm improvements (O(n²) to O(n))
- **Code quality**: Proper documentation, type hints, and naming conventions
- **Modern practices**: Using async/await, const/let, and functional programming

## Project Structure

```
.
├── app.py              # Python module with improved code quality
├── utils.js            # JavaScript module with modern ES6+ practices
├── requirements.txt    # Python dependencies with version pinning
├── package.json        # Node.js configuration with linting scripts
├── IMPROVEMENTS.md     # Detailed list of improvements made
└── README.md          # This file
```

## Key Improvements

### Python (app.py)

1. **Security**: Replaced `eval()` with `ast.literal_eval()` for safe input processing
2. **Resource Management**: Used context managers for file handling
3. **Performance**: Optimized duplicate detection from O(n²) to O(n)
4. **Credentials**: Moved hard-coded credentials to environment variables
5. **Documentation**: Added comprehensive docstrings with type hints
6. **Error Handling**: Added try-catch blocks and proper logging
7. **Validation**: Input validation for all functions

### JavaScript (utils.js)

1. **Modern Syntax**: Replaced `var` with `const`/`let`
2. **Async/Await**: Converted callbacks to Promises and async/await
3. **Error Handling**: Added try-catch blocks and input validation
4. **Code Quality**: Used guard clauses to reduce nesting
5. **Constants**: Replaced magic numbers with named constants
6. **API**: Replaced deprecated XMLHttpRequest with fetch API
7. **Functional**: Used map/reduce for cleaner transformations

### Dependency Management

1. **Version Pinning**: Added version constraints to prevent breaking changes
2. **Dev Tools**: Added ESLint and Prettier for code quality
3. **Scripts**: Added lint and format commands

## Installation

### Python Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Node.js Setup

```bash
# Install dependencies
npm install
```

## Usage

### Running Python Code

```bash
python app.py
```

### Linting JavaScript

```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## Environment Variables

The application uses environment variables for configuration:

```bash
# Database credentials
export DB_HOST=localhost
export DB_PORT=5432
export DB_USER=your_username
export DB_PASSWORD=your_password
```

## Best Practices Demonstrated

1. **Never hard-code credentials** - Use environment variables
2. **Validate all inputs** - Check types and ranges
3. **Handle errors gracefully** - Use try-catch and proper logging
4. **Use modern language features** - async/await, type hints
5. **Document your code** - Clear docstrings and comments
6. **Pin dependencies** - Ensure reproducible builds
7. **Follow conventions** - Use linters and formatters
8. **Optimize performance** - Choose efficient algorithms
9. **Security first** - Avoid dangerous functions like eval()
10. **Clean code** - Meaningful names, simple logic, DRY principle

## Security Considerations

This project demonstrates several security improvements:

- ✅ Removed use of `eval()` (arbitrary code execution vulnerability)
- ✅ Moved credentials to environment variables
- ✅ Added input validation to prevent injection attacks
- ✅ Used safe JSON parsing with error handling
- ✅ Implemented proper error handling without exposing internals

## Performance Improvements

- **Duplicate Detection**: Changed from O(n²) nested loops to O(n) using set
- **Async Operations**: Used async/await for non-blocking I/O
- **Functional Programming**: Used map/reduce for efficient transformations

## License

ISC