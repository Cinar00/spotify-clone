import React from "react";
import { Icon } from "../../Icons";



function Playlists() {
  return (
    <section>
      <div className="gap-x-2 justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Playlists</h1>
      </div>

      <div className="gap-x-6 gap-y-6 mt-5 flex ">
        <div className="col-start-1  col-end-auto bg-likedSongs group rounded-md">
        <a href="###">
          <div className="flex flex-col h-full gap-y-5 gap-x-5 px-5 pt-16 relative mb-4 max-w-[462px]">
            {/*1*/} 
            <div className="flex flex-1 justify-end ">
              <div className="w-full max-h-32 line-clamp-3">
                <span>
                  <span>
                    <span>Doja Cat</span>
                  </span>
                  <span className="opacity-70 ml-1">
                    <span>Streets</span>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="opacity-70 ml-1"> • </span>
                    <span className="ml-1">Tion Wayne</span>
                  </span>
                  <span className="opacity-70 ml-1">
                    <span>
                      Body (Remix) [feat. ArrDee, E1 (3x3), ZT (3x3), Bugzy
                      Malone, Buni, Fivio Foreign & Darkoo]
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="opacity-70 ml-1"> • </span>
                    <span>Cardi B</span>
                  </span>
                  <span className="opacity-70 ml-1">
                    <span>Up</span>
                  </span>
                </span>
                <span>
                  <span>
                    <span className="opacity-70 ml-1"> • </span>
                    <span>Majestic</span>
                  </span>
                  <span className="opacity-70 ml-1">
                    <span>Rasputin</span>
                  </span>
                </span>
              </div>
            </div>
            {/*2*/} <div className="min-h-[62px]">
                            <a href="##" className="relative z-10 inline-block align-baseline no-underline">
                                <div className="text-3xl font-semibold tracking-tight leading-9">
                                    Liked Songs
                                </div>
                            </a>
                            <div className="mt-1 line-clamp-2 pb-4">
                                <div className="text-base leading-6 lowercase">
                                    70 Liked Songs
                                </div>
                            </div>
            </div>
            {/*3*/} <button
                    className="w-10 h-10 rounded-full hover:scale-[1.07] bg-primary absolute opacity-0 group-hover:opacity-100 group-hover:flex group-focus:flex bottom-5 right-5 items-center justify-center flex">
                    <Icon name={ 'play'} size={16} />
                </button>
                
          </div>
          </a>
        </div>

                     
      </div> 
     
    </section>
    
  );
}

export default Playlists;





          

