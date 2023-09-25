import _ from 'lodash';

function getHeadersByObject(obj) {
  const headers = [];

  for (const [key, value] of Object.entries(obj)) {
    if (!Array.isArray(value)) {
      headers.push({ key, title: _.camelCase(key) });
    }
  }

  return headers;
}

function getExpandedFieldsByObject(obj) {
  return Object.keys(obj).filter((key) => Array.isArray(obj[key]));
}

// Assuming there are no fields with objects inside the object
function getItemDefaultForm(item) {
  const form = {};

  for (const [key, value] of Object.entries(item)) {
    if (!Array.isArray(value)) {
      form[key] = typeof value === 'number' ? 0 : '';
    }
  }

  return form;
}

export { getHeadersByObject, getExpandedFieldsByObject, getItemDefaultForm };

// -- Idea --

// Each array column will appear in the expanded rows, as a expanded row that shows the array in a table format.

// -- Test --

// unit test = input output -> test case (happy path, edge case, -error case-) -> test suite

// component test = test the component in isolation, only test the component itself, not the children components
// -- mock the props

// e2e test = test the whole app, test the user flow, test the user interaction, test the user experience
