let input = document.querySelector('.input');

window.addEventListener('keydown' , (e) => {
    input.innerHTML = `
    <div class='innercode'>
    <table>
    <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
    </tr>
    <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `;
    let innercode = document.querySelector('.innercode').style.fontSize = '50px';
});