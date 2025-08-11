const weatherData = [
    { city: "Seoul", temp: "24°C", desc: "맑음" },
    { city: "Busan", temp: "20°C", desc: "흐림" },
    { city: "Jeju", temp: "22°C", desc: "비" },
];
const btn    = document.querySelector('.btn_refresh');
const cityEl = document.querySelector('.temp p');
const tempEl = document.querySelector('.temp strong');

btn.addEventListener('click', function () {
    if (d.desc === '맑음') {
        iconEl.src = './images/rain_icon.png';
        heroEl.src = './images/rain_img.png';
        descEl.textContent = '오늘은 맑아요. 가벼운 옷차림을 추천해요.';
    } else if (d.desc === '흐림') {
        iconEl.src = './images/rain_icon.png';
        heroEl.src = './images/rain_img.png';
        descEl.textContent = '구름이 많아요. 일교차에 유의하세요.';
    } else {
        iconEl.src = './images/rain_icon.png';
        heroEl.src = './images/rain_img.png';
        descEl.textContent = '오늘은 비가 내립니다. 우산을 챙겨주세요.';
    }
});
