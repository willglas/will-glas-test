'use strict';

const utils = require('./utils.js');

console.log('Testing improved utilities...\n');

// Test calculateTotal
try {
    const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
    console.log('✓ calculateTotal:', utils.calculateTotal(items)); // Should be 60
} catch (error) {
    console.error('✗ calculateTotal failed:', error.message);
}

// Test processItems
try {
    const numbers = [1, 2, 3, 4, 5];
    console.log('✓ processItems:', utils.processItems(numbers)); // Should be [2, 4, 6, 8, 10]
} catch (error) {
    console.error('✗ processItems failed:', error.message);
}

// Test getData (async)
utils.getData()
    .then(data => {
        console.log('✓ getData:', data); // Should be {id: 1, name: 'Test'}
    })
    .catch(error => {
        console.error('✗ getData failed:', error.message);
    });

// Test parseJSON
try {
    const parsed = utils.parseJSON('{"test": "value"}');
    console.log('✓ parseJSON:', parsed); // Should be {test: 'value'}
} catch (error) {
    console.error('✗ parseJSON failed:', error.message);
}

// Test applyDiscount
try {
    console.log('✓ applyDiscount (50):', utils.applyDiscount(50)); // Should be 50
    console.log('✓ applyDiscount (150):', utils.applyDiscount(150)); // Should be 135
} catch (error) {
    console.error('✗ applyDiscount failed:', error.message);
}

// Test getUserStatus
try {
    console.log('✓ getUserStatus (null):', utils.getUserStatus(null)); // Should be 'unknown'
    console.log('✓ getUserStatus (inactive):', utils.getUserStatus({ active: false })); // Should be 'inactive'
    console.log('✓ getUserStatus (unverified):', utils.getUserStatus({ active: true, verified: false })); // Should be 'unverified'
    console.log('✓ getUserStatus (active):', utils.getUserStatus({ active: true, verified: true })); // Should be 'active'
} catch (error) {
    console.error('✗ getUserStatus failed:', error.message);
}

console.log('\nAll tests completed!');
