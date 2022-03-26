const cookiesBox = document.querySelector('.wrapper'),
      acceptBtn = cookiesBox.querySelector('.buttons button');

acceptBtn.onclick = () => {
  // réglage du cookie pendant 1 mois, après 1 mois, le cookie expirera automatiquement
  document.cookie = "CooKieBy=Codwerk; max-age="+60*60*24*30;
  
  if(document.cookie) { // si le cookie ci-dessus est défini
    cookiesBox.classList.add('hide'); // masquer la boîte à cookies une fois le cookie défini
  } else {
    alert(`Le cookie ne peut pas être défini !`); // si le cookie ne peut pas être défini, l'alerte est une erreur
  }

  // permet de masquer la boîte à cookies si le cookie est défini et n'a pas expiré
  let checkCookie = document.cookie.indexOf("CooKieBy=Codwerk"); // vérification de notre cookie défini
  // si le cookie est défini, masquez la boîte à cookies, sinon affichez-le
  checkCookie != 1 ? cookiesBox.classList.add('hide') : checkCookie.classList.remove('hide');
}