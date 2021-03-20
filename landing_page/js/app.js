let sections=document.querySelectorAll('section');
let navBar= document.getElementById('navbar__list');

let add_sections=()=>{
    for(let i of sections){
        let se=document.createElement('li');
        let l=document.createElement('a');
        se.appendChild(l);
        se.dataset.nav=i.id;
        navBar.appendChild(se);
        l.setAttribute('href','#'+ i.id);
        l.classList.add('menu__link');
        l.textContent=i.getAttribute("data-nav");
    }
}

let getActiveSection=()=>{
    var a_section=sections[0];
    for(let y of sections){
        let rect=y.getBoundingClientRect();
        let h=rect.height;
        let t=rect.top;
        if(t<h/2 & t>-h/2 ){
            a_section=y;
        }
    }
    return a_section;
}

let setActive= ()=> {
    window.addEventListener('scroll', function (event) {
        let aSection = getActiveSection();
        console.log(aSection);
        aSection.classList.add('your-active-class');
        for (let item of sections) {
            if (item.id != aSection.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
    });
};



add_sections();
setActive();

