import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';

export default function SeachHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const headleChange = (e) => {
    setText(e.target.value);
  };
  const headleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='header'>
      <Link to='/videos' className='logo'>
        <h1 className='title'>
          <BsYoutube />
          Youtube
        </h1>
      </Link>
      <form className='form-search' onSubmit={headleSubmit}>
        <input
          type='search'
          placeholder='input text...'
          value={text}
          onChange={headleChange}
        />
        <button type='sumbit'>
          <BiSearchAlt />
        </button>
      </form>
    </header>
  );
}
