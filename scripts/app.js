const setProfile = (profile) => {
    const idElement = document.getElementById('profile-id')
    const nameElement = document.getElementById('profile-name')
    const emailElement = document.getElementById('profile-email')
    const avatarElement = document.getElementById('profile-avatar')
    const addressElement = document.getElementById('profile-address')
    const companyNameElement = document.getElementById('profile-company-name')
    const companyBsElement = document.getElementById('profile-company-bs')
    const generateButton = document.getElementById('generate-button')

    idElement.innerHTML = profile.id
    nameElement.innerHTML = profile.name
    emailElement.innerHTML = profile.email
    addressElement.innerHTML = `${profile.address.street}, ${profile.address.suite}, ${profile.address.city}, ${profile.address.zipcode}`
    companyNameElement.innerHTML = profile.company.name
    companyBsElement.innerHTML = profile.company.bs
    avatarElement.src = `https://avatars.dicebear.com/api/bottts/${profile.name}${profile.id}.svg`
    generateButton.addEventListener('click',run)

}

const fetchEmployee = async (number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
    
    return await res.json()
}

const run = async () => {
    const random = Math.floor(Math.random() * 10) + 1
    const profile = await fetchEmployee(random)
    setProfile(profile)
}

run()

