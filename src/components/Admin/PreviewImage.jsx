export const PreviewImage = ({ image, index, onImageUpdate, onImageRemove }) => {
  const classRemove = 'py-1 px-2 text-ebony border border-teal rounded-md cursor-pointer';
  const classUpdate = 'py-1 px-2 text-white bg-teal rounded-md cursor-pointer';

  return (
    <>
      <figure className="h-3/4 flex flex-col items-center">
        <img src={image['data_url']} alt="lorem ipsum" className="object-contain h-3/4" />
        <figcaption className="overflow-hidden break-all text-ebony">{image.file.name}</figcaption>
      </figure>
      <div className="flex gap-1.5">
        <button onClick={() => onImageUpdate(index)} className={classUpdate}>
          Update
        </button>
        <button onClick={() => onImageRemove(index)} className={classRemove}>
          Remove
        </button>
      </div>
    </>
  );
};
