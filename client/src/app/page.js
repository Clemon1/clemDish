import Image from 'next/image'
import Search from '../../components/search-component'

export default function Home() {
  return (
    <main>
       <div className="flex flex-col overflow-hidden justify-center items-center   relative">
        <div className=" w-[100%] lg:w-[100%]   h-[40vh] lg:h-[70vh]   ">
          <Image
            src="/images/heroImage2.jpg"
            alt="team photo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              objectFit: "cover",
            
            }}
            fill
            priority
          />
        </div>
        {/* <div className="bg-whiteRgba w-[50%]  min-h-[15vh] md:min-h-[25vh] flex flex-col justify-center items-center   lg:h-[30vh] absolute bottom-0 left-50 p-2 lg:p-14">
          <p className="flex justify-center mx-[10%]  lg:justify-start md:justify-start font-garmond text-lg lg:text-3xl text-white  lg:m-auto md:m-auto">
            Here is a recap of our journey
          </p>
          <p className="font-Poiret text-xs lg:font-bold  lg:text-lg text-white  md:p-4 lg:p-0  mx-[10%]">
            Embark on a transformative journey as we trace the impactful
            milestones that shape ISEEA's rich history.
          </p>
        </div> */}
        <div className="bg-blackRgba w-full blackRgba h-[40vh] lg:h-[70vh] flex flex-col justify-center items-start  absolute bottom-0 left-50 p-2">
        <div className="lg:w-[50%] w-[90%] h-auto lg:mt-44 lg:mx-10 space-y-3 ">
            <p className="flex justify-start font-garmond text-base  lg:text-5xl  text-white">
              Delivery at your Doorstep & Takeaway Food
            </p>
            <p className="font-Poiret text-xs   lg:text-lg text-white  md:p-4 lg:p-0   ">
            Get the best deals at the same price
            </p>
          </div>
          <div className='mt-3 w-[40%] ml-10 '>
          <Search/>
          </div>
        </div>
      </div>
    </main>
  )
}