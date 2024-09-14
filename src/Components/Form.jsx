import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state } = useContext(ContextGlobal);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 2) {
      setError('**Please verify your information. Your name is almost five characters long. **');
      setMessage('');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('**Please, verify your information. Enter a valid Email.**');
      setMessage('');
      return;
    }

    if (comments.trim().length < 10) {
      setError('**Please provide the comment in a minimum of 10 characters.**');
      setMessage('');
      return;
    }

    setError('');
    setMessage(`Thank you ${name}, We will reach out to you promptly via email at ${email}.`);

    setName('');
    setEmail('');
    setComments('');
  };


  return (
    <form onSubmit={handleSubmit} className='Form'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>

      {error && <p className="error">{error}</p>}
      {Message && <p className="success">{Message}</p>}
    </form>
  );
};

export default Form;
