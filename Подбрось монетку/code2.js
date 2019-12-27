gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];
gdjs.NewSceneCode.GDNewObject3Objects1= [];
gdjs.NewSceneCode.GDNewObject3Objects2= [];
gdjs.NewSceneCode.GDNewObject4Objects1= [];
gdjs.NewSceneCode.GDNewObject4Objects2= [];
gdjs.NewSceneCode.GDNewObject5Objects1= [];
gdjs.NewSceneCode.GDNewObject5Objects2= [];
gdjs.NewSceneCode.GDNewObject6Objects1= [];
gdjs.NewSceneCode.GDNewObject6Objects2= [];
gdjs.NewSceneCode.GDNewObject7Objects1= [];
gdjs.NewSceneCode.GDNewObject7Objects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.NewSceneCode.GDNewObject7Objects1});gdjs.NewSceneCode.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDNewObject7Objects1.createFrom(runtimeScene.getObjects("NewObject7"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb5aa0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject3Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject3Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject4Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject4Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject5Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject5Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject6Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject6Objects2.length = 0;
gdjs.NewSceneCode.GDNewObject7Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject7Objects2.length = 0;

gdjs.NewSceneCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
