import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const el = document.createElement('textarea');
  el.innerHTML = title;
  const decodedTitle = el.value;

  const imgUrl = thumbnails.standard?.url || thumbnails.high.url;
  return (
    <li>
      <Link to={`/videos/watch/${video.id}`} state={video}>
        <img src={imgUrl} alt={decodedTitle} className='thumbnail' />
        <div className='des'>
          <h2 className='title'>{decodedTitle}</h2>
          <p className='channelTit'>{channelTitle}</p>
          <p className='date'>{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </Link>
    </li>
  );
}
