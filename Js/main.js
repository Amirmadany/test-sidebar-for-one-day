// variables
const changeBtn = document.querySelector('#changeBtn')
const sidebar = document.querySelector('.sidebar')
const sidebarItems = document.querySelectorAll('.sidebar-item')
const tabContent = document.querySelector('.tab-content')

// eventListeners
changeBtn.addEventListener('click', changeStatusMenu)
document.addEventListener('DOMContentLoaded', getSubItemContent)

function changeStatusMenu(){
    if(sidebar.classList.contains('sidebar-mini')){
        sidebar.classList.remove('sidebar-mini')

          // work on the ul
          document.querySelector('.sidebar-items').classList = 'sidebar-items'
          document.querySelector('.sidebar-items').id = ''

        // work on the each li
        sidebarItems.forEach((item, index) => {
            
            const button = item.querySelector('a')
            button.setAttribute('data-bs-toggle', "collapse")
            button.setAttribute('href', `#li${index + 1}`)
            button.setAttribute('data-bs-target', `#li${index + 1}`)
            button.classList.add('collapsed')

            item.querySelector('.sidebar-item-sub').firstElementChild.classList.add('d-block')
            item.querySelector('.sidebar-item-sub').firstElementChild.classList.remove('d-none')

            
            item.removeEventListener('click', workTab)
        })
        
        tabContent.classList.remove('active')
    }

    else {
        sidebar.classList.add('sidebar-mini')

        // work on the ul
        document.querySelector('.sidebar-items').classList = 'sidebar-items nav nav-tabs'
        document.querySelector('.sidebar-items').id = 'myTab'

        // work on the each li
        sidebarItems.forEach((item, index) => {
            
            const button = item.querySelector('a')
            button.setAttribute('data-bs-toggle', "tab")
            button.setAttribute('href', `#li${index + 1}`)
            button.setAttribute('data-bs-target', `#li${index + 1}`)
            button.classList.remove('collapsed')

            item.querySelector('.sidebar-item-sub').firstElementChild.classList.add('d-none')
            item.querySelector('.sidebar-item-sub').firstElementChild.classList.remove('d-block')

            item.addEventListener('click', workTab)
        })

        tabContent.classList.add('active')
    }
}

function getSubItemContent(){
    sidebarItems.forEach((item, index) => {
        tabContent.innerHTML += `
        <div class="tab-pane fade ${index == 0 ? 'show active' : ''}" id="li${index + 1}" role="tabpanel" aria-labelledby="home-tab">
            ${item.querySelector('.sidebar-item-sub').innerHTML}
        </div>
        `
    })

    
}

function workTab(event){

    tabContent.querySelectorAll('.tab-pane').forEach(item => {
        if(item.id == event.target.getAttribute('data-bs-target').slice(1)){
            console.log(document.querySelector('.tab-pane.active.show'))
            if(document.querySelector('.tab-pane.active.show') || document.querySelector('.tab-pane.active.collapse'))
                document.querySelector('.tab-pane.active').classList = 'tab-pane'
            
            item.classList = 'tab-pane active show'
        }
    })

}