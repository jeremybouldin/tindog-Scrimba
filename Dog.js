// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setSwipeStatus() {
        this.hasBeenSwiped = true
    }

    setLikeStatus() {
        this.hasBeenLiked = true
        this.setSwipeStatus()
        // console.log(this.hasBeenSwiped)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this

        document.getElementById(
            'dog-section'
        ).style.backgroundImage = `url('${avatar}')`

        return `
        <img class="badge hidden" src="" alt="" />
        <div class="profile-info">
            <h1 class="profile-name">${name}, ${age}</h1>
            <h2 class="profile-tagline">${bio}</h2>
        </div>
        `
    }
}

export default Dog
