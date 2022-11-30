import { Key } from 'react';
import { ButtonDropDownItem, DropDownItem, DropDownItemType } from '../DropDown.types';

// eslint-disable-next-line max-len
export const isButtonDropDownItem = <V extends Key>(dropDownItem: DropDownItem<V>): dropDownItem is ButtonDropDownItem<V> => dropDownItem.type === DropDownItemType.Button;
