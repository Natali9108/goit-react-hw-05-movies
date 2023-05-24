import { useForm } from 'react-hook-form';

export const MovieForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = ({ query }, evt) => {
    // setSearchParams({ query: query });
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
