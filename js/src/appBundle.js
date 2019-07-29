var appBundle = (function () {
	'use strict';

	class RDKLogo extends lng.Component{
		static _template(){
			return {
				w: 1897, h: 372,
				LetterR: { alpha: 0.0001, x: 500, y: 0, w: 436, h: 372, src: App.getPath('images/logo/Letter_R.png') },
				LetterD: { alpha: 0.0001, x: 1000, y: 0, w: 431, h: 372, src: App.getPath('images/logo/Letter_D.png') },
				LetterK: { alpha: 0.0001, x: 1500, y: 0, w: 397, h: 372, src: App.getPath('images/logo/Letter_K.png') },
				BarBlue: { alpha: 0.0001, x: 0, y: 0, w: 449, h: 71, rect: true, color: 0xFF14B0DD },
				BarYellow: { alpha: 0.0001, x: 0, y: 100, w: 449, h: 71, rect: true, color: 0xFFF9B82D },
				BarGreen: { alpha: 0.0001, x: 0, y: 200, w: 449, h: 71, rect: true, color: 0xFF9AC235 },
				BarOrange: { alpha: 0.0001, x: 0, y: 300, w: 449, h: 71, rect: true, color: 0xFFEF7D24 }
			};
		}

		_init(){
			this._logoAnimation = this.animation({
				duration: 1.1, repeat: 0, stopMethod: 'immediate', actions: [
					{ t: 'BarBlue', p: 'x', v: { 0: -140, 1: 0 } },
					{ t: 'BarBlue', p: 'alpha', v: { 0: 0, 0.15: 0, 0.4: 1, 1: 1 } },
					{ t: 'BarYellow', p: 'x', v: { 0: -120, 1: 0 } },
					{ t: 'BarYellow', p: 'alpha', v: { 0: 0, 0.05: 0, 0.3: 1, 1: 1 } },
					{ t: 'BarGreen', p: 'x', v: { 0: -100, 1: 0 } },
					{ t: 'BarGreen', p: 'alpha', v: { 0: 0, 0.005: 0, 0.2: 1, 1: 1 } },
					{ t: 'BarOrange', p: 'x', v: { 0: -80, 1: 0 } },
					{ t: 'BarOrange', p: 'alpha', v: { 0: 0, 0.0005: 0, 0.1: 1, 1: 1 } },
					{ t: 'LetterR', p: 'x', v: { 0: 350, 1: 500 } },
					{ t: 'LetterR', p: 'alpha', v: { 0: 0, 0.05: 0, 0.5: 1, 1: 1 } },
					{ t: 'LetterD', p: 'x', v: { 0: 800, 1: 990 } },
					{ t: 'LetterD', p: 'alpha', v: { 0: 0, 0.15: 0, 0.6: 1, 1: 1 } },
					{ t: 'LetterK', p: 'x', v: { 0: 1250, 1: 1480 } },
					{ t: 'LetterK', p: 'alpha', v: { 0: 0, 0.25: 0, 0.7: 1, 1: 1 } }
				]
			});
		}

		start(){
			this._logoAnimation.start();
		}

		stop(){
			this._logoAnimation.stop();
		}

	}

	class Icons extends lng.Component{
		static _template(){
			return {
				Icon01: { mount: 0.5, scale: 0, x: 0, y: 0, w: 167, h: 167, src: App.getPath('images/assets/icon_01.png') },
				Icon02: { mount: 0.5, scale: 0, x: 115, y: -205, w: 167, h: 167, src: App.getPath('images/assets/icon_02.png') },
				Icon03: { mount: 0.5, scale: 0, x: 315, y: -325, w: 167, h: 167, src: App.getPath('images/assets/icon_03.png') },
				Icon04: { mount: 0.5, scale: 0, x: 575, y: -325, w: 167, h: 167, src: App.getPath('images/assets/icon_04.png') },
				Icon05: { mount: 0.5, scale: 0, x: 800, y: -205, w: 167, h: 167, src: App.getPath('images/assets/icon_05.png') },
				Icon06: { mount: 0.5, scale: 0, x: 910, y: 0, w: 170, h: 170, src: App.getPath('images/assets/icon_06.png') }
			};
		}

		_init(){
			this._iconAnimation = this.animation({
				duration: 4.2, delay: 2.78, repeat: 0, stopMethod: 'immediate', actions: [
					{ t: 'Icon01', p: 'scale', v: { 0.2: 0, 0.35: 1 } },
					{ t: 'Icon01', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon02', p: 'scale', v: { 0.215: 0, 0.365: 1 } },
					{ t: 'Icon02', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon03', p: 'scale', v: { 0.23: 0, 0.38: 1 } },
					{ t: 'Icon03', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon04', p: 'scale', v: { 0.255: 0, 0.395: 1 } },
					{ t: 'Icon04', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon05', p: 'scale', v: { 0.27: 0, 0.41: 1 } },
					{ t: 'Icon06', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon06', p: 'scale', v: { 0.285: 0, 0.435: 1 } },
					{ t: 'Icon06', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } }
				]
			});
		}

		start(){
			this._iconAnimation.start();
		}

		stop(){
			this._iconAnimation.stop();
		}

	}

	class Message extends lng.Component{
		static _template(){
			return {
				Message: { color: 0xFF3B646C, text: { text: '', fontSize: 26 } }
			};
		}

		set message(v){
			this._message = v;
			this.tag('Message').text.text = v;
		}

		get message(){
			return this._message;
		}
	}

	var ThunderJS=function(){function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o);}return t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=null;"undefined"!=typeof WebSocket?t=WebSocket:"undefined"!=typeof MozWebSocket?t=MozWebSocket:void 0!==e?t=e.WebSocket||e.MozWebSocket:"undefined"!=typeof window?t=window.WebSocket||window.MozWebSocket:"undefined"!=typeof self&&(t=self.WebSocket||self.MozWebSocket);function f(t){return new Promise(function(e,n){if(i)e(i);else try{c||((c=new r("ws://"+t.host+"/jsonrpc","notification")).addEventListener("message",function(e){!function(e){if(e.id){var n=a[e.id];n?("result"in e?n.resolve(e.result):n.reject(e.error),delete a[e.id]):console.log("no pending request found with id "+e.id);}}(JSON.parse(e.data));}),c.addEventListener("message",function(e){!function(n){if(!n.id&&n.method){var e=u[n.method];e&&Array.isArray(e)&&e.length?e.forEach(function(e){e(n.params);}):console.log("no callbacks for "+n.method);}}(JSON.parse(e.data));})),c.addEventListener("open",function(){e(i=c);});}catch(e){n(e);}})}function o(s){return {request:function(i,c,u){return new Promise(function(e,n){var t=p+=1,o=function(e,n,t){var o;return (o=t&&t.version)?o:e&&(e[n]||e.default)||1}(s.versions,i,u),r=function(e,n,t,o,r){o&&delete o.version;var i={jsonrpc:"2.0",id:e,method:[n,r,t].join(".")};return !o&&!1!==o||"object"===l(o)&&0===Object.keys(o).length||(i.params=o),i}(t,i,c,u,o);s.debug&&(console.log(" "),console.log("API REQUEST:"),console.log(JSON.stringify(r,null,2)),console.log(" ")),a[t]={body:r,resolve:e,reject:n},function(e,n){f(e).then(function(e){e.send(JSON.stringify(n));}).catch(console.error);}(s,r);})}}}var r=t,a={},u={},i=null,c=null,p=0,s={DeviceInfo:{freeRam:function(e){return this.call("systeminfo",e).then(function(e){return e.freeram})},version:function(e){return this.call("systeminfo",e).then(function(e){return e.version})}}};function d(n,t,e){var o=this,r=function(e,n,t){var o=h(e,n);if(!u[o]){u[o]=[];var r="register";var i=o.split(".").slice(0,-1).join(".");var c={event:n,id:i};this.api.request(e,r,c).then().catch();}return u[o].push(t),u[o].length-1}.call(this,n,t,e);return {dispose:function(){var e=h(n,t);u[e].splice(r,1),0===u[e].length&&function(e,n){var t=h(e,n);delete u[t];var o="unregister",r=t.split(".").slice(0,-1).join("."),i={event:n,id:r};this.api.request(e,o,i);}.call(o,n,t);}}}function h(e,n){return ["client",e,"events",n].join(".")}var y,b=function t(e){return {options:e,plugin:!1,call:function(){var e=Array.prototype.slice.call(arguments);this.plugin&&e[0]!==this.plugin&&e.unshift(this.plugin);var n=e[0],t=e[1];return "function"==typeof this[n][t]?this[n][t](e[2]):this.api.request.apply(this,e)},registerPlugin:function(e,n){this[e]=g(Object.assign(Object.create(t),n,{plugin:e}));},subscribe:function(){},on:function(){var e=Array.prototype.slice.call(arguments);return this.plugin&&e[0]!==this.plugin&&e.unshift(this.plugin),d.apply(this,e)},once:function(){console.log("todo ...");}}},g=function e(n){return new Proxy(n,{get:function(o,r){var i=o[r];return "api"===r?y:void 0!==i?"function"==typeof i?-1<["on","once","subscribe"].indexOf(r)?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.apply(this,n)}:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(t,e){"object"===l(t)&&("object"!==l(t)||t.then&&"function"==typeof t.then)||(t=new Promise(function(e,n){t instanceof Error==!1?e(t):n(t);}));var n="function"==typeof e[e.length-1]?e[e.length-1]:null;if(!n)return t;t.then(function(e){return n(null,e)}).catch(function(e){return n(e)});}(i.apply(this,n),n)}:"object"===l(i)?e(Object.assign(Object.create(b(o.options)),i,{plugin:r})):i:!1===o.plugin?e(Object.assign(Object.create(b(o.options)),{},{plugin:r})):function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.unshift(r),o.call.apply(this,n)}}})};return function(e){return y=o(e),g(function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){var n,t,o;n=r,o=i[t=e],t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o;}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e));});}return r}({},b(e),{},s))}}();

	class WPE {


	    constructor(host, port, stage) {
	        const config = {
	            host: host,
	            port: port
	        };

	        this._stage = stage;
	        this._baseBootmanagerUrl = 'http://bootmanager.metrological.com/rdk/landingpage';
	        this.STATES = {
	            NOIP: 1,
	            HASIP: 2,
	            HASINTERNET: 3
	        };

	        this._state = this.STATES.NOIP;
	        this._thunderjs = new ThunderJS(config);
	        this._thunderjs.on('Controller', 'statechange', this._onMessage.bind(this));
	        this._checkForInternet();

	        setTimeout(this._noConnectionAfterTime, 10000);
	    }

	    _noConnectionAfterTime() {
	        if (this._state !== this.STATES.HASINTERNET) this._updateUIState('NoConnection');
	    }

	    _checkForInternet() {
	        this._thunderjs.call('Controller','status@TimeSync')
	            .then((res) => {
	                if (res && Array.isArray(res) && res[0] && res[0].state === "activated"){
	                    this._state = this.STATES.HASIP;
	                    this._initState();
	                }
	            })
	            .catch((e) => {
	                console.error('Error', e);
	            });


	    }

	    _onMessage(notification) {
	        if (!notification) return;

	        if (notification.callsign === 'LocationSync' && notification.state === 'Activated')
	            this._state = this.STATES.HASIP;

	        if (notification.callsign === 'TimeSync' && notification.state === 'Activated')
	            this._state = this.STATES.HASINTERNET;


	        this._initState();
	    }

	    _initState() {
	        if (this._state === this.STATES.NOIP) return;

	        if (this._state === this.STATES.HASIP) {
	            this._thunderjs.DeviceInfo.addresses()
	                .then(this._parseNetworks.bind(this))
	                .catch((err) => {
	                    this._updateUIState('NoConnection');
	                });
	        }
	        if (this._state === this.STATES.HASINTERNET) {
	                this._getBootmanagerUrl()
	                .then(this._updateUIState.bind(this, 'GoToURL'))
	                .catch(err => {
	                    console.error(err);
	                });
	        }
	    }

	    _updateUIState(state, data){
	        this._stage._setState(state, [{data:data}]);
	    }

	    _getBootmanagerUrl(info) {
	        const url = this._baseBootmanagerUrl;
	        return this._xhr('GET', url);
	    }

	    _parseNetworks(data) {
	        for (var i in data){
	            if (data[i].name === 'eth0'){
	                this._updateUIState('HasLocalNetwork', data[i].ip[0]);
	            }
	        }
	    }

	    _xhr(method, url, body) {
	        return new Promise((resolve, reject) => {
	            var http = new XMLHttpRequest();
	            http.onreadystatechange = (event) => {
	                var req = event.target;
	                if (req.readyState == 4) {
	                    if (req.status == 200) {
	                        try {
	                            resolve(method === 'GET' ? JSON.parse(req.responseText) : undefined);
	                        } catch(err) {
	                            reject(err);
	                        }
	                    } else {
	                        reject('XHR failed');
	                    }

	                }
	            };
	            http.open(method || 'GET', url, true);
	            http.send(body);
	        });
	    }
	}

	class App extends ux.App{
		static _template(){
			return {
				Background: { w: 1920, h: 1080, rect: true, colorTop: 0xFF183644, colorBottom: 0xFF3C646D },
				Wrapper: {
					x: 800, y: -1660, w: 1920, h: 1080, scale: 6.4,
					Clouds: { x: 545, y: 165, w: 1064, h: 556, src: App.getPath('images/assets/clouds.png') },
					Shade: { x: 990, y: 965, w: 876, h: 858, scale: 0.7, mountY: 1, mountX: 0.5, src: App.getPath('images/assets/shade.png') },
					House: { x: 525, y: 445, w: 930, h: 555, src: App.getPath('images/assets/house.png') },
					Icons: { x: 540, y: 510, type: Icons },
					RDKLogo: { x: 820, y: 800, type: RDKLogo, mount: 0.5, scale: 0.18 }
				},
				Message: { x: 80, y: 60, type: Message },
				Overlay:{ w: 1920, h: 1080, rect: true, color: 0xFF000000 }
			};
		}

		_init(){
			//this._wpe = new WPE('10.1.77.201', 80, this);
			this._wpe = new WPE('127.0.0.1', 80, this);
			this._globalAnimation = this.animation({
				duration: 7, repeat: 0, delay: 2, stopMethod: 'immediate', actions: [
					{ t: 'Wrapper', p: 'x', v: { 0.08: 840, 0.3: 0 } },
					{ t: 'Wrapper', p: 'y', v: { 0.08: -1660, 0.3: 0 } },
					{ t: 'Wrapper', p: 'scale', v: { 0.08: 6.4, 0.3: 1 } },
					{ t: 'RDKLogo', p: 'scale', v: { 0.08: 0.12, 0.2: 0.16 } },
					{ t: 'Shade', p: 'scale', v: { 0.16: { v: 0.4, s: 0.3 }, 0.55: { v: 1, se: 1, sme: 1, sm: 1 } } },
					{ t: 'Icons', p: 'y', v: { 0.15: 540, 0.80: { v: 470, se: 0.5, sme: 1, sm: 1 } } },
					{ t: 'Clouds', p: 'x', v: { 0.25: 525, 1: 395 } }
				]
			});
			setTimeout(()=>{
				this.tag('Overlay').visible = false;
				this.startAnimation();
			}, 2000);
		}

		startAnimation(){
			this.tag('RDKLogo').start();
			this.tag('Icons').start();
			this._globalAnimation.start();
		}

		stopAnimation(){
			this.tag('RDKLogo').stop();
			this.tag('Icons').stop();
			this._globalAnimation.stop();
		}

		set ipAddress(v){
			this._ipAddress = v;
		}

		get ipAddress(){
			return this._ipAddress;
		}

		goToUrl(url) {
			window.location.href = url;
		}

		static _states(){
			return [
				class HasLocalNetwork extends this{
					$enter(state, {data}){
						this.tag('Message').message = `Connected; IP: ${data}`;
					}
				},
				class GoToURL extends this{
					$enter(state, {data}){
						if (this._globalAnimation.state === 4) {
							this.goToUrl(data.url);
						} else {
							this._globalAnimation.on('finish', ()=>{
								this.goToUrl(data.url);
							});
						}
					}
				},
				class NoConnection extends this{
					$enter(){
						this.tag('Message').message = 'No valid internet connection';
					}
				},
			];
		};

	}

	return App;

}());
