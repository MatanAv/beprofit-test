import { describe, expect, test } from 'vitest';
import { getExpandedFieldsByObject, getHeadersByObject, getItemDefaultForm } from '@/utils/tables';

describe('getHeadersByObject', () => {
  test('returns an array of headers', () => {
    const obj = {
      name: 'John',
      age: 30,
      hobbies: ['swimming', 'running'],
      address: {
        street: 'Main Street',
        number: 10
      }
    };
    expect(getHeadersByObject(obj)).toEqual([
      { key: 'name', title: 'name' },
      { key: 'age', title: 'age' },
      { key: 'address', title: 'address' }
    ]);
  });
});

describe('getExpandedFieldsByObject', () => {
  test('returns an array of fields with arrays', () => {
    const obj = {
      name: 'John',
      age: 30,
      hobbies: ['swimming', 'running'],
      address: {
        street: 'Main Street',
        number: 10
      },
      friends: [
        {
          name: 'Jane',
          age: 30
        },
        {
          name: 'Jack',
          age: 32
        }
      ]
    };
    expect(getExpandedFieldsByObject(obj)).toEqual(['hobbies', 'friends']);
  });
});

describe('getItemDefaultForm', () => {
  test('returns an object with default values', () => {
    const obj = {
      name: 'John',
      age: 30,
      hobbies: ['swimming', 'running'],
      friends: [
        {
          name: 'Jane',
          age: 30
        },
        {
          name: 'Jack',
          age: 32
        }
      ]
    };
    expect(getItemDefaultForm(obj)).toEqual({
      name: '',
      age: 0
    });
  });
});
