# presentation-cell

Hides all but the currently active cell, for presentations.

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install presentation-cell
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
