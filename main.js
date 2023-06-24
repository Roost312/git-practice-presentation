// JavaScript

const colors = [
    {
        color: 'red',
        size: '100%',
    },
    {
        color: 'purple',
        size: '80%',
    },
    {
        color: 'blue',
        size: '60%',
    },
    {
        color: 'yellow',
        size: '40%',
    },
    {
        color: 'orange',
        size: '20%',
    },
    {
        color: 'pink',
        size: '10%',
    }
];

const squaresDiv = document.getElementById('squares');

for (let i = 0; i < 6; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = colors[i].color;
    newDiv.style.width = colors[i].size;
    newDiv.style.height = '100px';
    squaresDiv.appendChild(newDiv);
}

for (let i = 0; i < 6; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = colors[i].color;
    newDiv.style.width = colors[i].size;
    newDiv.style.height = '100px';
    squaresDiv.appendChild(newDiv);
}