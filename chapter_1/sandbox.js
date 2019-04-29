// get a refference to the 'ul'

const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // creat html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;