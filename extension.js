const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("kb-nav.jumpCursorUp", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "up",
        by: "line",
        value: vscode.workspace
          .getConfiguration("kb-nav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("kb-nav.jumpCursorDown", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "down",
        by: "line",
        value: vscode.workspace
          .getConfiguration("kb-nav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("kb-nav.jumpCursorUpSelect", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "up",
        by: "line",
        select: true,
        value: vscode.workspace
          .getConfiguration("kb-nav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("kb-nav.jumpCursorDownSelect", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "down",
        by: "line",
        select: true,
        value: vscode.workspace
          .getConfiguration("kb-nav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("kb-nav.transposeLettersLeft", () => {
      vscode.commands.executeCommand("cursorLeft");
      vscode.commands.executeCommand("editor.action.transposeLetters");
      vscode.commands.executeCommand("cursorLeft");
    }),

    vscode.commands.registerCommand("kb-nav.copyCaretLeftAction", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selections = editor.selections;
	  const originalSelections = [];
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          originalSelections.push(selection)
          editBuilder.insert(
            selection.end,
            editor.document.getText(selection)
          )
        });
      });
	  editor.selections = originalSelections
    }),

    vscode.commands.registerCommand("kb-nav.copyCaretRightAction", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selections = editor.selections;
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          editBuilder.insert(
            selection.start,
            editor.document.getText(selection)
          );
        });
      });
    }),

    vscode.commands.registerCommand("kb-nav.copyCharacterLeftAction", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selections = editor.selections;
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          editBuilder.insert(
            selection.start,
            editor.document.getText(
              new vscode.Range(
                new vscode.Position(selection.active.line, selection.active.character -1),
                selection.active
              )
            )
          );
        });
      });
      vscode.commands.executeCommand("cursorLeft")
    }),

    vscode.commands.registerCommand("kb-nav.copyCharacterRightAction", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selections = editor.selections;
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          editBuilder.insert(
            selection.start,
            editor.document.getText(
              new vscode.Range(
                new vscode.Position(selection.active.line, selection.active.character -1),
                selection.active
              )
            )
          );
        });
      });
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
