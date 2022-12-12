import { PreviewImage } from './PreviewImage';

export const Gallery = ({ imageList, onImageUpdate, onImageRemove }) => {
  return (
    <section className="grid grid-cols-auto gap-1.5">
      {imageList.map((image, i) => (
        <article key={i} className="p-2 rounded-md h-40 flex justify-between items-center flex-col bg-teal/[0.1]">
          <PreviewImage image={image} index={i} onImageUpdate={onImageUpdate} onImageRemove={onImageRemove} />
        </article>
      ))}
    </section>
  );
};
