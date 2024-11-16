const vscode = require("vscode");

// command to allow customizing how many lines are moved in ctrl+alt

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "quickNav" is now active!');
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
    })




	
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
