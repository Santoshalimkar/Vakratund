import React from 'react'

const ContactMap = () => {

    const locationname = "kakatiya hills, pragati nagar,Kukatpally-500090";
  const location = `https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`;

  return (
     <div className="flex-col gap-4 justify-center items-center lg:w-2/4  lg:flex w-1/2 h-full">
    <iframe
      src={location}
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
  )
}

export default ContactMap