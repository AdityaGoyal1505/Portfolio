var typed=new Typed(".auto-type",{
        strings:["Web Developer", "Youtuber","Designer"],
        typeSpeed:100,
        backSpeed:75,
        loop:true,
})
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent);
    });

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--percent', `${percent}%`);
    });
});

const btn=document.querySelector('.tgl');
const home=document.querySelector('#ho');
const na=document.querySelector('.name');
const about=document.querySelector('#about');
const para=document.querySelector('.para');
const edu=document.querySelector('#edu');
const ed=document.querySelector('.ed');
const sch=document.querySelector('.sch');
const skill=document.querySelector('#skill');
const cert=document.querySelector('#cert');
const ach=document.querySelector('#ach');
const cnt=document.querySelector('.cnt');
const black=document.querySelector('.black');
const ha=document.querySelector('.ha');
const intern=document.querySelector('.intern');
const project=document.querySelector('.project');
const bars=document.querySelectorAll('.bar');
const acad=document.querySelector('.acad');
btn.addEventListener('click',()=>{
    home.classList.toggle('active');
    na.classList.toggle('active');
    about.classList.toggle('active');
    para.classList.toggle('active');
    edu.classList.toggle('active');
    ed.classList.toggle('active');
    sch.classList.toggle('active');
    skill.classList.toggle('active');
    cert.classList.toggle('active');
    ach.classList.toggle('active');
    cnt.classList.toggle('active');
    black.classList.toggle('active');
    ha.classList.toggle('active');
    intern.classList.toggle('active');
    project.classList.toggle('active');
    acad.classList.toggle('active');
    bars.classList.toggle('active');
})
