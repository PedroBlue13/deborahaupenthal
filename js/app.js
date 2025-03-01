$(document).ready(function () {
    listStep.events.init();
    listPsico.events.init();
})

document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o comportamento padrão

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector(".header").offsetHeight; // Obtém a altura do header fixo
            const targetPosition = targetElement.offsetTop - headerHeight - 120; // Ajuste fino

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth" // Faz um scroll suave
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function(){
    const navLinks = document.querySelectorAll('.navbar-collapse a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
      });
    });
  });

var listStep = {};
var listPsico = {};

listStep.events = {
    init: () => {
        listStep.methods.getItens();
    }
}
listPsico.events = {
    init: () => {
        listPsico.methods.getItens();
    }
}

listPsico.methods = {
    getItens: () => {
        var filter = MENU['PSYCHOTHERAPY'];

        $.each(filter, (i, e) => {

            let temp = listPsico.templates.item.replace(/\${name}/g, e.name)

            $("#listpsico").append(temp)

        });

    },
}

listStep.methods = {
    //get all data of psico
    getItens: () => {
        var filter = MENU['step'];

        $.each(filter, (i, e) => {

            let temp = listStep.templates.item.replace(/\${name}/g, e.name).replace(/\${dsc}/g, e.dsc)

            $("#listNeuro").append(temp)

        });

    },
}


listPsico.templates = {

    item: 
    `
    
<div class="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="">
                <p class="title-neuro text-center btn-psico animate__animated animate__flipInX wow">
                    <b class="animate__animated animate__flipInX">\${name}</b>
                </p>
            </div>
        </div>

  
                        `

}


listStep.templates = {

    item:
`
<div class="py-3 col-12 col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center">
    <h3 class="title-neuro btn-header animate__animated animate__flipInX wow text-center">
        <b>\${name}</b>
    </h3>
    <div class="card text-center card-item p-4 animate__animated animate__flipInX animate__delay-1s wow">
        <p class="neuro-text lgbt">\${dsc}</p>
    </div>
</div>
`

}

function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

const buttons = document.querySelectorAll('.faq-button'); 

buttons.forEach(function(button) {
    const card = document.querySelector(button.getAttribute('href')); 

    button.addEventListener('click', function handleClick(event) {
        if (isMobile()) {
            event.preventDefault(); 

            if (!card.classList.contains('show')) {
                card.classList.add('show');
                card.classList.add('active'); 

                button.removeEventListener('click', handleClick);
                button.disabled = true;
            }
        }
    });
});

function initializeGoogleAnalytics(trackingID) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', trackingID);
    };
  }
  
  initializeGoogleAnalytics('G-');
  

  // Toggle menu on mobile
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const item = header.parentElement;
          const isActive = item.classList.contains('active');
          
          // Close all items
          accordionHeaders.forEach(h => {
              h.parentElement.classList.remove('active');
          });
          
          // Open clicked item if it wasn't already open
          if (!isActive) {
              item.classList.add('active');
          }
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              navLinks.classList.remove('active');
          }
      });
  });
