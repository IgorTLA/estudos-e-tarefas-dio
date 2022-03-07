function fn() {
    log('hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();