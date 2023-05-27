import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

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
        <input
          type="text"
          {...register('query')}
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">search</button>
      </form>
    </>
  );
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
