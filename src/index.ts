import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for presentation-cell
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'presentation-cell:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'presentation-cell',
      isLight: true,
      load: function() {
        return manager.loadCSS('presentation-cell/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
