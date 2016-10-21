"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notificationService_1 = require('./notificationService');
var Notificacion = (function () {
    function Notificacion() {
    }
    return Notificacion;
}());
exports.Notificacion = Notificacion;
var AppComponent = (function () {
    function AppComponent(notificationService) {
        this.notificacion = {
            id: 1,
            nombreCurso: '',
            infoCurso: ''
        };
        this.enviarNotificacion = function (notificacion) {
            notificationService.enviarNotificacion(notificacion);
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [notificationService_1.NotificationService],
            template: "\n  <h1>Comunicaciones EAFIT</h1>\n  Curso: <input [(ngModel)]=\"notificacion.nombreCurso\" placeholder=\"Curso Ingl\u00E9s Adultos\"><br><br>\n  Informaci\u00F3n de curso: <input [(ngModel)]=\"notificacion.infoCurso\" placeholder=\"Nivel 8 - Fecha inicio: 28/09/2016 - Hora: 10-12 L,W,V - Sal\u00F3n: 1-701\" style = \"width: 410px;\"><br><br>\n  <button (click)=\"enviarNotificacion(notificacion)\">Enviar notificacion</button>\n  "
        }), 
        __metadata('design:paramtypes', [notificationService_1.NotificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map