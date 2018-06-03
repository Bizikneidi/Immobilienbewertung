webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!questionnaireFinished\">\n  <img class=\"img\" src=\"../assets/images/stencil.default-300x200.jpg\" />\n  <h1>Was ist Ihre Immobilie wert?</h1>\n  <p>Berechnen Sie ganz einfach den Preis Ihrer Immobilie in wenigen Schritten.</p>\n  <button class=\"btn control\" (click)=\"onStartButtonClicked()\" *ngIf=\"!questionnaireInProgress&&!questionnaireFinished\">✔ Jetzt starten</button>\n</div>\n\n\n\n<app-questionnaire *ngIf=\"questionnaireInProgress\" [question]=\"selectedQuestion\"></app-questionnaire>\n\n<app-evaluation *ngIf=\"questionnaireFinished\" [evaluatedValue]=\"evaluatedValue\"></app-evaluation>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evaluator_evaluator_service__ = __webpack_require__("./src/app/evaluator/evaluator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_question_http_question_service__ = __webpack_require__("./src/app/http-question/http-question.service.ts");
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
    function AppComponent(evaluator, httpQuestionService) {
        this.evaluator = evaluator;
        this.httpQuestionService = httpQuestionService;
        this.title = 'app';
        this.questionnaireInProgress = false;
        this.questionnaireFinished = false;
        this.evaluatedValue = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onStartButtonClicked = function () {
        var _this = this;
        this.evaluator.newQuestionObservable.subscribe({
            next: function (data) {
                _this.selectedQuestion = data;
                _this.questionnaireInProgress = true;
            },
            complete: function () {
                _this.questionnaireFinished = true;
                _this.questionnaireInProgress = false;
                _this.httpQuestionService.evaluate(_this.evaluator.answered).subscribe(function (data) { return _this.evaluatedValue = data; });
            },
            error: function () { _this.selectedQuestion = null; }
        });
        this.httpQuestionService.getQuestion().subscribe(function (question) { return _this.evaluator.startEvaluation(question); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__evaluator_evaluator_service__["a" /* EvaluatorService */], __WEBPACK_IMPORTED_MODULE_2__http_question_http_question_service__["a" /* HttpQuestionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__evaluation_evaluation_component__ = __webpack_require__("./src/app/evaluation/evaluation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__evaluator_evaluator_service__ = __webpack_require__("./src/app/evaluator/evaluator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_question_http_question_service__ = __webpack_require__("./src/app/http-question/http-question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionnaire_questionnaire_component__ = __webpack_require__("./src/app/questionnaire/questionnaire.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__evaluation_evaluation_component__["a" /* EvaluationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__evaluator_evaluator_service__["a" /* EvaluatorService */], __WEBPACK_IMPORTED_MODULE_6__http_question_http_question_service__["a" /* HttpQuestionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entities/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
        this.type = 'button';
        this.classForHTMLElement = '';
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/evaluation/evaluation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Ihre Anfrage wurde weitergeleitet und wird nun bearbeitet!</h1>\n\n<p>Geschätzter Wert: {{evaluatedValue}}</p>\n\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EvaluationComponent = /** @class */ (function () {
    function EvaluationComponent() {
    }
    EvaluationComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], EvaluationComponent.prototype, "evaluatedValue", void 0);
    EvaluationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-evaluation',
            template: __webpack_require__("./src/app/evaluation/evaluation.component.html"),
            styles: [__webpack_require__("./src/app/evaluation/evaluation.component.css")]
        })
    ], EvaluationComponent);
    return EvaluationComponent;
}());



/***/ }),

/***/ "./src/app/evaluator/evaluator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_subject__ = __webpack_require__("./node_modules/rxjs/subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvaluatorService = /** @class */ (function () {
    function EvaluatorService() {
        this.newQuestionSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_subject__["Subject"]();
        this.newQuestionObservable = this.newQuestionSubject.asObservable();
        this.answered = new Map();
        this.answeredQuestions = [];
    }
    EvaluatorService.prototype.startEvaluation = function (question) {
        this.selectedQuestion = question;
        this.newQuestionSubject.next(this.selectedQuestion);
    };
    EvaluatorService.prototype.evaluate = function (possibility) {
        this.answered.set(this.selectedQuestion.questionId, possibility.answerValue);
        this.answeredQuestions[this.answeredQuestions.length] = this.selectedQuestion;
        if (possibility.nextQuestion != null) {
            this.selectedQuestion = possibility.nextQuestion;
            this.newQuestionSubject.next(this.selectedQuestion);
        }
        else {
            this.newQuestionSubject.complete();
        }
    };
    EvaluatorService.prototype.goBack = function () {
        if (this.answeredQuestions.length > 0) {
            this.selectedQuestion = this.answeredQuestions[this.answeredQuestions.length - 1];
            this.newQuestionSubject.next(this.selectedQuestion);
            this.answeredQuestions.splice(this.answeredQuestions.length - 1, 1);
        }
    };
    EvaluatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EvaluatorService);
    return EvaluatorService;
}());



/***/ }),

