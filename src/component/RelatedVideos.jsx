import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoding,
    data: videos,
  } = useQuery({
    queryKey: ['videos', id],
    queryFn: () => youtube.videoRelated(id),
    staleTime: 1000 * 60 * 5,
  });
  if (isLoding) return <p>Loding....</p>;
  if (error) return <p>error....</p>;

  return (
    <>
      <h2 className='title'>연관 동영상</h2>
      {videos && (
        <ul className='list-video'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
