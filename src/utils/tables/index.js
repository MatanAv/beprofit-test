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
