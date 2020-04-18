function autoAdmit() {
    for (let element of document.getElementsByTagName('span')) {
        if (element.innerHTML === 'Admit') {
            console.log('There is someone waiting to join this meeting, automatically admitting them...');
            element.click();
        }
    }
}

console.log('Enabling Auto Admit');
setInterval(autoAdmit, 5 * 1000);
