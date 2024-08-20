import starPink from '../../assets/images/star-pink.svg';
import starBlack from '../../assets/images/star.svg';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const GovernSection = () => {
  return (
    <section id='govern-section' className='flex flex-col items-center'>
      <div className='w-full border-t-8 border-pa-pink md:mb-24' />
      <div className=' w-full h-16 md:h-32 my-5 md:my-0 flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={[
            { title: 'Govern' },
            { title: 'Participate' },
            { title: 'Collaborate' },
          ]}
          speed='normal'
          pauseOnHover={false}
          type='banner'
        />
      </div>
      <div className='flex w-full items-center gap-4  md:mt-24'>
        <div className='w-full ml-6 md:ml-12 border-2 border-black' />
        <img src={starBlack} className='w-8' />
        <div className='w-full mr-6 md:mr-12 border-2 border-black' />
      </div>
    </section>
  );
};

export default GovernSection;