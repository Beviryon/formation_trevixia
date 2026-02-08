//Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Trevixia - Page chargé');

    initMobileMenu();

    function initMobileMenu() {
        //Récupérer les éléments du DOM
         const navToggle = document.getElementById('nav-toggle');
         const navMenu = document.getElementById('nav-menu');
         const navLinks = document.querySelectorAll('nav__link');

         if (!navToggle || !navMenu) {
            console.warn('Eléments de navigation non trouvés');
            return;
         }

         // la fonction pour ouvrir le menu
         function toggleMenu() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
         }

         // la fonction pour fermer le menu
         function closeMenu() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
         }

         //Ecouter le clic sur le bouton
         navToggle.addEventListener('click', toggleMenu)

         navLinks.forEach(link => {
            link.addEventListener('click', closeMenu)
         });

         document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (navMenu.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
                closeMenu
            }
        });
    };
    
   //  La barre de progression du formulaire de contact
   const form = document.querySelector('.contact__form');
   const progressBar = document.getElementById('progresseBar');
   const fields = ['name', 'email', 'subject', 'message']; 

   form.addEventListener('input', () => {
      let filledFields = 0;

      fields.forEach(id => {
         const field = document.getElementById(id) || document.querySelector(textarea);
         if (field.value.trim() !== "") {
               filledFields++;
         }
      });
      
      const percentage = (filledFields / fields.length) * 100;
      progressBar.style.width = percentage + "%";
   });

});

document.getElementById('whatsapp-btn').addEventListener('click', function(e) {

e.preventDefault();

    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.querySelector('textarea').value;
    const successBox = document.getElementById('success-message');

    // Vérification simple
    if(!nom || !message) {
        alert("Veuillez remplir les différents champs.");
        return;
    }

    // 1. Afficher l'accusé de réception sur le site
    successBox.style.display = "block";
    successBox.scrollIntoView({ behavior: 'smooth' });

    // 2. Préparer l'envoi
    const monNumero = "242064712872"; 
    const texteBrut = `Bonjour, je m'appelle ${nom}.\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${monNumero}?text=${encodeURIComponent(texteBrut)}`;

    // 3. Ouvrir WhatsApp 
    setTimeout(() => {
        window.open(url, '_blank');
       
    }, 1500);
});
