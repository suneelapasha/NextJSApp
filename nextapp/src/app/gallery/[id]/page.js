// app/gallery/[id]/page.js
import { notFound } from 'next/navigation';

const photos = [
    { id: 1, url: '/women.jpeg', caption: 'Sample 1' },
    { id: 2, url: '/womenGreen.jpeg', caption: 'Sample 2' },
    { id: 3, url: '/womenYellow.jpeg', caption: 'Sample 3' },
    { id: 4, url: '/womenFlowers.jpeg', caption: 'Sample 4' },
  ];

export default function PhotoPage({ params }) {
  const { id } = params;
  const photo = photos[id - 1];

  if (!photo) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img width={400} height={'auto'} className='rounded-md shadow-lg' src={photo.url} alt={photo.caption} />
      <p className='mt-4 text-xl text-center'>{photo.caption}</p>
    </div>
  );
}
