const visualizer = document.querySelector ('.visualizer');

let array = [];

function add_bars () {
    for (let i = 0; i < 50; ++i) {
        const bar = document.createElement ('div');
        

        const height = Math.floor (Math.random () * 500) + 5;
        bar.className = 'bar';

        bar.style.height = `${height}px`;

        visualizer.appendChild (bar);
        array.push (bar);
    }
}

add_bars ();

let prev1 = null, prev2 = null;
for (let it = 0; it < 49; ++it) {
    for (let i = 0; i < 50 - it - 1; ++i) {
        setTimeout (() => {

            if (prev1 !== null && prev2 !== null) {
                prev1.style.backgroundColor = 'blue';
                prev2.style.backgroundColor = 'blue';
            }

            let bar_left = array[i], bar_right = array[i + 1];
            prev1 = bar_left, prev2 = bar_right;
            bar_left.style.backgroundColor = 'red';
            bar_right.style.backgroundColor = 'red';

            
            const left_height = Number (bar_left.style.height.slice (0, -2));
            const right_height = Number (bar_right.style.height.slice (0, -2));

            console.log (left_height, right_height);
            if (left_height > right_height) {
                bar_left.style.height = `${right_height}px`;
                bar_right.style.height = `${left_height}px`;
            }
        }, 10 * ((it + 1) * 50 + i + 1));

    }
}

setTimeout (() => {
for (let i = 0; i < 50; ++i) {
    console.log (array[i].style.height);
} }, 8000);