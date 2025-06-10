import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function PaymentOptions() {
  const [selectedPayment, setSelectedPayment] = useState('bkash');
  const [couponCode, setCouponCode] = useState('');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });
       const navigate = useNavigate();

  const handleBack = () => {
    navigate('/paymentplan'); // Navigate to the previous page (Gallery)
  };

  const handleContinue = () => {
    console.log('Continue with payment:', selectedPayment);
    if (selectedPayment === 'card') {
      console.log('Card details:', cardDetails);
    }
    // Add your payment processing logic here
  };

  const applyCoupon = () => {
    console.log('Apply coupon:', couponCode);
    // Add coupon application logic here
  };

  const handleCardDetailChange = (field: string, value: string) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    // Add spaces every 4 digits
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' - ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digit characters
    const v = value.replace(/\D/g, '');
    // Add slash after 2 digits
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="gradient-background min-h-screen w-screen flex  justify-center py-[2%] px-[5%] xl:px-[10%] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl gap-8 lg:gap-12">
        
        {/* Left Side - Payment Options */}
        <div className="flex flex-col w-full lg:w-[50%] min-w-[300px] max-w-full mx-auto z-20">
           <div  className="flex pb-[5%] ">
           <button
              onClick={handleBack}
              className="back-button w-[15%] py-[1%] px-[1%] transition-all"
            >
              Back
            </button>
            </div>

          {/* Header */}
          <div className="flex items-center  gap-[3%] mb-[5%]">
            
            <h1 className=" items-center justify-center text-center text-3xl md:text-4xl font-bold text-[#EAB308]">Payment Options</h1>
          </div>

          {/* Payment Methods */}
          <div className=" pt-10 t space-y-4 mb-8">
            {/* Card Payment */}
            <div 
              className={`form-input p-6  rounded-xl cursor-pointer transition-all  ${
                selectedPayment === 'card' ? ' shadow-lg shadow-yellow-400/30 border-4' : ' '
              }`}
              onClick={() => setSelectedPayment('card')}
            >
              <div className=" flex items-center justify-between">
                <span className="text-white text-lg font-medium">Card</span>
                <div className="flex gap-2">
                  <div className="w-12 h-6   flex items-center  "><img src='../../../../src/assets/visa.png'></img></div>
                  <div className="w-12 h-6   flex items-center  "><img src='../../../../src/assets/AE.png'></img></div>
                <div className="w-12 h-6   flex items-center  "><img src='../../../../src/assets/MasterCard.png'></img></div>
                <div className="w-12 h-6   flex items-center  "><img src='../../../../src/assets/UPay.png'></img></div>

                 
                </div>
              </div>
            </div>



            {/* Bkash/Nagad */}
            <div 
              className={`form-input p-6 rounded-xl cursor-pointer transition-all  ${
                selectedPayment === 'bkash' ? ' shadow-lg shadow-yellow-400/30 border-4' : ''
              }`}
              onClick={() => setSelectedPayment('bkash')}
            >
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 text-lg font-semibold">Bkash/Nagad</span>
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-6 bg-pink-600 rounded flex items-center justify-center text-white text-xs font-bold">bKash</div>
                  <div className="w-12 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">Nagad</div>
                </div>
              </div>
            </div>

            {/* Google Pay */}
            <div 
              className={`form-input p-6 rounded-xl cursor-pointer transition-all ${
                selectedPayment === 'gpay' ? ' shadow-lg shadow-yellow-400/25 border-4' : ''
              }`}
             
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-lg font-medium">Gpay</span>
                <div className="flex items-center gap-2">
                  
                <div className="w-12 h-6   flex items-center  "><img src='../../../../src/assets/GPay.png'></img></div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex pt-60">
            <button
              type="button"
              onClick={handleContinue}
              className="submit-button py-4 px-8 rounded-xl transition-all w-full max-w-[250px] transform hover:scale-105"
            >
              Continue
            </button>
          </div>
        </div>

        

        {/* Right Side - Dynamic Content */}
        <div className="flex flex-col gap-[1%] w-full sm:w-[40%] md:w-[45%] lg:w-[60%] min-w-[270px] max-w-full mx-auto pt-[10%]  z-20">
          {selectedPayment === 'card' ? (
            /* Card Details Form */
            <div className="form-container p-8 rounded-xl border border-gray-700">
              
              <div className="space-y-6">
                {/* Name on Card */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">Name on card</label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => handleCardDetailChange('name', e.target.value)}
                    placeholder="eg: SANIM AHMED NILOY"
                    className="custom-box-dotted w-full px-4 py-3 text-white  focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2 font-medium">Card number</label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => handleCardDetailChange('number', formatCardNumber(e.target.value))}
                    placeholder="eg: 4520-XXXX-XXXX-3178"
                    maxLength={19}
                    className="custom-box-dotted w-full px-4 py-3 text-white  focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Expiry Date and CVV */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">Expiry date</label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => handleCardDetailChange('expiry', formatExpiryDate(e.target.value))}
                      placeholder="eg: 05/29"
                      maxLength={5}
                      className="custom-box-dotted w-full px-4 py-3 text-white  focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">CVV*</label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => handleCardDetailChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                      placeholder="eg: 385"
                      maxLength={4}
                      className="custom-box-dotted w-full px-4 py-3 text-white  focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Billing Summary */
            <div className=" p-8 ">
              {/* Billing Header */}
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Billing</h2>

              {/* Billing Items */}
              <div className="space-y-4 mb-6">
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
              <hr className="border-gray-600 mb-6" />

              {/* Subtotal */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-white text-lg font-semibold">Subtotal</span>
                <span className="text-white text-lg font-semibold">34.39$</span>
              </div>

              {/* Coupon Section */}
              <div className="mb-6">
                <h3 className="text-yellow-400 text-lg font-semibold mb-4">Coupon</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Have a coupon code? apply here"
                    className="custom-box-dotted "
                  />
                  <button
                    onClick={applyCoupon}
                    className="submit-button  px-2"
                  >
                    Apply
                  </button>
                </div>
                <div className="flex gap-4 mt-3 text-sm">
                  <span className="text-yellow-400 cursor-pointer hover:underline">Learn more</span>
                  <span className="text-yellow-400 cursor-pointer hover:underline">Refer to get a coupon</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;