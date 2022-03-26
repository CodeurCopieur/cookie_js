const cookiesBox = document.querySelector('.wrapper'),
      acceptBtn = cookiesBox.querySelector('button');

acceptBtn.onclick = () => {
  // réglage du cookie pendant 1 mois, après 1 mois, le cookie expirera automatiquement
  let date = new Date();
  date.setTime(date.getTime() + (60 * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = "CooKieBy=Codwerk;" + expires +"; path=/; SameSite=None; Secure";
  
  if(document.cookie) { // si le cookie ci-dessus est défini
    // masquer la boîte à cookies une fois le cookie défini
    cookiesBox.classList.add('hide'); 
  } else {
    // si le cookie ne peut pas être défini, l'alerte est une erreur
    alert(`Le cookie ne peut pas être défini !`); 
  }

  // permet de masquer la boîte à cookies si le cookie est défini et n'a pas expiré
  let checkCookie = document.cookie.indexOf("CooKieBy"); // vérification de notre cookie défini
  // si le cookie est défini, masquez la boîte à cookies, sinon affichez-le
  checkCookie != -1 ? cookiesBox.classList.add('hide') : cookiesBox.classList.remove('hide');
}