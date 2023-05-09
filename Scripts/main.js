const uri = require("uri.js");


exports.activate = function() {
};


exports.deactivate = function() {
};


nova.commands.register("esc.percentEncode", curry(replaceSelectedTexts, encodeURIComponent));
nova.commands.register("esc.percentDecode", curry(replaceSelectedTexts, uri.stringFromQueryIncludingPlus));
nova.commands.register("esc.base64Encode", curry(replaceSelectedTexts, btoa));
nova.commands.register("esc.base64Decode", curry(replaceSelectedTexts, atob));


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
