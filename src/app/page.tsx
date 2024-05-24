'use client';
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import React, { useState, useRef, ChangeEvent } from 'react';
import domtoimage from 'dom-to-image';



export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [perk1, setPerk1] = useState('');
  const [perk2, setPerk2] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null);
  const containerRef = useRef(null);


  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: any) => {
    setAge(event.target.value);
  };
  const handleChangeLocation = (event: any) => {
    setLocation(event.target.value);
  };
  const handleChangeShortDesc = (event: any) => {
    setShortDesc(event.target.value);
  };
  const handleChangeHashtag = (event: any) => {
    setHashtag(event.target.value);
  };
  const handleChangePerk1 = (event: any) => {
    setPerk1(event.target.value);
  };
  const handleChangePerk2 = (event: any) => {
    setPerk2(event.target.value);
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (!containerRef.current) return;

    domtoimage.toPng(containerRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => { // Explicitly typing error as Error
        console.error('Error generating image: ', error);
      });
  };


  const handleShare = () => {
    const shareData = {
      title: 'Profile Generator', // Title of your website or app
      text: 'Check out this profile!', // Text to share
      url: window.location.href // URL of your website
    };
  
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the share API
      console.log('Share API not supported');
      // You can provide alternative sharing options or display a message to the user
    }
  };

  const handleBuy = () => {
    window.open('https://jup.ag/swap/SOL-9BKWEZqhvJh4Lh9pnnX6f1xL7SLr6diyTb77kadfbFdK', '_blank');
  };
  
  return (
    <>
      <main className="font-primary relative bg-black lg:py-20 py-2">
        <div className="mx-auto max-w-7xl">
          <div className="grid py-10 justify-center items-center px-2">
            <Image width={500} height={600} src="/images/logo.png" alt="Logo" />
            <h2 className="text-5xl text-white  text-center">Profile Generator</h2>
          </div>
          <div className=" grid grid-cols-1 xl:grid-cols-3 py-4 gap-x-12 gap-y-8 xl:px-0 px-4 ">
            <div className="">
              <div className="bg-primary px-4 py-6 rounded-lg ">
                <div className="">
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          placeholder="Name"
                          className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600 font-bold text-2xl"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mt-2">
                        <input type="text" name="age" id="age" autoComplete="age" placeholder="Age" className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl"
                          onChange={handleChangeAge} />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <div className="mt-2">
                        <input id="location" name="text" type="location" autoComplete="location" placeholder="Location" className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl" onChange={handleChangeLocation} />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <div className="mt-2">
                        <textarea id="shot-desc" name="shot-desc" placeholder="Short description...." rows={3} className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl" defaultValue={''} onChange={handleChangeShortDesc} />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <div className="mt-2">
                        <input id="hashtag" name="text" type="hashtag" autoComplete="hashtag" placeholder="Hashtag #" className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl" onChange={handleChangeHashtag} />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="mt-2">
                        <input type="text" name="perk-1" id="perk-1" autoComplete="perk-1" placeholder="Perk 1" className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl" onChange={handleChangePerk1} />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="mt-2">
                        <input type="text" name="perk-2" id="perk-2" autoComplete="perk-2" placeholder="Perk 2" className="block w-full rounded-md border-0 py-3 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-primary-600  font-bold text-2xl" onChange={handleChangePerk2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-x-3">
                <input
                  type="file"
                  accept="image/*"
                  id="file-input"
                  className="hidden"
                  onChange={handleUpload}
                />
                <label htmlFor="file-input" className="flex rounded-lg bg-primary w-full text-center justify-center items-center px-3 py-3 text-4xl font-normal text-white shadow-sm ring-1 ring-inset ring-primary hover:bg-primary cursor-pointer">
                  <FiUpload className="h-12 w-12 text-white mr-3" aria-hidden="true" /> Upload your PFP
                </label>
              </div>
            </div>
            {/* Grid 2  */}
            <div className="" ref={containerRef}>
              <div className="flex justify-between items-center text-center bg-primary-500 py-2 px-2">
                <div className="flex">
                  <div className="text-center pr-2">
                    <Link href="#">
                      <FaAngleLeft className="h-10 w-10 text-black" />
                    </Link>
                  </div>
                  <div className="text-center text-3xl text-black border-l-2 border-white-500 pl-4">
                    <span>{name || 'Name'}</span> <span>{age || ', Age'}</span>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-center border-r-2 border-white-500 pr-4 border-l-2 border-white-500 pl-4">
                    <Link href="#">
                      <FaFacebookSquare className="h-10 w-10 text-black" />
                    </Link>
                  </div>
                  <div className="text-center pl-4">
                    <Link href="#">
                      <PiMaskHappyFill className="h-10 w-10 text-black" />
                    </Link>
                  </div>
                </div>

              </div>
              {/* Center Content */}
              
              <div style={{ backgroundImage: `url(${uploadedImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-[#A69F9F] pt-1 pb-2 px-4 h-[420px] flex flex-col justify-between">
                <div className="grid justify-between items-center  grid-cols-1 md:grid-cols-3 ">
                  <div className="text-white">
                    <span>1/5</span>
                  </div>
                  <div className="flex justify-center">
                    <span className="bg-primary py-1 px-3 border border-black text-white text-center rounded-lg text-3xl tracking-widest">$GRINDR</span>
                  </div>
                  <div className="flex justify-end ">
                    <span className="flex text-[#24CF22] text-lg ">Online</span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center text-center">
                    <FaLocationArrow className="h-3 w-3 mr-2 fill-primary" />
                    <span className="text-white">{location || 'Location'}</span>
                  </div>
                  <div className="flex items-center text-center text-base">
                    <span className="text-white text-sm">{shortDesc || 'Short Description'} </span>
                  </div>
                  <div className="flex items-center text-center text-base">
                    <span className="text-primary text-sm">{hashtag || '#Hashtag'}</span>
                  </div>
                  <div className="flex flex-wrap text-base py-2 gap-x-3">
                    <span className="text-black text-sm px-2 py-1 bg-white rounded-md">{perk1 || 'Perk 1'}</span>
                    <span className="text-black text-sm px-2 py-1 bg-white rounded-md">{perk2 || 'Perk 2'}</span>
                  </div>
                </div>
              </div>
              {/* Bottom Bar */}
              <div className="flex justify-between items-center text-center bg-[#565252] py-2 px-4">
                <div className="grid items-center self-center justify-center">
                  <Link href="#" className="">
                    <img src="/images/ProfileIcon.png" alt="ProfileIcon" width={29} height={34} className="pb-2"/>
                    <p className="text-white">Profile</p>
                  </Link>
                </div>
                <div className="grid items-center self-center justify-center">
                  <Link href="#" className="">
                    <img src="/images/SparkIcon.png" alt="SparkIcon" width={42} height={38} className="pb-2"/>
                    <p className="text-white">Spark</p>
                  </Link>
                </div>
                <div className="grid items-center self-center justify-center">
                  <Link href="#" className="">
                    <img src="/images/FavoriteIcon.png" alt="FavoriteIcon" width={38} height={29} className="pb-3"/>
                    <p className="text-white">Favorite</p>
                  </Link>
                </div>
                <div className="grid items-center self-center justify-center">
                  <Link href="#" className="">
                    <img src="/images/BlockIcon.png" alt="BlockIcon" width={30} height={30} className="pb-2"/>
                    <p className="text-white">Block</p>
                  </Link>
                </div>
                <div className="grid items-center self-center justify-center">
                  <Link href="#" className="">
                    <img src="/images/ChatIcon.png" alt="ChatIcon" width={38} height={33} className="pb-2"/>
                    <p className="text-white">Chat</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Grid 3  */}
            <div className="">
              <div className="bg-primary px-4 py-6 rounded-lg xl:h-[560px]">
                <div className="">
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1">
                    <div className="col-span-6">
                      <div className="space-y-6">
                        <button onClick={handleDownload} type="button" className="flex rounded-lg bg-white w-full text-center justify-center items-center px-3 py-3 text-4xl font-normal text-black shadow-sm ring-1 ring-inset ring-primary">
                          <FiDownload className="h-12 w-12 text-black  mr-3" aria-hidden="true" /> Download
                        </button>
                        <button onClick={handleShare} type="button" className="flex rounded-lg bg-white w-full text-center justify-center items-center px-3 py-3 text-4xl font-normal text-black shadow-sm ring-1 ring-inset ring-primary">
                          <FaXTwitter className="h-12 w-12 text-black  mr-3" aria-hidden="true" /> Share on X
                        </button>
                        <button onClick={handleBuy} type="button" className="flex rounded-lg bg-white w-full text-center justify-center items-center px-3 py-3 text-4xl font-normal text-black shadow-sm ring-1 ring-inset ring-primary">
                          <FaDollarSign className="h-12 w-12 text-black  mr-3" aria-hidden="true" /> Buy $GRINDR
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
