import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=" hidden   xl:flex xl:flex-row items-center justify-between py-2">
      <div className="flex flex-col space-y-2">
        <span>Link mail</span>
        <span>Link phine number</span>
      </div>
      <div className="flex flex-col space-y-2">
        <span>Link Whatsapp</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
}

export default Footer