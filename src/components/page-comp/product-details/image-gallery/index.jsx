"use client";

import Image from 'next/image';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = () => {

  const images = [
    {
      original: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
      thumbnail: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
    },
    {
      original: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
      thumbnail: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
    },
    {
      original: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
      thumbnail: "https://i.ibb.co.com/GvJ0xvLS/p45.webp",
    },
  ];

  return (
    <div>
      <div className='hidden md:block'>
        <ReactImageGallery items={images} thumbnailPosition='left' showNav={false} showPlayButton={false} showBullets={false} />
      </div>
      <div className='md:hidden'>
        <ReactImageGallery items={images} thumbnailPosition='bottom' showNav={false} showPlayButton={false} showBullets={false} />
      </div>
    </div>
  );
};

export default ImageGallery;
