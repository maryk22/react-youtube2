import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../component/ChannelInfo';
import RelatedVideos from '../component/RelatedVideos';

export default function VideoDetail() {
  const { state } = useLocation();
  const { title, channelId, channelTitle, description } = state.snippet;

  return (
    <section className='detail-area'>
      <article className='detail'>
        <div className='video-player'>
          <iframe
            src={`https://www.youtube.com/embed/${state.id}`}
            frameBorder='0'
          ></iframe>
        </div>
        <div className='info'>
          <h2 className='title'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='des'>{description}</pre>
        </div>
      </article>
      <section className='related'>
        <RelatedVideos id={state.id} />
      </section>
    </section>
  );
}
