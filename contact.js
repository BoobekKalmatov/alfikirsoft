
IMask(
    document.getElementById('phone'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )
  
  var hamburger = document.querySelector(".hamburger");
              var nav = document.querySelector(".nav");
              // On click
              hamburger.addEventListener("click", function() {
                  // Toggle class "is-active"
                  hamburger.classList.toggle("is-active");
                  nav.classList.toggle("is-active");
  
                  // Do something else, like open/close menu
              });
  
  
          gsap.config({trialWarn: false});
  let select = s => document.querySelector(s),
          toArray = s => gsap.utils.toArray(s),
          mainSVG = select('#mainSVG'),
          allEll = toArray('.ell'),
          colorArr = ['#359EEE', '#FFC43D','#EF476F','#03CEA4']
  
  let colorInterp = gsap.utils.interpolate(colorArr);
  
  gsap.set(mainSVG, {
      visibility: 'visible'
  })
  
  function animate (el, count) {
      let tl = gsap.timeline({
      defaults: {
          ease: 'sine.inOut'
      },
          repeat: -1
  });
      gsap.set(el, {
          opacity:1- count/(allEll.length),
          stroke: colorInterp(count/(allEll.length))
      })
  
      tl.to(el, {
      attr: {
          ry: `-=${count*2.3}`,
          rx: `+=${count*1.4}`
      },
      ease: 'sine.in'
  })
  .to(el, {
      attr: {
          ry: `+=${count*2.3}`,
          rx: `-=${count*1.4}`
      },
      ease: 'sine'
  })
  .to(el, {
      duration: 1,
      rotation: -180,
      transformOrigin: '50% 50%'
  }, 0).timeScale(0.5)
  }
  allEll.forEach((c, i) => {
      gsap.delayedCall(i/(allEll.length-1), animate, [c, i+1])
  })
  gsap.to('#aiGrad', {
      duration: 4,
      delay: 0.75,
      attr: {
          x1: '-=300',
          x2: '-=300'
      },
      scale: 1.2,
      transformOrigin: '50% 50%',
      repeat: -1,
      ease: 'none'
  })
   gsap.to('#ai', {
      duration: 1,
      scale: 1.1,
      transformOrigin: '50% 50%',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
  }) 


  
const contactForm = document.getElementById('contactform');
const TOKEN = '6734071960:AAGQu1DCJ3YKtzXttM5pYADLz0h9q6i9dhA';
const CHAT_ID = -1002200251009;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (contactForm.username.value === '' || contactForm.telefon.value === '' || contactForm.textcontent.value === '') {
            alert('Заполните все поля ввода');
        } else {
            alert('Ваша заявка успешно отправлена');
            console.log(contactForm.username.value, contactForm.telefon.value, contactForm.textcontent.value);
            let message1 = `<b>Заявка с сайта</b>\n`;
            message1 += `<b>ФИО: </b> ${contactForm.username.value}\n`;
            message1 += `<b>Номер телефона: </b> ${contactForm.telefon.value}\n`;
            message1 += `<b>Сообщение: </b> ${contactForm.textcontent.value}\n`;
    
           

            fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message1
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Сообщение успешно отправлено в Telegram:', data);
                // Дополнительные действия при успешной отправке
            })
            .catch(error => {
                console.error('Ошибка при отправке сообщения в Telegram:', error);
                // Дополнительные действия при ошибке
            });

        }
     });
