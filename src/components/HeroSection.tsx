import heroSectionImage from  '../assets/hero_section_image.png';

const HeroSection = () => {
  return (
    <section className="pt-0 ">
        <div className="container mx-auto">
            <div className='flex flex-col md:flex-row items-center justify-between gap-80'>
               <div className='font-medium'>
                    <h1 className='font-bold text-2xl'>Rest Car</h1>
                    <p className='font-stretch-extra-expanded mt-10'>
                        Gelişmiş arama motoru ve hızlı ilan ekleme modülüyle, aracınızı saniyeler içinde satışa çıkarın veya kriterlerinize <br/> 
                        en uygun arabayı hemen bulun.
                    </p>
               </div>
               <div>
                <img src={heroSectionImage} alt="" />
               </div> 
            </div>
        </div>
    </section>
  )
}

export default HeroSection