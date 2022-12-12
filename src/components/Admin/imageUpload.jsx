import { useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { InputImage } from './InputImage';

export function ImageUpload() {
  const [image, setImage] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  useEffect(() => {}, [image]);

  return (
    <main className="m-4">
      <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
        {(props) => <InputImage {...props} />}
      </ImageUploading>
    </main>
  );
}
