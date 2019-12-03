/** global window */

import * as themes from '../themes';

import mergeDeep from './mergeDeep';

import { get, set } from '.';

// Depreciar
const getStyle = element => property => props => get(props.theme.components[element], property);

class Theme {
  constructor() {
    this.desired = {};

    this.state = {
      current: 'light',
      themes,
    };

    this.addListener = this.addListener.bind(this);
    this.emit = this.emit.bind(this);
    this.getState = this.getState.bind(this);
    this.on = this.on.bind(this);
    this.register = this.register.bind(this);
    this.select = this.select.bind(this);
  }

  getState(key = null) {
    const t = (() => {
      if (key !== null) return key;
      return this.state.current;
    })();

    return {
      name: t,
      theme: this.state.themes[t],
    };
  }

  on(name, fn) {
    this.desired[name] = this.desired[name] || [];
    this.desired[name].push(fn);
  }

  // const mq = window.matchMedia('(prefers-color-scheme: dark)');
  // mq.addListener((ev) => {
  //   setIsDarkMode(ev.matches);
  // });

  emit(k, v) {
    if (Array.isArray(k)) {
      return;
    }

    // Update state.
    if (typeof v === 'object') {
      this.state[k] = mergeDeep(this.state[k], v);
    } else {
      this.state[k] = v;
    }

    if (Array.isArray(this.desired[k]) === false) return;

    // Dispatch value for listeners.
    this.desired[k].forEach((fn) => {
      fn(v);
    });
  }

  register(receive, type) {
    if (typeof receive === 'function') {
      this.register(receive(this.state.themes[type]));
      return;
    }
    if (typeof receive === 'object') {
      this.emit('themes', { [type]: receive });
    }
  }

  addListener(fn) {
    this.on('themes', fn);
  }

  select(value) {
    this.emit('current', value);
  }
}

const theme = new Theme({ themes });

// eslint-disable-next-line no-undef
window.theme = theme;

const { dark, light } = themes;

export {
  dark,
  getStyle,
  light,
};

export default theme;
