import { useState } from 'react'

const useForm = () => {
  const [value, setValue] = useState('');

  function handleChange({target}) {
    setValue(target.value);
  } 


  return {
    value,
    setValue,
    handleChange,
  };
}


export default useForm