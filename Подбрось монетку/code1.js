gdjs.gameCode = {};
gdjs.gameCode.GDNewObjectObjects1= [];
gdjs.gameCode.GDNewObjectObjects2= [];
gdjs.gameCode.GDNewObject2Objects1= [];
gdjs.gameCode.GDNewObject2Objects2= [];
gdjs.gameCode.GDNewObject3Objects1= [];
gdjs.gameCode.GDNewObject3Objects2= [];
gdjs.gameCode.GDNewObject4Objects1= [];
gdjs.gameCode.GDNewObject4Objects2= [];
gdjs.gameCode.GDNewObject5Objects1= [];
gdjs.gameCode.GDNewObject5Objects2= [];
gdjs.gameCode.GDNewObject6Objects1= [];
gdjs.gameCode.GDNewObject6Objects2= [];
gdjs.gameCode.GDNewObject72Objects1= [];
gdjs.gameCode.GDNewObject72Objects2= [];
gdjs.gameCode.GDNewObject73Objects1= [];
gdjs.gameCode.GDNewObject73Objects2= [];
gdjs.gameCode.GDNewObject74Objects1= [];
gdjs.gameCode.GDNewObject74Objects2= [];
gdjs.gameCode.GDNewObject75Objects1= [];
gdjs.gameCode.GDNewObject75Objects2= [];
gdjs.gameCode.GDNewObject76Objects1= [];
gdjs.gameCode.GDNewObject76Objects2= [];
gdjs.gameCode.GDNewObject77Objects1= [];
gdjs.gameCode.GDNewObject77Objects2= [];
gdjs.gameCode.GDNewObject78Objects1= [];
gdjs.gameCode.GDNewObject78Objects2= [];
gdjs.gameCode.GDNewObject79Objects1= [];
gdjs.gameCode.GDNewObject79Objects2= [];
gdjs.gameCode.GDNewObject710Objects1= [];
gdjs.gameCode.GDNewObject710Objects2= [];
gdjs.gameCode.GDNewObject7Objects1= [];
gdjs.gameCode.GDNewObject7Objects2= [];
gdjs.gameCode.GDNewObject8Objects1= [];
gdjs.gameCode.GDNewObject8Objects2= [];
gdjs.gameCode.GDScoreObjects1= [];
gdjs.gameCode.GDScoreObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.condition3IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};
gdjs.gameCode.condition3IsTrue_1 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject72Objects1Objects = Hashtable.newFrom({"NewObject72": gdjs.gameCode.GDNewObject72Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject73Objects1Objects = Hashtable.newFrom({"NewObject73": gdjs.gameCode.GDNewObject73Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject74Objects1Objects = Hashtable.newFrom({"NewObject74": gdjs.gameCode.GDNewObject74Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject75Objects1Objects = Hashtable.newFrom({"NewObject75": gdjs.gameCode.GDNewObject75Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject76Objects1Objects = Hashtable.newFrom({"NewObject76": gdjs.gameCode.GDNewObject76Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject77Objects1Objects = Hashtable.newFrom({"NewObject77": gdjs.gameCode.GDNewObject77Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject78Objects1Objects = Hashtable.newFrom({"NewObject78": gdjs.gameCode.GDNewObject78Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject79Objects1Objects = Hashtable.newFrom({"NewObject79": gdjs.gameCode.GDNewObject79Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject710Objects1Objects = Hashtable.newFrom({"NewObject710": gdjs.gameCode.GDNewObject710Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.gameCode.GDNewObject7Objects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.gameCode.GDNewObject2Objects1});gdjs.gameCode.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs.gameCode.GDNewObject72Objects1.createFrom(runtimeScene.getObjects("NewObject72"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject72Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer3");
}}

}


{

gdjs.gameCode.GDNewObject73Objects1.createFrom(runtimeScene.getObjects("NewObject73"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject73Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer3");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}}

}


{

gdjs.gameCode.GDNewObject74Objects1.createFrom(runtimeScene.getObjects("NewObject74"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject74Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer3");
}}

}


{

gdjs.gameCode.GDNewObject75Objects1.createFrom(runtimeScene.getObjects("NewObject75"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject75Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer3");
}}

}


{

gdjs.gameCode.GDNewObject76Objects1.createFrom(runtimeScene.getObjects("NewObject76"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject76Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer3");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}}

}


{

gdjs.gameCode.GDNewObject77Objects1.createFrom(runtimeScene.getObjects("NewObject77"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject77Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer3");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}}

}


{

gdjs.gameCode.GDNewObject78Objects1.createFrom(runtimeScene.getObjects("NewObject78"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject78Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer3");
}}

}


{

gdjs.gameCode.GDNewObject79Objects1.createFrom(runtimeScene.getObjects("NewObject79"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject79Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer3");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}}

}


{

gdjs.gameCode.GDNewObject710Objects1.createFrom(runtimeScene.getObjects("NewObject710"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject710Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer3");
}}

}


{

gdjs.gameCode.GDNewObject7Objects1.createFrom(runtimeScene.getObjects("NewObject7"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer3");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7242284);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("store").add(5);
}}

}


{

gdjs.gameCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
gdjs.gameCode.condition2IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.gameCode.condition1IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition2IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7243052);
}
}}
}
if (gdjs.gameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("store").sub(1);
}}

}


{


{
gdjs.gameCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.gameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDScoreObjects1[i].setString("Бросков:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("store"))));
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("store")) == "0";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}}

}


}; //End of gdjs.gameCode.eventsList0xb5aa0


gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDNewObjectObjects1.length = 0;
gdjs.gameCode.GDNewObjectObjects2.length = 0;
gdjs.gameCode.GDNewObject2Objects1.length = 0;
gdjs.gameCode.GDNewObject2Objects2.length = 0;
gdjs.gameCode.GDNewObject3Objects1.length = 0;
gdjs.gameCode.GDNewObject3Objects2.length = 0;
gdjs.gameCode.GDNewObject4Objects1.length = 0;
gdjs.gameCode.GDNewObject4Objects2.length = 0;
gdjs.gameCode.GDNewObject5Objects1.length = 0;
gdjs.gameCode.GDNewObject5Objects2.length = 0;
gdjs.gameCode.GDNewObject6Objects1.length = 0;
gdjs.gameCode.GDNewObject6Objects2.length = 0;
gdjs.gameCode.GDNewObject72Objects1.length = 0;
gdjs.gameCode.GDNewObject72Objects2.length = 0;
gdjs.gameCode.GDNewObject73Objects1.length = 0;
gdjs.gameCode.GDNewObject73Objects2.length = 0;
gdjs.gameCode.GDNewObject74Objects1.length = 0;
gdjs.gameCode.GDNewObject74Objects2.length = 0;
gdjs.gameCode.GDNewObject75Objects1.length = 0;
gdjs.gameCode.GDNewObject75Objects2.length = 0;
gdjs.gameCode.GDNewObject76Objects1.length = 0;
gdjs.gameCode.GDNewObject76Objects2.length = 0;
gdjs.gameCode.GDNewObject77Objects1.length = 0;
gdjs.gameCode.GDNewObject77Objects2.length = 0;
gdjs.gameCode.GDNewObject78Objects1.length = 0;
gdjs.gameCode.GDNewObject78Objects2.length = 0;
gdjs.gameCode.GDNewObject79Objects1.length = 0;
gdjs.gameCode.GDNewObject79Objects2.length = 0;
gdjs.gameCode.GDNewObject710Objects1.length = 0;
gdjs.gameCode.GDNewObject710Objects2.length = 0;
gdjs.gameCode.GDNewObject7Objects1.length = 0;
gdjs.gameCode.GDNewObject7Objects2.length = 0;
gdjs.gameCode.GDNewObject8Objects1.length = 0;
gdjs.gameCode.GDNewObject8Objects2.length = 0;
gdjs.gameCode.GDScoreObjects1.length = 0;
gdjs.gameCode.GDScoreObjects2.length = 0;

gdjs.gameCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['gameCode'] = gdjs.gameCode;
