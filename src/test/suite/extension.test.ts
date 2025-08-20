import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  void vscode.window.showInformationMessage('Start all tests.');

  test('Extension should be present', () => {
    const extension = vscode.extensions.getExtension('lekman.vscode-ai-terminal');
    assert.ok(extension);
  });

  test('Should register commands', async () => {
    const commands = await vscode.commands.getCommands(true);

    assert.ok(commands.includes('aiTerminal.killTerminal'));
    assert.ok(commands.includes('aiTerminal.splitTerminal'));
    assert.ok(commands.includes('aiTerminal.openSettings'));
  });

  test('Should activate extension', async () => {
    const extension = vscode.extensions.getExtension('lekman.vscode-ai-terminal');
    assert.ok(extension);

    if (extension && !extension.isActive) {
      await extension.activate();
    }

    assert.ok(extension && extension.isActive);
  });
});
