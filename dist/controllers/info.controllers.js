"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHabeasMenor = exports.getInfoMDById = exports.getInfoHabeasMenor = exports.getInfoHabeas = exports.getInfo = exports.createInfo = exports.createHabeasMenor = exports.createHabeas = void 0;
var _mssql = require("mssql");
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//CONSULTAR TODA LA INFORMACION DE LOS REGISTROS ACTUALIZACION DE DATOS
var getInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context.sent;
            _context.next = 5;
            return pool.request().query(_database.queries.getInfo);
          case 5:
            result = _context.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//CONSULTAR LA  INFORMACION INDIVIDUAL DE NOMINA
exports.getInfo = getInfo;
var getInfoMDById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, pool, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _database.getConnectionMD)();
          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().input("id", _database.sql.VarChar, id).query(_database.queries.getInfoMDById);
          case 6:
            result = _context2.sent;
            if (result.rowsAffected < 1) {
              res.sendStatus(204);
            } else {
              res.json(result.recordset);
            }
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getInfoMDById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS
exports.getInfoMDById = getInfoMDById;
var getInfoHabeas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context3.sent;
            _context3.next = 5;
            return pool.request().query("SELECT * FROM InfoheonHabeasData");
          case 5:
            result = _context3.sent;
            res.json(result.recordset);
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getInfoHabeas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//CONSULTAR LA INFORMACION DE ACEPTACION DE TTO DATOS  MENORES
exports.getInfoHabeas = getInfoHabeas;
var getInfoHabeasMenor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var pool, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context4.sent;
            _context4.next = 5;
            return pool.request().query(_database.queries.getInfoHabeasMenor);
          case 5:
            result = _context4.sent;
            res.json(result.recordset);
          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getInfoHabeasMenor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//INSERTAR LA ACEPTACION DE TTO DE DATOS
exports.getInfoHabeasMenor = getInfoHabeasMenor;
var createHabeas = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, documento = _req$body.documento, fecha = _req$body.fecha, estado = _req$body.estado, ipAddress = _req$body.ipAddress, usuario = _req$body.usuario, nombreCompleto = _req$body.nombreCompleto;
            _context5.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.createHabeas);
          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function createHabeas(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//INSERTAR LA ACEPTACION DE TTO DE DATOS MENORES DE EDAD
exports.createHabeas = createHabeas;
var createHabeasMenor = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body2, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, documento = _req$body2.documento, fecha = _req$body2.fecha, estado = _req$body2.estado, ipAddress = _req$body2.ipAddress, usuario = _req$body2.usuario, nombreCompleto = _req$body2.nombreCompleto;
            _context6.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context6.sent;
            _context6.next = 6;
            return pool.request().input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.createHabeasMenor);
          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function createHabeasMenor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//ACTUALIZAR LA INFORMACION DE TTO DE DATOS MENORES DE EDAD
