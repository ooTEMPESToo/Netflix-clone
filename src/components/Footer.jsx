import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full font-bold text-3xl text-[#c02a2a]">Netflix</h1>
        <p>Questions? Call 000-800-919-1694</p>
        <div className="flex md:w-[75%] mt-4 justify-between">
          <FaFacebookSquare size={30} />
          <FaGithub size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Investor Relations</li>
            <li className="py-2 text-sm">Privacy</li>
            <li className="py-2 text-sm">Speed Test</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Help Centre</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Cookie Preferences</li>
            <li className="py-2 text-sm">Legal Notices</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gary-400 ">Company</h6>
          <ul>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gary-400 ">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
