const uri = require("uri.js");

exports.activate = function() {
};


exports.deactivate = function() {
};


nova.commands.register("esc.percentDecode", curry(replaceSelectedTexts, uri.decodeQueryIncludingPlus));
nova.commands.register("esc.percentEncode", curry(replaceSelectedTexts, encodeURIComponent));


function curry(f, b) {
  return (a => f(a, b));
}


function replaceSelectedTexts(editor, transform) {
  const selections = editor.selectedRanges;
  selections.reverse();
  const texts = selections
    .map(range => editor.document.getTextInRange(range));

  editor.edit(e => {
    selections.forEach((selection, i) => {
      e.replace(selection, transform(texts[i]));
    });
  });
}
