function toggleConstrainProportions(context) {
  var doc = context.document
  var selection = context.selection

  // Toggles the currently selected item(s) 'Constrain Proportions' setting
  for (var i = 0; i < [selection count]; i++) {
    var s = [selection objectAtIndex: i]
    s.frame().setConstrainProportions(!s.constrainProportions())
  }

  // Refresh UI
  doc.currentPage().changeSelectionBySelectingLayers(nil);
  selectionCount = selection.count()
  for (var i = 0; i < selection.count(); i++) {
    var layer = selection.objectAtIndex(i)
    layer.select_byExpandingSelection(true, true);
  }
}
