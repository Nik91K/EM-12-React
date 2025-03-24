import { useState } from 'react';

const ButtonText = () => {
  const [value, setValue] = useState("Текст кнопки");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <>
      <input value={value} onChange={handleChange} />
      <button>{value}</button>
    </>
  );
}

export default ButtonText