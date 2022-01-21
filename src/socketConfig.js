let socketUrl
const socketUrls = {
    // YOU MUST CHANGE PRODUCTION URL WHEN DEPLOYING
	production: 'ws://room-me-design-app.herokuapp.com/',
	development: 'ws://localhost:8500',
}

if (window.location.hostname === 'localhost') {
	socketUrl = socketUrls.development
} else {
	socketUrl = socketUrls.production
}

export default socketUrl