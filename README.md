# presentation-cell

Hides all but the currently active cell, for presentations.

## Prerequisites

* JupyterLab
* nodejs

## Installation

   1. Be sure the prerequisites are installed (`conda install jupyterlab -c conda-forge nodejs`)
   2. git-clone this theme (`git clone https://github.com/jpivarski/JupyterLab-presentation-cell.git`)
   3. `cd JupyterLab-presentation-cell`
   4. `jlpm install`
   5. `jupyter labextension install .`

## Use

   6. Go to your presentation repo, start JupyterLab, open a notebook
   7. from the Settings → JupyterLab Theme menu, pick "presentation-cell"
   8. click on the cell to be sure it's activated; `J` and `K` walk forward and back, `ctrl-enter` evaluates a cell without moving to the next (very important!)
   9. write a talk/interactive demo in such a way that you don't need more than one cell on the screen at a time
   10. I usually do it at 200% magnification, with the top-menu hidden (`ctrl-shift-D`).
   11. you kinda have to open a notebook in the normal theme, then switch to "presentation-cell" for some obscure CSS reason; I've gotten used to it.
