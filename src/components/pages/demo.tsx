import { useState } from 'react';

function PaymentOptions() {
  const [selectedPayment, setSelectedPayment] = useState('bkash');
  const [couponCode, setCouponCode] = useState('');

  const handleBack = () => {
    console.log('Navigate back to gallery');
  };

  const handleContinue = () => {
    console.log('Continue with payment:', selectedPayment);
    // Add your payment processing logic here
  };

  const applyCoupon = () => {
    console.log('Apply coupon:', couponCode);
    // Add coupon application logic here
  };

  return (
    <div className="gradient-background min-h-screen w-screen flex items-center justify-center py-[2%] px-[5%] xl:px-[10%] h-full">
      <div
        className="flex flex-col lg:flex-row justify-center items-start w-screen h-full gap-[5%] lg:gap-[8%]"
        style={{ minHeight: "85%", width: "100%", maxWidth: "100%" }}
      >
        {/* Left Side - Payment Options */}
        <div className="flex flex-col w-full lg:w-[45%] min-w-[300px] max-w-full mx-auto z-20">
          <div className="flex pb-[5%]">
            <button
              onClick={handleBack}
              className="back-button w-[15%] py-[1%] px-[1%] transition-all"
            >
              Back
            </button>
          </div>

          {/* Header */}
          <div className="flex items-center justify-center gap-[3%] mb-[8%]">
            <h1 className="items-center justify-center text-center text-3xl md:text-4xl font-bold text-[#EAB308]">
              Payment options
            </h1>
          </div>

          {/* Payment Methods */}
          <div className="space-y-[4%] mb-[8%]">
            {/* Card Payment */}
            <div 
              className={`form-container p-[4%] cursor-pointer transition-all border-2 ${
                selectedPayment === 'card' ? 'border-[#EAB308]' : 'border-transparent'
              }`}
              onClick={() => setSelectedPayment('card')}
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-lg">Card</span>
                <div className="flex gap-[2%]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" className="w-8 h-6" />
                  <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">AE</div>
                  <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                  <div className="w-8 h-6 bg-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">UP</div>
                </div>
              </div>
            </div>

            {/* Bkash/Nagad */}
            <div 
              className={`form-container p-[4%] cursor-pointer transition-all border-2 ${
                selectedPayment === 'bkash' ? 'border-[#EAB308]' : 'border-transparent'
              }`}
              onClick={() => setSelectedPayment('bkash')}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#EAB308] text-lg font-semibold">Bkash/Nagad</span>
                <div className="flex gap-[3%] items-center">
                  <div className="w-10 h-6 bg-pink-600 rounded flex items-center justify-center text-white text-xs font-bold">bKash</div>
                  <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">Nagad</div>
                </div>
              </div>
            </div>

            {/* Google Pay */}
            <div 
              className={`form-container p-[4%] cursor-pointer transition-all border-2 ${
                selectedPayment === 'gpay' ? 'border-[#EAB308]' : 'border-transparent'
              }`}
              onClick={() => setSelectedPayment('gpay')}
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-lg">Gpay</span>
                <div className="flex items-center gap-[2%]">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <span className="text-white font-semibold">Pay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center pt-[5%] z-20">
            <button
              type="button"
              onClick={handleContinue}
              className="submit-button py-[4%] px-[8%] text-base w-full max-w-[300px]"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex flex-col pt-[10%]">
          <div className="vprogress-container">
            <div className="vprogress-track">
              <div className="vprogress-bar" style={{ height: '80%' }}></div>
            </div>
          </div>
          <div className="vprogress-indicator"></div>
        </div>

        {/* Right Side - Billing Summary */}
        <div className="flex flex-col w-full lg:w-[40%] min-w-[300px] max-w-full mx-auto z-20">
          <div className="form-container p-[6%] h-fit">
            {/* Billing Header */}
            <h2 className="text-2xl font-bold text-[#EAB308] mb-[6%]">Billing</h2>

            {/* Billing Items */}
            <div className="space-y-[4%] mb-[6%]">
              <div className="flex justify-between items-center">
                <span className="text-white">Personalized plan</span>
                <span className="text-white font-semibold">15$</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Hosting cost</span>
                <span className="text-white font-semibold">9.9$</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Maintenance fee</span>
                <span className="text-white font-semibold">5$</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Vat (15%)</span>
                <span className="text-white font-semibold">4.49$</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Discount</span>
                <span className="text-gray-400">0.00$</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-600 mb-[6%]" />

            {/* Subtotal */}
            <div className="flex justify-between items-center mb-[8%]">
              <span className="text-white text-lg font-semibold">Subtotal</span>
              <span className="text-white text-lg font-semibold">34.39$</span>
            </div>

            {/* Coupon Section */}
            <div className="mb-[6%]">
              <h3 className="text-[#EAB308] text-lg font-semibold mb-[4%]">Coupon</h3>
              <div className="flex gap-[3%]">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Have a coupon code? apply here"
                  className="form-input flex-1 text-sm"
                  style={{ padding: '12px' }}
                />
                <button
                  onClick={applyCoupon}
                  className="submit-button px-[6%] text-sm"
                >
                  Apply
                </button>
              </div>
              <div className="flex gap-[2%] mt-[3%] text-sm">
                <span className="text-[#EAB308] cursor-pointer hover:underline">Learn more</span>
                <span className="text-[#EAB308] cursor-pointer hover:underline">Refer to get a coupon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;