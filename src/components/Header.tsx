import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className='h-[70px] z-20 fixed bg-white w-full text-black flex items-center justify-end pl-6 pr-6'>
        <div className='flex hover:cursor-pointer items-center justify-center '>
          <Image
          className='h-[70px] w-[70px]'
          src="/DP.jpg"
          alt=''
          height={500}
          width={500}
          />
        </div>
        <div className='h-full flex w-11/12  flex-row'>
          <nav className=' font-medium flex items-center flex-row w-full h-full text-md justify-between'>
           <div className='h-full justify-center items-center flex  '>
            <div className='w-[120px] flex justify-center hover:cursor-pointer h-full items-center'>Home</div>
            <div className=' w-[150px] h-full items-center flex justify-center group hover:cursor-pointer '>
              Service
              <div className='mt-1 h-[20px] w-[20px]'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>

              <div className=" absolute hidden h-auto left-0 w-full group-hover:block top-[70px] hover:cursor-default  bg-white  p-4 ">
                <div className='w-full h-full flex'>
                  {/* services */}
                  <div className='w-[350px]  h-full'>
                    <div className='text-[12px] text-[#01e101] ml-10'>Services</div>
                    <div className='ml-10 flex flex-col gap-5'>
                    <div className='ml- flex gap-4 m-3'>
                      <div className='h-auto w-[60px] flex items-center justify-center' ><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5 9.00011L10 12.0001H14L12.5 15.0001M20 12.0001C20 16.4612 14.54 19.6939 12.6414 20.6831C12.4361 20.7901 12.3334 20.8436 12.191 20.8713C12.08 20.8929 11.92 20.8929 11.809 20.8713C11.6666 20.8436 11.5639 20.7901 11.3586 20.6831C9.45996 19.6939 4 16.4612 4 12.0001V8.21772C4 7.4182 4 7.01845 4.13076 6.67482C4.24627 6.37126 4.43398 6.10039 4.67766 5.88564C4.9535 5.64255 5.3278 5.50219 6.0764 5.22146L11.4382 3.21079C11.6461 3.13283 11.75 3.09385 11.857 3.07839C11.9518 3.06469 12.0482 3.06469 12.143 3.07839C12.25 3.09385 12.3539 3.13283 12.5618 3.21079L17.9236 5.22146C18.6722 5.50219 19.0465 5.64255 19.3223 5.88564C19.566 6.10039 19.7537 6.37126 19.8692 6.67482C20 7.01845 20 7.4182 20 8.21772V12.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
                    <div className='flex flex-col '>
                     <div>Private Audits</div>
                     <div className='font-extralight'>Industry-leading smart contract security services</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4 m-3'>
                   
                    <div className='h-auto w-[50px] flex items-center justify-center' ><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>

                    <div className='flex flex-col'>
                     <div>Open Audits</div>
                     
                     <div className='font-extralight'>Coming Soon...</div>
                    </div>
                    </div>
                    
                    <div className='ml- flex gap-4 m-3'>
                      <div className='h-auto w-[90px] flex items-center justify-center'><svg fill="#000000" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"></path></g></svg></div>
                    <div className='flex flex-col '>
                     <div>Education</div>
                     <div className='font-extralight'>Learn how to build Web3 contracts and audit smart contracts</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4 m-3'>
                      <div className='h-auto w-[50px] flex items-center justify-center'><svg fill="#000000" viewBox="0 0 24 24" id="research-left" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle id="secondary" cx="16" cy="10" r="3" style={{ fill: '#2cba48', strokeWidth: 2 }}></circle><path id="primary" d="M7,17V12m4,5V15M21,15l-2.83-2.83M13,10a3,3,0,1,0,3-3A3,3,0,0,0,13,10Z" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path><path id="primary-2" data-name="primary" d="M17,17v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></g></svg>
                      </div>
                    <div className='flex flex-col '>
                     <div>Research Platform</div>
                     <div className='font-extralight'>the ultimate security research tool</div>
                    </div>
                    </div>

                    


                    </div>
                  </div>
                  {/* supported chains */}
                  <div className='w-[350px]  h-full'>
                    <div className='text-[12px] text-[#01e101] ml-10'>Supported Chain</div>
                    <div className='w-full flex-col'>
                   <div className='flex items-center flex-row justify-center gap-4 h-[60px]'>
                      <div className='h-[30px] w-[30px]'><Image
                      src="/chains/ethereum-cryptocurrency-icon-2048x2029-a37wbe09.png"
                      alt=''
                      height={100}
                      width={100}
                      /></div>
                      <div className='w-[140px]'>Ethereum</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                      <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/73895099.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>zkSync</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/arbitrum-arb-logo.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Arbitrum</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/optimism-ethereum-op-logo.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Optimism</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Polygon</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/base-logo-in-blue.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Base</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/Binance_Logo.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Binance</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/Avalanche_logo_without_text.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Avalanche</div>
                   </div>
                   <div className='flex items-center flex-row justify-center h-[60px] gap-4'>
                   <div className='h-[30px] w-[30px]'>
                      <Image
                      src="/chains/Solana_logo.png"
                      alt=''
                      height={100}
                      width={100}
                      />
                      </div>
                      <div className='w-[140px]'>Solana</div>
                   </div>
                   </div>
                   

                    
                  </div>
                  
                  {/* last */}
                  <div className='flex bg-[#f0efed] flex-1 h-auto '>

                  </div>

                </div> 
              </div>
            </div>
            
            <div className='w-[150px] h-full items-center flex justify-center group hover:cursor-pointer'>Resources
            <div className='mt-1 h-[20px] w-[20px]'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>

            <div className=" absolute hidden bg-white h-auto left-0 w-full group-hover:block hover:cursor-default top-[70px] text-md  p-4 ">
                <div className='w-full h-full flex'>
                  {/* services */}
                  <div className='w-[360px]  h-full'>
                    <div className='text-[14px] text-[#01e101] ml-10'>Resources</div>
                    <div className='ml-10 flex flex-col gap-5'>
                    <div className='ml- flex gap-4  p-3 rounded-md hover:bg-[#f0efed]'>
                      <div  className='h-auto w-[40px] flex items-center justify-center'><svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M199.77344,125.2334,149.3457,106.6543,130.7666,56.22656a19.9996,19.9996,0,0,0-37.5332,0L74.6543,106.6543,24.22656,125.2334a19.9996,19.9996,0,0,0,0,37.5332L74.6543,181.3457l18.5791,50.42774a19.9996,19.9996,0,0,0,37.5332,0l18.5791-50.42774,50.42774-18.5791a19.9996,19.9996,0,0,0,0-37.5332Zm-60.45606,34.22949a19.97179,19.97179,0,0,0-11.85449,11.85449l.001-.001L112,213.28906,96.53711,171.31738a19.96863,19.96863,0,0,0-11.85352-11.85351L42.71094,144l41.97168-15.46289a19.96863,19.96863,0,0,0,11.85351-11.85352L112,74.71094l15.46289,41.97168a19.96863,19.96863,0,0,0,11.85352,11.85351L181.28906,144ZM140,40a12.0006,12.0006,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12.0006,12.0006,0,0,1,140,40ZM252,88a12.0006,12.0006,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12.0006,12.0006,0,0,1,252,88Z"></path> </g></svg></div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>Case Studies</div>
                     <div className='text-sm font-extralight'>Learn how our customers are making big changes</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4  p-3 rounded-md hover:bg-[#f0efed]'>
                      <div className='h-auto w-[40px] flex items-center justify-center'><svg fill="#01e101" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="XMLID_1960_" d="M76,2H16c-2.2,0-4,1.8-4,4v80c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V6C80,3.8,78.2,2,76,2z M72,82H20V10h52V82z M28.5,65c0-2.2,1.8-4,4-4h27c2.2,0,4,1.8,4,4s-1.8,4-4,4h-27C30.3,69,28.5,67.2,28.5,65z M29.1,46c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,50,29.1,48.2,29.1,46z M29.1,27c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,31,29.1,29.2,29.1,27z"></path></g></svg>
                      </div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>Blog</div>
                     <div className=' text-sm font-extralight'>The latest industry news and updates</div>
                    </div>
                    </div>
                    
                    <div className='ml- flex gap-4 p-3 rounded-md hover:bg-[#f0efed]'>
                      <div className='h-auto w-[40px] flex items-center justify-center'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C4.34314 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H19C20.6569 23 22 21.6569 22 20V10C22 9.73478 21.8946 9.48043 21.7071 9.29289L13.7071 1.29292C13.6114 1.19722 13.4983 1.1229 13.3753 1.07308C13.2572 1.02527 13.1299 1 13 1H6ZM12 3H6C5.44771 3 5 3.44771 5 4V20C5 20.5523 5.44772 21 6 21H19C19.5523 21 20 20.5523 20 20V11H13C12.4477 11 12 10.5523 12 10V3ZM18.5858 9.00003L14 4.41424V9.00003H18.5858Z" fill="#000000"></path> </g></svg></div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>Documentation</div>
                     <div className=' text-sm font-extralight'>Learn about our tools and technology</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4 p-3 rounded-md hover:bg-[#f0efed]'>
                      <div className='h-auto w-[40px] flex items-center justify-center'><svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>{".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}"}</style></defs><path className="cls-1" d="M22.5,13.91v6.68a1.92,1.92,0,0,1-1.91,1.91,1.93,1.93,0,0,1-1.91-1.91V13.91Z"></path><path className="cls-1" d="M20.59,22.5H3.41A1.92,1.92,0,0,1,1.5,20.59V1.5H18.68V20.59a1.93,1.93,0,0,0,1.91,1.91Z"></path><rect className="cls-1" x="5.32" y="5.32" width="9.55" height="4.77"></rect><line className="cls-1" x1="4.36" y1="13.91" x2="8.18" y2="13.91"></line><line className="cls-1" x1="4.36" y1="17.73" x2="8.18" y2="17.73"></line><rect className="cls-1" x="11.05" y="13.91" width="3.82" height="3.82"></rect></g></svg>
                      </div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>Newsletter</div>
                     <div className='text-sm font-extralight'>stay up to date with the latest news</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4  p-3 rounded-md hover:bg-[#f0efed]'>
                      <div className='h-auto w-[40px] flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 36 36"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="6.48" y="18" width="5.76" height="11.52" rx="1" ry="1"></rect><rect x="15.12" y="6.48" width="5.76" height="23.04" rx="1" ry="1"></rect><rect x="23.76" y="14.16" width="5.76" height="15.36" rx="1" ry="1"></rect></g></svg></div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>Public Reports</div>
                     <div className='text-sm font-extralight'>Check out our public security reports</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4  p-1 rounded-md hover:bg-[#f0efed]'>
                      <div className='h-auto w-[40px]  flex items-center justify-center'><svg fill="#000000" height="80px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.643 502.643" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"></path><path d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"></path><path d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"></path><path d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"></path><path d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711S41.373,269.559,71.011,269.559L71.011,269.559z"></path><path d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g></svg>
                      </div>
                    <div className='flex flex-col '>
                     <div className='text-sm'>About Us</div>
                     <div className='text-sm font-extralight'>Learn about our teams and missions</div>
                    </div>
                    </div>


                    </div>
                  </div>
                  {/* supported chains */}
                  <div className='w-[350px]  h-full'>
                    <div className='text-[14px] text-[#01e101] ml-10' >Socials</div>
                    <div className='w-full flex-col'>
                    <Link href='https://x.com/GuildAudits' className='flex  flex-row justify-center items-center h-[60px] w-full'>
                   
                   <div className='flex  flex-row justify-center items-center h-[60px] w-2/4 gap-2 hover:bg-[#f0efed] p-4'>
                      <div className='h-auto w-[30px] flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="auto" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.226 18L9.19002 12.2473L4.13753 18H2L8.24169 10.8953L2 2H7.48796L11.2918 7.42183L16.0578 2H18.1953L12.2433 8.77562L18.7139 18H13.226ZM15.6063 16.3782H14.1673L5.06062 3.62182H6.49988L10.1472 8.72957L10.7779 9.6159L15.6063 16.3782Z" fill="#242E36"></path></svg></div>
                      <div className='flex items-center  justify-start w-[130px]'>Twitter</div>
                   </div>
                      </Link>
                   <Link href=' https://discord.gg/XCyM85QK6K' className='flex  flex-row justify-center items-center h-[60px] w-full '> 
                   <div className='flex  flex-row justify-center h-[60px] w-2/4 gap-2 hover:bg-[#f0efed] p-4'>
                       <div className='h-auto w-[40px] flex items-center justify-center'><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill="white"></path> <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z" fill="#5865F2"></path> </g></svg></div>
                      <div className='flex items-center justify-start w-[130px]'>Discord</div>
                   </div>
                   </Link>
                   <Link href=' https://www.youtube.com/@GuildAudits ' className='flex  flex-row justify-center items-center h-[60px] w-full'> 
                   <div className='flex  flex-row justify-center h-[60px] w-2/4 gap-3 hover:bg-[#f0efed] p-4'>
                   <div className='h-auto w-[25px] flex items-center justify-center'><svg height="200px" width="200px" viewBox="0 0 461.001 461.001" fill="#000000">
      <g stroke-width="0"></g>
      <g stroke-linecap="round" stroke-linejoin="round"></g>
      <g>
        <path style={{ fill: "#F61C0D" }} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path>
      </g>
    </svg>

                   </div>
                   <div className='flex items-center justify-start w-[130px]'>YouTube</div>
                   </div>
                   </Link>
                   <Link href='  https://github.com/GuildAudits' className='flex  flex-row justify-center items-center h-[60px] w-full'> 
                   <div className='flex  flex-row justify-center h-[60px] w-2/4 gap-3 hover:bg-[#f0efed] p-4'>
                   <div className='h-auto w-[25px] flex items-center justify-center'><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>github [#142]</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399C99.523,7399,104,7403.59,104,7409.253C104,7413.782,101.138,7417.624,97.167,7418.981C96.66,7419.082,96.48,7418.762,96.48,7418.489C96.48,7418.151,96.492,7417.047,96.492,7415.675C96.492,7414.719,96.172,7414.095,95.813,7413.777C98.04,7413.523,100.38,7412.656,100.38,7408.718C100.38,7407.598,99.992,7406.684,99.35,7405.966C99.454,7405.707,99.797,7404.664,99.252,7403.252C99.252,7403.252,98.414,7402.977,96.505,7404.303C95.706,7404.076,94.85,7403.962,94,7403.958C93.15,7403.962,92.295,7404.076,91.497,7404.303C89.586,7402.977,88.746,7403.252,88.746,7403.252C88.203,7404.664,88.546,7405.707,88.649,7405.966C88.01,7406.684,87.619,7407.598,87.619,7408.718C87.619,7412.646,89.954,7413.526,92.175,7413.785C91.889,7414.041,91.63,7414.493,91.54,7415.156C90.97,7415.418,89.522,7415.871,88.63,7414.304C88.63,7414.304,88.101,7413.319,87.097,7413.247C87.097,7413.247,86.122,7413.234,87.029,7413.87C87.029,7413.87,87.684,7414.185,88.139,7415.37C88.139,7415.37,88.726,7417.2,91.508,7416.58C91.513,7417.437,91.522,7418.245,91.522,7418.489C91.522,7418.76,91.338,7419.077,90.839,7418.982C86.865,7417.627,84,7413.783,84,7409.253C84,7403.59,88.478,7399,94,7399" id="github-[#142]"></path></g></g></g></g></svg>
                   </div>
                   <div className='flex items-center justify-start w-[130px]'>Github</div>
                   </div>
                   </Link>
                   <Link href=' https://discord.gg/XCyM85QK6K' className='flex  flex-row justify-center items-center h-[60px] w-full'> 
                   <div className='flex  flex-row justify-center h-[60px] w-2/4 gap-3 hover:bg-[#f0efed] p-4'>
                       <div className='h-auto w-[25px] flex items-center justify-center'><svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145zM41.4,508.1H-8.5V348.4h49.9V508.1zM15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4zM241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"></path></g></svg>
                       </div>
                      <div className='flex items-center justify-start w-[130px]'>LinkedIN</div>
                   </div>
                      </Link>
                      <Link href=' https://t.me/sc_audit ' className='flex  flex-row justify-center items-center h-[60px] w-full'> 
                   <div className='flex  flex-row justify-center h-[60px] w-2/4 gap-3 hover:bg-[#f0efed] p-4'>
                       <div className='h-auto w-[25px] flex items-center justify-center'><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle> <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#37BBFE"></stop> <stop offset="1" stop-color="#007DBB"></stop> </linearGradient> </defs> </g></svg>
                       </div>
                      <div className='flex items-center justify-start w-[130px]'>Telegram</div>
                   </div>
                      </Link>
                   </div>

                    
                  </div>
                  
                  {/* last */}
                  <div className='flex rounded-md bg-[#f0e8d3] flex-1 h-auto '>

                  </div>

                </div> 
              </div>
            </div>
           </div>
            <ul className='flex'>
              <li><button className='bg-[#01e101] h-auto p-3 w-auto text-white rounded-md '>Request an Audit</button></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header