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

function bubble_sort () {
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

    prev1.style.backgroundColor = 'red';
    prev2.style.backgroundColor = 'red';
}

// bubble_sort ();

let active_algorithms = ['a', 'b', 'c', 'd', 'e'];
];

function gcd (a, b) {
    if (a === 0) {
        return b;
    }
    return gcd (b % a, a);
}


function clear_algos () {
    while (visualizer.firstChild) {
        visualizer.removeChild (visualizer.firstChild);
    }
}

function run_algorithms () {

    clear_algos ();

    let num_active = active_algorithms.length;

    let top = Math.floor ((num_active + 1) / 2);
    let bottom = num_active - x;
    let lcm = x * y / gcd (x, y);


    visualizer.style.setProperty ('grid-template-columns', `repeat(${lcm}, 1fr)`);


    for (let i = 0; i < num_active; ++i) {

        const sorting_algo = document.createElement ('div');
        elem.className = active_algorithms[i];

        visualizer.appendChild (sorting_algo);
    }

    let need_to_span_top = lcm / top;
    let need_to_span_bottom = lcm / bottom;

    for (let i = 0; i < top; ++i) {
        const cell = document.querySelector (`.${active_algorithms[i]}`);
        cell.style.setProperty ('grid-column', `span ${need_to_span_top}`);
    }

    for (let i = top; i < active_algorithms; ++i) {
        const cell = document.querySelector (`.${active_algorithms[i]}`);
        cell.style.setProperty ('grid-column', `span ${need_to_span_bottom}`);
    }

}

run_algorithms();

console.log (visualizer.style);
const val = window.getComputedStyle (visualizer);
console.log (val.getPropertyValue ('grid-template-columns'));
