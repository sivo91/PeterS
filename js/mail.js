

 const svgContainer = document.getElementById('svg');
        const animItem = bodymovin.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets6.lottiefiles.com/packages/lf20_v7gj8hb1.json'
        });

        /* play.addEventListener('mouseover', () => {
            svgContainer.classList.remove('hide');
            animItem.goToAndPlay(0,true);
        }) */

        animItem.addEventListener('complete', () => {
            svgContainer.classList.add('hide');
        })