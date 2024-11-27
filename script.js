function editarInfo(pokemon) {
    const infoAtual = {
        descricao: document.getElementById(pokemon + '_descricao').innerText,
        tipagem: document.getElementById(pokemon + '_tipagem').innerText,
        fraquezas: document.getElementById(pokemon + '_fraquezas').innerText,
        vantagens: document.getElementById(pokemon + '_vantagens').innerText,
        status: document.getElementById(pokemon + '_status').innerText
    };
    localStorage.setItem('currentInfo', JSON.stringify({ [pokemon]: infoAtual }));
    window.location.href = 'edit.html';
}

window.onload = function() {
    const atualizarInfo = localStorage.getItem('atualizarInfo');
    if (atualizarInfo) {
        const info = JSON.parse(atualizarInfo);

        Object.keys(info).forEach(pokemon => {
            const data = info[pokemon];
            document.getElementById(pokemon + '_descricao').innerText = data.descricao;
            document.getElementById(pokemon + '_tipagem').innerText = data.tipagem;
            document.getElementById(pokemon + '_fraquezas').innerText = data.fraquezas;
            document.getElementById(pokemon + '_vantagens').innerText = data.vantagens;
            document.getElementById(pokemon + '_status').innerText = data.status;
        });

        localStorage.removeItem('atualizarInfo');
    }
};
