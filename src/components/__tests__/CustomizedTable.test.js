import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import CustomizedTable from '../tables/CustomizedTable.vue';

describe('Customized Table Component', () => {
  const wrapper = mount(CustomizedTable, {
    props: {
      headers: [
        { key: 'name', title: 'name' },
        { key: 'age', title: 'age' },
        { key: 'address', title: 'address' }
      ],
      items: [
        {
          id: 1,
          name: 'John',
          age: 30,
          games: Array.from({ length: 5 }, (_, i) => ({
            name: `Game ${i}`,
            genre: 'Action'
          }))
        },
        {
          id: 2,
          name: 'Jane',
          age: 32,
          games: Array.from({ length: 5 }, (_, i) => ({
            name: `Game ${i}`,
            genre: 'Action'
          }))
        }
      ],
      defaultForm: {
        id: 0,
        name: '',
        age: ''
      },
      showExpand: true,
      isSearchable: true,
      itemValue: 'id'
    }
  });

  test.skip('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  // test('renders the correct number of rows', () => {
  //   expect(wrapper.findAll('tbody tr')).toHaveLength(2);
  // });

  // test('renders the correct number of columns', () => {
  //   expect(wrapper.findAll('tbody tr:first-child td')).toHaveLength(3);
  // });
});
