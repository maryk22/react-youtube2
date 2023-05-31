import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoding,
    data: url,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoding) return <p className='loding-channel'>{name.slice(0, 1)}</p>;

  if (error) return <p>error....</p>;
  console.log(id);

  return (
    <div className='channle-info'>
      <img src={url} alt={name} className='img' />
      <p className='name'>{name}</p>
    </div>
  );
}
