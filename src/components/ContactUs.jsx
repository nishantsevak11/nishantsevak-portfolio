// ContactUs.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
                <p className="text-gray-400 text-center mb-12">Feel free to reach out for collaborations or just a friendly hello</p>
                
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Input */}
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full bg-transparent border-b-2 border-gray-600 px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors peer"
                                placeholder=" "
                                {...register('name', { required: true })}
                            />
                            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-teal-400 -top-6">
                                Name
                            </label>
                            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full bg-transparent border-b-2 border-gray-600 px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors peer"
                                placeholder=" "
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                            />
                            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-teal-400 -top-6">
                                Email
                            </label>
                            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                        <textarea
                            className="w-full bg-transparent border-2 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors min-h-[150px] peer"
                            placeholder=" "
                            {...register('message', { required: true })}
                        ></textarea>
                        <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-teal-400 -top-6">
                            Message
                        </label>
                        {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Contact Information */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
                        <div className="text-teal-400 text-2xl mb-3">📍</div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-gray-400">Udaipur, Rajasthan, india</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
                        <div className="text-teal-400 text-2xl mb-3">📧</div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-400">nishantsevak11@gmail.com</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
                        <div className="text-teal-400 text-2xl mb-3">📱</div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-400">+91 7016526xxx</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
