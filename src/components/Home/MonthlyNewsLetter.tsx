import React, {useEffect, useState} from 'react';
import NewsLetter from '../../assets/images/bg-monthly-newsletter.png';

export default function MonthlyNewsLetter() {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const url =
                    'https://substackapi.com/api/feeds/polkassembly.substack.com?limit=1&sort=new';
                const [response] = await (await fetch(url)).json();
                setTitle(response.title);
                setText(response.truncated_body_text);
            } catch (error) {
                console.error('Error fetching RSS feed:', error);
            }
        };
        fetchFeed();
    }, []);

    return text && title ? (
        <section className='my-28 my-28 mx-4 md:mx-20'>
            <div className='container mt-20 flex drop-shadow-md rounded-[40px] overflow-hidden flex-col md:flex-row max-w-[382px] md:max-w-[1440px] md:max-h-[342px] bg-white'>
                <img src={NewsLetter} className='rounded-[40px]' />
                <div className='flex flex-col justify-between p-[24px] md:p-[36px] gap-[24px] md:gap-[18px]'>
                    <div>
                        <h1 className='line-ellipsis-2 text-[#334D6E] text-lg lg:text-[22px] font-medium mb-[8px] md:mb-[18px]'>
                            {title}
                        </h1>
                        <p className='line-ellipsis-5 text-[#334D6EE5] text-md lg:text-lg font-normal'>
                            {text}
                        </p>
                    </div>
                    <div className='md:mt-[12px] self-end'>
                        <a
                            href='https://polkassembly.substack.com/'
                            target='_blank'
                            className='bg-pa-pink text-white relative items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium border-pa-pink rounded-md shadow-md'
                        >
                            Read All Editions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    ) : null;
}