module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var serveStatic = __webpack_require__(2);
	var express = __webpack_require__(3);
	var ng_1 = __webpack_require__(4);
	var app = express();
	exports.app = app;
	app.use('/', serveStatic(("/Users/apiercey/DemoProjects/angular2/dist/public")));
	app.use('/', ng_1.router);
	app.use(function (req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    return next(err);
	});
	app.use(function (err, req, res, next) {
	    var status = err.status || 500;
	    var stack = err.message;
	    var message = err.stack;
	    if (message.length > 100) {
	        stack = message + (stack ? ('\n\n' + stack) : '');
	        message = 'Server Error';
	    }
	    return next({ status: status, message: message, stack: stack });
	});
	app.use(function (err, req, res, next) {
	    return res.status(err.status).send("\n    <h1>" + err.message + "<h1>\n    <h2>" + err.status + "</h2>\n    <pre>" + err.stack + "</pre>\n  ");
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("serve-static");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var express_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(6);
	var angular2_universal_preview_1 = __webpack_require__(7);
	var app_1 = __webpack_require__(8);
	function reduceScripts(content, src) {
	    return content + "<script type=\"text/javascript\" src=\"" + src + "\"></script>";
	}
	var WORKER_SCRIPTS = [(("vendor") + ".js"), (("worker") + ".js")].reduce(reduceScripts, '');
	var BROWSER_SCRIPTS = [(("vendor") + ".js"), (("browser") + ".js")].reduce(reduceScripts, '');
	var HTML_FILE = __webpack_require__(21);
	function renderComponent(html, component, providers, prebootOptions) {
	    return angular2_universal_preview_1.renderToStringWithPreboot(component, providers, prebootOptions).then(function (serializedCmp) {
	        var selector = angular2_universal_preview_1.selectorResolver(component);
	        return html.replace(angular2_universal_preview_1.selectorRegExpFactory(selector), serializedCmp);
	    });
	}
	exports.renderComponent = renderComponent;
	var PROVIDERS = [
	    router_1.ROUTER_PROVIDERS,
	    angular2_universal_preview_1.SERVER_LOCATION_PROVIDERS,
	    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
	];
	var router = express_1.Router();
	exports.router = router;
	router.get('/*', function (req, res, next) {
	    return Promise.resolve()
	        .then(function () {
	        if (true) {
	            var REQUEST_PROVIDERS = [
	                core_1.provide(angular2_universal_preview_1.REQUEST_URL, { useValue: req.originalUrl })
	            ];
	            return renderComponent(HTML_FILE, app_1.App, [PROVIDERS, REQUEST_PROVIDERS], ({"appRoot":"app","freeze":{"name":"spinner"},"replay":"rerender","buffer":true,"debug":true,"uglify":false}));
	        }
	        return HTML_FILE;
	    })
	        .then(function (rawContent) {
	        var scripts =  true ? WORKER_SCRIPTS : BROWSER_SCRIPTS;
	        var content = rawContent.replace('</body>', scripts + '</body>');
	        return res.send(content);
	    })
	        .catch(function (error) { return next(error); });
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("angular2/router");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(6);
	var home_1 = __webpack_require__(9);
	var workers_1 = __webpack_require__(14);
	var courses_1 = __webpack_require__(15);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [router_1.RouterOutlet, router_1.RouterLink],
	            template: __webpack_require__(20)
	        }),
	        router_1.RouteConfig([
	            { path: '/home', name: 'Home', component: home_1.Home, useAsDefault: true },
	            { path: '/workers', name: 'Workers', component: workers_1.Workers },
	            { path: '/courses', name: 'Courses', component: courses_1.Courses }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(10);
	var Home = (function () {
	    function Home() {
	        var _this = this;
	        this.name = 'World';
	        this.messagePreboot = '';
	        this.messageLazyLoading = '';
	        setTimeout(function () { return _this.name = 'Angular'; }, 1000);
	    }
	    Home.prototype.onCheckPreboot = function () {
	        console.log('Check preboot');
	        this.messagePreboot = 'Preboot is working';
	    };
	    Home.prototype.onCheckLazyLoading = function () {
	        var _this = this;
	        __webpack_require__.e/* nsure */(1, function () {
	            var greeter = __webpack_require__(13);
	            _this.messageLazyLoading = greeter.greet();
	        });
	    };
	    Home = __decorate([
	        core_1.Component({
	            selector: 'preboot-page',
	            directives: [common_1.NgIf],
	            template: __webpack_require__(11),
	            styles: [__webpack_require__(12)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	})();
	exports.Home = Home;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("angular2/common");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, {{ name }}!!!</h1>\n<div>\n  <p>\n    Try to push the button before angular2 will be loaded. \n    Preboot will catch the \"click\" event and replay it later.\n  </p>\n  <div>\n    <button id=\"check-preboot\" (click)=\"onCheckPreboot()\">Check \"Preboot\"</button>\n    <span id=\"message-preboot\" *ngIf=\"messagePreboot\">{{ messagePreboot }}</span>\n  </div>\n  <br />\n  <br />\n  <p>\n    For big applications it’s not efficient to put all code into a single file,\n    especially if some blocks of code are only required under some circumstances. It's much better\n    to split your application into several parts and load them only if they're needed.  \n    That's where <b>Webpack's Code Spliting</b> is shinning.\n    You just need to use its <b>require.ensure()</b> function to specify split points in your\n    application and webpack will do the rest for you.\n    Read more about code splitting and how to use it <a href=\"https://webpack.github.io/docs/code-splitting.html\">here</a>.\n    If you push the next button, the greeting message will be lazy loaded.\n  </p>\n  <div>\n    <button id=\"check-lazyloading\" (click)=\"onCheckLazyLoading()\">Check \"Lazy Loading\"</button>\n    <span id=\"message-lazyloading\" *ngIf=\"messageLazyLoading\">{{ messageLazyLoading }}</span>\n  </div>\n</div>\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "button {\n  background-color:#44c767;\n  border-radius:28px;\n  border:1px solid #18ab29;\n  display:inline-block;\n  cursor:pointer;\n  color:#ffffff;\n  font-family:Arial;\n  font-size:17px;\n  padding:16px 31px;\n  text-decoration:none;\n  text-shadow:0px 1px 0px #2f6627;\n  outline: none;\n}\nbutton:hover {\n  background-color:#5cbf2a;\n}\nbutton:active {\n  position:relative;\n  top:1px;\n}\n\np {\n  font: 12pt/1.5 Helvetica;\n  padding: 15px;\n  color: #31708f;\n  border: 1px solid #bce8f1;\n  border-radius: 4px;\n  background-color: #D9EDF8;\n}\n\nspan {\n  padding: 15px;\n  color: #3c763d;\n  border: 1px solid #d6e9c6;\n  border-radius: 4px;\n  background-color: #dff0d8;\n}\n"

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Workers = (function () {
	    function Workers() {
	    }
	    Workers = __decorate([
	        core_1.Component({
	            selector: 'worker',
	            template: '<h1>Workers Page</h1>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Workers);
	    return Workers;
	})();
	exports.Workers = Workers;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var course_list_component_1 = __webpack_require__(16);
	var Courses = (function () {
	    function Courses() {
	    }
	    Courses = __decorate([
	        core_1.Component({
	            selector: 'courses',
	            template: __webpack_require__(19),
	            directives: [course_list_component_1.CourseList]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Courses);
	    return Courses;
	})();
	exports.Courses = Courses;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var course_1 = __webpack_require__(17);
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(10);
	var CourseList = (function () {
	    function CourseList(courseService) {
	        this.courseService = courseService;
	    }
	    CourseList = __decorate([
	        core_1.Component({
	            selector: 'course-list',
	            template: "\n        <ul>\n            <li *ngFor=\"#course of courses\">\n                <div>ID: {{course.id}}</div>\n                <div>Name: {{course.name}}</div>\n            </li>\n        </ul>\n    ",
	            directives: [common_1.NgFor],
	            providers: [course_1.CourseService]
	        }), 
	        __metadata('design:paramtypes', [course_1.CourseService])
	    ], CourseList);
	    return CourseList;
	})();
	exports.CourseList = CourseList;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(18);
	var CourseService = (function () {
	    function CourseService(http) {
	        this.http = http;
	    }
	    CourseService.prototype.getCourses = function () {
	    };
	    CourseService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], CourseService);
	    return CourseService;
	})();
	exports.CourseService = CourseService;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("angular2/http");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<h1>Our Courses</h1>\n<course-list></course-list>\n<!-- <button (click)=\"lazyLoadCoursesModule()\">Lazy Load Courses Module</button> -->"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Passion.io</h1>\n<ul>\n    <li><a [routerLink]=\" ['Home'] \">Home</a></li>\n    <li><a [routerLink]=\" ['Workers'] \">Workers</a></li>\n    <li><a [routerLink]=\" ['Courses'] \">Courses</a></li>\n</ul>\n<router-outlet></router-outlet>"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Angular2 Universal Starter</title>\n    <base href=\"/\"></base>\n  </head>\n  <body>\n    <app>Loading...</app>\n    <style>.preboot-spinner { margin: auto; top: 0; right: 0; bottom: 0; left: 0 }</style>\n  </body>\n</html>"

/***/ }
/******/ ]);