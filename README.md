# Happy Terminal Commands

Command Palette commands for running `happy` CLI workflows in an integrated terminal.

> It is not an official extension of Happy, Claude or Codex. 

## Commands

- `Happy: Claude Run`
- `Happy: Claude Continue`
- `Happy: Codex Run`
- `Happy: Codex Continue`

## What it does

Each command opens or reuses an integrated terminal and runs one of these commands:

- `happy claude`
- `happy claude --continue`
- `happy codex`
- `happy codex --continue`

## Requirements

This extension is an unofficial wrapper around the `happy` CLI.

You must have:

- `happy` installed
- the command available in your shell `PATH`
- a shell environment where `zsh -lc` can resolve `happy`

## Usage

1. Open Command Palette
2. Search for `Happy:`
3. Run the command you want

## Notes

If the `happy` command is not found, verify your shell PATH and CLI installation.