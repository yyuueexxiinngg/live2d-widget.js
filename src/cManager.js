import { Live2DFramework } from "./lib/Live2DFramework";
import { PlatformManager } from "./PlatformManager";
import { cModel } from "./cModel";
import { cDefine } from "./cDefine";

function cManager() {
  // console.log("--> cManager()");

  this.models = [];
  this.count = -1;
  this.reloadFlg = false;

  Live2DFramework.setPlatformManager(new PlatformManager());

}

cManager.prototype.customAction = function(action){
  for (var i = 0; i < this.models.length; i++) {

    if(action == "flick_head"){
      this.models[i].startRandomMotion(cDefine.MOTION_GROUP_FLICK_HEAD,
        cDefine.PRIORITY_NORMAL);
    }else if (action == "shake") {

      if (cDefine.DEBUG_LOG)
        console.log("Tap face." + " models[" + i + "]");

      this.models[i].startRandomMotion(cDefine.MOTION_GROUP_SHAKE,
        cDefine.PRIORITY_NORMAL);
    }
  }
  return true;
}


cManager.prototype.createModel = function () {

  var model = new cModel();
  this.models.push(model);

  return model;

}


cManager.prototype.changeModel = function (gl, modelurl) {
  // console.log("--> cManager.update(gl)");

  if (this.reloadFlg) {
    this.reloadFlg = false;
    this.releaseModel(0, gl);
    this.createModel();
    this.models[0].load(gl, modelurl);
  }

};


cManager.prototype.getModel = function (no) {
  // console.log("--> cManager.getModel(" + no + ")");

  if (no >= this.models.length) return null;

  return this.models[no];
};



cManager.prototype.releaseModel = function (no, gl) {
  // console.log("--> cManager.releaseModel(" + no + ")");

  if (this.models.length <= no) return;

  this.models[no].release(gl);

  delete this.models[no];
  this.models.splice(no, 1);
};



cManager.prototype.numModels = function () {
  return this.models.length;
};



cManager.prototype.setDrag = function (x, y) {
  for (var i = 0; i < this.models.length; i++) {
    this.models[i].setDrag(x, y);
  }
}

cManager.prototype.tapEvent = function (x, y) {
  if(x <=1 && y <=1){
    if (cDefine.DEBUG_LOG)
      console.log("tapEvent view x:" + x + " y:" + y);

    for (var i = 0; i < this.models.length; i++) {

      if (this.models[i].hitTest(cDefine.HIT_AREA_HEAD, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap head.");

        this.models[i].setRandomExpression();
      }else if (this.models[i].hitTest(cDefine.HIT_AREA_BODY, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap body." + " models[" + i + "]");

        this.models[i].startRandomMotion(cDefine.MOTION_GROUP_TAP_BODY,
          cDefine.PRIORITY_NORMAL);
      }else if (this.models[i].hitTest(cDefine.HIT_AREA_BREAST, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap breast." + " models[" + i + "]");

        this.models[i].startRandomMotion(cDefine.MOTION_GROUP_TAP_BREAST,
          cDefine.PRIORITY_NORMAL);
      }else if (this.models[i].hitTest(cDefine.HIT_AREA_BELLY, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap belly." + " models[" + i + "]");

        this.models[i].startRandomMotion(cDefine.MOTION_GROUP_TAP_BELLY,
          cDefine.PRIORITY_NORMAL);
      }else if (this.models[i].hitTest(cDefine.HIT_AREA_LEG, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap leg." + " models[" + i + "]");

        this.models[i].startRandomMotion(cDefine.MOTION_GROUP_TAP_LEG,
          cDefine.PRIORITY_NORMAL);
      }else if (this.models[i].hitTest(cDefine.HIT_AREA_FACE, x, y)) {

        if (cDefine.DEBUG_LOG)
          console.log("Tap face." + " models[" + i + "]");

        this.models[i].startRandomMotion(cDefine.MOTION_GROUP_TAP_FACE,
          cDefine.PRIORITY_NORMAL);
      }
    }
  }



  return true;
};



export{
  cManager,
}
