

const play = document.querySelector('.passing');

        const svgContainer = document.getElementById('svg');
        const animItem = bodymovin.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets10.lottiefiles.com/packages/lf20_GWWy4D.json'
        });

        play.addEventListener('mouseover', () => {
            svgContainer.classList.remove('hide');
            animItem.goToAndPlay(0,true);
        })

        animItem.addEventListener('complete', () => {
            svgContainer.classList.add('hide');
            
        })




        const play1 = document.querySelector('.passing1');

        const svgContainer1 = document.getElementById('svg1');
        const animItem1 = bodymovin.loadAnimation({
            wrapper: svgContainer1,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets9.lottiefiles.com/packages/lf20_rmlyntkm.json'
        });

        play1.addEventListener('mouseover', () => {
            svgContainer1.classList.remove('hide');
            animItem.goToAndPlay(0,true);
        })

        animItem.addEventListener('complete', () => {
            svgContainer1.classList.add('hide');
            
        })


























