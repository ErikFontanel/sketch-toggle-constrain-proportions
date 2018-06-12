const sketch = require('sketch/dom');

export default function(context) {
  const doc = sketch.fromNative(context.document);
  const selectedLayers = doc.selectedLayers;

  if (selectedLayers.length > 0) {
    // Toggles the currently selected item(s) 'Constrain Proportions' setting
    selectedLayers.forEach(layer => {
      let obj = layer.sketchObject;
      obj.frame().setConstrainProportions(!obj.constrainProportions());
    });
  }
  context.document.reloadInspector();
}
