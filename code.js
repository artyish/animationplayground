const toptexthead = document.getElementById("topnavhead");
const toptext = document.getElementById("topnavtext");

toptexthead.style.opacity=0;
toptext.style.opacity=0;




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('animateall');
            toptexthead.style.opacity=1;
            toptext.style.opacity=1; 
        }
        else
        {
            entry.target.classList.remove('animateall');
        }
    })
})

const animatedelements = document.querySelectorAll('.topnavi');
animatedelements.forEach((el) => observer.observe(el))






const animeelem = document.querySelectorAll('.chantext');

const checker = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting)
         entry.target.classList.add('animatetextimg')
        else
         entry.target.classList.remove('animatetextimg')
    })
})


animeelem.forEach((el) => checker.observe(el))




const animeelemimg = document.querySelectorAll('.chanimage');

const checkerimg = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting)
        {
         entry.target.classList.add('opacityy');
         setTimeout(function(){
            entry.target.style.opacity=1;
        }, 3200);
        }
        else
        {
         entry.target.classList.remove('opacityy');
         setTimeout(function(){
            entry.target.style.opacity=0;
        }, 1000);
        }
    })
})

animeelemimg.forEach((el) => checkerimg.observe(el))
 






const animetext = document.querySelectorAll('.wassupanime');

const checkertext = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting)
         entry.target.classList.add('animatetextimg1')
        else
         entry.target.classList.remove('animatetextimg1')
    })
})


animetext.forEach((el) => checkertext.observe(el))