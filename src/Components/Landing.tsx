const Landing = () => {
    return (
        <div className='h-screen flex flex-col relative w-[100%]'>
            <div className='flex flex-col justify-center items-center absolute inset-0 '>
                <div className='w-[100%] gap-3 md:gap-2 lg:gap-4 px-4 md:-mt-40 text-[40px] md:text-[100px] lg:text-[140px] xl:text-[160px] flex flex-col justify-center '>
                    <div className='text-start'>
                        BHAUTIK
                    </div>
                    <div className='text-end'>
                        VEKARIYA
                    </div>
                </div>
            </div>

            <div className='w-[90%] flex justify-center items-center mx-auto absolute bottom-0 md:gap-2 lg:gap-4 pb-4 md:pb-10 lg:pb-15 text-base'>
                <div className='md:w-[50%] lg:w-[40%] text-[#686868]'>
                    Data Scientist and Machine Learning Engineer specializing in end-to-end ML pipelines, deep learning models, and MLOps systems.
                </div>
            </div>
        </div>

    )
}

export default Landing
