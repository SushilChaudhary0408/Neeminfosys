import React from 'react'

function SlidingText() {
    return (
        <div>
            <div className='h-[75px] flex justify-center items-center gap-2'>
                <button className='w-[85px] h-[35px] text-white bg-green-500 rounded-3xl'>
                    <a href="/contact"> Contact</a>
                </button>
                <div className="marquee w-[200px] hidden md:block">
                    <div className="border-t-2 border-green-500 rounded-md mb-1"></div>
                    <h2>Webdevelopment || Digital Marketing || Cloud Service || Graphic Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                    <div className="border-t-2 border-green-500 rounded-md mt-1"></div>
                </div>

                <style jsx>{`
                   .marquee {
                       width: 200px;
                       overflow: hidden;
                       white-space: nowrap;
                   }

                   .marquee h2 {
                       display: inline-block;
                       animation: marquee 15s linear infinite; /* Increased duration to 15 seconds */
                   }

                  @keyframes marquee {
                       0% {
                          transform: translateX(100%);
                       }
                      100% {
                           transform: translateX(-100%);
                        }
                    }
               `}</style>
            </div>

        </div>
    )
}

export default SlidingText
