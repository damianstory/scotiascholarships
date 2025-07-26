# Semgrep MCP Setup Instructions

To install the Semgrep MCP for this project, you need to configure it in your Claude Desktop app settings:

## Steps:

1. Open Claude Desktop app
2. Go to Settings → Developer → Edit Config
3. Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "semgrep": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "--mount", "type=bind,src=/Users/damianmatheson/Desktop/ClaudeCode/ScotiaWinnersLP/v1,dst=/project",
        "--workdir", "/project",
        "ghcr.io/semgrep/mcp:latest"
      ]
    }
  }
}
```

## Alternative Setup (if you already have other MCP servers):

Add the semgrep configuration to your existing `mcpServers` object:

```json
"semgrep": {
  "command": "docker",
  "args": [
    "run",
    "-i",
    "--rm",
    "--mount", "type=bind,src=/Users/damianmatheson/Desktop/ClaudeCode/ScotiaWinnersLP/v1,dst=/project",
    "--workdir", "/project",
    "ghcr.io/semgrep/mcp:latest"
  ]
}
```

## Prerequisites:
- Docker must be installed and running
- Claude Desktop app version that supports MCP

## What Semgrep MCP provides:
- Static code analysis
- Security vulnerability detection
- Code quality checks
- Pattern-based code search

After adding this configuration, restart Claude Desktop for the changes to take effect.