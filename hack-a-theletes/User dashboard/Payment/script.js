document.getElementById("payButton").addEventListener("click", function() {
    const amount = 100;
  
    // Razorpay checkout options
    const options = {
      key: 'rzp_live_CoGDjhNbvrSG9P',
      amount: amount * 100, // Amount is in paise (Indian currency), multiply by 100 to convert to paisa
      currency: 'INR',
      name: 'SSGMCE Hospital',
      description: 'Payment for services',
      image: 'https://static.vecteezy.com/system/resources/previews/000/595/739/original/hospital-logo-and-symbols-template-icons-vector.jpg', // Add your logo image URL
      prefill: {
        name: 'Gaurav Chaudhari',
        email: 'chaudharigaurav177@gmail.com',
        contact: '9665305197'
      },
      handler: function(response) {
        alert('Payment successful!');
        console.log(response);
      }
    };
  
    const rzp = new Razorpay(options);
    rzp.open();
  });
  