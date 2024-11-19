import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <div className="lg:container mx-auto">
                <div className="footer p-10 flex flex-col lg:flex-row lg:justify-between">
                    {/* Contact Information */}
                    <div>
                        <h2 className="footer-title">Contact Information</h2>
                        {/* <p className="text-sm">
                        Email: contact@winterdonation.com
                        <br />
                        Phone: +123 456 7890
                        <br />
                        Address: 123 Main Street, Your City
                    </p> */}
                        <p>Email: <a className="link link-hover">contact@winterdonation.com</a></p>
                        <p>Phone: <a className="link link-hover">+123 456 7890</a></p>
                        <p>Address: 123 Main Street, Your City</p>
                    </div>

                    {/* Social Media Links */}
                    {/* <div>
                        <h2 className="footer-title">Follow Us</h2>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/"
                                className="btn btn-square btn-outline text-xl text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                                target="_blank">
                                <i className="fab fa-facebook"><FaFacebook /></i>
                            </a>
                            <a href="https://x.com/?lang=en"
                                className="btn btn-square btn-outline text-xl"
                                target="_blank">
                                <i className="fab fa-twitter"><FaTwitter /></i>
                            </a>
                            <a href="https://www.instagram.com/"
                                className="btn btn-square btn-outline text-xl"
                                target="_blank">
                                <i className="fab fa-instagram"><FaInstagram /></i>
                            </a>
                            <a href="https://www.linkedin.com/"
                                className="btn btn-square btn-outline text-xl"
                                target="_blank">
                                <i className="fab fa-linkedin"><FaLinkedin /></i>
                            </a>
                        </div>
                    </div> */}

                    <div>
                        <h2 className="footer-title">Follow Us</h2>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/"
                                className="btn btn-square btn-outline text-xl text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://x.com/?lang=en"
                                className="btn btn-square btn-outline text-xl text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="btn btn-square btn-outline text-xl text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                className="btn btn-square btn-outline text-xl text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>


                    {/* Copyright Notice */}
                    <div>
                        <h2 className="footer-title">Legal</h2>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Winter Donation. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;