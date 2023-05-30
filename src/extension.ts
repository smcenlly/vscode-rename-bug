import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('rename-bug.command', () => {
		vscode.window.visibleTextEditors.forEach(async editor => {
			vscode.window.showInformationMessage(editor.document.uri.fsPath);
		});		
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
