import { DragAndDrop } from './DragAndDrop';
import { Gallery } from './Gallery';

export const InputImage = ({
  imageList,
  onImageUpload,
  onImageUpdate,
  onImageRemove,
  isDragging,
  dragProps,
}) => {
  const classCSS =
    'p-2 text-ebony border border-teal rounded-md cursor-pointer my-4';
  return (
    <>
      <DragAndDrop
        onImageUpload={onImageUpload}
        isDragging={isDragging}
        dragProps={dragProps}
      />

      <Gallery
        imageList={imageList}
        onImageUpdate={onImageUpdate}
        onImageRemove={onImageRemove}
      />
    </>
  );
};
