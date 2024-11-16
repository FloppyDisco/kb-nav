const vscode = require('vscode');


// command to allow customizing how many lines are moved in ctrl+alt


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "quickNav" is now active!');
	context.subscriptions.push(

		vscode.commands.executeCommand("quickNav.jumpCursorUp" ,() => {
			vscode.commands.executeCommand("cursorMove",{
				to: "up",
				by: "line",
				value: vscode.workspace.getConfiguration("quickNav").get("numberOfLinesToJump")
			})
		}),

		vscode.commands.executeCommand("quickNav.jumpCursorDown" ,() => {
			vscode.commands.executeCommand("cursorMove",{
				to: "down",
				by: "line",
				value: vscode.workspace.getConfiguration("quickNav").get("numberOfLinesToJump")
			})
		}),

		vscode.commands.executeCommand("quickNav.jumpCursorUpSelect" ,() => {
			vscode.commands.executeCommand("cursorMove",{
				to: "up",
				by: "line",
				select: true,
				value: vscode.workspace.getConfiguration("quickNav").get("numberOfLinesToJump")
			})
		}),

		vscode.commands.executeCommand("quickNav.jumpCursorDownSelect" ,() => {
			vscode.commands.executeCommand("cursorMove",{
				to: "down",
				by: "line",
				select: true,
				value: vscode.workspace.getConfiguration("quickNav").get("numberOfLinesToJump")
			})
		}),

		vscode.commands.executeCommand("quickNav.transposeLettersLeft",() => {
			vscode.commands.executeCommand("cursorLeft")
			vscode.commands.executeCommand("editor.action.transposeLetters")
			vscode.commands.executeCommand("cursorLeft")
		}),
	);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
