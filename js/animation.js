


  const tn = document.querySelector('.trencin-cup')
  const alaska = document.querySelector('.AK-CUP')
  const champ = new Audio('../champ.mp3')

   tn.addEventListener('mouseenter', ()=> { 
            champ.currentTime = 7.8
            champ.play()
            champ.volume = 0.04
        })

   alaska.addEventListener('mouseenter', ()=> { 
            champ.currentTime = 7.8
            champ.play()
            champ.volume = 0.04
        }) 

    

    tn.addEventListener('mouseleave', () => {
            champ.pause()
        })

    alaska.addEventListener('mouseleave', () => {
            champ.pause()
        })










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


        const fireEffect = document.getElementById('fire')
        let ohen = new Audio('../FireSound.mp3')
        fireEffect.addEventListener('mouseenter', ()=> { 
            ohen.currentTime = 2
            ohen.play()
        })

        fireEffect.addEventListener('mouseleave', () => {
            ohen.pause()
        })
        
 
// AK LOGO SNOW

     const svgSnow = document.querySelector('.snow')
     const anime = bodymovin.loadAnimation({
            wrapper: svgSnow,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_kZx06J.json'
        });

// TN IMG CHAMPS

   const TN = document.getElementById('celebrate')
   const tnAnimate = bodymovin.loadAnimation({
            wrapper: TN,
            animType: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_rovf9gzu.json'
        });


















