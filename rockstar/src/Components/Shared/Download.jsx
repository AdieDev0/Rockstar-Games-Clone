import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import Footer from "../Footer";

const Download = () => {
  return (
    <div>
      <div className="bg-[#0b0b0b] h-auto w-auto text-white lg:p-20 ">
        <div className="flex flex-col md:flex-row lg:flex-row bg-black gap-10 p-5 lg:p-20 rounded-xl">
          <img
            src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e16885cf869849e5d6301c448021d1d.jpg"
            alt=""
            className="w-96 lg:w-[600px]"
          />
          <div className="font-Moderustic">
            <p className="text-3xl lg:text-4xl font-semibold">
              Red Dead Redemption 2
            </p>
            <br />
            <p className="text-md lg:text-xl">
              America, 1899. The end of the Wild West era has begun as lawmen
              hunt down the last remaining outlaw gangs. Those who will not
              surrender or succumb are killed.
              <br />
              <br />
              After a robbery goes terribly wrong in the western town of
              Blackwater, Arthur Morgan and the Van der Linde gang are forced to
              flee. With federal agents and the best bounty hunters in the
              nation massing on their heels, the gang must rob, steal, and fight
              their way across the rugged heartland of America in order to
              survive. As deepening internal divisions threaten to tear the gang
              apart, Arthur must make a choice between his own ideals and
              loyalty to the gang who raised him.
            </p>
            <button className="mt-10 border px-14 py-4 text-xl font-semibold rounded-lg hover:bg-[#fcaf17] hover:border-[#fcaf17] hover:text-black duration-150 uppercase">
              Download Now
            </button>
          </div>
        </div>
        {/* Feature Download */}
        <div className="font-Moderustic mt-40 px-7">
          <p className="text-2xl lg:text-3xl font-semibold mb-10">
            Feature Downloads
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="cursor-pointer w-fit">
              <img
                src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03efbe97dcd11c41147b4a7e9ea08a51.jpg"
                alt=""
                className="w-[430px] rounded-lg"
              />
              <p className="mt-4 text-md font-semibold lg:text-xl">
                Rockstar Games Launcher
              </p>
            </div>
            <div className="cursor-pointer w-fit">
              <img
                src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62a7245d89778f07e77721c77828d2cb.jpg"
                alt=""
                className="w-[430px] rounded-lg"
              />
              <p className="mt-4 text-md font-semibold lg:text-xl">
                Red Dead Redemption 2 Companion App
              </p>
            </div>
            <div className="cursor-pointer w-fit">
              <img
                src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b7c0ec6d76dbc78c60e7b2237ace331e.jpg"
                alt=""
                className="w-[430px] rounded-lg"
              />
              <p className="mt-4 text-md font-semibold lg:text-xl">
                GTA Online Shark Cards
              </p>
            </div>
          </div>
          <div className="cursor-pointer w-fit mt-10">
            <img
              src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e163a22613e726a39a63c91c99ac956a.jpg"
              alt=""
              className="w-[430px] rounded-lg"
            />
            <p className="mt-4 text-md font-semibold lg:text-xl">
              Red Dead Online Gold Bars
            </p>
          </div>
        </div>
        {/* PC & MACS GAMES */}
        <div className="px-7 mt-40">
          <p className=" lg:text-3xl text-2xl font-bold">PC & Mac Games</p>
          {/* image */}
          <div className="mt-16 flex lg:flex-row flex-col gap-10">
            <div className="flex gap-10">
              <div className="w-fit">
                {/* 1 */}
                <Disclosure>
                  <img
                    src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg?im=Resize=640"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute  backdrop-blur-lg text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                    Rockstar (PC)
                  </DisclosurePanel>
                </Disclosure>
              </div>
              {/* 2 */}
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg?im=Resize=640"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute  backdrop-blur-lg text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                    Rockstar (PC)
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-10">
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg?im=Resize=640"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute backdrop-blur-lg mt-2">
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Rockstar (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Steam (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Amazon (PC)
                    </DisclosurePanel>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              {/* 4*/}
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg?im=Resize=640"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute backdrop-blur-xl mt-2">
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Rockstar (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Steam (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Amazon (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Amazon US (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Amazon UK (PC)
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Steam (MAC)
                    </DisclosurePanel>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
          {/* Mobiles Games And App */}
          <p className=" lg:text-3xl text-2xl mt-40 font-bold">
            PC & Mac Games
          </p>
          <div className="mt-16 flex lg:flex-row flex-col gap-10">
            <div className="flex gap-10">
              <div className="w-fit">
                {/* 1 */}
                <Disclosure>
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/apps/rdr2-companion.png"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                    IOS
                  </DisclosurePanel>
                </Disclosure>
              </div>
              {/* 2 */}
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/apps/bully.png"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute mt-2 backdrop-blur-lg">
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      IOS
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Android
                    </DisclosurePanel>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-10">
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/apps/gtalcs.png"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute mt-2 backdrop-blur-lg">
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      IOS
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Android
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Kindle
                    </DisclosurePanel>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              {/* 4*/}
              <div className="w-fit">
                <Disclosure>
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/apps/sanandreas.png"
                    alt=""
                    className="w-[310px] rounded-lg"
                  />
                  <DisclosureButton className="group flex w-full items-center justify-between mt-5">
                    <p className="text-xl text-white/80 underline underline-offset-[10px]">
                      Select Retailer
                    </p>
                    <FaChevronDown className="size-5 fill-white/90 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="absolute backdrop-blur-lg mt-2">
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      IOS
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Android
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150 rounded-b-lg">
                      Windows Phone
                    </DisclosurePanel>
                    <DisclosurePanel className="text-xl mt-2 py-2 text-white/60 hover:text-black hover:bg-[#fcaf17] duration-150">
                      Kindle
                    </DisclosurePanel>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
          <div className="font-Moderustic mt-40 px-2 lg:px-7">
            <p className="text-2xl lg:text-3xl font-semibold mb-10">
              Miscellaneous
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex gap-5">
                <div className="cursor-pointer w-fit">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/dlc.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">DLC</p>
                </div>
                <div className="cursor-pointer w-fit">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/music.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">Music</p>
                </div>
              </div>
              <div className="flex gap-5 mt-3 lg:mt-0">
                <div className="cursor-pointer w-fit">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/rockstarwallpaper.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">
                    Rockstar Art
                  </p>
                </div>
                <div className="cursor-pointer w-fit">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/avatars.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">
                    Avatars
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex gap-5">
                <div className="cursor-pointer w-fit mt-10">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/gamewallpaper.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">
                    Game Art
                  </p>
                </div>
                <div className="cursor-pointer w-fit mt-10">
                  <img
                    src="https://www.rockstargames.com/img/global/downloads/collections/patches.jpg"
                    alt=""
                    className="w-[300px] rounded-lg"
                  />
                  <p className="mt-4 text-md font-semibold lg:text-xl">
                    Game Art
                  </p>
                </div>
              </div>

              <div className="cursor-pointer w-fit mt-5 lg:mt-10">
                <img
                  src="https://www.rockstargames.com/img/global/downloads/collections/goldbars.jpg"
                  alt=""
                  className="w-40 lg:w-[300px] rounded-lg"
                />
                <p className="mt-4 text-md font-semibold lg:text-xl">
                  Gold Bars
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

export default Download;
