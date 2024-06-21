import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from "swiper";
import SectionHeading from './SectionHeading'



export default function MediumPostsSection() {
  const [blogs, setBlogs] = useState<any[]>();

  useEffect(() => {
    let cancel = false;
    if(cancel) return;

    const fetchMediumBlogs = async () => {
      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@PolkAssembly"
      );
      const json = await res.json();

      const updatedBlogs = json.items.map((item: any) => {
        if (!item.thumbnail) {
          const match = item.description.match(/<img[^>]+src="([^">]+)"/);
          if (match) {
            item.thumbnail = match[1];
          }
        }
        return item;
      });

      setBlogs(updatedBlogs);
      return;
    };

    fetchMediumBlogs();
  
    return () => {
      cancel = true;
    }
  }, [])

  const truncate = (str: string, length: number) => {
    str = str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    if (str.length > length) {
      return str.substring(0, length) + '...';
    }
    return str;
  };
  
	return (
		<section className="my-28 mx-4 md:mx-auto">
      <SectionHeading title='Medium Posts' />

      {blogs && <div className="container mt-20">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiperss"
          initialSlide={1}
        >
          {
            blogs.map((blogObj, i) => {
              return (<SwiperSlide key={i} className='my-6'>
                  <a href={blogObj.link} target='_blank' rel="noopener noreferrer" className="block overflow-hidden rounded-2xl">
                    <img className={blogObj.thumbnail ? "object-cover w-full h-48" :"w-full h-48"} src={blogObj.thumbnail || '/public/icons/PAicon.svg'} alt={truncate(blogObj.title, 40)} />

                    <div className="p-4 bg-gray-900">
                      <p className="text-xs text-gray-500 mb-1">@PolkAssembly | {(blogObj.pubDate).split(' ')[0]}</p>

                      <h5 className="text-sm text-white">{truncate(blogObj.title, 40)}</h5>
                    </div>
                  </a>
              </SwiperSlide>)
            })
          }
        </Swiper>
      </div>}
    </section>
	)
}
