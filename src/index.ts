import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the presentation-cell extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'presentation-cell',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension presentation-cell is activated!');
  }
};

export default extension;
