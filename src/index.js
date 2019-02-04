import {createStore} from 'redux';



const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        case 'LOAD':
            return action.value;
        default:
            return state;
    }
};

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const reset = () => ({ type: 'RESET' });
const load = (value) => ({type: "LOAD", value});

const store = createStore(reducer);


document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
})


document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
})

document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(reset())
})

document.getElementById('load').addEventListener('click', () => {
    getConstFromDb();
});

document.getElementById('upload').addEventListener('click', () => {
    const curValue = document.getElementById('counter').innerText;
    fetch("http://localhost:3001/numbers",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"const": curValue})
        })
        .then(function(res){ alert(`New number ${curValue} has been added to DB`) })
        .catch(function(res){ console.log(res) })
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(() => {
    update();
});

async function getConstFromDb() {
        const randomId = Math.floor((Math.random() * 3) + 1);
        console.log(randomId)
        await fetch('http://localhost:3001/numbers')
            .then(response => response.json())
            .then(data => {
                store.dispatch(load(parseInt(data[randomId - 1]["const"])))
            })
            .catch(error => {
                console.log(error)
            });
    }
