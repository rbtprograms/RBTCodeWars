function validatePIN (pin) {
    if(pin.length === 4) {
        result = /[0-9]{4}/g.test(pin)
    }
    else if (pin.length === 6) {
        result = /[0-9]{6}/g.test(pin)
    }
    else {
        result = false
    };
    return result;
}