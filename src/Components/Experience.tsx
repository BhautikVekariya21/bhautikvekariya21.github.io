import experience from '../data/experience'

const Experience = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center' id ='experience'>
        <div className='text-4xl md:text-6xl mb-4 text-white'>EXPERIENCE</div>
        <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
        {experience.map((exp , id) => (
          <div className='mb-16' key={id}>
            <div className='text-2xl md:text-4xl text-white font-semibold'>
              {exp.society}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-15 mt-5 text-sm md:text-base'>
              <div className='text-start flex items-start justify-start text-[#bdbdbd]'>{exp.startYear} –––– {exp.endYear}</div>
              <div className='order-2 md:order-1 flex justify-between py-5 md:p-0'>
                <div className='text-[#686868]'>Position</div>
                <div className="text-white font-medium">{exp.position}</div>
              </div>
              <div className='order-1 md:order-2 text-start py-6 md:py-5 lg:py-0 text-[#bdbdbd] leading-relaxed'>{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Experience
