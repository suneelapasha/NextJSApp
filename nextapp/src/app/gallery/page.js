
import Gallery from '../components/Gallery';

function gallery() {
  const photos = [
    { id: 1, url: '/women.jpeg', caption: 'Sample 1' },
    { id: 2, url: '/womenGreen.jpeg', caption: 'Sample 2' },
    { id: 3, url: '/womenYellow.jpeg', caption: 'Sample 3' },
    { id: 4, url: '/womenFlowers.jpeg', caption: 'Sample 4' },
  ];

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}

export default gallery