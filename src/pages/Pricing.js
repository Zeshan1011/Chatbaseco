import React from 'react'
import { useState } from 'react';
const Pricing = () => {

    // For Monthly billing
    const [price1, setPrice1] = useState("0");
    const [price2, setPrice2] = useState("19");
    const [price3, setPrice3] = useState("149");
    const [price4, setPrice4] = useState("949");


    

    const handlerOnClick = () => {
        setPrice1("0");
        setPrice2((prevPrice) => (prevPrice === 19 ? 49 : 19));
        setPrice3((prevPrice) => (prevPrice === 149 ? 449 : 149));
        setPrice4((prevPrice) => (prevPrice === 949 ? 3349 : 949));
    }
 

    return (



        <div className='my-24  max-w-[1640px] w-full'>
            <div className='mx-8 md:mx-16 lg:mx-36'>
                <h1 className='font-bold text-4xl md:text-6xl my-4 text-center '>Pricing Plans</h1>
                <p className='my-3 text-center'>Get 2 months for free by subscribing yearly!  </p>

                <div className='flex bg-gray-200 justify-between mx-auto rounded-md w-[300px]'>
                    <button className='hover:bg-gray-300 h-10 px-4 border rounded-md m-2 ' onClick={handlerOnClick}>
                        Monthly Billing
                    </button>
                    <button className='hover:bg-gray-300 h-10 px-4 border rounded-md m-2 ' onClick={handlerOnClick}>
                        Yearly Billing
                    </button>

                </div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-4 '>
                    {/* Pricing */}
                    <div className='my-12 bg-gray-200 mx-2'>
                        <div className='m-4 pt-4  px-2' >
                            <h1 className='text-xl font-bold'>Free</h1>
                            <ul className='h-[600px]'>
                                <li className='list-disc my-2'>20 message  credit/month</li>
                                <li className='list-disc my-2'>1 chatbot</li>
                                <li className='list-disc my-2'>4000 characters/chatbot</li>
                                <li className='list-disc my-2'>Limit to 10 links to train on</li>
                                <li className='list-disc my-2'>Embed on unlimited websites</li>
                                <li className='list-disc my-2'>Upload multiple files</li>
                                <li className='list-disc my-2'>View conversation history</li>
                                <li className='list-disc my-2'>Chatbot get deleted after 7 days of inactivity</li>
                            </ul>
                            <div className='bottom-0'>
                                <h1 className='text-2xl font-bold mt-24 '>$ {price1}</h1>
                                <button className='bg-black text-white h-12 border rounded-md w-full my-4 '>Get Started</button>
                            </div>
                        </div>


                    </div>



                    <div className='my-12 bg-gray-200 mx-2'>
                        <div className='m-4 pt-4  px-2' >
                            <h1 className='text-xl font-bold'>Hobby</h1>
                            <ul className='h-[600px] list-disc'>

                                <li className='my-2' >2,000 message credits/month</li>
                                <li className='my-2'>2 chatbots</li>
                                <li className='my-2'>11,000,000 characters/chatbot</li>
                                <li className='my-2'>Unlimited links to train on</li>
                                <li className='my-2'>Embed on unlimited websites</li>
                                <li className='my-2'>Upload multiple files</li>
                                <li className='my-2'>View conversation history</li>
                                <li className='my-2'>Capture leads</li>
                                <li className='my-2'>API access</li>
                                <li className='my-2'>Zapier integration</li>
                                <li className='my-2'>Slack integration</li>
                                <li className='my-2'>Wordpress integration</li>
                                <li>WhatsApp integration</li>
                                <li>Messenger integration (coming soon)</li>


                            </ul>
                            <div className='bottom-0'>
                                <h1 className='text-2xl font-bold mt-24 '>${price2} </h1>
                                <button className='bg-black text-white h-12 border rounded-md w-full my-4 '>Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className='my-12 bg-gray-200 mx-2'>
                        <div className='m-4 pt-4  px-2' >
                            <h1 className='text-xl font-bold'>Standard</h1>
                            <ul className='h-[600px]'>

                                <li class="my-2 list-disc">10,000 message credits/month</li>
                                <li class="my-2 list-disc">5 chatbots</li>
                                <li class="my-2 list-disc">11,000,000 characters/chatbot</li>
                                <li class="my-2 list-disc">Unlimited links to train on</li>
                                <li class="my-2 list-disc">Embed on unlimited websites</li>
                                <li class="my-2 list-disc">Upload multiple files</li>
                                <li class="my-2 list-disc">View conversation history</li>
                                <li class="my-2 list-disc">Capture leads</li>
                                <li class="my-2 list-disc">API access</li>
                                <li class="my-2 list-disc">Zapier integration</li>
                                <li class="my-2 list-disc">Slack integration</li>
                                <li class="my-2 list-disc">Wordpress integration</li>
                                <li class="my-2 list-disc">WhatsApp integration</li>
                                <li class="my-2 list-disc">Messenger integration (coming soon)</li>
                                <li class="my-2 list-disc">Option to Choose GPT-4</li>


                            </ul>
                            <div className='bottom-0'>
                                <h1 className='text-2xl font-bold mt-24 '>${price3}</h1>
                                <button className='bg-black text-white h-12 border rounded-md w-full my-4 '>Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className='my-12 bg-gray-200 mx-2'>
                        <div className='m-4 pt-4  px-2' >
                            <h1 className='text-xl font-bold'>Unlimited</h1>
                            <ul className='h-[600px]'>
                                <li class="my-2 list-disc">40,000 message credits/month included (Messages over the limit will use your OpenAI API Key)</li>
                                <li class="my-2 list-disc">10 chatbots</li>
                                <li class="my-2 list-disc">11,000,000 characters/chatbot</li>
                                <li class="my-2 list-disc">Unlimited links to train on</li>
                                <li class="my-2 list-disc">Embed on unlimited websites</li>
                                <li class="my-2 list-disc">Upload multiple files</li>
                                <li class="my-2 list-disc">View conversation history</li>
                                <li class="my-2 list-disc">Capture leads</li>
                                <li class="my-2 list-disc">API access</li>
                                <li class="my-2 list-disc">Zapier integration</li>
                                <li class="my-2 list-disc">Slack integration</li>
                                <li class="my-2 list-disc">Wordpress integration</li>
                                <li class="my-2 list-disc">WhatsApp integration</li>
                                <li class="my-2 list-disc">Messenger integration (coming soon)</li>
                                <li class="my-2 list-disc">Option to Choose GPT-4</li>
                                <li class="my-2 list-disc">Remove 'Powered by Chatbase'</li>
                                <li class="my-2 list-disc">Use your own custom domains</li>
                            </ul>
                            <div className='bottom-0'>
                                <h1 className='text-2xl font-bold mt-24 '>${price4}</h1>
                                <button className='bg-black text-white h-12 border rounded-md w-full my-4 '>Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Add One's */}

                <div className='bg-white'>
                    <h1 className='text-4xl font-bold my-4'>Add-ons</h1>
                    <div className='lg:grid lg:grid-cols-2 gap-12'>
                        <div className='bg-gray-200 p-4 rounded-md my-8' >
                            <h2 className='text-xl font-bold'>Extra message credits</h2>
                            <p>$7 per 1000 msg credits/month</p>
                            <p>I want <input type="number" number="1000" className='w-[150px] md:w-[270px] mx-4 h-14 rounded-md px-2' />extra message credits every month </p>
                            <p className='my-2 font-bold'>Your Total: $ /month</p>
                            <button className='bg-black text-white h-12 border rounded-md w-full my-4'>Get Add-on</button>
                        </div>

                        <div className='bg-gray-200 p-4 rounded-md my-8'>
                            <h2 className='text-xl font-bold'>Extra message credits</h2>
                            <p>$7 per 1000 msg credits/month</p>
                            <p>I want <input type="number" number="1000" className='w-[150px] md:w-[270px] mx-4 h-14 rounded-md px-2' />extra message credits every month </p>
                            <p className='my-2 font-bold'>Your Total: $ /month</p>
                            <button className='bg-black text-white h-12 border rounded-md w-full my-4'>Get Add-on</button>
                        </div>



                        <div className='bg-gray-200 p-4 rounded-md my-8'>
                            <h2 className='text-xl font-bold'>Extra message credits</h2>
                            <p>$7 per 1000 msg credits/month</p>
                            <p>I want <input type="number" number="1000" className='w-[150px] md:w-[270px] mx-4 h-14 rounded-md px-2' />extra message credits every month </p>
                            <p className='my-2 font-bold'>Your Total: $ /month</p>
                            <button className='bg-black text-white h-12 border rounded-md w-full my-4'>Get Add-on</button>
                        </div>



                        <div className='bg-gray-200 p-4 rounded-md my-8'>
                            <h2 className='text-xl font-bold'>Extra message credits</h2>
                            <p>$7 per 1000 msg credits/month</p>
                            <p>I want <input type="number" number="1000" className='w-[150px] md:w-[270px] mx-4 h-14 rounded-md px-2' />extra message credits every month </p>
                            <p className='my-2 font-bold'>Your Total: $ /month</p>
                            <button className='bg-black text-white h-12 border rounded-md w-full my-4'>Get Add-on</button>
                        </div>

                    </div>



                </div>

                {/* Pricing FAQ'S */}

                <div>
                    <h1 className='font-bold text-4xl py-8'>Pricing FAQ'S</h1>
                    <div className='lg:grid lg:grid-cols-2 gap-4'>
                        <div>
                            <h2 className='my-4 font-bold'>Is there a free plan?</h2>
                            <p className='my-4'>Yes, just by signing up you get 30 message credits and 1 chatbot (400k characters). You can use these to test out chatbase and see if it works for you.</p>

                            <h2 className='my-4 font-bold'>How do message credits work?</h2>
                            <p className='my-4'>One AI response with gpt-3.5-turbo (the default) costs 1 message credit. One AI response with gpt-4 costs 20 message credits. You can change which model your chatbot uses in the chatbot settings. The difference is because gpt-4 costs 15x (prompt tokens) and 30x (completion tokens) what gpt-3.5-turbo costs on OpenAI.</p>

                            <h2 className='my-4 font-bold'>What counts as one chatbot?</h2>
                            <p className='my-4'>One chatbot means a chatbot that contains specific data and can answer any question about this data. Even if it was created using multiple documents.</p>

                            <h2 className='my-4 font-bold'>How many users can use my chatbot?</h2>
                            <p className='my-4'>If your chatbot is private, only you have access to it. If you decide to make it public, anyone with the link will be able to interact with it.</p>

                            <h2 className='my-4 font-bold'>When are my message credits renewed?</h2>
                            <p className='my-4'>Your message credits are renewed at the start of every calendar month regardless of when you subscribed. So if you subscribe on the 15th of March, your credits will be renewed on the 1st of April.</p>

                        </div>

                        <div>
                            <h2 className='my-4 font-bold'>How do I know how many characters are in my document?</h2>
                            <p className='my-4'>Once you attach your document(s) for upload, chatbase will show you the character count of all the attached documents.</p>

                            <h2 className='my-4 font-bold'>Can I upload multiple files to one chatbot?</h2>
                            <p className='my-4'>Yes, if you have a paid plan you can upload multiple files to one chatbot. Just click ctrl (windows) or cmd (mac) and select as many files as you want.</p>

                            <h2 className='my-4 font-bold'>How much data can I give one chatbot?</h2>
                            <p className='my-4 '>Free plan: 400K Characters (~5MB) | Hobby/Standard/Unlimited: 11M Characters (~140MB)</p>

                            <h2 className='my-4 font-bold'>How does the unlimited plan work?</h2>
                            <p className='my-4'>You get 40,000 message credits included in the plan when you subscribe. Every message after that will use your OpenAI API key that you can add in your account page. So you get the cheapest possible price per message after you hit the limit.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Pricing;
