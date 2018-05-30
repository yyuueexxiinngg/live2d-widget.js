// Modified by xiazeyu.

/**
* @desc The definitions of values releated to model react
*/

export const cDefine = {
  // DEBUG_DRAW_ALPHA_MODEL : false,

  // above are viewMatrix value settings
  VIEW_LOGICAL_LEFT : -1, // -1, the left abscissa of viewMatrix
  VIEW_LOGICAL_RIGHT : 1, // 1, the right abscissa of viewMatrix
  VIEW_LOGICAL_MAX_LEFT : -2, // -2, the max left abscissa of viewMatrix
  VIEW_LOGICAL_MAX_RIGHT : 2, // 2, the max right abscissa of viewMatrix
  VIEW_LOGICAL_MAX_BOTTOM : -2, // -2, the max bottom abscissa of viewMatrix
  VIEW_LOGICAL_MAX_TOP : 2, // 2, the max top abscissa of viewMatrix

  // above are the motions priority settings.
  PRIORITY_NONE : 0, // 0，do nothing
  PRIORITY_IDLE : 1, // 1, idle motions
  PRIORITY_NORMAL : 2, // 2, normal motions
  PRIORITY_FORCE : 3, // 3, force to show motion

  // above are the index to the motions in model.json
  // #43
  MOTION_GROUP_IDLE : "idle",
  MOTION_GROUP_TAP_BODY : "tap_body",
  MOTION_GROUP_TAP_HEAD : "tap_head",
  MOTION_GROUP_TAP_FACE : "tap_face",
  MOTION_GROUP_TAP_BREAST : "tap_breast",
  MOTION_GROUP_TAP_BELLY : "tap_belly",
  MOTION_GROUP_TAP_LEG : "tap_leg",
  MOTION_GROUP_FLICK_HEAD : "flick_head", // unused
  MOTION_GROUP_PINCH_IN : "pinch_in", // unused
  MOTION_GROUP_PINCH_OUT : "pinch_out", // unused
  MOTION_GROUP_SHAKE : "shake", // unused
  MOTION_GROUP_MAIL : "mail", // unused
  MOTION_GROUP_BORN : "born", // unused

  // above are the index to the hit areas in model.json
  // #43
  HIT_AREA_HEAD : "head",
  HIT_AREA_BREAST : "breast",
  HIT_AREA_BELLY : "belly",
  HIT_AREA_LEG : "leg",
  HIT_AREA_FACE : "face",
  HIT_AREA_BODY : "body"
};
