import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import { register as registerKnobs, withKnobs } from '@storybook/addon-ondevice-knobs';
import { register as registerActions } from '@storybook/addon-ondevice-actions';

registerKnobs();
registerActions();


//import AsyncStorage from '@react-native-community/async-storage';

addDecorator(withKnobs);

configure(() => {
  require('./components/stories');
}, module);

export default getStorybookUI({
});
