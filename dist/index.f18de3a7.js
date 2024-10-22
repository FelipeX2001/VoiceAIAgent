// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e73Eh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c767fc22f18de3a7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7SwCM":[function(require,module,exports) {
// index.js
var _client = require("@11labs/client");
// Obtener elementos del DOM
const botonIniciar = document.getElementById("iniciar");
const botonTerminar = document.getElementById("terminar");
const mensajesDiv = document.getElementById("mensajes");
let conversation;
// Función para agregar mensajes al contenedor
function agregarMensaje(mensaje, tipo = "default") {
    console.log(`Agregando mensaje: "${mensaje}" con tipo "${tipo}"`);
    const p = document.createElement("p");
    p.textContent = mensaje;
    // Asignar la clase basada en el tipo de mensaje
    switch(tipo){
        case "user":
            p.classList.add("user");
            break;
        case "agent":
            p.classList.add("agent");
            break;
        case "system":
            p.classList.add("system");
            break;
        case "error":
            p.classList.add("error");
            break;
        case "tentativo":
            p.classList.add("tentativo");
            break;
        default:
            p.classList.add("default");
            break;
    }
    mensajesDiv.appendChild(p);
    mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Auto scroll
}
// Función para manejar mensajes tentativos
function manejarMensajeTentativo(message) {
    console.log("Manejando mensaje tentativo:", message.text);
    // Buscar si ya existe un mensaje tentativo para actualizarlo
    let tentativo = mensajesDiv.querySelector(".tentativo");
    if (!tentativo) {
        tentativo = document.createElement("p");
        tentativo.classList.add("tentativo");
        tentativo.textContent = message.text;
        mensajesDiv.appendChild(tentativo);
        console.log("Mensaje tentativo creado:", tentativo.textContent);
    } else {
        tentativo.textContent = message.text;
        console.log("Mensaje tentativo actualizado:", tentativo.textContent);
    }
    mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Auto scroll
}
// Manejar el clic en el botón de iniciar conversación
botonIniciar.addEventListener("click", async ()=>{
    try {
        // Solicitar permiso para usar el micrófono
        await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        console.log("Permiso de micr\xf3fono otorgado.");
        botonIniciar.disabled = true;
        botonTerminar.disabled = false;
        // Iniciar la conversación
        conversation = await (0, _client.Conversation).startSession({
            agentId: "Kl90eWakGKseixCPuLaJ",
            onConnect: ()=>{
                console.log("Conectado al agente.");
                agregarMensaje("Conectado al agente.", "system");
            },
            onDisconnect: ()=>{
                console.log("Desconectado del agente.");
                agregarMensaje("Desconectado del agente.", "system");
            },
            onMessage: (message)=>{
                console.log("Mensaje recibido:", message);
                if (message.isFinal) {
                    // Eliminar mensaje tentativo si existe
                    const tentativo = mensajesDiv.querySelector(".tentativo");
                    if (tentativo) {
                        tentativo.remove();
                        console.log("Mensaje tentativo eliminado.");
                    }
                    if (message.isUser) {
                        agregarMensaje(`T\xfa: ${message.text}`, "user");
                        console.log("Mensaje de usuario agregado:", message.text);
                    } else {
                        agregarMensaje(`Agente: ${message.text}`, "agent");
                        console.log("Mensaje del agente agregado:", message.text);
                    }
                } else // Manejar mensajes tentativos
                manejarMensajeTentativo(message);
            },
            onError: (error)=>{
                console.error("Error en la conversaci\xf3n:", error);
                agregarMensaje(`Error: ${error.message || error}`, "error");
            },
            onStatusChange: (status)=>{
                console.log("Status Change:", status);
                // Acceder a propiedades específicas del objeto status
                const connected = status.connected ? "Conectado" : "Desconectado";
                const details = status.details ? status.details : "Sin detalles";
                agregarMensaje(`Estado de conexi\xf3n: ${connected} - ${details}`, "system");
            },
            onModeChange: (mode)=>{
                console.log("Mode Change:", mode);
                // Acceder a propiedades específicas del objeto mode
                const currentMode = mode.currentMode ? mode.currentMode : "Desconocido";
                agregarMensaje(`Modo del agente: ${currentMode}`, "system");
            }
        });
    } catch (error) {
        console.error("Error al iniciar la conversaci\xf3n:", error);
        agregarMensaje(`No se pudo iniciar la conversaci\xf3n: ${error.message || error}`, "error");
    }
});
// Manejar el clic en el botón de terminar conversación
botonTerminar.addEventListener("click", async ()=>{
    if (conversation) try {
        await conversation.endSession();
        agregarMensaje("Sesi\xf3n finalizada.", "system");
        console.log("Sesi\xf3n finalizada.");
    } catch (error) {
        console.error("Error al terminar la sesi\xf3n:", error);
        agregarMensaje(`Error al terminar la sesi\xf3n: ${error.message || error}`, "error");
    } finally{
        botonIniciar.disabled = false;
        botonTerminar.disabled = true;
    }
});

},{"@11labs/client":"fHO4L"}],"fHO4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Conversation", ()=>h);
var process = require("d92dc2bdba4dc283");
function e() {
    return e = Object.assign ? Object.assign.bind() : function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, e.apply(null, arguments);
}
function t(e) {
    for(var t = window.atob(e), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++)r[o] = t.charCodeAt(o);
    return r.buffer;
}
var n = new Blob([
    '\n      const TARGET_SAMPLE_RATE = 16000;\n      class RawAudioProcessor extends AudioWorkletProcessor {\n        constructor() {\n          super();\n          this.buffer = []; // Initialize an empty buffer\n          this.bufferSize = TARGET_SAMPLE_RATE / 4; // Define the threshold for buffer size to be ~0.25s\n\n          if (globalThis.LibSampleRate && sampleRate !== TARGET_SAMPLE_RATE) {\n            globalThis.LibSampleRate.create(1, sampleRate, TARGET_SAMPLE_RATE).then(resampler => {\n              this.resampler = resampler;\n            });\n          }\n        }\n        process(inputs, outputs) {\n          const input = inputs[0]; // Get the first input node\n          if (input.length > 0) {\n            let channelData = input[0]; // Get the first channel\'s data\n\n            // Resample the audio if necessary\n            if (this.resampler) {\n              channelData = this.resampler.full(channelData);\n            }\n\n            // Add channel data to the buffer\n            this.buffer.push(...channelData);\n            // Get max volume \n            let sum = 0.0;\n            for (let i = 0; i < channelData.length; i++) {\n              sum += channelData[i] * channelData[i];\n            }\n            const maxVolume = Math.sqrt(sum / channelData.length);\n            // Check if buffer size has reached or exceeded the threshold\n            if (this.buffer.length >= this.bufferSize) {\n              const float32Array = new Float32Array(this.buffer)\n              let pcm16Array = new Int16Array(float32Array.length);\n\n              // Iterate through the Float32Array and convert each sample to PCM16\n              for (let i = 0; i < float32Array.length; i++) {\n                // Clamp the value to the range [-1, 1]\n                let sample = Math.max(-1, Math.min(1, float32Array[i]));\n            \n                // Scale the sample to the range [-32768, 32767] and store it in the Int16Array\n                pcm16Array[i] = sample < 0 ? sample * 32768 : sample * 32767;\n              }\n            \n              // Send the buffered data to the main script\n              this.port.postMessage([pcm16Array, maxVolume]);\n            \n              // Clear the buffer after sending\n              this.buffer = [];\n            }\n          }\n          return true; // Continue processing\n        }\n      }\n      registerProcessor("raw-audio-processor", RawAudioProcessor);\n  '
], {
    type: "application/javascript"
}), r = URL.createObjectURL(n), o = /*#__PURE__*/ function() {
    function e(e, t, n, r) {
        this.context = void 0, this.analyser = void 0, this.worklet = void 0, this.inputStream = void 0, this.context = e, this.analyser = t, this.worklet = n, this.inputStream = r;
    }
    return e.create = function(t) {
        try {
            var n = null, o = null;
            return Promise.resolve(function(s, i) {
                try {
                    var a = function() {
                        function s() {
                            return Promise.resolve(n.audioWorklet.addModule(r)).then(function() {
                                return Promise.resolve(navigator.mediaDevices.getUserMedia({
                                    audio: {
                                        sampleRate: {
                                            ideal: t
                                        },
                                        echoCancellation: {
                                            ideal: !0
                                        }
                                    }
                                })).then(function(t) {
                                    var r = n.createMediaStreamSource(o = t), s = new AudioWorkletNode(n, "raw-audio-processor");
                                    return r.connect(a), a.connect(s), new e(n, a, s, o);
                                });
                            });
                        }
                        var i = navigator.mediaDevices.getSupportedConstraints().sampleRate, a = (n = new window.AudioContext(i ? {
                            sampleRate: t
                        } : {})).createAnalyser(), u = function() {
                            if (!i) return Promise.resolve(n.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js")).then(function() {});
                        }();
                        return u && u.then ? u.then(s) : s();
                    }();
                } catch (e) {
                    return i(e);
                }
                return a && a.then ? a.then(void 0, i) : a;
            }(0, function(e) {
                var t, r;
                throw null == (t = o) || t.getTracks().forEach(function(e) {
                    return e.stop();
                }), null == (r = n) || r.close(), e;
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    }, e.prototype.close = function() {
        try {
            return this.inputStream.getTracks().forEach(function(e) {
                return e.stop();
            }), Promise.resolve(this.context.close()).then(function() {});
        } catch (e) {
            return Promise.reject(e);
        }
    }, e;
}(), s = new Blob([
    '\n      class AudioConcatProcessor extends AudioWorkletProcessor {\n        constructor() {\n          super();\n          this.buffers = []; // Initialize an empty buffer\n          this.cursor = 0;\n          this.currentBuffer = null;\n          this.wasInterrupted = false;\n          this.finished = false;\n\n          this.port.onmessage = ({ data }) => {\n            switch (data.type) {\n              case "buffer":\n                this.wasInterrupted = false;\n                this.buffers.push(new Int16Array(data.buffer));\n                break;\n              case "interrupt":\n                this.wasInterrupted = true;\n                break;\n              case "clearInterrupted":\n                if (this.wasInterrupted) {\n                  this.wasInterrupted = false;\n                  this.buffers = [];\n                  this.currentBuffer = null;\n                }\n            }\n          };\n        }\n        process(_, outputs) {\n          let finished = false;\n          const output = outputs[0][0];\n          for (let i = 0; i < output.length; i++) {\n            if (!this.currentBuffer) {\n              if (this.buffers.length === 0) {\n                finished = true;\n                break;\n              }\n              this.currentBuffer = this.buffers.shift();\n              this.cursor = 0;\n            }\n\n            output[i] = this.currentBuffer[this.cursor] / 32768;\n            this.cursor++;\n\n            if (this.cursor >= this.currentBuffer.length) {\n              this.currentBuffer = null;\n            }\n          }\n\n          if (this.finished !== finished) {\n            this.finished = finished;\n            this.port.postMessage({ type: "process", finished });\n          }\n\n          return true; // Continue processing\n        }\n      }\n\n      registerProcessor("audio-concat-processor", AudioConcatProcessor);\n    '
], {
    type: "application/javascript"
}), i = URL.createObjectURL(s), a = /*#__PURE__*/ function() {
    function e(e, t, n, r) {
        this.context = void 0, this.analyser = void 0, this.gain = void 0, this.worklet = void 0, this.context = e, this.analyser = t, this.gain = n, this.worklet = r;
    }
    return e.create = function(t) {
        try {
            var n = null;
            return Promise.resolve(function(r, o) {
                try {
                    var s = (a = (n = new AudioContext({
                        sampleRate: t
                    })).createAnalyser(), (u = n.createGain()).connect(a), a.connect(n.destination), Promise.resolve(n.audioWorklet.addModule(i)).then(function() {
                        var t = new AudioWorkletNode(n, "audio-concat-processor");
                        return t.connect(u), new e(n, a, u, t);
                    }));
                } catch (e) {
                    return o(e);
                }
                var a, u;
                return s && s.then ? s.then(void 0, o) : s;
            }(0, function(e) {
                var t;
                throw null == (t = n) || t.close(), e;
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    }, e.prototype.close = function() {
        try {
            return Promise.resolve(this.context.close()).then(function() {});
        } catch (e) {
            return Promise.reject(e);
        }
    }, e;
}();
function u(e) {
    return !!e.type;
}
var c = /*#__PURE__*/ function() {
    function e(e, t, n) {
        this.socket = void 0, this.conversationId = void 0, this.sampleRate = void 0, this.socket = e, this.conversationId = t, this.sampleRate = n;
    }
    return e.create = function(t) {
        try {
            var n = null;
            return Promise.resolve(function(r, o) {
                try {
                    var s = (c = null != (i = "undefined" != typeof process ? undefined : null) ? i : "wss://api.elevenlabs.io", l = null != (a = "undefined" != typeof process ? undefined : null) ? a : "/v1/convai/conversation?agent_id=", n = new WebSocket(t.signedUrl ? t.signedUrl : c + l + t.agentId), Promise.resolve(new Promise(function(e, t) {
                        n.addEventListener("error", t), n.addEventListener("close", t), n.addEventListener("message", function(t) {
                            var n = JSON.parse(t.data);
                            u(n) && ("conversation_initiation_metadata" === n.type ? e(n.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."));
                        }, {
                            once: !0
                        });
                    })).then(function(t) {
                        var r = t.conversation_id, o = parseInt(t.agent_output_audio_format.replace("pcm_", ""));
                        return new e(n, r, o);
                    }));
                } catch (e) {
                    return o(e);
                }
                var i, a, c, l;
                return s && s.then ? s.then(void 0, o) : s;
            }(0, function(e) {
                var t;
                throw null == (t = n) || t.close(), e;
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    }, e.prototype.close = function() {
        this.socket.close();
    }, e;
}(), l = {
    onConnect: function() {},
    onDisconnect: function() {},
    onError: function() {},
    onDebug: function() {},
    onMessage: function() {},
    onStatusChange: function() {},
    onModeChange: function() {}
}, h = /*#__PURE__*/ function() {
    function n(e, n, r, o) {
        var s = this, i = this, a = this, c = this;
        this.options = void 0, this.connection = void 0, this.input = void 0, this.output = void 0, this.lastInterruptTimestamp = 0, this.mode = "listening", this.status = "connecting", this.inputFrequencyData = void 0, this.outputFrequencyData = void 0, this.volume = 1, this.endSession = function() {
            try {
                return "connected" !== i.status ? Promise.resolve() : (i.updateStatus("disconnecting"), i.connection.close(), Promise.resolve(i.input.close()).then(function() {
                    return Promise.resolve(i.output.close()).then(function() {
                        i.updateStatus("disconnected");
                    });
                }));
            } catch (e) {
                return Promise.reject(e);
            }
        }, this.updateMode = function(e) {
            e !== s.mode && (s.mode = e, s.options.onModeChange({
                mode: e
            }));
        }, this.updateStatus = function(e) {
            e !== s.status && (s.status = e, s.options.onStatusChange({
                status: e
            }));
        }, this.onEvent = function(e) {
            try {
                var t = JSON.parse(e.data);
                if (!u(t)) return;
                switch(t.type){
                    case "interruption":
                        t.interruption_event && (s.lastInterruptTimestamp = t.interruption_event.event_id), s.fadeOutAudio();
                        break;
                    case "agent_response":
                        s.options.onMessage({
                            source: "ai",
                            message: t.agent_response_event.agent_response
                        });
                        break;
                    case "user_transcript":
                        s.options.onMessage({
                            source: "user",
                            message: t.user_transcription_event.user_transcript
                        });
                        break;
                    case "internal_tentative_agent_response":
                        s.options.onDebug({
                            type: "tentative_agent_response",
                            response: t.tentative_agent_response_internal_event.tentative_agent_response
                        });
                        break;
                    case "audio":
                        s.lastInterruptTimestamp <= t.audio_event.event_id && (s.addAudioBase64Chunk(t.audio_event.audio_base_64), s.updateMode("speaking"));
                        break;
                    case "ping":
                        s.connection.socket.send(JSON.stringify({
                            type: "pong",
                            event_id: t.ping_event.event_id
                        }));
                        break;
                    default:
                        s.options.onDebug(t);
                }
            } catch (t) {
                return void s.onError("Failed to parse event data", {
                    event: e
                });
            }
        }, this.onInputWorkletMessage = function(e) {
            var t, n, r = JSON.stringify({
                user_audio_chunk: (t = e.data[0].buffer, n = new Uint8Array(t), window.btoa(String.fromCharCode.apply(String, n)))
            });
            "connected" === s.status && s.connection.socket.send(r);
        }, this.onOutputWorkletMessage = function(e) {
            var t = e.data;
            "process" === t.type && s.updateMode(t.finished ? "listening" : "speaking");
        }, this.addAudioBase64Chunk = function(e) {
            try {
                return a.output.gain.gain.value = a.volume, a.output.worklet.port.postMessage({
                    type: "clearInterrupted"
                }), a.output.worklet.port.postMessage({
                    type: "buffer",
                    buffer: t(e)
                }), Promise.resolve();
            } catch (e) {
                return Promise.reject(e);
            }
        }, this.fadeOutAudio = function() {
            try {
                return c.updateMode("listening"), c.output.worklet.port.postMessage({
                    type: "interrupt"
                }), c.output.gain.gain.exponentialRampToValueAtTime(1e-4, c.output.context.currentTime + 2), setTimeout(function() {
                    c.output.gain.gain.value = c.volume, c.output.worklet.port.postMessage({
                        type: "clearInterrupted"
                    });
                }, 2e3), Promise.resolve();
            } catch (e) {
                return Promise.reject(e);
            }
        }, this.onError = function(e, t) {
            console.error(e, t), s.options.onError(e, t);
        }, this.calculateVolume = function(e) {
            if (0 === e.length) return 0;
            for(var t = 0, n = 0; n < e.length; n++)t += e[n] / 255;
            return (t /= e.length) < 0 ? 0 : t > 1 ? 1 : t;
        }, this.getId = function() {
            return s.connection.conversationId;
        }, this.setVolume = function(e) {
            s.volume = e.volume;
        }, this.getInputByteFrequencyData = function() {
            return null != s.inputFrequencyData || (s.inputFrequencyData = new Uint8Array(s.input.analyser.frequencyBinCount)), s.input.analyser.getByteFrequencyData(s.inputFrequencyData), s.inputFrequencyData;
        }, this.getOutputByteFrequencyData = function() {
            return null != s.outputFrequencyData || (s.outputFrequencyData = new Uint8Array(s.output.analyser.frequencyBinCount)), s.output.analyser.getByteFrequencyData(s.outputFrequencyData), s.outputFrequencyData;
        }, this.getInputVolume = function() {
            return s.calculateVolume(s.getInputByteFrequencyData());
        }, this.getOutputVolume = function() {
            return s.calculateVolume(s.getOutputByteFrequencyData());
        }, this.options = e, this.connection = n, this.input = r, this.output = o, this.options.onConnect({
            conversationId: n.conversationId
        }), this.connection.socket.addEventListener("message", function(e) {
            s.onEvent(e);
        }), this.connection.socket.addEventListener("error", function(e) {
            s.updateStatus("disconnected"), s.onError("Socket error", e);
        }), this.connection.socket.addEventListener("close", function() {
            s.updateStatus("disconnected"), s.options.onDisconnect();
        }), this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.output.worklet.port.onmessage = this.onOutputWorkletMessage, this.updateStatus("connected");
    }
    return n.startSession = function(t) {
        try {
            var r = e({}, l, t);
            r.onStatusChange({
                status: "connecting"
            });
            var s = null, i = null, u = null;
            return Promise.resolve(function(e, l) {
                try {
                    var h = Promise.resolve(o.create(16e3)).then(function(e) {
                        return s = e, Promise.resolve(c.create(t)).then(function(e) {
                            return i = e, Promise.resolve(a.create(i.sampleRate)).then(function(e) {
                                return new n(r, i, s, u = e);
                            });
                        });
                    });
                } catch (e) {
                    return l(e);
                }
                return h && h.then ? h.then(void 0, l) : h;
            }(0, function(e) {
                var t, n;
                return r.onStatusChange({
                    status: "disconnected"
                }), null == (t = i) || t.close(), Promise.resolve(null == (n = s) ? void 0 : n.close()).then(function() {
                    var t;
                    return Promise.resolve(null == (t = u) ? void 0 : t.close()).then(function() {
                        throw e;
                    });
                });
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    }, n;
}();

},{"d92dc2bdba4dc283":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["e73Eh","7SwCM"], "7SwCM", "parcelRequiref7ce")

//# sourceMappingURL=index.f18de3a7.js.map
