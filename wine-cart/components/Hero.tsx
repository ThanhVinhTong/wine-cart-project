'use client';

import { updateSearchParams } from '@/utils';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_WINE_FINDER_API_URL || "http://localhost:8000";
  const classifyProducerUrl = `${baseUrl}/classify-producer`;

  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePrev, setImagePrev] = useState('');

  const fileChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    setSelectedFile(file);
    console.log(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.error('Please select an image before submitting.');
      return;
    }

    const formData = new FormData();

    formData.append('uploadFile', selectedFile as Blob, selectedFile.name);

    try {
      const response = await fetch(classifyProducerUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('returned message: ', data);

      if (!data?.producer) {
        throw new Error('Missing "producer" in API response.');
      }

      const newPathName = updateSearchParams('producer', `${data.producer}`);
      router.push(newPathName);
    } catch (error) {
      console.error('Failed to fetch wine prediction:', error);
    }

    if (selectedFile) {
      setImagePrev(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find & buy your desired wines -- Quick & Easy!</h1>

        <p className="hero__subtitle">Elevate Your Wine Experience with Effortless Selection and Delivery</p>

        <div className="flex">
          <form>
            <fieldset>
              <input onChange={fileChangeHandler} name="uploadFile" type="file" accept="image/*" id="imgInp"></input>
            </fieldset>
            <CustomButton
              title="Explore Similar Wines"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleSubmit}
            />
          </form>
          {imagePrev ? <Image id="prevImg" src={imagePrev} alt="Preview Image" height={250} width={250} /> : <></>}
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero-wine-bottle-image.jpg" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
