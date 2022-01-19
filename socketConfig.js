let socketUrl
const socketUrls = {
    // YOU MUST CHANGE PRODUCTION URL WHEN DEPLOYING
	production: 'https://room-me-design-app.herokuapp.com/',
	development: 'http://localhost:8000',
}

if (window.location.hostname === 'localhost') {
	socketUrl = socketUrls.development
} else {
	socketUrl = socketUrls.production
}

export default socketUrl