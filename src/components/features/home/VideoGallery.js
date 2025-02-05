"use-client";
import React from 'react';

const videos = [
  { id: 1, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video 1' },
  { id: 2, src: 'https://www.youtube.com/embed/5qap5aO4i9A', title: 'Video 2' },
  { id: 3, src: 'https://www.youtube.com/embed/jfKfPfyJRdk', title: 'Video 3' },
  { id: 4, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video 1' },
  { id: 5, src: 'https://www.youtube.com/embed/5qap5aO4i9A', title: 'Video 2' },
  { id: 6, src: 'https://www.youtube.com/embed/jfKfPfyJRdk', title: 'Video 3' },
  { id: 7, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video 1' },
  { id: 8, src: 'https://www.youtube.com/embed/5qap5aO4i9A', title: 'Video 2' },
  { id: 9, src: 'https://www.youtube.com/embed/jfKfPfyJRdk', title: 'Video 3' },
  // Add more videos here
];

const VideoGallery = () => {
  return (
    <div className="container mx-auto px-20 py-8 max-width:'90%'">
      <h2 className="text-3xl font-bold mb-6 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              src={video.src}
              title={video.title}
              className="w-full h-48"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;