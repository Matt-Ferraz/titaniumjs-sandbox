// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.openWindowModal = (screen, params) => {
  params = params || {};
  let options = { modal: true, forceModal: params.forceModal || false }
  if (params.hasNavigation == true) {
    let Navigation = require('Navigation');
    let navigation = new Navigation();
    navigation.openWindow(screen, params, options);
  } else {
    let controller = Alloy.createController(screen, params);
    let currentWindow = null;
    currentWindow = controller.getView();
    currentWindow.open(options);
  }
};