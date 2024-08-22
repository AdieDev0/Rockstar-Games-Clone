import React from "react";
import Footer from "../Footer";

const Newswire = () => {
  return (
    <div className="bg-[#0b0b0b] h-auto text-white max-w-auto font-Moderustic">
      {/* Upper */}
      <div className="flex flex-col lg:flex-row">
        <img
          src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/255k722k711443/12787aa3bdc6146566332c2e2a295751587c9d87.jpg"
          alt="Photo"
          className="lg:w-[1070px] hidden lg:inline-block"
        />
        <img
          src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/255k722k711443/fdd1749ef2a3f854d073ee2ecaaaa8f52c016e89.jpg"
          alt=""
          className="lg:hidden"
        />
        <div className="lg:mx-12 lg:mt-20 mx-9 mt-10">
          <p className="font-semibold text-xs lg:text-base">
            GTA Online{" "}
            <span className="text-zinc-400 ml-2 ">August 15, 2024</span>
          </p>
          <p className="lg:text-5xl text-2xl font-semibold lg:mt-7 mt-2">
            Los Santos Dance Floors Come Alive with Nightclub Bonuses
          </p>
        </div>
      </div>
      {/* Cards desktop */}
      {/* 1 */}
      <div className="mb-40">
        <div className="lg:px-20 lg:pt-28 lg:mb-7 flex flex-col lg:flex-row gap-7 pt-20 px-10">
          <div className="flex justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/9kk7aoaaaaa727/0eceeac62c671cdc52792e171e4002a5c4fa18e2.jpg"
                alt=""
                className="object-cover"
              />
              <div className="p-7 my-5 ">
                <p className="font-semibold text-xs lg:text-base">
                  GTA Online
                  <span className="text-zinc-400 ml-2">Aug 8, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  Lock Up Bounty Targets to Boost Bottom Dollar’s Bottom Line
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[420px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o337151o33aa79/f5530c00d1a7ee3a4ab61a51b07aa15a4fa42745.jpg"
                alt=""
                className="object-cover rounded-t-xl"
              />
              <div className="p-7 my-3 ">
                <p className="font-semibold text-xs lg:text-base">
                  GTA Online
                  <span className="text-zinc-400 ml-2">Aug 1, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  The New Benefactor Vorschlaghammer Sedan: Free with GTA+
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] bg-black rounded-xl">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o3372758858k97/2f860b6305fd1f2bd188f528575dccaac6693dcd.jpg"
                alt=""
                className="object-cover rounded-t-xl"
              />
              <div className="p-7 my-2 ">
                <p className="font-semibold text-xs lg:text-base">
                  GTA Online
                  <span className="text-zinc-400 ml-2">Aug 1, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  New Benefactor Vorschlaghammer Slides into the Los Santos
                  Drift Racing Scene
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="lg:px-20 pt-2 lg:mb-7 flex flex-col lg:flex-row gap-7 mt-5 px-10">
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/akk253717o8295/8489cb618b476355758437834d03efa1e8688678.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-7 my-5 ">
                <p className="font-semibold text-xs lg:text-base">
                  Red Dead Online
                  <span className="text-zinc-400 ml-2">July 30, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  Explore Parts Unknown to Earn Collector Bonuses Including
                  Triple Rewards on Collectible Set Sales
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/1773a1o975k491/68a5787fdbd59cb6f4b9548dd7ee730bc7a9828e.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-7 my-5 pb-0 lg:pb-24">
                <p className="font-semibold text-xs lg:text-base">
                  Rockstar Games
                  <span className="text-zinc-400 ml-2">July 24, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  CircoLoco Presents Mochakk’s Locomotiva Ibiza 2099 I EP
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/3997o81a1o4k25/6d67a3661b840442f2ac56adaed5faacd0549dae.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-7 my-5 ">
                <p className="font-semibold text-xs lg:text-base">
                  GTA Online
                  <span className="text-zinc-400 ml-2">July 25, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  Dish Out Pies for Cash in New Pizza Deliveries and Join the
                  Pizza Delivery Community Challenge
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="lg:px-20 lg:mb-7 flex flex-col lg:flex-row gap-7 pt-7 px-10">
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
            <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
              <img
                src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/511ko1133811a1/835b7afb70dc05c5f4e72c57cdcccb5fc6db1750.jpg"
                alt=""
                className="object-cover rounded-xl"
              />
              <div className="p-7 my-5">
                <p className="font-semibold text-xs lg:text-base">
                  GTA Online
                  <span className="text-zinc-400 ml-2">June 25, 2024</span>
                </p>
                <p className="lg:text-2xl text-xl mt-2 font-semibold">
                  Get More in GTA Online: Bottom Dollar Bounties With GTA+
                  Membership
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
          <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
            <img
              src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/3993oka7ao372o/71558a01503fc6b1ce1fc2b35779bcda63886547.jpg"
              alt=""
              className="object-cover rounded-xl"
            />
            <div className="p-7 my-1 ">
              <p className="font-semibold text-xs lg:text-base">
                Red Dead Online
                <span className="text-zinc-400 ml-2">July 2, 2024</span>
              </p>
              <p className="lg:text-2xl text-xl mt-2 font-semibold">
                Naturalists Earn Triple Rewards and Bonuses for Sampling
                Wildlife and Taking Part in Naturalist Free Roam Events
              </p>
            </div>
          </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
          <div className="border border-zinc-800 lg:w-[430px] w-[300px] rounded-xl bg-black">
            <img
              src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o33a28177oa43a/4b4213d95ff59ea812c3fdb22572f79d783246a5.jpg"
              alt=""
              className="object-cover rounded-xl"
            />
            <div className="p-7 my-5 ">
              <p className="font-semibold text-xs lg:text-base">
                GTA Online
                <span className="text-zinc-400 ml-2">July 4, 2024</span>
              </p>
              <p className="lg:text-2xl text-xl mt-2 font-semibold">
                Paint the Town Red, White, and Blue With GTA Online Independence
                Day Bonuses
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newswire;
