import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgLoadbar } from 'react-icons/cg';
const API = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([
        {
            id: "1",
            question: "What is Chatbase?",
            answer: "Chatbase is an AI chatbot builder, it trains ChatGPT on your data and lets you add a chat widget to your website. Just upload a document or add a link to your website and get a chatbot that can answer any question about their content."
        },
        {
            id: "2",
            question: "What should may data look like?",
            answer: "Currently, you can upload one or multiple files (.pdf, .txt, .doc, .docx), paste text, or add a link to your website to be scraped."
        },
        {
            id: "3",
            question: "Can I give my Chatbot instructions?",
            answer: "Yes, you can edit the base prompt and give your chatbot a name, personality traits and instructions on how to answer questions ex. (only answer in French)."
        },
        {
            id: "4",
            question: "Where is my data sorted?",
            answer: "The content of the document is hosted on secure GCP/AWS servers in us-east."
        },
        {
            id: "5",
            question: "Does it use GPT-3.5 or GPT-4?",
            answer: "By default your chatbot uses gpt-3.5-turbo (but you have the option to use gpt-4 on the Standard and Unlimited plans)."
        },
        {
            id: "6",
            question: "How can I add my chatbot to my website?",
            answer: "You can embed an iframe or add a chat bubble to the bottom right of your website. To do that, create a chatbot and click 'Embed on website'. You can also use the API to communicate with your chatbot anywhere!"
        },
        {
            id: "7",
            question: "Does it support other languages?",
            answer: "Yes, Chatbase supports about 95 languages. You can have your sources in any language and ask it questions in any language."
        },
        {
            id: "8",
            question: "Can I share a chatbot I created?",
            answer: "Yes, by default any chatbot you create is private but you can change the setting to make it public and send it to anyone."
        }
    ]);

    return (
        <div>
          <div>
            {
            data ? 
              <CgLoadbar onClick={() => setData()} />
             : 
              <AiOutlinePlus onClick={() => setData()} />
            }
            {data.map((item) => (
                
              <div key={item.id}>
             
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                {
                    toggle ?
                        < CgLoadbar
                            onClick={() => setToggle(!toggle)} 
                            />
                            
                        :
                        <AiOutlinePlus
                            onClick={() => setToggle(!toggle)}
                            

                        />
   
                }
              </div>
              
            ))}
          </div>
        </div>
      );
}
export default API;