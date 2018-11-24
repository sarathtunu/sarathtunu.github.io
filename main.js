(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <nav class=\"nav navbar-default\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\"><a routerLink = \"list\">List</a></li>\n      <li routerLinkActive=\"active\"><a routerLink = \"create\">Create</a></li>\n    </ul>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'A7CRUD';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees/list-employees.component */ "./src/app/employees/list-employees.component.ts");
/* harmony import */ var _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees/create-employee.component */ "./src/app/employees/create-employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: "list", component: _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__["ListEmployeesComponent"] },
    { path: "create", component: _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_7__["CreateEmployeeComponent"] },
    { path: "", redirectTo: "/list", pathMatch: "full" },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_6__["ListEmployeesComponent"],
                _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_7__["CreateEmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/create-employee.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/create-employee.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/create-employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employees/create-employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #empolyeeForm = \"ngForm\" (ngSubmit) = \"saveEmployee(employee)\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class = \"panel-title\">Create Empolyee</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [class.has-error] = 'name.invalid && name.touched'\n      [class.has-success] = \"name.valid\">\n        <label for=\"name\" class =\"control-label\">Full Name</label>\n        <input id=\"name\" [(ngModel)] = \"employee.name\"  name=\"name\" type=\"text\" \n          class = \"form-control\" required #name = \"ngModel\">        \n        <span class=\"help-block\" *ngIf = \"name.invalid && name.touched\">Full Name Required</span>\n      </div>\n      <!---<div style=\"background: orange\"> touched : {{name.touched}} \n            untouched: {{name.untouched}} <br>\n            pristine: {{name.pristine}} \n            dirty: {{name.dirty}} <br>\n            valid: {{name.valid}}\n            invalid: {{name.invalid}}\n\n      </div>\n      <div style=\"background: orange\"> \n        empolyeeForm touched : {{empolyeeForm.touched}} \n        empolyeeForm untouched: {{empolyeeForm.untouched}} <br>\n        empolyeeForm pristine: {{empolyeeForm.pristine}} \n        empolyeeForm dirty: {{empolyeeForm.dirty}} <br>\n        empolyeeForm valid: {{empolyeeForm.valid}}\n        empolyeeForm invalid: {{empolyeeForm.invalid}}\n\n      </div> -->\n      <!--\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" pattern\n          email for angular validation-->\n      <div class=\"form-group\" [class.has-error] = \"email.invalid && email.touched\">\n          <label for=\"email\" class=\"control-label\">Email</label>\n          <input id=\"email\" type=\"text\" class = \"form-control\" \n          [(ngModel)] = \"employee.email\" name=\"email\" required \n          pattern=\"^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\\.)?[a-zA-Z]+\\.)?(danishtech)\\.com$\"\n          \n          #email=\"ngModel\"\n          >\n          <span class=\"help-block\" *ngIf = \"email.errors?.required && email.touched\">Email is required</span>\n          <span class=\"help-block\" *ngIf = \"email.errors?.pattern && email.touched\">Email is invalid</span>\n          \n      </div>\n      <div class=\"form-group\" [class.has-error] = \"phoneNumber.touched && phoneNumber.invalid\"> \n          <label for=\"phoneNumber\" class=\"control-label\">Phone Number</label>\n          <input id=\"phoneNumber\" type=\"text\" class = \"form-control\" \n          [(ngModel)] = \"employee.phoneNumber\" name=\"phoneNumber\"\n          required #phoneNumber=\"ngModel\">\n          <span class=\"help-block\" *ngIf = \"phoneNumber.touched && phoneNumber.errors?.required\">\n            Phone Number is required</span>\n      </div>\n      <div class=\"form-group\" [class.has-error] = \"contactPreference.touched && contactPreference.invalid\">\n        <label class='control-label'>Contact Preference</label>\n        <div class=\"form-control\">\n          <label class=\"radio-inline\" for=\"cPhone\">\n          <input type=\"radio\" name=\"contactPreference\" [(ngModel)] = \"employee.contactPreference\" \n          id = \"cPhone\" value=\"Phone\" #contactPreference=\"ngModel\" required>Phone\n          </label>\n          <label class=\"radio-inline\" for=\"cEmail\">\n            <input type=\"radio\" [(ngModel)] = \"employee.contactPreference\" id = \"cEmail\" \n            name=\"contactPreference\" value=\"Email\" #contactPreference=\"ngModel\" required>Email\n          </label>\n          <span class = \"help-block\" *ngIf = \"contactPreference.touched && contactPreference.invalid\">Contact Preference is required</span>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error] = \"gender.touched && gender.invalid\">\n        <label class=\"control-label\">Gender</label>\n        <div class=\"form-control\" >          \n          <label for=\"Male\" class = \"radio-inline\"> \n            <input id=\"Male\" type=\"radio\"  [(ngModel)] = \"employee.gender\" name=\"gender\" value =\"Male\"\n            #gender = \"ngModel\" required>Male            \n          </label>\n          <label for=\"Female\" class = \"radio-inline\"> \n            <input id=\"Female\" type=\"radio\"  [(ngModel)] = \"employee.gender\" name=\"gender\" value =\"Female\"\n            #gender = \"ngModel\" required>Female            \n          </label>\n          <span class=\"help-block\" *ngIf = \"gender.touched && gender.invalid\">Gender is required</span>\n        </div>  \n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-control\">\n          <label name = \"isActive\" class=\"checkbox-inline\">\n            <input type=\"checkbox\"  id=\"isActive\" [(ngModel)]=\"employee.isActive\" name=\"isActive\" >is Active\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error] = \"department.touched && department.invalid\">\n        <label for=\"department\" class=\"control-label\">Department</label>\n        <select id=\"department\" class=\"form-control\" name = \"department\" [(ngModel)] = \"employee.department\"\n          required #department = \"ngModel\">\n          <option value =\"-1\">Select Department</option>\n          <option *ngFor = \"let department of departments\" value = \"department.id\">{{department.name}}</option>\n        </select>\n        <span class=\"help-block\" *ngIf = \"department.touched && department.invalid\">Department is required</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dOB\">Date of Birth</label>\n        <input type =\"date\" class=\"form-control\" id=\"doB\" name=\"doB\" [(ngModel)] = \"employee.dateOfBirth\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"photoPath\">Photo Path</label>\n        <input type=\"text\" class=\"form-control\" id=\"photoPath\" name=\"photoPath\" [(ngModel)] = \"employee.photoPath\">\n        \n      </div>\n      <div class=\"form-group\">\n        <button type = \"button\" (click) = \"togglePreviewPhoto()\" class=\"btn btn-primary\">{{buttonValue}} Preview</button>\n      </div>\n      <div class=\"form-group\">\n        <img [src]='employee.photoPath' height=\"200px\" width=\"200px\" *ngIf = \"previewPhoto\">\n      </div>\n    </div>\n    <div class = \"panel-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled] = \"empolyeeForm.invalid\">Save</button>\n    </div>\n  </div>\n</form>\n\nAngular Generated Form Model : {{empolyeeForm.value | json}}\n<br>\n<br>\nEmployee output : {{employee | json}}"

/***/ }),

