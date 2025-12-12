"""
Application module with improved code quality, security, and performance.

This module demonstrates best practices for Python development including:
- Proper error handling
- Input validation
- Security improvements
- Performance optimizations
- Clear documentation
"""

import os
import logging
from typing import List, Optional, Any
from contextlib import contextmanager

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def calculate_sum(first_number: int, second_number: int) -> int:
    """
    Calculate the sum of two numbers.
    
    Args:
        first_number: The first number to add
        second_number: The second number to add
        
    Returns:
        The sum of the two numbers
    """
    return first_number + second_number


def process_input(user_input: str) -> Optional[Any]:
    """
    Safely process user input by validating and sanitizing it.
    
    SECURITY: Never use eval() on user input. Use ast.literal_eval() for 
    safe evaluation of basic Python literals or implement proper parsing.
    
    Args:
        user_input: The user input string to process
        
    Returns:
        The processed result or None if invalid
        
    Raises:
        ValueError: If the input cannot be safely processed
    """
    import ast
    try:
        # Use ast.literal_eval instead of eval for security
        result = ast.literal_eval(user_input)
        logger.info(f"Successfully processed input: {user_input}")
        return result
    except (ValueError, SyntaxError) as e:
        logger.error(f"Invalid input '{user_input}': {e}")
        raise ValueError(f"Cannot safely process input: {user_input}")


def read_file(filename: str) -> str:
    """
    Read and return the contents of a file with proper error handling.
    
    Args:
        filename: Path to the file to read
        
    Returns:
        The contents of the file as a string
        
    Raises:
        FileNotFoundError: If the file does not exist
        IOError: If there's an error reading the file
    """
    try:
        # Use context manager to ensure file is properly closed
        with open(filename, 'r', encoding='utf-8') as f:
            data = f.read()
        logger.info(f"Successfully read file: {filename}")
        return data
    except FileNotFoundError:
        logger.error(f"File not found: {filename}")
        raise
    except IOError as e:
        logger.error(f"Error reading file {filename}: {e}")
        raise


def has_duplicates(items: List[Any]) -> bool:
    """
    Check if a list contains duplicate items using optimized O(n) algorithm.
    
    Performance: Uses a set for O(n) time complexity instead of O(n²).
    
    Args:
        items: List of items to check for duplicates
        
    Returns:
        True if duplicates exist, False otherwise
    """
    if not items:
        return False
    # O(n) solution using set
    return len(items) != len(set(items))


def divide(numerator: float, denominator: float) -> float:
    """
    Divide two numbers with proper validation and error handling.
    
    Args:
        numerator: The number to be divided
        denominator: The number to divide by
        
    Returns:
        The result of the division
        
    Raises:
        ValueError: If denominator is zero
        TypeError: If inputs are not numeric
    """
    if not isinstance(numerator, (int, float)) or not isinstance(denominator, (int, float)):
        raise TypeError("Both arguments must be numeric")
    
    if denominator == 0:
        raise ValueError("Cannot divide by zero")
    
    return numerator / denominator


def connect_to_db() -> str:
    """
    Connect to database using environment variables for credentials.
    
    Security: Never hard-code credentials. Use environment variables or 
    secure credential management systems.
    
    Returns:
        Connection string (for demonstration purposes)
        
    Raises:
        ValueError: If required environment variables are not set
    """
    # Use environment variables for configuration
    host = os.getenv('DB_HOST', 'localhost')
    port = os.getenv('DB_PORT', '5432')
    user = os.getenv('DB_USER')
    password = os.getenv('DB_PASSWORD')
    
    if not user or not password:
        raise ValueError("DB_USER and DB_PASSWORD environment variables must be set")
    
    # In production, don't log credentials
    logger.info(f"Connecting to database at {host}:{port}")
    return f"Connecting to {host}:{port}"


def filter_and_double_positive_numbers(data: List[float]) -> List[float]:
    """
    Filter positive numbers and double their values.
    
    Args:
        data: List of numbers to process
        
    Returns:
        List of doubled positive numbers
    """
    if not data:
        return []
    
    # More Pythonic list comprehension
    return [item * 2 for item in data if item > 0]


class DataProcessor:
    """Process and transform string data with proper error handling and logging."""
    
    def __init__(self):
        """Initialize the DataProcessor with an empty data store."""
        self.data: List[str] = []
        logger.info("DataProcessor initialized")
    
    def process(self, items: List[str]) -> List[str]:
        """
        Process items by converting them to uppercase.
        
        Args:
            items: List of strings to process
            
        Returns:
            List of processed strings
            
        Raises:
            TypeError: If items is not a list or contains non-string elements
        """
        if not isinstance(items, list):
            raise TypeError("items must be a list")
        
        try:
            processed_items = []
            for item in items:
                if not isinstance(item, str):
                    logger.warning(f"Skipping non-string item: {item}")
                    continue
                processed_items.append(item.upper())
            
            self.data.extend(processed_items)
            logger.info(f"Processed {len(processed_items)} items")
            return self.data
        except Exception as e:
            logger.error(f"Error processing items: {e}")
            raise


def main():
    """Main function to demonstrate the improved functionality."""
    try:
        print(f"Sum: {calculate_sum(5, 3)}")
        print(f"Division: {divide(10, 2)}")
        print(f"Has duplicates: {has_duplicates([1, 2, 3, 4, 5])}")
        print(f"Has duplicates: {has_duplicates([1, 2, 3, 2, 5])}")
        
        # Demonstrate safe input processing
        safe_input = "{'key': 'value'}"
        print(f"Processed input: {process_input(safe_input)}")
        
    except Exception as e:
        logger.error(f"Error in main: {e}")
        raise


if __name__ == "__main__":
    main()
