import trottle from 'lodash.throttle';

import { load, save, remove } from './storage_methods';
const form = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

storageValueToFormFields();

form.addEventListener('input',trottle(setStorageValue, 500));


function setStorageValue(e) {
    const { name, value } = e.target;
        let getValue = load(LOCAL_STORAGE_KEY);
        if(!getValue) {
            getValue = {};
        } else {
            getValue[name] = value;
        }
   save(LOCAL_STORAGE_KEY, getValue);

}

function storageValueToFormFields() {
    const getValue = load(LOCAL_STORAGE_KEY);
       if(getValue){
        Object.entries(getValue).forEach(([name, value]) => {
            form.elements[name].value = value;
        })
     }
  }

   form.addEventListener('submit', onFormSubmit)

   function onFormSubmit(e) {
     e.preventDefault();
     const { elements: { email, message }} = e.currentTarget;
     console.log({ email: email.value, message: message.value });
     e.target.reset();
     remove(LOCAL_STORAGE_KEY);
   }
 
