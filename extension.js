const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  /** @type {vscode.Terminal | undefined} */
  let terminal;

  function getTerminal() {
    if (!terminal || terminal.exitStatus !== undefined) {
      terminal = vscode.window.createTerminal({
        name: "Happy Commands"
      });
    }

    terminal.show(true);
    return terminal;
  }

  function runInTerminal(command) {
    const terminal = getTerminal();
    terminal.sendText(`zsh -lc '${command}'`, true);
  }

  const commands = [
    vscode.commands.registerCommand("happy.runClaude", () => {
      runInTerminal("happy claude");
    }),

    vscode.commands.registerCommand("happy.continueClaude", () => {
      runInTerminal("happy claude --continue");
    }),

    vscode.commands.registerCommand("happy.runCodex", () => {
      runInTerminal("happy codex");
    }),

    vscode.commands.registerCommand("happy.continueCodex", () => {
      runInTerminal("happy codex --continue");
    })
  ];

  context.subscriptions.push(...commands);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};