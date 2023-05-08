import { Goban } from './goban.js';

test('test_white_is_taken_when_surrounded_by_black', () => {
  const goban = new Goban([
        '.#.',
        '#o#',
        '.#.',
  ])
  expect(goban.is_taken(goban, [], 1, 1)).toBe(true);
});

test('test_white_is_not_taken_when_it_has_a_liberty', () => {
  const goban = new Goban([
        '...',
        '#o#',
        '.#.',
  ])
  expect(goban.is_taken(goban, [], 1, 1)).toBe(false);
});

test('test_black_shape_is_taken_when_surrounded', () => {
  const goban = new Goban([
        'oo.',
        '##o',
        'o#o',
        '.o.',
  ])
  expect(goban.is_taken(goban, [], 0, 1)).toBe(true);
  expect(goban.is_taken(goban, [], 1, 1)).toBe(true);
  expect(goban.is_taken(goban, [], 1, 2)).toBe(true);
});

test('test_black_shape_is_not_taken_when_it_has_a_liberty', () => {
  const goban = new Goban([
        'oo.',
        '##.',
        'o#o',
        '.o.',
  ])
  expect(goban.is_taken(goban, [], 0, 1)).toBe(false);
  expect(goban.is_taken(goban, [], 1, 1)).toBe(false);
  expect(goban.is_taken(goban, [], 1, 2)).toBe(false);
});

test('test_square_shape_is_taken', () => {
  const goban = new Goban([
        'oo.',
        '##o',
        '##o',
        'oo.',
  ])
  expect(goban.is_taken(goban, [], 0, 1)).toBe(true);
  expect(goban.is_taken(goban, [], 0, 2)).toBe(true);
  expect(goban.is_taken(goban, [], 1, 1)).toBe(true);
  expect(goban.is_taken(goban, [], 1, 2)).toBe(true);
});