/***/ "./src/app/employees/create-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/create-employee.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent() {
        this.buttonValue = "Show";
        this.previewPhoto = false;
        this.employee = {
            id: null,
            name: null,
            gender: null,
            email: null,
            phoneNumber: null,
            contactPreference: null,
            dateOfBirth: null,
            department: "-1",
            isActive: null,
            photoPath: null
        };
        this.departments = [
            { id: 1, name: "Help Desk" },
            { id: 2, name: "HR" },
            { id: 3, name: "IT" },
            { id: 4, name: "Payroll" },
            { id: 5, name: "Admin" },
        ];
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
    };
    CreateEmployeeComponent.prototype.saveEmployee = function (newEmployee) {
        //console.log(this.employee);
        console.log(newEmployee);
    };
    CreateEmployeeComponent.prototype.togglePreviewPhoto = function () {
        this.previewPhoto = (!this.previewPhoto);
        this.buttonValue = (this.buttonValue == "Show") ? "Hide" : "Show";
    };
    CreateEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/employees/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/employees/create-employee.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/list-employees.component.css":
/*!********************************************************!*\
  !*** ./src/app/employees/list-employees.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass {\r\n    height: 200px;\r\n    widows: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2xpc3QtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9saXN0LWVtcGxveWVlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQ2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZG93czogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/employees/list-employees.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employees/list-employees.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngFor = \"let employee of employees\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{employee.name}}</h3>\n  </div>\n  <div class=\"panel-body\">\n      <div class=\"col-xs-10\">\n        <div class=\"row vertical-align\">\n          <div class=\"col-xs-4\">\n            <img class = \"imageClass\" [src] = 'employee.photoPath'>\n          </div>\n          <div class=\"col-xs-8\">\n            <div class = \"row\">\n              <div class = \"col-xs-6\">\n                Gender\n              </div>\n              <div class = \"col-xs-6\">\n                : {{employee.gender}}\n              </div>\n              <div class = \"col-xs-6\">\n                Date of Birth\n              </div>\n              <div class = \"col-xs-6\">\n                    : {{employee.dateOfBirth | date}}\n              </div>\n              <div class = \"col-xs-6\">\n                Contract Preference      \n              </div>\n              <div class = \"col-xs-6\">\n                : {{employee.contactPreference}}\n              </div>\n              <div class = \"col-xs-6\">\n                Phone\n              </div>\n              <div class = \"col-xs-6\">\n                  : {{employee.phoneNumber}}\n              </div>\n              <div class = \"col-xs-6\">\n                Email\n              </div>\n              <div class = \"col-xs-6\">\n                : {{employee.email}}\n              </div>\n              <div class = \"col-xs-6\">\n                Department\n              </div>\n              <div class = \"col-xs-6\">\n                : {{employee.department}}\n              </div>    \n              <div class = \"col-xs-6\">\n                is Active\n              </div>\n              <div class = \"col-xs-6\">\n                : {{employee.isActive}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/list-employees.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/list-employees.component.ts ***!
  \*******************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent() {
        this.employees = [
            {
                id: 1,
                name: 'Mark',
                gender: 'Male',
                contactPreference: 'Email',
                email: 'mark@pragimtech.com',
                dateOfBirth: new Date('10/25/1988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                gender: 'Female',
                contactPreference: 'Phone',
                phoneNumber: 2345978640,
                dateOfBirth: new Date('11/20/1979'),
                department: 'HR',
                isActive: true,
                photoPath: 'assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                gender: 'Male',
                contactPreference: 'Phone',
                phoneNumber: 5432978640,
                dateOfBirth: new Date('3/25/1976'),
                department: 'IT',
                isActive: false,
                photoPath: 'assets/images/john.png'
            },
        ];
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
    };
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.css */ "./src/app/employees/list-employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sarath\NG2apps\A7CRUD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map