exports.createHabeasMenor = createHabeasMenor;
var updateHabeasMenor = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, _req$body3, documento, fecha, estado, ipAddress, usuario, nombreCompleto, pool, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, documento = _req$body3.documento, fecha = _req$body3.fecha, estado = _req$body3.estado, ipAddress = _req$body3.ipAddress, usuario = _req$body3.usuario, nombreCompleto = _req$body3.nombreCompleto;
            _context7.next = 4;
            return (0, _database.getConnection)();
          case 4:
            pool = _context7.sent;
            _context7.next = 7;
            return pool.request().input("id", _database.sql.VarChar, id).input("documento", _database.sql.VarChar, documento).input("fecha", _database.sql.VarChar, fecha).input("estado", _database.sql.VarChar, estado).input("ipAddress", _database.sql.VarChar, ipAddress).input("usuario", _database.sql.VarChar, usuario).input("nombreCompleto", _database.sql.VarChar, nombreCompleto).query(_database.queries.updateHabeasMenor);
          case 7:
            result = _context7.sent;
            res.json(result);
          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function updateHabeasMenor(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//INSERTAR LA INFORMACION PRINCIPAL DE LA ENCUESTA
exports.updateHabeasMenor = updateHabeasMenor;
var createInfo = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body4, apellidos, nombres, edad, nacionalidad, identificacion, paisExp, deptoExp, ciudadExp, paisNacimiento, deptoNacimiento, ciudadNacimiento, genero, rh, estadoCivil, grupoEtnico, cabezaFamilia, emailPersonal, celularPersonal, emailCorporativo, celularCorporativo, ocupacion, tipoContrato, fechaIngreso, departamento, cargo, area, paisResidencia, dptoResidencia, ciudad, localidad, direccion, barrio, nivelSocioec, tieneVehiculo, tipoVivienda, nomContactoEmerg, parentescoContEmerg, telContactoEmergencia, estudiaActualmente, programaEnCurso, tituloEducObtenido, Otro, nivelEducativo, institucionEducativa, tarjetaProfesional, deportePractica, cualDeporte, frecuencia, manejoTiempoLibre, victimaConflicto, registroUnicoVict, mujerVict, discapaComp, calificaEnCurso, condEspSalud, cualCondEspSalud, respPersDisc, hijoEnfermTermi, pool;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body4 = req.body, apellidos = _req$body4.apellidos, nombres = _req$body4.nombres, edad = _req$body4.edad, nacionalidad = _req$body4.nacionalidad, identificacion = _req$body4.identificacion, paisExp = _req$body4.paisExp, deptoExp = _req$body4.deptoExp, ciudadExp = _req$body4.ciudadExp, paisNacimiento = _req$body4.paisNacimiento, deptoNacimiento = _req$body4.deptoNacimiento, ciudadNacimiento = _req$body4.ciudadNacimiento, genero = _req$body4.genero, rh = _req$body4.rh, estadoCivil = _req$body4.estadoCivil, grupoEtnico = _req$body4.grupoEtnico, cabezaFamilia = _req$body4.cabezaFamilia, emailPersonal = _req$body4.emailPersonal, celularPersonal = _req$body4.celularPersonal, emailCorporativo = _req$body4.emailCorporativo, celularCorporativo = _req$body4.celularCorporativo, ocupacion = _req$body4.ocupacion, tipoContrato = _req$body4.tipoContrato, fechaIngreso = _req$body4.fechaIngreso, departamento = _req$body4.departamento, cargo = _req$body4.cargo, area = _req$body4.area, paisResidencia = _req$body4.paisResidencia, dptoResidencia = _req$body4.dptoResidencia, ciudad = _req$body4.ciudad, localidad = _req$body4.localidad, direccion = _req$body4.direccion, barrio = _req$body4.barrio, nivelSocioec = _req$body4.nivelSocioec, tieneVehiculo = _req$body4.tieneVehiculo, tipoVivienda = _req$body4.tipoVivienda, nomContactoEmerg = _req$body4.nomContactoEmerg, parentescoContEmerg = _req$body4.parentescoContEmerg, telContactoEmergencia = _req$body4.telContactoEmergencia, estudiaActualmente = _req$body4.estudiaActualmente, programaEnCurso = _req$body4.programaEnCurso, tituloEducObtenido = _req$body4.tituloEducObtenido, Otro = _req$body4.Otro, nivelEducativo = _req$body4.nivelEducativo, institucionEducativa = _req$body4.institucionEducativa, tarjetaProfesional = _req$body4.tarjetaProfesional, deportePractica = _req$body4.deportePractica, cualDeporte = _req$body4.cualDeporte, frecuencia = _req$body4.frecuencia, manejoTiempoLibre = _req$body4.manejoTiempoLibre, victimaConflicto = _req$body4.victimaConflicto, registroUnicoVict = _req$body4.registroUnicoVict, mujerVict = _req$body4.mujerVict, discapaComp = _req$body4.discapaComp, calificaEnCurso = _req$body4.calificaEnCurso, condEspSalud = _req$body4.condEspSalud, cualCondEspSalud = _req$body4.cualCondEspSalud, respPersDisc = _req$body4.respPersDisc, hijoEnfermTermi = _req$body4.hijoEnfermTermi;
            _context8.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context8.sent;
            _context8.next = 6;
            return pool.request().input("apellidos", _database.sql.VarChar, apellidos).input("nombres", _database.sql.VarChar, nombres).input("edad", _database.sql.VarChar, edad).input("nacionalidad", _database.sql.VarChar, nacionalidad).input("identificacion", _database.sql.VarChar, identificacion).input("paisExp", _database.sql.VarChar, paisExp).input("deptoExp", _database.sql.VarChar, deptoExp).input("ciudadExp", _database.sql.VarChar, ciudadExp).input("paisNacimiento", _database.sql.VarChar, paisNacimiento).input("deptoNacimiento", _database.sql.VarChar, deptoNacimiento).input("ciudadNacimiento", _database.sql.VarChar, ciudadNacimiento).input("genero", _database.sql.VarChar, genero).input("rh", _database.sql.VarChar, rh).input("estadoCivil", _database.sql.VarChar, estadoCivil).input("grupoEtnico", _database.sql.VarChar, grupoEtnico).input("cabezaFamilia", _database.sql.VarChar, cabezaFamilia).input("emailPersonal", _database.sql.VarChar, emailPersonal).input("celularPersonal", _database.sql.VarChar, celularPersonal).input("emailCorporativo", _database.sql.VarChar, emailCorporativo).input("celularCorporativo", _database.sql.VarChar, celularCorporativo).input("ocupacion", _database.sql.VarChar, ocupacion).input("tipoContrato", _database.sql.VarChar, tipoContrato).input("fechaIngreso", _database.sql.VarChar, fechaIngreso).input("departamento", _database.sql.VarChar, departamento).input("cargo", _database.sql.VarChar, cargo).input("area", _database.sql.VarChar, area).input("paisResidencia", _database.sql.VarChar, paisResidencia).input("dptoResidencia", _database.sql.VarChar, dptoResidencia).input("ciudad", _database.sql.VarChar, ciudad).input("localidad", _database.sql.VarChar, localidad).input("direccion", _database.sql.VarChar, direccion).input("barrio", _database.sql.VarChar, barrio).input("nivelSocioec", _database.sql.VarChar, nivelSocioec).input("tieneVehiculo", _database.sql.VarChar, tieneVehiculo).input("tipoVivienda", _database.sql.VarChar, tipoVivienda).input("nomContactoEmerg", _database.sql.VarChar, nomContactoEmerg).input("parentescoContEmerg", _database.sql.VarChar, parentescoContEmerg).input("telContactoEmergencia", _database.sql.VarChar, telContactoEmergencia).input("estudiaActualmente", _database.sql.VarChar, estudiaActualmente).input("programaEnCurso", _database.sql.VarChar, programaEnCurso).input("tituloEducObtenido", _database.sql.VarChar, tituloEducObtenido).input("Otro", _database.sql.VarChar, Otro).input("nivelEducativo", _database.sql.VarChar, nivelEducativo).input("institucionEducativa", _database.sql.VarChar, institucionEducativa).input("tarjetaProfesional", _database.sql.VarChar, tarjetaProfesional).input("deportePractica", _database.sql.VarChar, deportePractica).input("cualDeporte", _database.sql.VarChar, cualDeporte).input("frecuencia", _database.sql.VarChar, frecuencia).input("manejoTiempoLibre", _database.sql.VarChar, manejoTiempoLibre).input("victimaConflicto", _database.sql.VarChar, victimaConflicto).input("registroUnicoVict", _database.sql.VarChar, registroUnicoVict).input("mujerVict", _database.sql.VarChar, mujerVict).input("discapaComp", _database.sql.VarChar, discapaComp).input("calificaEnCurso", _database.sql.VarChar, calificaEnCurso).input("condEspSalud", _database.sql.VarChar, condEspSalud).input("cualCondEspSalud", _database.sql.VarChar, cualCondEspSalud).input("respPersDisc", _database.sql.VarChar, respPersDisc).input("hijoEnfermTermi", _database.sql.VarChar, hijoEnfermTermi).query(_database.queries.createInfo);
          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function createInfo(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.createInfo = createInfo;