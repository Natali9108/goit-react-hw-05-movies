import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { FormContainer, Input, SearchBtn } from './MoviesForm.styled';

export const MovieForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = ({ query }, evt) => {
    if (query === '') {
      toast.warn('Please, write something to find movies', {
        autoClose: 2000,
      });
    }
    onSubmit(query);

    evt.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSearch)}>
        <FormContainer>
          <Input
            type="text"
            {...register('query')}
            autoFocus
            placeholder="Search films"
          />
          <SearchBtn type="submit">
            <ImSearch style={{ width: '20', height: '20' }} />
          </SearchBtn>
        </FormContainer>
      </form>
    </>
  );
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
