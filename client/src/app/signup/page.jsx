"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isSuccess } from "@/Store/ToolkitQuery/authStore";
import { useRegisterMutation } from "@/Store/Api_Slices/authSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const dispatch = useDispatch();
  const [name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const body = {
    name,
    email,
    password,
  };
  console.log(body);
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch(isSuccess(await register(body).unwrap()));
      router.push("/menu");
      console.log("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='bg-secondary py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='w-full px-4'>
          <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]'>
            <div className='mb-10 text-center md:mb-16'>
              <a href='/#' className='mx-auto inline-block max-w-[160px]'>
                <p>
                  <span className='lg:text-4xl text-2xl font-logoFont text-primary'>
                    SpiceSafari
                  </span>{" "}
                  <span className='font-logoFont'>Kitchen</span>
                </p>
              </a>
            </div>
            <form onSubmit={handleRegister}>
              <InputBox
                type='name'
                name='name'
                placeholder='Fullname'
                onChange={(e) => setFullname(e.target.value)}
              />
              <InputBox
                type='email'
                name='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='mb-10'>
                <button
                  className='border-primary w-full font-semibold cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90'
                  type='submit'>
                  Register
                </button>
              </div>
            </form>
            {/* <p className="mb-6 text-base text-[#adadad]">Connect With</p> */}

            <p className='text-base text-[#adadad] font-semibold'>
              Already a member?
              <a
                href='/signin'
                className='text-primary font-semibold hover:underline'>
                Sign In
              </a>
            </p>
            <div>
              <span className='absolute top-1 right-1'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='1.39737'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 1.39737 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 1.39737 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 13.6943 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 13.6943 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 25.9911 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 25.9911 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='38.6026'
                    r='1.39737'
                    transform='rotate(-90 38.288 38.6026)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='1.99122'
                    r='1.39737'
                    transform='rotate(-90 38.288 1.99122)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 1.39737 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 13.6943 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 25.9911 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='26.3057'
                    r='1.39737'
                    transform='rotate(-90 38.288 26.3057)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='1.39737'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 1.39737 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='13.6943'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 13.6943 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='25.9911'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 25.9911 14.0086)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='38.288'
                    cy='14.0086'
                    r='1.39737'
                    transform='rotate(-90 38.288 14.0086)'
                    fill='#3056D3'
                  />
                </svg>
              </span>
              <span className='absolute left-1 bottom-1'>
                <svg
                  width='29'
                  height='40'
                  viewBox='0 0 29 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    cx='2.288'
                    cy='25.9912'
                    r='1.39737'
                    transform='rotate(-90 2.288 25.9912)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='25.9911'
                    r='1.39737'
                    transform='rotate(-90 14.5849 25.9911)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='25.9911'
                    r='1.39737'
                    transform='rotate(-90 26.7216 25.9911)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='13.6944'
                    r='1.39737'
                    transform='rotate(-90 2.288 13.6944)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='13.6943'
                    r='1.39737'
                    transform='rotate(-90 14.5849 13.6943)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='13.6943'
                    r='1.39737'
                    transform='rotate(-90 26.7216 13.6943)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='38.0087'
                    r='1.39737'
                    transform='rotate(-90 2.288 38.0087)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='2.288'
                    cy='1.39739'
                    r='1.39737'
                    transform='rotate(-90 2.288 1.39739)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='38.0089'
                    r='1.39737'
                    transform='rotate(-90 14.5849 38.0089)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='38.0089'
                    r='1.39737'
                    transform='rotate(-90 26.7216 38.0089)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='14.5849'
                    cy='1.39761'
                    r='1.39737'
                    transform='rotate(-90 14.5849 1.39761)'
                    fill='#3056D3'
                  />
                  <circle
                    cx='26.7216'
                    cy='1.39761'
                    r='1.39737'
                    transform='rotate(-90 26.7216 1.39761)'
                    fill='#3056D3'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const InputBox = ({ type, placeholder, name, onChange }) => {
  return (
    <div className='mb-6'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className='border-[#E9EDF4]  w-full rounded-md border bg-[#ddebfa] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#ddebfa] focus-visible:shadow-none'
      />
    </div>
  );
};
