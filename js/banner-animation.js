            const backpar=document.querySelector('.banner-container__backimg--backparticles');
            const frontpar=document.querySelector('.banner-container__backimg--frontparticles');
            const player=document.querySelector('.banner-container__backimg--player');
            const ball=document.querySelector('.banner-container__backimg--ball');
            const title=document.querySelector('.banner-container__backimg--title');

            window.onload=()=>{
                backpar.style.animation="backparticles 3s";
                backpar.style.animationTimingFunction="cubic-bezier(1,.01,0,1)";
                frontpar.style.animation="frontparticles 1.6s";
                frontpar.style.animationTimingFunction="cubic-bezier(1,0,.56,.95)";
                player.style.animation="player 2s";
                player.style.animationTimingFunction="cubic-bezier(1,0,.56,.95)";
                ball.style.animation="ball 2s";
                ball.style.animationTimingFunction="cubic-bezier(.05,.43,.46,.99)";
                title.style.animation="title 2s";
                title.style.animationTimingFunction="cubic-bezier(1,0,.56,.95)";
            }