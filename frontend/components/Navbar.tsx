import Link from 'next/link'; 
import Image from 'next/image';



export default function Navbar({}) {
  return (
    <nav className="flex justify-between items-center p-10 bg-white border-b border-[#D3D3D3] text-[#2063f5] w-full">
      
      <div className="font-bold text-3xl tracking-tight">Image Resizer</div>

      <div className="flex gap-6 items-center font-bold tracking-tight">
        <Link href="/" className="text-gray-500 hover:text-[#2063f5] transition-colors">HOME</Link>
        <a href="#about" className="text-gray-500 hover:text-[#2063f5] transition-colors">ABOUT</a>
        <Link href="/resume" className="border-2 border-[#D3D3D3] text-gray-700 px-5 py-2 rounded-2xl hover:border-[#2063f5] hover:text-[#2063f5] transition-all active:scale-95">RESUME</Link>
        <Link href="/contact" className="bg-[#2063f5] text-white px-6 py-2.5 rounded-2xl hover:brightness-110 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">CONTACT ME</Link>
      </div>
   
    </nav>
  );
}