import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=" hidden w-full lg:flex lg:flex-row items-center justify-between container">
      <div className="flex flex-col gap-2">
        <span>Link mail</span>
        <span>Link phine number</span>
      </div>
      <div className="flex flex-col gap-2">
        <span>Link Whatsapp</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
}

export default Footer