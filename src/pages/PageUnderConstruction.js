import React from "react";
import { MdAutoAwesome, MdConstruction } from "react-icons/md";
const PageUnderConstruction = () => {
  return (
    <div className="max-w-5xl mx-auto h-[70vh] text-[#495e57] font-secondary">
      <div className="flex flex-col justify-center items-center gap-8 pt-20 p-4 text-center">
        <MdConstruction size={100} className="text-[#495e57]" />
        <p className="text-3xl font-medium">
          We are still building this page to better suit your needs
        </p>
        <p className="text-3xl font-medium flex gap-4 items-center">
          Expect to see this soon <MdAutoAwesome />
        </p>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
