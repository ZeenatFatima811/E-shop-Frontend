import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfHOqVMmGbGpUwHh0bvWXwC4jyn01sfUHkw&s"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
