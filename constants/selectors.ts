import { password } from '../test-data/inputData';

export const gridForm = {
  emailGridForm: '#inputEmail1',
  passwordGridForm: '#inputPassword2',
  option1: '',
  option2: '',
  signInButton: '',
};

export const basicForm = {
  emailBasicForms: '#exampleInputEmail1',
  passwordBasicForms: '#exampleInputPassword1',
  submitButtonBasicForms: '',
};

export const dashboard = {
  graphDateButton: '#electricity-date-selector',
  weekOption: '#nb-option-0',
  monthOption: '#nb-option-1',
  yearOption: '#nb-option-2',
};

export const theme = {
  themeButton: '.header-container:first-child button',
  lightTheme: '#nb-option-6',
  cosmicTheme: '#nb-option-8',
  darkTheme: '#nb-option-7',
  corporateTheme: '#nb-option-9',
};

export const dropdown = {
  dropdownMenuButton: 'ngx-header .header-container:first-child button',
  dropdownOptionList1: '.option-list',
};

// Use + selector to select the next neighbour !!!
// Use ~ selector to select all neighbours !!!
export const loginForm = {
  emailLoginInput: '#input-email',
  emailInputError: '#input-email + .status-danger',
  passwordLoginInput: '#input-password',
  passwordInputError: '#input-password + .status-danger',
  logInButton: 'button',
  rememberMeCheckbox: '[name="rememberMe"] .custom-checkbox',
};
