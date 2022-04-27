const user = document.querySelector('#search-name')
const searchBtn = document.querySelector('#search-btn')
const url = 'https://api.github.com/users/'
const name = document.querySelector('#user-name')
const login = document.querySelector('#user-login')
const joined = document.querySelector('#user-joined')
const repos = document.querySelector('#user-repos')
const followers = document.querySelector('#user-followers')
const following = document.querySelector('#user-following')
const img = document.querySelector('#user-img')
const twitter = document.querySelector('#twitter')
const place = document.querySelector('#place')
const git = document.querySelector('#git')
const blog = document.querySelector('#blog')
const links = document.querySelectorAll('.link')

const month = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}

console.log(month['02'])

searchBtn.addEventListener('click', event => {
    links.forEach(link => {
        link.classList.remove('opacity')
    })    
    getUser(user.value)
})

const getUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)                    
            name.textContent = data.name
            login.textContent = `@${data.login}`
            processString(data.created_at)
            repos.textContent = data.public_repos
            img.src = data.avatar_url
            followers.textContent = data.followers
            following.textContent = data.following            
            linkTransform(twitter, data.twitter_username)
            linkTransform(place, data.location)
            place.textContent = data.location ?? 'Not available'
            git.textContent = `@${data.login}`
            git.href = data.html_url
            linkTransform(blog, data.blog)
            
        })
}

const processString = (date) => {
   const time = date.split('T')
   const time_parts = time[0].split('-')
   console.log(time_parts[1])
   joined.textContent = `Joined ${time_parts[2]} ${month[time_parts[1]]} ${time_parts[0]}`

}

const linkTransform = (element, data) => {
    if (data ===null || data === ''){
        element.parentNode.classList.add('opacity')
        element.textContent = 'Not available'
        element.href = ''
    }
    else {
        element.textContent = data
        element.href = data
    }
}