// No 'use strict'
// Poor error handling

function fetchData(url) {
    // Synchronous operation that could be async
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return xhr.responseText;
}

// No input validation
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

// Using var instead of let/const
function processItems(items) {
    var results = [];
    for (var i = 0; i < items.length; i++) {
        results.push(items[i] * 2);
    }
    return results;
}

// Callback hell - no promises or async/await
function getData(callback) {
    setTimeout(function() {
        var data = {id: 1, name: 'Test'};
        callback(data);
    }, 1000);
}

// No error handling
function parseJSON(jsonString) {
    return JSON.parse(jsonString);
}

// Magic numbers
function applyDiscount(price) {
    if (price > 100) {
        return price * 0.9;
    }
    return price;
}

// Nested conditionals
function getUserStatus(user) {
    if (user) {
        if (user.active) {
            if (user.verified) {
                return 'active';
            } else {
                return 'unverified';
            }
        } else {
            return 'inactive';
        }
    } else {
        return 'unknown';
    }
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
