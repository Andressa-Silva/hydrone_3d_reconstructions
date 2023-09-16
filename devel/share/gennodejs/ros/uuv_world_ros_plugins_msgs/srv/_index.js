
"use strict";

let SetOriginSphericalCoord = require('./SetOriginSphericalCoord.js')
let SetCurrentVelocity = require('./SetCurrentVelocity.js')
let GetOriginSphericalCoord = require('./GetOriginSphericalCoord.js')
let TransformToSphericalCoord = require('./TransformToSphericalCoord.js')
let TransformFromSphericalCoord = require('./TransformFromSphericalCoord.js')
let GetCurrentModel = require('./GetCurrentModel.js')
let SetCurrentDirection = require('./SetCurrentDirection.js')
let SetCurrentModel = require('./SetCurrentModel.js')

module.exports = {
  SetOriginSphericalCoord: SetOriginSphericalCoord,
  SetCurrentVelocity: SetCurrentVelocity,
  GetOriginSphericalCoord: GetOriginSphericalCoord,
  TransformToSphericalCoord: TransformToSphericalCoord,
  TransformFromSphericalCoord: TransformFromSphericalCoord,
  GetCurrentModel: GetCurrentModel,
  SetCurrentDirection: SetCurrentDirection,
  SetCurrentModel: SetCurrentModel,
};
