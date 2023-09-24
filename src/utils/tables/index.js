import _ from 'lodash';

function getHeadersByObject(obj) {
  const headers = [];
  const expanded = [];

  for (const key in obj) {
    const headerData = { key, title: _.camelCase(key) };
    const headerList = Array.isArray(obj[key]) ? expanded : headers;

    headerList.push(headerData);
  }

  return { headers, expanded };
}

// // Assuming there are no fields with objects inside the object
// function getHeadersByObject(obj) {
//   const headers = [];

//   for (const key in obj) {
//     if (!Array.isArray(obj[key])) {
//       headers.push({ key, title: _.camelCase(key) });
//     }
//   }

//   return headers;
// }

function getItemDefaultForm(item) {
  const form = {};

  for (const key in item) {
    if (Array.isArray(item[key])) continue;

    const type = typeof item[key];

    form[key] = type === 'number' ? 0 : '';
  }

  return form;
}

export { getHeadersByObject, getItemDefaultForm };

// -- Idea --

// Each array column will appear in the expanded rows, as a expanded row that shows the array in a table format.

// -- Test --

// unit test = input output -> test case (happy path, edge case, -error case-) -> test suite

// component test = test the component in isolation, only test the component itself, not the children components
// -- mock the props

// e2e test = test the whole app, test the user flow, test the user interaction, test the user experience
