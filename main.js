const rates = document.querySelectorAll('.selections ul li'),
      btn = document.querySelector('.submit'),
      container = document.querySelector('.container'),
      userRate = document.querySelector('.rate'),
      thank = document.querySelector('.thank-you-container');

let ratings = 0,
    picked = false;

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rates.forEach(r => {
            if(r.classList.contains('selected')) {
                r.classList.remove('selected')
            }
        })

        rate.classList.toggle('selected');
        ratings = rate.value;
        picked = true;

        if(picked) {
            btn.addEventListener('click', () => {
                container.setAttribute('style', 'opacity: 0');
                userRate.innerHTML = `${ratings}`
                thank.setAttribute('style', 'opacity: 1')
            })
        }
    })
})

