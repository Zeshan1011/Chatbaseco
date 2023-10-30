import React from 'react';
import ChatbotRequirement from '../componenets/ChatbotRequirement';
import FAQS from '../componenets/FAQS';
import FavoriteTools from '../componenets/FavoriteTools';
import Footer from '../componenets/Footer';
import Hero from '../componenets/Hero';
import JoinFuture from '../componenets/JoinFuture';
import LiveDemo from '../componenets/LiveDemo';
import Navbar from '../componenets/Navbar';
import PeopleReview from '../componenets/PeopleReview';
import QnA from '../componenets/QnA';
import VideoDemoSection from '../componenets/VideoDemoSection';
import Sidebar from '../componenets/Sidebar';


export default function Home() {
  return (
        <div>
    <Navbar />
    <Hero />
    <ChatbotRequirement />
    <VideoDemoSection />
    <LiveDemo />
    <FavoriteTools/>
    <FAQS/>
    <PeopleReview />
    <JoinFuture/>
    <Sidebar />
    <Footer/>
   
  
    </div>
  )
}

