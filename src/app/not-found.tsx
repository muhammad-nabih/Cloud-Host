import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type TextContentItem = {
  tag: keyof JSX.IntrinsicElements;
  className: string;
  content: string;
};

const NotFoundPage = () => {
  const images = [
    {
      src: 'https://i.ibb.co/v30JLYr/Group-192-2.png',
      alt: '404 illustration desktop',
      width: 600,
      height: 450,
      className: 'hidden lg:block',
    },
    {
      src: 'https://i.ibb.co/c1ggfn2/Group-193.png',
      alt: '404 illustration tablet',
      width: 500,
      height: 375,
      className: 'hidden md:block lg:hidden',
    },
    {
      src: 'https://i.ibb.co/8gTVH2Y/Group-198.png',
      alt: '404 illustration mobile',
      width: 300,
      height: 225,
      className: 'md:hidden',
    },
  ];

  const textContent: TextContentItem[] = [
    {
      tag: 'h1',
      className: 'py-4 text-3xl font-extrabold text-gray-800 lg:text-4xl',
      content: 'Looks like you have found the doorway to the great nothing',
    },
    {
      tag: 'p',
      className: 'py-4 text-base text-gray-800',
      content:
        'The content you are looking for does not exist. Either it was removed, or you mistyped the link.',
    },
    {
      tag: 'p',
      className: 'py-2 text-base text-gray-800',
      content: 'Sorry about that! Please visit our homepage to get where you need to go.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-16 px-6 py-28 md:px-24 md:py-20 lg:flex-row lg:gap-28 lg:py-32">
      <div className="w-full lg:w-1/2">
        {images.map((img, index) => (
          <Image
            key={index}
            className={img.className}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
      <div className="w-full lg:w-1/2">
        {textContent.map((item, index) => {
          const Tag = item.tag;
          return (
            <Tag key={index} className={item.className}>
              {item.content}
            </Tag>
          );
        })}
        <Link href="/" passHref>
          <button className="my-4 w-full rounded-md border bg-indigo-600 px-1 py-5 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:px-16 lg:w-auto">
            Go back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
