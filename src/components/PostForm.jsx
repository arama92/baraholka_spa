import React from 'react';
import MyInput from './UI/Myinput';

const PostForm = ({ addQuest }) => {
  const [value, setValue] = React.useState('');

  const onEnter = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    const newQuest = {
      id: Date.now(),
      name: value,
      done: false,
    };
    addQuest(newQuest);
    setValue('');
  };

  return (
    <form className='inputForm' onSubmit={onEnter}>
      <svg
        width='15px'
        height='15px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z' fill='#000000' />
      </svg>
      <MyInput
        type='text'
        placeholder='What needs to be done?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default PostForm;
