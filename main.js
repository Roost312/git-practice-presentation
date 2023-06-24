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
    const newSpan = document.createElement('div');
    console.log(newSpan)
    newSpan.style.backgroundColor = colors[i].color;
    newSpan.style.width = colors[i].size;
    newSpan.style.height = '100px';
    squaresDiv.appendChild(newSpan);
}