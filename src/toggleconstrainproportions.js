const sketch = require('sketch/dom');
const settings = require('sketch/settings');

export default function(context) {
  const document = sketch.fromNative(context.document);
  const selectedLayers = document.selectedLayers;

  if (selectedLayers.length > 0) {
    // Toggles the currently selected item(s) 'Constrain Proportions' setting
    selectedLayers.forEach(layer => {
      let obj = layer.sketchObject;
      obj.frame().setConstrainProportions(!obj.constrainProportions());
    });

  }
  // Refresh UI
  context.document.reloadInspector();
}
