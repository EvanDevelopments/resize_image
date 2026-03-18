"use client";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import Footer from '@/components/footer';
import Heading from '@/components/heading';
import { useEffect } from "react";
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { form } from "framer-motion/client";




export default function Home() {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Processing:", file.name);
      const formData = new FormData();

      formData.append("image", file);
      formData.append("width", "800");

      try {
        const response = await fetch("http://localhost:8000/api/resize", {
          method: "POST",
          body:formData,
        });

        if (response.ok){
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          console.log("Resized image ready at:", url);
        } else {
          console.error("The server didn't like that. Status:", response.status);
        }

      } catch (error) {
        console.error("Connection failed! Is the Spring Boot server running?", error);
      }
  }
}


  return (
    
      <main className="">
        <Navbar/>
        
          <div className="flex flex-row items-center justify-center pt- px-10 gap-20 -mt-20 text-[#2063f5]">
              <div className="relative w-full max-w-[1450px] h-[740px]  mx-auto flex items-center justify-center">
                  <Image src="/resize-seven.png" alt="Evan" fill className="object-cover"/>
      
                  <motion.div className="absolute z-10 flex flex-col items-center justify-center text-center px-4 mt-70" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2.1, ease: "easeOut" }}><h1 className="font-bold text-7xl tracking-tighter text-[#2063f5] drop-shadow-[0_2px_2px_rgba(255,255,255,1)] [text-shadow:_2px_2px_0_#fff,_-2px_-2px_0_#fff,_2px_-2px_0_#fff,_-2px_2px_0_#fff]"><Typewriter options={{strings:['Resize an image?'], autoStart:true, loop:true, delay:75, cursor:"|"}}onInit={(typewriter) => {typewriter.typeString("Resize an image?").pauseFor(20000).deleteAll().start();}}/></h1></motion.div>
              </div>
          </div>

          <input type="file" ref={fileInputRef} className="hidden" onChange={handleFile}/>

          

          <div className="py-20 text-white flex flex-col items-center gap-5">
            <button onClick={() => fileInputRef.current?.click()} className="bg-white hover:bg-slate-200 text-[#2063f5] font-bold py-2 px-4 text-xl rounded inline-flex items-center cursor-pointer">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Upload</span>
            </button>


            <div className="relative w-full max-w-[1000px] h-[540px] mt-110 mx-auto">
              <Image src="/resize-six.png" alt="Evan" fill className="object-cover"/>
            </div>
                   
          </div>

        <Footer />
      </main>
    
  );
}
