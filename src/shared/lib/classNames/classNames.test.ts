import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param only', () => {
    expect(classNames('baseClass')).toBe('baseClass');
  });

  test('with additional params', () => {
    expect(classNames('baseClass', {}, ['class1', 'class2'])).toBe('baseClass class1 class2');
  });

  test('with all mods true', () => {
    const expected = 'baseClass class1 class2 hovered selected';

    expect(classNames('baseClass', { hovered: true, selected: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with some mod false', () => {
    const expected = 'baseClass class1 class2 selected';

    expect(classNames('baseClass', { hovered: false, selected: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with some mod undefined', () => {
    const expected = 'baseClass class1 class2 selected';

    expect(classNames('baseClass', { hovered: undefined, selected: true }, ['class1', 'class2'])).toBe(expected);
  });
});
