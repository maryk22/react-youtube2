import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';

export default function SeachHeader() {
  const { darkMode, toggleDarkMode } = useDarkMode();
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
      <div className='inner'>
        <Link to='/videos' className='logo'>
          <h1 className='title'>
            <BsYoutube />
            Youtube
          </h1>
        </Link>
        <form className='form-search' onSubmit={headleSubmit}>
          <input
            type='search'
            placeholder='검색어를 입력해주세요.'
            value={text}
            onChange={headleChange}
          />
          <button type='sumbit'>
            <BiSearchAlt />
          </button>
        </form>
        <button className='toggle' onClick={toggleDarkMode}>
          {darkMode ? <HiMoon /> : <HiSun />}
        </button>
      </div>
    </header>
  );
}
