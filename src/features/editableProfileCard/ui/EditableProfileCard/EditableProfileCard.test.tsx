import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ReducersList } from '@/shared/hooks/useDynamicReducers';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

import { Country } from '@/entities/Country/testing';
import { editableProfileSliceReducer } from '../../model/slices/editableProfileCardSlice';

import { EditableProfileCard } from './EditableProfileCard';

const mockId = '1';
const asyncReducers: ReducersList = {
  editableProfile: editableProfileSliceReducer,
};

describe('features/EditableProfileCard', () => {
  test('Render in readonly mode', () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          readonly: true,
          isLoading: false,
        },
      },
      asyncReducers,
    });

    const error = screen.queryByTestId('EditableProfileCard.Error');
    const editButton = screen.getByTestId('EditableProfileCardHeader.EditButton');
    const cancelButton = screen.queryByTestId('EditableProfileCardHeader.CancelButton');
    const saveButton = screen.queryByTestId('EditableProfileCardHeader.SaveButton');
    const firstNameInput = screen.getByTestId('ProfileCard.FirstNameInput');
    const lastNameInput = screen.getByTestId('ProfileCard.LastNameInput');

    expect(error).not.toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
    expect(saveButton).not.toBeInTheDocument();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  test('Render in editable mode', () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          readonly: false,
          isLoading: false,
        },
      },
      asyncReducers,
    });

    const error = screen.queryByTestId('EditableProfileCard.Error');
    const editButton = screen.queryByTestId('EditableProfileCardHeader.EditButton');
    const cancelButton = screen.getByTestId('EditableProfileCardHeader.CancelButton');
    const saveButton = screen.getByTestId('EditableProfileCardHeader.SaveButton');
    const firstNameInput = screen.getByTestId('ProfileCard.FirstNameInput');
    const lastNameInput = screen.getByTestId('ProfileCard.LastNameInput');

    expect(error).not.toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  test('Should switch to editable mode in editable mode', async () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          data: {
            id: mockId,
          },
          form: {
            id: mockId,
          },
          readonly: true,
          isLoading: false,
        },
        user: {
          authData: {
            id: mockId,
          },
        },
      },
      asyncReducers,
    });

    let error = screen.queryByTestId('EditableProfileCard.Error');
    let editButton = screen.queryByTestId('EditableProfileCardHeader.EditButton');
    let cancelButton = screen.queryByTestId('EditableProfileCardHeader.CancelButton');
    let saveButton = screen.queryByTestId('EditableProfileCardHeader.SaveButton');
    let firstNameInput = screen.getByTestId('ProfileCard.FirstNameInput');
    let lastNameInput = screen.getByTestId('ProfileCard.LastNameInput');

    expect(error).not.toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
    expect(saveButton).not.toBeInTheDocument();

    await userEvent.click(editButton as HTMLElement);

    error = screen.queryByTestId('EditableProfileCard.Error');
    editButton = screen.queryByTestId('EditableProfileCardHeader.EditButton');
    cancelButton = screen.queryByTestId('EditableProfileCardHeader.CancelButton');
    saveButton = screen.queryByTestId('EditableProfileCardHeader.SaveButton');
    firstNameInput = screen.getByTestId('ProfileCard.FirstNameInput');
    lastNameInput = screen.getByTestId('ProfileCard.LastNameInput');

    expect(error).not.toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  test('Should save profile data', async () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          data: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          form: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          readonly: false,
          isLoading: false,
        },
        user: {
          authData: {
            id: mockId,
          },
        },
      },
      asyncReducers,
    });

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last');

    await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), ' type');
    await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), ' type');

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first type');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last type');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first type');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last type');
  });

  test('Should prevent saving invalid data', async () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          data: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          form: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          readonly: false,
          isLoading: false,
        },
        user: {
          authData: {
            id: mockId,
          },
        },
      },
      asyncReducers,
    });

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last');

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('');

    expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
    expect(screen.queryByTestId('EditableProfileCardHeader.EditButton')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('EditableProfileCard.Error.Text')).toHaveLength(2);
  });

  test('Should cancel not saved profile data', async () => {
    renderComponent(<EditableProfileCard id={mockId} />, {
      initialState: {
        editableProfile: {
          data: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          form: {
            id: mockId,
            firstname: 'first',
            lastname: 'last',
            country: Country.Armenia,
          },
          readonly: false,
          isLoading: false,
        },
        user: {
          authData: {
            id: mockId,
          },
        },
      },
      asyncReducers,
    });

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last');

    await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), ' type');
    await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), ' type');

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first type');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last type');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('first');
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('last');
  });
});
