import { useState } from 'react';

// Placeholder for actual image imports
// import heroImage from "../../assets/hero-bg.jpg";
// import logoImage from "../../assets/logo.png";

function LandingPage() {
  const [title, setTitle] = useState('Global Apparel Partner You Can Trust');
  const [tagline, setTagline] = useState('Delivering Excellence in Garment Manufacturing Since 1985.');
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleBack = () => {
    console.log('Navigate back');
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setLogo(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setBanner(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExternalRedirect = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  if (showPreview) {
    return (
      <div className="gradient-background min-h-screen w-full">
        {/* Header */}
        <header className="flex justify-between items-center px-[5%] py-[2%] text-white">
          <div className="flex items-center gap-[2%]">
            <span className="text-sm">3rd Floor, Road # 08, Gulshan-1, Dhaka, Bangladesh</span>
            <span className="text-sm">📞 09610-953030</span>
          </div>
          <div className="flex gap-[3%]">
            <span className="text-sm cursor-pointer hover:text-[#FFD700]">Help</span>
            <span className="text-sm">/</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center gap-[5%] px-[5%] py-[2%] text-white">
          <span className="cursor-pointer hover:text-[#FFD700] transition-colors">Home</span>
          <span className="cursor-pointer hover:text-[#FFD700] transition-colors">About Us</span>
          <span className="cursor-pointer hover:text-[#FFD700] transition-colors">Services</span>
          <span className="cursor-pointer hover:text-[#FFD700] transition-colors">Products</span>
          <span className="cursor-pointer hover:text-[#FFD700] transition-colors">Clients</span>
        </nav>

        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-[80vh] px-[5%]">
          <div
            className="w-full max-w-[90%] h-[70vh] rounded-[2%] relative overflow-hidden"
            style={{
              backgroundImage: banner ? `url(${banner})` : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-[5%]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-[3%] leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-[5%] max-w-[80%]">
                {tagline}
              </p>
              <button
                onClick={() => handleExternalRedirect('https://example.com/capabilities')}
                className="submit-button py-[3%] px-[6%] text-lg flex items-center gap-[2%] hover:transform hover:scale-105 transition-all"
              >
                Explore Capabilities
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back to Editor */}
        <div className="fixed bottom-[5%] left-[5%]">
          <button
            onClick={handlePreview}
            className="submit-button py-[2%] px-[4%] text-base"
          >
            ← Back to Editor
          </button>
        </div>
      </div>
    );
  }

  return (
<div className="gradient-background min-h-screen w-screen flex items-center justify-center py-[2%] px-[5%] xl:px-[10%] h-full">
 
      <div
        className="flex flex-col lg:flex-row justify-center items-start w-screen h-full gap-[5%] lg:gap-[8%]"
        style={{ minHeight: "85%", width: "100%", maxWidth: "100%" }}
      >
       

        {/* Right Side */}
        <div className="flex flex-col w-full lg:w-[30%] min-w-[300px] max-w-full mx-auto ">
          <div  className="flex pb-[10%] z-10">
           <button
              onClick={handleBack}
              className="back-button w-[15%] py-[1%] px-[1%] transition-all"
            >
              Back
            </button>
            </div>
          {/* Header */}
          <div className="flex items-center justify-center gap-[3%] mb-[5%]">
            
            <h1 className=" items-center justify-center text-center text-3xl md:text-4xl font-bold text-[#EAB308]">Landing page</h1>
          </div>

          {/* Form Container */}
          <div className='pb-[2%]'>
          <div className="form-container lg:h-[90%]">
            <div className="space-y-[1%] p-[1%]">
              {/* Title Input */}
              <div>
                <label htmlFor="title" className="form-label">Title</label>
                <textarea
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input w-full text-base md:text-lg resize-none"
                  placeholder="Enter your title"
                  rows={2}
                  style={{ minHeight: '60px' }}
                />
              </div>

              {/* Tagline Input */}
              <div>
                <label htmlFor="tagline" className="form-label">Tagline</label>
                <textarea
                  id="tagline"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="form-input w-full text-base md:text-lg resize-none"
                  placeholder="Enter your tagline"
                  rows={2}
                  style={{ minHeight: '60px' }}
                />
              </div>
                </div>
                </div>
                </div>

              {/* Action Buttons */}
              <div className="pb-[2%] z-20">
              <div className="flex gap-[4%] pt-[3%]">
                <button
                  type="button"
                  className="submit-button py-[4%] px-[6%] text-base flex-1"
                  onClick={() => handleExternalRedirect('https://example.com/edit-top')}
                >
                  Edit Top button
                </button>
                <button
                  type="button"
                  className="submit-button py-[4%] px-[6%] text-base flex-1"
                  onClick={() => handleExternalRedirect('https://example.com/edit-main')}
                >
                  Edit Main button
                </button>
              </div>
              </div>
              {/* Divider */}


              
              {/* File Upload Sections */}
              <div className="space-y-[4%] pt-[4%]">
                <div className='form-container flex flex-col gap-[10%]'>
                {/* Logo Upload */}
                <div className="pb-[4%]">
                <div className="custom-box-dotted p-[4%] pb-[2%]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="flex flex-col items-center justify-center cursor-pointer h-[40px] text-[#808080] hover:text-white transition-colors"
                  >
                    {logo ? (
                      <img src={logo} alt="Logo Preview" className="max-h-[60px] max-w-full object-contain" />
                    ) : (
                      <>
                      
                        <span className="text-center">Upload LOGO here/ Drag into the box</span>
                      </>
                    )}
                  </label>
                </div>
                </div>

                {/* Banner Upload */}
                <div className="custom-box-dotted p-[4%]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBannerUpload}
                    className="hidden"
                    id="banner-upload"
                  />
                  <label
                    htmlFor="banner-upload"
                    className="flex flex-col items-center justify-center cursor-pointer h-[40px] text-[#808080] hover:text-white transition-colors"
                  >
                    {banner ? (
                      <img src={banner} alt="Banner Preview" className="max-h-[60px] max-w-full object-contain" />
                    ) : (
                      <>
                        
                        <span className="text-center">Upload Banner here/ Drag into the box</span>
                      </>
                    )}
                  </label>
                </div>
                </div>
              </div>

              {/* Preview Button */}
              <div className="flex justify-center pt-[5%] z-20">
                <button
                  type="button"
                  onClick={handlePreview}
                  className="submit-button py-[4%] px-[8%] text-base w-full max-w-[300px]"
                >
                  Preview
                </button>
              </div>
            
        
        </div>


        {/* Left Side - Preview Image */}

         <div className="flex flex-col gap-[1%] w-full sm:w-[60%] md:w-[45%] lg:w-[60%] min-w-[270px] max-w-full mx-auto  z-20">
          <div
            className="w-full h-[400px] md:h-[500px] lg:h-[800px] rounded-[3%] relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: banner ? `url(${banner})` : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-[5%]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-[3%] leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg mb-[5%] max-w-[90%]">
                {tagline}
              </p>
              <button className="submit-button py-[3%] px-[5%] text-base flex items-center gap-[2%]">
                Explore Capabilities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;