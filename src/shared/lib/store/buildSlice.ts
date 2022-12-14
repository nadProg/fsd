import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import type { CaseReducerActions, ActionCreator } from '@reduxjs/toolkit';
import type { SliceCaseReducers, CreateSliceOptions, Slice } from '@reduxjs/toolkit/dist';

type SliceWithUseActions<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
> = Slice<State, CaseReducers, Name> & {
  useActions: () => CaseReducerActions<CaseReducers, Name>
};

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>): SliceWithUseActions<State, CaseReducers, Name> => {
  const slice = createSlice<State, CaseReducers, Name>(options);

  const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
      () => {
        const actions = slice.actions as unknown as ActionCreator<unknown>;
        return bindActionCreators(actions, dispatch) as unknown as CaseReducerActions<CaseReducers, Name>;
      },
      [dispatch],
    );
  };

  return {
    ...slice,
    useActions,
  };
};
