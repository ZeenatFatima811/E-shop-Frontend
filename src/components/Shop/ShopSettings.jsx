import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import {loadSeller} from "../../redux/actions/user"
import axios from "axios";
import { toast } from "react-toastify";

const ShopSettings = () => {
  const { seller } = useSelector((state) => state.seller);
  const [avatar, setAvatar]= useState();
  const dispatch= useDispatch();
  const [name, setName] = useState(seller && seller.name);
  const [description, setDescription] = useState(seller && seller.description);
  const [address, setAddress] = useState(seller && seller.address);
  const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
  const [zipCode, setZipCode] = useState(seller && seller.zipCode);

  const handleImage = async (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(
            `${server}/shop/update-shop-avatar`,
            { avatar: reader.result },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            dispatch(loadSeller());
            toast.success("Avatar updated successfully!");
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updatHandler= async (e) =>{
    e.preventDefault();
    await axios.put(`${server}/shop/update-seller-info`, {
      name,
      address,
      description,
      phoneNumber,
      zipCode
    }, {withCredentials: true}).then((res)=>{
      toast.success("Shop Info updated successfully!");
      dispatch(loadSeller());
    }).catch((error)=>{
      toast.error(error?.response?.data?.message)
    })
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
        <div className="w-full flex items-center justify-center cursor-pointer">
          <div className="relative">
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[200px] h-[200px] rounded-full"
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImage}
              />
              <label htmlFor="image">
                <AiOutlineCamera />
              </label>
            </div>
          </div>
        </div>

        {/* Shop Info */}
        <form aria-required className="flex flex-col items-center" onSubmit={updatHandler}>
          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Name</label>
              <input
                type="name"
                placeholder={seller.name}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
              />
            </div>
          </div>

          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop description</label>
              <input
                type="name"
                placeholder={`${seller?.description ? seller.description :  "Enter your shop description"}`}
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              />
            </div>
          </div>

          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Address</label>
              <input
                type="name"
                placeholder={`${seller?.address}`}
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
              />
            </div>
          </div>

          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Phone Number</label>
              <input
                type="number"
                placeholder={`${seller?.phoneNumber}`}
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
              />
            </div>
          </div>

          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Zip Code</label>
              <input
                type="number"
                placeholder={`${seller?.zipCode}`}
                value={zipCode}
                onChange={(e)=>setZipCode(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
              />
            </div>
          </div>

          <div className="w-[100%] 800px:w-[50%] mt-5 items-center flex flex-col">
            <div className="w-full pl-[3%]">
              <input
                type="submit"
                value="Update Shop"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopSettings;