/***/ "./src/app/http-question/http-question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpQuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpQuestionService = /** @class */ (function () {
    // baseurl: String = 'http://localhost:28080/real-estate/rest/';
    function HttpQuestionService(httpClient) {
        this.httpClient = httpClient;
        this.baseurl = 'http://206.189.57.185:28080/real-estate/rest/';
    }
    HttpQuestionService.prototype.getQuestion = function () {
        return this.httpClient.get(this.baseurl + 'question');
    };
    HttpQuestionService.prototype.evaluate = function (evaluation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var mapStr = JSON.stringify(Array.from(evaluation.entries()));
        return this.httpClient
            .post(this.baseurl + 'question', '{ \"answers\": ' + mapStr + ' }', { headers: headers });
    };
    HttpQuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpQuestionService);
    return HttpQuestionService;
}());



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.css":
/***/ (function(module, exports) {

module.exports = ".body-section {\r\n  background-color: lightgray;\r\n  width: 100%;\r\n  left:0;\r\n  right: 0;\r\n  padding-bottom: 20px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.number {\r\n  width: 200px;\r\n}\r\n\r\n.selected {\r\n  background-color: lightgreen;\r\n  outline: none;\r\n  border-color: lightgreen;\r\n  -webkit-box-shadow: 0 0 20px lightgreen;\r\n          box-shadow: 0 0 20px lightgreen;\r\n}\r\n\r\nbutton.selected {\r\n  fill: lightgreen;\r\n}\r\n\r\n.image_icon {\r\n  height: 10%;\r\n  width: 10%;\r\n  padding: 10px;\r\n}\r\n\r\nbutton.possibility {\r\n  background-color: darkgray;\r\n  fill: darkgray;\r\n}\r\n\r\ndiv.possibilityRow {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container body-section\">\n  <div class=\"\">\n    <h1>{{question.text}}</h1>\n  </div>\n  <div class=\"possibilityRow\">\n    <span *ngFor=\"let possibility of question.possibleAnswers\">\n      <button *ngIf=\"question.type === 'button'\" (click)=\"onAnswerClicked(possibility)\"\n              [ngClass]=\"'possibility ' + question.classForHTMLElement + ' ' + getSelected(possibility)\">{{possibility.answerText}}</button>\n\n      <img [title]=\"possibility.answerValue\" *ngIf=\"question.type === 'image'\" [alt]=\"possibility.answerText\" (click)=\"onAnswerClicked(possibility)\"\n           [ngClass]=\"question.classForHTMLElement + ' ' + getSelected(possibility)\"\n           [src]=\"possibility.imgSrc\"/>\n\n      <!--<span class=\"tooltip-text\">{{possibility.answerValue}}</span>-->\n\n      <label *ngIf=\"question.type === 'input'\">{{possibility.answerText}}\n        <input class=\"\" name=\"inputValue\" [type]=\"getType()\" *ngIf=\"question.type === 'input'\"\n               [(ngModel)]=\"possibility.answerValue\"\n               (keyup)=\"onInputDetected(possibility)\"\n               [ngClass]=\"question.classForHTMLElement + ' ' + getSelected(possibility)\">\n      </label>\n      <div *ngIf=\"question.type === 'multiInput'\" class=\"form-group row\">\n        <label class=\"\">{{possibility.answerText}}\n        <input class=\"\" name=\"multiInputValue\" type=\"text\" [(ngModel)]=\"possibility.answerValue\"\n               (keyup)=\"onInputDetected(possibility)\"\n               [ngClass]=\"question.classForHTMLElement + ' ' + getSelected(possibility)\">\n        </label>\n      </div>\n    </span>\n  </div>\n  <div class=\"\">\n    <button class=\"btn\" (click)=\"evaluator.goBack(chosen)\">Zurück</button>\n    <button class=\"btn\" (click)=\"evaluateAnswer()\" [disabled]=\"chosen === undefined\">Weiter</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_question__ = __webpack_require__("./src/app/entities/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluator_evaluator_service__ = __webpack_require__("./src/app/evaluator/evaluator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(evaluator) {
        this.evaluator = evaluator;
    }
    QuestionnaireComponent.prototype.ngOnChanges = function () {
        this.question.possibleAnswers.forEach(function (p) { return p.isSelected = false; });
        if (this.question.type === 'input') {
            this.chosen = this.question.possibleAnswers[0];
        }
    };
    QuestionnaireComponent.prototype.getType = function () {
        if (this.question.classForHTMLElement.includes('number')) {
            return 'number';
        }
        return 'text';
    };
    QuestionnaireComponent.prototype.getSelected = function (possibility) {
        if (possibility.isSelected) {
            return 'selected';
        }
        return '';
    };
    QuestionnaireComponent.prototype.onAnswerClicked = function (possibility) {
        this.question.possibleAnswers.forEach(function (p) { return p.isSelected = false; });
        this.chosen = possibility;
        this.chosen.isSelected = true;
    };
    QuestionnaireComponent.prototype.onInputDetected = function (possibility) {
        if (possibility.answerValue == null || possibility.answerValue === '') {
            this.chosen = undefined;
        }
        else {
            this.chosen = possibility;
        }
    };
    QuestionnaireComponent.prototype.evaluateAnswer = function () {
        if (this.chosen !== undefined) {
            this.evaluator.evaluate(this.chosen);
            this.chosen = undefined;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__entities_question__["a" /* Question */])
    ], QuestionnaireComponent.prototype, "question", void 0);
    QuestionnaireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-questionnaire',
            template: __webpack_require__("./src/app/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__("./src/app/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__evaluator_evaluator_service__["a" /* EvaluatorService */]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map