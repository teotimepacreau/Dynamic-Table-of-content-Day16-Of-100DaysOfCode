console.log('connecté !');

//PSEUDO CODE : récupérer dès le chargement de la page tous les H2 pour les mettre dans la <ol> : chaque h2 va dans une <li>

const titles = document.querySelectorAll('h2');
console.log(titles)

const tableOfContents = document.querySelector('#table-of-contents')
console.log(tableOfContents)


titles.forEach((title) => {
    tableOfContents.innerHTML += `
    <li><a href="#${getID(title)}">${title.textContent}</a></li>
    `
    // href # car le # crée une ancre dans la page (si pas de # marche pas et la clé id de l'objet car c'est le chemin) and TITLE MUST HAVE IDS IN ORDER TO WORK
})

/*------AJOUTER LES MISSING IDS QUI FONT QUE CERTAINS LIENS SONT CASSES----*/

function getID(titles){
    if(!titles.id){
        titles.id = titles.textContent.replaceAll(' ', '-').toLowerCase();
    }//textContent get the text of the H2, replaceAl replace spaces with dash
    return titles.id;
}

/*AJOUTER POSSIBILITE DE CUSTOMISER LE TITRE and fallback to default title if they don’t provide one.*/

//PSEUDO CODE : après la saisie de l'user, je récupère la value et insert en dessous le titre de l'histoire

const input = document.querySelector('input')
console.log(input)

const btnSubmit = document.querySelector('button[type="submit"');
console.log(btnSubmit)

btnSubmit.addEventListener('click', () => {
    const givenTitle = input.value;
    console.log(givenTitle);
    const parent = btnSubmit.parentElement;
    const corps = parent.nextElementSibling;
    console.log(corps);
    const addedTitle = document.createElement('h1');
    addedTitle.classList.add('bigtitle')
    console.log('type of', typeof addedTitle)
    addedTitle.innerHTML = `🏴‍☠️
        ${givenTitle}🏴‍☠️
    `
    corps.insertAdjacentElement('beforebegin', addedTitle)
})