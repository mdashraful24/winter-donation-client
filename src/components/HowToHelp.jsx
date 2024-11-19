import React from "react";

const HowToHelp = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold text-center mb-8">How to Help</h1>

            <div className="grid gap-6 md:grid-cols-3">
                {/* View Donation Guide */}
                <div className="card bg-base-100 shadow-md border">
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Donate Items</h2>
                        <p className="text-gray-600">
                            You can donate warm clothing like jackets, blankets, sweaters, and more.
                            Make sure they are clean and in usable condition.
                        </p>
                        <label htmlFor="donation-guide-modal" className="btn btn-primary mt-4">
                            View Donation Guide
                        </label>
                    </div>
                </div>

                {/* Share Now */}
                <div className="card bg-base-100 shadow-md border">
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Share Now</h2>
                        <p className="text-gray-600">
                            Spread the word about this initiative on social media and encourage others to help.
                        </p>
                        <label htmlFor="share-modal" className="btn btn-secondary mt-4">
                            Share Now
                        </label>
                    </div>
                </div>

                {/* Volunteer */}
                <div className="card bg-base-100 shadow-md border">
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Volunteer</h2>
                        <p className="text-gray-600">
                            Join our team to distribute donations or assist in collection drives.
                        </p>
                        <label htmlFor="volunteer-modal" className="btn btn-accent mt-4">
                            Volunteer
                        </label>
                    </div>
                </div>
            </div>

            {/* Ready to Start */}
            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold">Ready to Make a Difference?</h2>
                <p className="text-gray-600 mt-2">
                    Get started today by donating, volunteering, or sharing our mission.
                </p>
                <button className="btn btn-success mt-4">Get Started</button>
            </div>

            {/* Modals */}
            {/* Donation Guide Modal */}
            <input type="checkbox" id="donation-guide-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Donation Guide</h3>
                    <p className="text-gray-700">
                        Follow these steps to donate items:
                    </p>
                    <ol className="list-decimal list-inside mt-4 text-gray-600 space-y-2">
                        <li>Gather clean and gently used winter clothing.</li>
                        <li>Sort them into categories (jackets, blankets, etc.).</li>
                        <li>Ensure all items are properly packed and labeled.</li>
                        <li>Drop them off at the nearest collection center or schedule a pickup.</li>
                    </ol>
                    <div className="modal-action">
                        <label htmlFor="donation-guide-modal" className="btn btn-outline btn-error">Close</label>
                    </div>
                </div>
            </div>

            {/* Share Modal */}
            <input type="checkbox" id="share-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Share Now</h3>
                    <p className="text-gray-700">Spread the word about our campaign:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                        <li>Share our campaign on social media platforms.</li>
                        <li>Encourage friends and family to donate or volunteer.</li>
                        <li>Use hashtags like #WinterClothingDrive to amplify the reach.</li>
                    </ul>
                    <div className="modal-action">
                        <label htmlFor="share-modal" className="btn btn-outline btn-error">Close</label>
                    </div>
                </div>
            </div>

            {/* Volunteer Modal */}
            <input type="checkbox" id="volunteer-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Volunteer</h3>
                    <p className="text-gray-700">Join our team to make a difference:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                        <li>Assist in sorting and packing donated items.</li>
                        <li>Help with pickups and drop-offs of donations.</li>
                        <li>Coordinate events or campaigns in your area.</li>
                    </ul>
                    <div className="modal-action">
                        <label htmlFor="volunteer-modal" className="btn btn-outline btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;
