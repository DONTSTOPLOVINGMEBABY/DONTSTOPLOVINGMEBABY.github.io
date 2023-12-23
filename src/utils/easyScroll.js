function scrollFromLink () {
    const OSFT_URL = 'https://henryjacobs.us/#osft'
    const FYT_URL = 'https://henryjacobs.us/#react-youtube-clone'
    const OSFT_ELEMENT = document.getElementById('osft')
    const FYT_ELEMENT = document.getElementById('react-youtube-clone')
    if (window.location.href === OSFT_URL && OSFT_ELEMENT){
        OSFT_ELEMENT.scrollIntoView({ behavior: 'smooth' })
    }
    else if (window.location.href === FYT_URL && FYT_ELEMENT){
        FYT_ELEMENT.scrollIntoView({ behavior: 'smooth' })
    }
}

export default scrollFromLink