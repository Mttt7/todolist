import './style.css';
import loadAll from './all.js'
import githubImg from './images/githublogo.png'
import igImg from './images/iglogo.png'


const content = document.querySelector("#content")

const GithubImg = new Image()
const IgImg = new Image()
GithubImg.src = githubImg
IgImg.src = igImg

function createHeader(){
    const header = document.createElement('div')
    header.classList.add("header")
        header.textContent="To do List"



    //reponsive navbar//
    const reponsiveNav = document.createElement('div')
    reponsiveNav.classList.add('responsive-nav')
            for(let i=0;i<3;i++){
                const line = document.createElement('span')
                //line.classList.add('line')
                reponsiveNav.appendChild(line)
            }
            let NavBarToClone = createNavBar()
            const mobileNav = NavBarToClone.cloneNode(true)
            mobileNav.id="mobile-nav"
            mobileNav.classList.add('mobile-nav')
            mobileNav.classList.remove("nav-bar")
            

            content.appendChild(mobileNav)

            


            



            header.appendChild(reponsiveNav)



    return header
}

function createNavBar(){
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

        const navAll = document.createElement('div')
        navAll.classList.add('nav-element')
        navBar.appendChild(navAll)
            navAll.textContent='All'

        const navToday = document.createElement('div')
        navToday.classList.add('nav-element')
        navBar.appendChild(navToday)
            navToday.textContent='Today'    

        const navThisWeek = document.createElement('div')
        navThisWeek.classList.add('nav-element')
        navBar.appendChild(navThisWeek)
            navThisWeek.textContent='This week'
            
        const navOverdue = document.createElement('div')
        navOverdue.classList.add('nav-element')
        navBar.appendChild(navOverdue)
        navOverdue.textContent='Overdue'

        const navProjects = document.createElement('div')
        navProjects.classList.add('nav-element')
        navBar.appendChild(navProjects)
        navProjects.textContent='Projects'

        const navTrash = document.createElement('div')
        navTrash.classList.add('nav-element')
        navBar.appendChild(navTrash)
        navTrash.textContent='Trash'


        const footer = document.createElement('div')
        footer.classList.add('footer')
        navBar.appendChild(footer)
            const links = document.createElement('div')
            navBar.appendChild(links)
            links.classList.add('links')
                links.appendChild(GithubImg)
                links.appendChild(IgImg)
                GithubImg.classList.add('github-img')
                GithubImg.classList.add('link')
                IgImg.classList.add('ig-img')
                IgImg.classList.add('link')
                GithubImg.addEventListener('click',()=>{
                    window.open("https://github.com/Mttt7/restaurantpage","_self")
                })
                IgImg.addEventListener('click',()=>{
                    window.open("https://www.instagram.com/mtt.jpeg/","_self")
                })


        
        



    return navBar
}

function createMain(){
    const main = document.createElement('div')
    main.classList.add("main")
    main.id="main"


    const reponsiveNav = document.querySelector(".responsive-nav")
    const mobileNav =document.querySelector("#mobile-nav")
    reponsiveNav.addEventListener('click',function(){
                this.classList.toggle('is-active')
                mobileNav.classList.toggle('is-active')
                const main = document.querySelector("#main")
                main.classList.toggle('shrink')
            })


    return main

}



function InitializeWebsite(){
    content.appendChild(createHeader())
    content.appendChild(createNavBar())
    content.appendChild(createMain())
    
}

InitializeWebsite()
loadAll()


console.log('working fine')