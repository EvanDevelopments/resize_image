"use client";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import Footer from '@/components/footer';
import Heading from '@/components/heading';
import { useEffect } from "react";
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';




export default function Home() {

  const fileInputRef = useRef(null)

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("We got it!", file.name);
  }
}


  return (
    
      <main className="">
        <Navbar/>
        
          <div className="flex flex-row items-center justify-center pt-105 px-10 gap-20 text-[#2063f5]">
            <motion.div className="max-w-xl w-[600px]" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2.1, ease: "easeOut" }}><h1 className="font-bold text-7xl tracking-tighter"><Typewriter options={{strings:['Resize an image?'], autoStart:true, loop:true, delay:75, cursor:"|"}}onInit={(typewriter) => {typewriter.typeString("Resize an image?").pauseFor(20000).deleteAll().start();}}/></h1></motion.div>
          </div>

          <input type="file" ref={fileInputRef} className="hidden" onChange={handleFile}/>

          

          <div className="py-20 text-white flex flex-col items-center gap-5">
            <button onClick={() => fileInputRef.current.click()} className="bg-white hover:bg-slate-200 text-[#2063f5] font-bold py-2 px-4 text-xl rounded inline-flex items-center cursor-pointer">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Upload</span>
            </button>

            <div className="relative w-[1300px] h-[900px] mt-130">
              <Image src="/resize-two.png" alt="Evan" fill className="object-cover"/>
            </div>

            


          </div>



        <Footer />
      </main>
    
  );
}
