import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function TopBar(){

  return (

      <div id="topbar" className="py-4 px-4 bg-pink-500 flex justify-around">
        <div>
          <ul className="flex gap-4 text-white">
            <li className="hover:text-blue-500"><a href="#"><FaFacebook /></a></li>
            <li className="hover:text-pink-900"><a href="#"><FaInstagram /></a></li>
            <li className="hover:text-blue-600"><a href="#"><FaLinkedin /></a></li>
            <li className="hover:text-black"><a href="#"><FaTiktok /></a></li>
            <li className="hover:text-blue-700"><a href="#"><FaTelegram /></a></li>
          </ul>
        </div>
        <div className=" hidden lg:block">
          <div className=" text-white flex items-center gap-2">
          <FiMapPin /> Calle San Francisco Javier Revellin Del Angulo 51001, Ceuta España

          </div>
        </div>
        <div className="text-white flex items-center gap-2">
          <MdEmail /> contacto@hennapp.es
        </div>

      </div>

  );


}