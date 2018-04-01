webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoutingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_articles_display_articles_component__ = __webpack_require__("../../../../../src/app/display-articles/display-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saved_articles_saved_articles_component__ = __webpack_require__("../../../../../src/app/saved-articles/saved-articles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'display-articles', component: __WEBPACK_IMPORTED_MODULE_2__display_articles_display_articles_component__["a" /* DisplayArticlesComponent */] },
    { path: 'saved-articles', component: __WEBPACK_IMPORTED_MODULE_3__saved_articles_saved_articles_component__["a" /* SavedArticlesComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [__WEBPACK_IMPORTED_MODULE_2__display_articles_display_articles_component__["a" /* DisplayArticlesComponent */], __WEBPACK_IMPORTED_MODULE_3__saved_articles_saved_articles_component__["a" /* SavedArticlesComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n  text-align: center;\r\n  padding: 15%;\r\n  background-image: url(\"https://cdn.vox-cdn.com/uploads/chorus_asset/file/7383237/Masthead_LR_1.0.png\");\r\n  color: white;\r\n  -webkit-box-shadow: 0px 29px 38px -5px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 29px 38px -5px rgba(0, 0, 0, 0.75);\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"display-articles\">Mongo Scraper</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link active\" routerLink=\"display-articles\">Home\r\n        <span class=\"sr-only\">(current)</span>\r\n      </a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"saved-articles\">saved Articles</a>\r\n      <a class=\"nav-item nav-link\" (click)=\"scrapeArticles()\">SCAPE NEW ARTICLES</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"main\">\r\n  <h1>Mongo Scraper</h1>\r\n  <h3>The Verge</h3>\r\n</div>\r\n\r\n<!--router views-->\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"modal\" id=\"articles-added-modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h3>You have added {{articlesAdded}} articles</h3>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient, router, dataService) {
        this.httpClient = httpClient;
        this.router = router;
        this.dataService = dataService;
        this.title = 'Web Scraper';
        this.articlesAdded = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['display-articles']);
    };
    AppComponent.prototype.scrapeArticles = function () {
        var _this = this;
        this.httpClient.get('./api/scrape').subscribe(function (data) {
            _this.dataService.setArticles(data);
            _this.articlesAdded = data['length'];
            $('#articles-added-modal').modal('show');
            _this.router.navigate(['display-articles']);
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'app-root', template: __webpack_require__("../../../../../src/app/app.component.html"), styles: [__webpack_require__("../../../../../src/app/app.component.css")] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["b" /* RoutingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.articles = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    DataService.prototype.setArticles = function (articles) {
        this.articles.next(articles);
    };
    DataService.prototype.getArticles = function () {
        return this.articles;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/display-articles/display-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-article {\r\n  text-align: center;\r\n  background-color: rgb(221, 19, 36);\r\n  padding: 2%;\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-articles/display-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"display-articles\">\r\n  <div *ngIf=\"!articles\" class=\"no-article\">\r\n    <h4>There's no new articles</h4>\r\n  </div>\r\n\r\n  <div *ngIf=\"articles\" class=\"articles\">\r\n    <div *ngFor=\"let article of articles\" class=\"card text-white bg-light mb-3\">\r\n      <div class=\"card-header\">\r\n        <a href=\"{{article.link}}\" target=\"_blank\">{{article.title}}</a>\r\n        <button (click)=\"saveArticle(article)\">SAVE ARTICLE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/display-articles/display-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayArticlesComponent = /** @class */ (function () {
    function DisplayArticlesComponent(httpClient, dataService) {
        this.httpClient = httpClient;
        this.dataService = dataService;
    }
    DisplayArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getArticles().subscribe(function (data) {
            _this.articles = data;
        });
    };
    DisplayArticlesComponent.prototype.saveArticle = function (article) {
        this.httpClient.post('./api/article', { article: article }).subscribe(function (data) { }, function (err) {
            console.log(err);
        });
    };
    DisplayArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ht-display-articles',
            template: __webpack_require__("../../../../../src/app/display-articles/display-articles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-articles/display-articles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], DisplayArticlesComponent);
    return DisplayArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/saved-articles/saved-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-article {\r\n  text-align: center;\r\n  background-color: rgb(221, 19, 36);\r\n  padding: 2%;\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n  margin-right: 5px;\r\n}\r\n\r\n.article-notes {\r\n  outline: black;\r\n  margin: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n#new-article-note {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saved-articles/saved-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"saved-articles\">\n  <div *ngIf=\"!articles|| !articles[0] || articles==undefined\" class=\"no-article\">\n    <h4>There's no saved article</h4>\n  </div>\n\n  <div *ngIf=\"articles\" class=\"articles\">\n    <div *ngFor=\"let article of articles; index as i\" class=\"card text-white bg-light mb-3\">\n      <div class=\"card-header\">\n        <a href=\"{{article.link}}\" target=\"_blank\">{{article.title}}</a>\n        <button class=\"btn btn-primary btn-sm\" (click)=\"articleNotes(article) \">ARTICLE NOTES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"deleteArticle(i)\">DELETE FROM SAVED</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"note-modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n          <strong>Notes for Article:</strong> {{article.title}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"article-notes\">\n        {{article.note.body}}\n        <button type=\"button\" class=\"close\" (click)=\"deleteNote(article.note._id)\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <textarea id=\"new-article-note\" placeholder=\"New Note\"></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"saveNote(article._id)\">SAVE NOTE</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/saved-articles/saved-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavedArticlesComponent = /** @class */ (function () {
    function SavedArticlesComponent(httpClient, dataService) {
        this.httpClient = httpClient;
        this.dataService = dataService;
        this.article = {};
    }
    SavedArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get('./api/articles').subscribe(function (data) {
            _this.articles = data;
        }, function (err) {
            console.log(err);
        });
    };
    SavedArticlesComponent.prototype.deleteNote = function (noteId) {
        this.httpClient.delete('./api/note/' + noteId).subscribe(function (data) {
            // this.article.note.body = "";
        }, function (err) {
            console.log(err);
        });
    };
    SavedArticlesComponent.prototype.articleNotes = function (article) {
        var _this = this;
        this.httpClient.get('./api/article/' + article._id).subscribe(function (data) {
            _this.article = data;
            $('#note-modal').modal('show');
        }, function (err) {
            console.log(err);
        });
    };
    SavedArticlesComponent.prototype.saveNote = function (articleId) {
        var note = $('#new-article-note').val();
        if (note !== '') {
            this.httpClient.post('./api/article/' + articleId, { body: note }).subscribe(function (data) { }, function (err) {
                console.log(err);
            });
        }
    };
    SavedArticlesComponent.prototype.deleteArticle = function (index) {
        var _this = this;
        this.httpClient.delete('./api/article/' + this.articles[index]._id).subscribe(function (data) {
            _this.articles.splice(index, 1);
        }, function (err) {
            console.log(err);
        });
    };
    SavedArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'ht-saved-articles', template: __webpack_require__("../../../../../src/app/saved-articles/saved-articles.component.html"), styles: [__webpack_require__("../../../../../src/app/saved-articles/saved-articles.component.css")] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], SavedArticlesComponent);
    return SavedArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map