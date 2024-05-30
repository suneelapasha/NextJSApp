import Link from 'next/link';
import styles from '../styles/Gallery.module.css';

const Gallery = ({ photos }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/gallery/${photo.id}`}>
            <img src={photo.url} alt={photo.caption}
              className=" w-full h-64 object-cover rounded-md transition-transform duration-200 group-hover:scale-105" />
          </Link>
        ))}
    </div>
    </div>
  );
};

export default Gallery;
