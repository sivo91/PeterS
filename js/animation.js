

   // PRIHRAVOCKY

   //const play = document.querySelector('.passing');

        const svgContainer = document.getElementById('svg');
        const animItem = bodymovin.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets3.lottiefiles.com/packages/lf20_GWWy4D.json'
        });

        /* play.addEventListener('mouseover', () => {
            svgContainer.classList.remove('hide');
            animItem.goToAndPlay(0,true);
        }) */

        animItem.addEventListener('complete', () => {
            svgContainer.classList.add('hide');
        })

    


 // TN LOGO 

       const svgBox = document.querySelector('.fire')
       const anim = bodymovin.loadAnimation({
            wrapper: svgBox,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_no9qrf5p.json'
        });
 
// AK LOGO SNOW

     const svgSnow = document.querySelector('.snow')
     const anime = bodymovin.loadAnimation({
            wrapper: svgSnow,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_kZx06J.json'
        });




















