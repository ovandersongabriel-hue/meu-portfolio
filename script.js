const botaoAceitar = document.getElementById('accept-cookies');
const banner = document.getElementById('cookie-banner');

if (localStorage.getItem('lgpd-aceito') === 'sim') {
    banner.style.display = 'none';
}

function esconderBanner() {
    banner.style.display = 'none';
    localStorage.setItem('lgpd-aceito', 'sim');
}

botaoAceitar.addEventListener('click', esconderBanner);