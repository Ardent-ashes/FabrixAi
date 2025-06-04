import { useState } from 'react';
function CertificationGallery() {
  const [images, setImages] = useState<string[]>([]);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            uploadedImages.push(e.target.result as string);
            if (uploadedImages.length === files.length) {
              setImages((prevImages) => [...prevImages, ...uploadedImages]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
  return (
    <div className="gradient-background min-h-screen flex flex-col items-center justify-center py-[2%] px-[5%]">
      <div className="flex justify-between w-full max-w-screen-md mb-6">
        <button
          className="back-button py-2 px-4 text-sm hover:opacity-90 transition-opacity"
          onClick={() => console.log("Back")}
        >
          Back
        </button>
        <h1 className="text-3xl font-bold text-[#EAB308]">Certifications</h1>
      </div>
      {/* Image Preview Blocks */}
      <div className="grid grid-cols-4 gap-4 mb-8 w-full max-w-screen-md">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-32 border-[2px] border-dotted border-[#EAB308] flex items-center justify-center rounded-md overflow-hidden"
          >
            <img
              src={img}
              alt={`Certification ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Add New Image Blocks */}
        <label
          htmlFor="file-upload"
          className="w-full h-32 border-[2px] border-dotted border-[#EAB308] flex items-center justify-center text-[#EAB308] rounded-md cursor-pointer hover:bg-[#EAB308]/10 transition"
        >
          +
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <button
        className="submit-button py-2 px-8 text-base w-full max-w-xs"
        onClick={() => console.log("Preview")}
      >
        Preview
      </button>
    </div>
  );
}
export default CertificationGallery;