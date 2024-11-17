import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="lg:container mx-auto">
            <div className="footer p-10 flex flex-col lg:flex-row lg:justify-between">
                {/* Contact Information */}
                <div>
                    <h2 className="footer-title">Contact Information</h2>
                    <p className="text-sm">
                        Email: contact@yourwebsite.com
                        <br />
                        Phone: +123 456 7890
                        <br />
                        Address: 123 Main Street, Your City
                    </p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="footer-title">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="#" className="btn btn-square btn-outline text-xl">
                            <i className="fab fa-facebook"><FaFacebook /></i>
                        </a>
                        <a href="#" className="btn btn-square btn-outline text-xl">
                            <i className="fab fa-twitter"><FaTwitter /></i>
                        </a>
                        <a href="#" className="btn btn-square btn-outline text-xl">
                            <i className="fab fa-instagram"><FaInstagram /></i>
                        </a>
                        <a href="#" className="btn btn-square btn-outline text-xl">
                            <i className="fab fa-linkedin"><FaLinkedin /></i>
                        </a>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div>
                    <h2 className="footer-title">Legal</h2>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;