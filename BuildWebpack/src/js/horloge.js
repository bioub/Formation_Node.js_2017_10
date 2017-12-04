import config from '../config/config.json5';

// 1 - Installer et configurer json5-loader (doc sur le site webpack)
// 2 - Installer et configurer clean-webpack-plugin (rechercher sur google)
// 3 - Installer et configurer uglifyjs-webpack-plugin (doc sur le site webpack)

class Horloge {
  /**
   * @param {Element} element
   */
  constructor(element) {
    this._element = element;
    console.log(config.format); // HH:mm:ss
  }
  _render() {
    const now = new Date();
    this._element.innerHTML = now.toLocaleTimeString();
  }
  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}

export {
  Horloge,
}
