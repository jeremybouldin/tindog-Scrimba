// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'

const badgeEl = document.getElementById('badge')

document.addEventListener('click', function (e) {
    if (e.target.id === 'nope-button') {
        setBadgeHtml('no')
        currentDog.setSwipeStatus()
    } else if (e.target.id === 'like-button') {
        setBadgeHtml('yes')
        currentDog.setLikeStatus()
    }
    console.log(e)
})

function setBadgeHtml(swipe) {
    const badgeSelection =
        swipe === 'yes' ? 'images/badge-like.png' : 'images/badge-nope.png'

    badgeEl.innerHTML = `
        <img class="badge" src=${badgeSelection} alt="badge"/>
        `
    toggleBadge()

    setTimeout(() => {
        currentDog = getNextDog()
        toggleBadge()
        render()
    }, 2000)
}

function toggleBadge() {
    badgeEl.classList.toggle('hidden')
}

function getNextDog() {
    const nextDog = dogs.pop()
    return nextDog ? new Dog(nextDog) : {}
    // setTimeout(() => {
    // }, 2000)
}

function render() {
    document.getElementById('profile-info').innerHTML = currentDog.getDogHtml()
}

let currentDog = getNextDog()
render()
