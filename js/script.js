// Exibir alerta de promoção
const promoElements = document.querySelectorAll('.promo');

promoElements.forEach(promo => {
    promo.addEventListener('click', () => {
        alert('Você clicou na promoção! Confira mais detalhes no site!');
    });
});


const atrasos = document.querySelectorAll('tr');

atrasos.forEach(tr => {
    const status = tr.querySelector('td:last-child').textContent;
    if (status.toLowerCase() === 'atrasado') {
        tr.style.backgroundColor = '#ffcccc'; // Destacar voos atrasados
    }
});


// Função para capturar o envio do formulário e exibir uma mensagem
document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const dataEntrada = document.getElementById('dataEntrada').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const vaga = document.getElementById('vaga').value;

    // Exibe uma mensagem com as informações da reserva
    alert(`Reserva confirmada! \n\nNome: ${nome}\nData de Entrada: ${dataEntrada}\nHora de Entrada: ${horaEntrada}\nTipo de Vaga: ${vaga === 'coberta' ? 'Coberta' : 'Descoberta'}`);
});


// Exemplo de interação: Alerta ao clicar em um restaurante
const parceirosLinks = document.querySelectorAll('#parceiros ul li a');

parceirosLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        alert(`Você está visitando o site de: ${link.textContent}`);
    });
});


// Adicionando interação: Destacar voos com alterações de horário
const alteracoesLista = document.querySelectorAll('#alteracoes-horarios ul li');

alteracoesLista.forEach(item => {
    const status = item.textContent.toLowerCase();
    if (status.includes('atraso') || status.includes('alterado')) {
        item.style.backgroundColor = '#ffcccc'; // Destacar voos alterados ou atrasados
    }
});