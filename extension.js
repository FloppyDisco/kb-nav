const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("quickNav.jumpCursorUp", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "up",
        by: "line",
        value: vscode.workspace
          .getConfiguration("quickNav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("quickNav.jumpCursorDown", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "down",
        by: "line",
        value: vscode.workspace
          .getConfiguration("quickNav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("quickNav.jumpCursorUpSelect", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "up",
        by: "line",
        select: true,
        value: vscode.workspace
          .getConfiguration("quickNav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("quickNav.jumpCursorDownSelect", () => {
      vscode.commands.executeCommand("cursorMove", {
        to: "down",
        by: "line",
        select: true,
        value: vscode.workspace
          .getConfiguration("quickNav")
          .get("numberOfLinesToJump"),
      });
    }),

    vscode.commands.registerCommand("quickNav.transposeLettersLeft", () => {
      vscode.commands.executeCommand("cursorLeft");
      vscode.commands.executeCommand("editor.action.transposeLetters");
      vscode.commands.executeCommand("cursorLeft");
    }),

    vscode.commands.registerCommand("quickNav.copyCaretLeftAction", () => {
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

    vscode.commands.registerCommand("quickNav.copyCaretRightAction", () => {
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

    vscode.commands.registerCommand("quickNav.copyCharacterLeftAction", () => {
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

    vscode.commands.registerCommand("quickNav.copyCharacterRightAction", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      function getPrevCharacter(selection){
        const cursorPosition = selection.active
        const previousPosition = new vscode.Position(cursorPosition.line, cursorPosition.character - 1)
        return editor.document.getText(new vscode.Range(previousPosition, cursorPosition))
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
