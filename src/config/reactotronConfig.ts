import Reactotron, {overlay, trackGlobalErrors} from 'reactotron-react-native';
import {Tron} from '@interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

// If you want to use a physical device and connect it to reactotron
// execute first `adb reverse tcp:9090 tcp:9090`
if (__DEV__) {
  Reactotron.configure({name: 'imdb'})
    .use(trackGlobalErrors({}))
    .use(overlay())
    .connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display,
  };
}

export default Reactotron;
