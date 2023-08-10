import './style/styles.css';
import { sendForm, clearForm } from './modules/handleBtn';

require.context('./assets/', true, /^\.\/.*\.png/);

sendForm();
clearForm();
