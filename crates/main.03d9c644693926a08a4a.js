/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktsapp"] = self["webpackChunktsapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\ncanvas {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tsapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tsapp/./src/style.css?");

/***/ }),

/***/ "./src/GameConfig.ts":
/*!***************************!*\
  !*** ./src/GameConfig.ts ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GameConfig = void 0;\r\nconst phaser_1 = __importDefault(__webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\"));\r\nconst gameOptions = {\r\n    timeLimit: 150,\r\n    gravity: 1,\r\n    crateHeight: 700,\r\n    crateRange: [-300, 300],\r\n    crateSpeed: 1800,\r\n};\r\nconst game = {\r\n    config: {\r\n        width: 640,\r\n        height: 960,\r\n    },\r\n};\r\nclass Scene extends phaser_1.default.Scene {\r\n    constructor() {\r\n        super('PlayGame');\r\n    }\r\n    preload() {\r\n        this.load.image('ground', 'assets/sprites/ground.png');\r\n        this.load.image('sky', 'assets/sprites/sky.png');\r\n        this.load.image('crate', 'assets/sprites/crate.png');\r\n        this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');\r\n    }\r\n    create() {\r\n        this.matter.world.update30Hz();\r\n        this.canDrop = true;\r\n        this.timer = 0;\r\n        this.timerEvent = null;\r\n        this.addSky();\r\n        this.addGround();\r\n        this.addMovingCrate();\r\n        this.timeText = this.add.bitmapText(10, 10, 'font', gameOptions.timeLimit.toString(), 72);\r\n        this.crateGroup = this.add.group();\r\n        this.matter.world.on('collisionstart', this.checkCollision, this);\r\n        this.setCameras();\r\n        this.input.on('pointerdown', this.dropCrate, this);\r\n    }\r\n    addSky() {\r\n        this.sky = this.add.sprite(0, 0, 'sky');\r\n        this.sky.displayWidth = game.config.width;\r\n        this.sky.setOrigin(0, 0);\r\n    }\r\n    addGround() {\r\n        this.ground = this.matter.add.sprite(game.config.width / 2, game.config.height, 'ground');\r\n        this.ground.setBody({\r\n            type: 'rectangle',\r\n            width: this.ground.displayWidth,\r\n            height: this.ground.displayHeight * 2,\r\n        });\r\n        this.ground.setOrigin(0.5, 1);\r\n        this.ground.setStatic(true);\r\n    }\r\n    addMovingCrate() {\r\n        this.movingCrate = this.add.sprite(game.config.width / 2 - gameOptions.crateRange[0], this.ground.getBounds().top - gameOptions.crateHeight, 'crate');\r\n        this.tweens.add({\r\n            targets: this.movingCrate,\r\n            x: game.config.width / 2 - gameOptions.crateRange[1],\r\n            duration: gameOptions.crateSpeed,\r\n            yoyo: true,\r\n            repeat: -1,\r\n        });\r\n    }\r\n    checkCollision(e, b1, b2) {\r\n        if (b1.isCrate && !b1.hit) {\r\n            b1.hit = true;\r\n            this.nextCrate();\r\n        }\r\n        if (b2.isCrate && !b2.hit) {\r\n            b2.hit = true;\r\n            this.nextCrate();\r\n        }\r\n    }\r\n    setCameras() {\r\n        this.actionCamera = this.cameras.add(0, 0, game.config.width, game.config.height);\r\n        this.actionCamera.ignore([this.sky, this.timeText]);\r\n        this.cameras.main.ignore([this.ground, this.movingCrate]);\r\n    }\r\n    dropCrate() {\r\n        if (this.canDrop && this.timer < gameOptions.timeLimit) {\r\n            this.addTimer();\r\n            this.canDrop = false;\r\n            this.movingCrate.visible = false;\r\n            this.addFallingCrate();\r\n        }\r\n    }\r\n    update() {\r\n        this.crateGroup.getChildren().forEach(function (crate) {\r\n            if (crate.y > game.config.height + crate.displayHeight) {\r\n                if (!crate.body.hit) {\r\n                    this.nextCrate();\r\n                }\r\n                crate.destroy();\r\n            }\r\n        }, this);\r\n    }\r\n    addTimer() {\r\n        if (this.timerEvent == null) {\r\n            this.timerEvent = this.time.addEvent({\r\n                delay: 1000,\r\n                callback: this.tick,\r\n                callbackScope: this,\r\n                loop: true,\r\n            });\r\n        }\r\n    }\r\n    addFallingCrate() {\r\n        const fallingCrate = this.matter.add.sprite(this.movingCrate.x, this.movingCrate.y, 'crate');\r\n        fallingCrate.body.isCrate = true;\r\n        fallingCrate.body.hit = false;\r\n        this.crateGroup.add(fallingCrate);\r\n        this.cameras.main.ignore(fallingCrate);\r\n    }\r\n    nextCrate() {\r\n        this.zoomCamera();\r\n        this.canDrop = true;\r\n        this.movingCrate.visible = true;\r\n    }\r\n    zoomCamera() {\r\n        let maxHeight = 0;\r\n        this.crateGroup.getChildren().forEach(function (crate) {\r\n            if (crate.body.hit) {\r\n                maxHeight = Math.max(maxHeight, Math.round((this.ground.getBounds().top - crate.getBounds().top) /\r\n                    crate.displayWidth));\r\n            }\r\n        }, this);\r\n        // this.movingCrate.y =\r\n        // this.ground.getBounds().top -\r\n        // maxHeight * this.movingCrate.displayWidth -\r\n        // gameOptions.crateHeight;\r\n        let zoomFactor = gameOptions.crateHeight /\r\n            (this.ground.getBounds().top - this.movingCrate.y);\r\n        // this.actionCamera.zoomTo(zoomFactor, 500);\r\n        let newHeight = game.config.height / zoomFactor;\r\n        // this.actionCamera.pan(\r\n        //   game.config.width / 2,\r\n        //   game.config.height / 2 - (newHeight - game.config.height) / 2,\r\n        //   500\r\n        // );\r\n    }\r\n    tick() {\r\n        this.timer++;\r\n        this.timeText.text = (gameOptions.timeLimit - this.timer).toString();\r\n        if (this.timer >= gameOptions.timeLimit) {\r\n            this.timerEvent.remove();\r\n            this.movingCrate.destroy();\r\n            this.time.addEvent({\r\n                delay: 2000,\r\n                callback: function () {\r\n                    this.removeEvent = this.time.addEvent({\r\n                        delay: 100,\r\n                        callback: this.removeCrate,\r\n                        callbackScope: this,\r\n                        loop: true,\r\n                    });\r\n                },\r\n                callbackScope: this,\r\n            });\r\n        }\r\n    }\r\n    removeCrate() {\r\n        if (this.crateGroup.getChildren().length > 0) {\r\n            this.crateGroup.getFirstAlive().destroy();\r\n        }\r\n        else {\r\n            this.removeEvent.remove();\r\n            this.scene.start('PlayGame');\r\n        }\r\n    }\r\n}\r\nexports.GameConfig = {\r\n    type: phaser_1.default.WEBGL,\r\n    scale: {\r\n        mode: phaser_1.default.Scale.FIT,\r\n        autoCenter: phaser_1.default.Scale.CENTER_BOTH,\r\n        width: 640,\r\n        height: 960,\r\n    },\r\n    physics: {\r\n        default: 'matter',\r\n        matter: {\r\n            gravity: {\r\n                y: 1,\r\n            },\r\n        },\r\n        arcade: { gravity: { y: 1 }, debug: true },\r\n    },\r\n    scene: Scene,\r\n};\r\n\n\n//# sourceURL=webpack://tsapp/./src/GameConfig.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\n// import { initBabylon } from './BabylonApp';\r\n// initBabylon();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst GameConfig_1 = __webpack_require__(/*! ./GameConfig */ \"./src/GameConfig.ts\");\r\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\nconst game = new Phaser.Game(GameConfig_1.GameConfig);\r\n\n\n//# sourceURL=webpack://tsapp/./src/main.ts?");

/***/ })

},
0,[["./src/main.ts","runtime","vendors"]]]);