'use strict';

/**
 * Utility module with improved code quality, error handling, and modern JavaScript practices.
 * 
 * Improvements include:
 * - Using modern async/await instead of callbacks
 * - Proper error handling with try-catch
 * - Input validation
 * - const/let instead of var
 * - Named constants instead of magic numbers
 * - Simplified conditional logic
 */

// Constants for magic numbers
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.9;
const DEFAULT_TIMEOUT = 1000;

/**
 * Fetch data from a URL using modern fetch API with proper error handling.
 * 
 * @param {string} url - The URL to fetch data from
 * @returns {Promise<string>} The response text
 * @throws {Error} If the URL is invalid or fetch fails
 */
async function fetchData(url) {
    // Input validation
    if (!url || typeof url !== 'string') {
        throw new Error('Invalid URL: must be a non-empty string');
    }

    try {
        // Use modern fetch API instead of XMLHttpRequest
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.text();
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        throw error;
    }
}

/**
 * Calculate the total price from an array of items with validation.
 * 
 * @param {Array<{price: number}>} items - Array of items with price property
 * @returns {number} The total price
 * @throws {TypeError} If items is not an array or contains invalid items
 */
function calculateTotal(items) {
    // Input validation
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }

    if (items.length === 0) {
        return 0;
    }

    // Use reduce for more functional approach
    return items.reduce((total, item) => {
        if (!item || typeof item.price !== 'number' || isNaN(item.price)) {
            throw new TypeError('Each item must have a valid numeric price property');
        }
        return total + item.price;
    }, 0);
}

/**
 * Process items by doubling their values.
 * 
 * @param {Array<number>} items - Array of numbers to process
 * @returns {Array<number>} Array of doubled values
 * @throws {TypeError} If items is not an array of numbers
 */
function processItems(items) {
    // Input validation
    if (!Array.isArray(items)) {
        throw new TypeError('items must be an array');
    }

    // Use map for functional transformation
    return items.map(item => {
        if (typeof item !== 'number' || isNaN(item)) {
            throw new TypeError('All items must be valid numbers');
        }
        return item * 2;
    });
}

/**
 * Get data asynchronously using Promise instead of callbacks.
 * 
 * @returns {Promise<{id: number, name: string}>} A promise that resolves with data
 */
function getData() {
    // Return a Promise instead of using callbacks
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Test' };
            resolve(data);
        }, DEFAULT_TIMEOUT);
    });
}

/**
 * Safely parse JSON string with error handling.
 * 
 * @param {string} jsonString - The JSON string to parse
 * @returns {any} The parsed object
 * @throws {Error} If the string is not valid JSON
 */
function parseJSON(jsonString) {
    // Input validation
    if (typeof jsonString !== 'string') {
        throw new TypeError('Input must be a string');
    }

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error.message);
        throw new Error(`Invalid JSON string: ${error.message}`);
    }
}

/**
 * Apply discount to price based on threshold using named constants.
 * 
 * @param {number} price - The original price
 * @returns {number} The price after discount
 * @throws {TypeError} If price is not a valid number
 */
function applyDiscount(price) {
    // Input validation
    if (typeof price !== 'number' || isNaN(price)) {
        throw new TypeError('price must be a valid number');
    }

    if (price < 0) {
        throw new RangeError('price must be non-negative');
    }

    // Use named constants instead of magic numbers
    return price > DISCOUNT_THRESHOLD ? price * DISCOUNT_RATE : price;
}

/**
 * Get user status with simplified conditional logic using guard clauses.
 * 
 * @param {Object} user - The user object
 * @param {boolean} user.active - Whether the user is active
 * @param {boolean} user.verified - Whether the user is verified
 * @returns {string} The user status
 */
function getUserStatus(user) {
    // Early return pattern (guard clauses) to reduce nesting
    if (!user) {
        return 'unknown';
    }

    if (!user.active) {
        return 'inactive';
    }

    if (!user.verified) {
        return 'unverified';
    }

    return 'active';
}

module.exports = {
    fetchData,
    calculateTotal,
    processItems,
    getData,
    parseJSON,
    applyDiscount,
    getUserStatus
};
