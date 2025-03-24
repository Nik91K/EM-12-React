import { useState } from 'react';
import { commentType } from '../../../types/commentPage'



function CommentForm({ onSubmit }): commentType {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  const runSubmit = () => {
    if (author.trim() && text.trim() && date.trim()) {
      onSubmit(author, text, date, id)
      setAuthor('')
      setDate('')
      setText('')
      setId('')
  }
}

return (
    <>
      {setId}
      Author:
      <input
        value={author}
        onChange={change => setAuthor(change.target.value)}
      />
      Text:
      <input
        type='text'
        value={text}
        onChange={change => setText(change.target.value)}
      />
      Date:
      <input 
      type="text" 
      value={date}
      onChange={change => setDate(change.target.value)}
      />
      <button onClick={ runSubmit }>Відправити</button>
    </>
  );
}

export default CommentForm
