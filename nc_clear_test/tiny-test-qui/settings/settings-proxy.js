const yamlObject = {
	"settings": {
		"csspath": [
			"/static/css/main.css"
		],
		"rootqjson": "/microui/authorization/qjson/LoginPage",
		"alertqjson": "/settings/qjson/alert.qjson"
	},
	"localProxy": {
		"/services/processmanager": "http://localhost/processmanager",
		"/microUI/processmanager": "http://processmanager.fe-quick.dev.rally.softtech",
		"/services/authorization": "http://authorization.fe-quick.dev.rally.softtech",
		"/microUI/authorization": "../../authorization/authorizationUI",
		"/moneytransfer/qjsonfunc": "http://localhost:3001/moneytransfer/qjsonfunc"
	}
}
if (typeof exports === 'object' && typeof module === 'object'){
 	module.exports = yamlObject;
}else{ 
	window['QEditorSettingsProxy'] = yamlObject;
}