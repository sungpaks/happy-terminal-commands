const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  function runInTerminal(name, command) {
    const terminal = vscode.window.createTerminal({
      name,
      location: {
        viewColumn: vscode.ViewColumn.Beside
      }
    });

    terminal.show(false);
    terminal.sendText(command, true);
  }

  const commands = [
    vscode.commands.registerCommand("happy.runClaude", () => {
      runInTerminal("Happy Claude", "happy claude");
    }),

    vscode.commands.registerCommand("happy.continueClaude", () => {
      runInTerminal("Happy Claude Continue", "happy claude --continue");
    }),

    vscode.commands.registerCommand("happy.runCodex", () => {
      runInTerminal("Happy Codex", "happy codex");
    }),

    vscode.commands.registerCommand("happy.continueCodex", () => {
      runInTerminal("Happy Codex Continue", "happy codex --continue");
    })
  ];

  context.subscriptions.push(...commands);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
