import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
    <div className="w-full flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/backgroundNew.jpeg')", height: '70vh' }}>
      
    </div>
    <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
          <Link href="/gallery">Go to Gallery { " -> "}</Link>
        </div>
    </div>
  </main>
  );
}
