// Topics & tables Animation 
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Up To Down Animation 
const upToDownElement = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('upToDown');
        }

    });
});
const upElement = document.querySelectorAll('.up');
upElement.forEach((el) => upToDownElement.observe(el));


// Down To Up Animation 
const downToUpElement = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('downToUp');
        }

    });
});
const downElement = document.querySelectorAll('.down');
downElement.forEach((el) => downToUpElement.observe(el));
