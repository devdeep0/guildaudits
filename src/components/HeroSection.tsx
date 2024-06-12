import React from 'react'
import Image from 'next/image'
import {AnimatedBeamDemo} from "@/components/animatedbeamdemo"
function HeroSection() {
  return (
    <div className=' h-auto w-full bg-custom-gradient flex flex-col gap-9 pt-[130px]'>
        {/* top */}
      <div className='flex flex-row'>
        <div className='h-[600px] w-full gap-9  flex justify-center  flex-col'>
            <div className='pl-10 text-6xl'>World-class smart contract security audits, tools and education</div>
            <div className='pl-10 text-xl'>We bring world-class smart contract audits, tools, and education to hundreds of thousands of users, partners, and blockchain protocols.</div>
            <div className='text-xl font-semibold pl-10 flex items-start gap-5'>
                <button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about audit</button>
                <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
        </div>
        <div className='h-[600px] w-full flex items-center justify-center'><AnimatedBeamDemo/></div>
      </div>

        {/* mid */}

        <div className='h-[400px] gap-4 flex flex-col justify-center items-center w-full bg-blue-400'>
            <div className='font-semibold text-xl'>Trusted by the biggest protocols and chains</div>
            <div className='w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora veritatis labore molestias error ullam eligendi itaque earum vel eum id rem placeat, corporis laborum nostrum quo magni voluptatibus quod pariatur?
            Iusto sapiente quo voluptate perferendis saepe illum eligendi praesentium nesciunt cupiditate, perspiciatis quas, beatae dolore animi dolorem odit alias nam libero quae temporibus? Sed ex cupiditate ea delectus nemo voluptates!</div>
        </div>

        {/* second */}
      
        {/* third */}
        <div>
        <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='text-4xl font-bold'>We’re helping secure over $10B of DeFi TVL</div>
        <div className='w-3/6 text-xl font-light'>Cyfrin helps secure some of the top protocols and organizations in DeFi. We combine top leading researchers to enhance the security of our customers and their users.</div>
      </div>
        <div className='flex flex-row'>
        <div className='pl-10 h-[600px] w-full gap-16 bg-white text-black flex justify-center  flex-col'>
            
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[70px]'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Enhance the security of your protocol</div>
            <div className='text-xl font-light'>Trusted by the worlds biggest protocols, we only involve lead researchers for the highest security standards.</div>
            </div>
           </div>
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[70px]'><svg fill="#000000" viewBox="0 0 24 24" id="up-trend-round" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21,7l-6.79,6.79a1,1,0,0,1-1.42,0l-2.58-2.58a1,1,0,0,0-1.42,0L3,17" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></path><polyline id="primary-2" data-name="primary" points="21 11 21 7 17 7" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></polyline></g></svg>
           </div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Level up your engineering team</div>
            <div className='text-xl font-light'>Our security engineers will work with your team to improve your code to the best security practices.</div>
            </div>
           </div>
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[60px]'><svg fill="#000000" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.365 10.832a.473.473 0 0 1-.012.106q.012.179.012.37c0 3.239-5.865 5.063-5.865 5.063S.635 14.547.635 11.307q0-.19.012-.37a.473.473 0 0 1-.012-.105V3.643a.476.476 0 0 1 .475-.475h10.78a.476.476 0 0 1 .475.475zm-2.291-2.554a.476.476 0 0 0-.475-.475h-1.89v-1.89a.476.476 0 0 0-.474-.474h-1.47a.476.476 0 0 0-.475.475v1.889H3.401a.476.476 0 0 0-.475.475v1.47a.476.476 0 0 0 .475.474h1.89v1.889a.476.476 0 0 0 .474.475h1.47a.476.476 0 0 0 .475-.475v-1.889h1.889a.476.476 0 0 0 .475-.475z"></path></g></svg></div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Establish trust with your users</div>
            <div className='text-xl font-light'>Smart contract audits are vital in communicating maturity and safety to your users.</div>
            </div>
           </div>
            <div className='text-xl font-semibold pl-10 flex items-start gap-5'>
            <button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about audit</button>
            <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
        </div>
        <div className='h-[600px] w-full bg-white'></div>
      </div>
      </div>

        {/* fourth */}

        <div className='h-[500px] gap-8 flex flex-col justify-center items-center w-full '>
            <div className='text-xl'>Supported Chains</div>
            <div className='font-semibold text-4xl'>Bringing security to every chain</div>
            <div className='flex gap-10'>
        <div className='h-[80px] w-[80px]'><Image
                src="/chains/ethereum-cryptocurrency-icon-2048x2029-a37wbe09.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/73895099.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/arbitrum-arb-logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Avalanche_logo_without_text.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/base-logo-in-blue.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Binance_Logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/optimism-ethereum-op-logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Solana_logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
            </div>
        </div>

        {/* fifth */}
        <div className='h-auto  flex flex-col justify-center items-center w-full bg-red-400'>
            <div className='flex mt-10 flex-col justify-center items-center gap-4'>
                <div className=' text-xl'>Our Platforms</div>
                <div className='font-semibold text-4xl'>Securing the blockchain ecosystem, one platform at a time</div>
                <div className='text-2xl font-light'>We’re reshaping the blockchain security landscape with advanced tools and platforms, serving thousands of developers and protocols every day.</div>
            </div>

            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-green-400 flex flex-col justify-center p-5 '>
                    <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                    <div><button  className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>go to code hawks</button></div>
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-green-400'></div>
            </div>

            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-purple-400 flex flex-col justify-center p-5 '>
                   
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-purple-400 flex flex-col justify-center p-5 gap-5'>
                <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                </div>
            </div>
            
            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-green-400 flex flex-col justify-center p-5 '>
                    <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                    <div><button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>go to code hawks</button></div>
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-green-400'></div>
            </div>

            {/* sixth */}
        </div>
        <div className='text-black bg-white gap-6 h-auto p-9 w-full flex flex-col pl-10 justify-center'>
            <div className='text-5xl font-bold'>The blockchain security problem</div>
            <div className='w-3/6 text-2xl'>More than $2B is stolen every year from on-chain protocol hacks. Were here to solve this.</div>
            <div className='flex flex-wrap h-auto gap-5 m-5 w-full'>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>120+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Avg number of bugs in smart contracts</div>
                    <div>Every protocol on any chain can be the target of exploits. Security is an interoperable standard.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>10+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Projects hacked</div>
                    <div>Every year, hundreds of protocols get hacked. The majority, had never been properly audited.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>$1B+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>TVL stolen</div>
                    <div>DeFi protocols suffer millions of dollars in losses to exploits every year due to insufficient security practices.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>30+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Cross-chain protocols hacked</div>
                    <div>Every year tens of cross-chain protocols get hacked, uncovering the needs for outstanding security standards</div>
                </div>
            </div>
        </div>

         {/* seventh */}
        <div>
        <div className='flex flex-row'>
        <div className='bg-white h-[800px] w-full p-6 text-black gap-4 flex flex-col pl-10 justify-center'>
            <div className='font-bold text-[#01e101]'>Our mission</div>
        <div className='text-4xl font-bold'>We’re on a mission to secure the future of finance</div>
        <div className=' text-xl font-light'>Cyfrin is committed to bringing industry-leading smart contract security audits and education to our partners, their projects, customers, and developers at all levels worldwide.</div>
        <div className=' text-xl font-light'>Were on a mission to create a secure, safe, reliable, and transparent on-chain environment for everyone.</div>
      </div>
      <div className='h-[800px] w-full z-0 relative bg-white'>
        <div className='h-[300px] top-44 left-16 absolute'>
            <Image
            src='/40a3c03e2d8f4341a0730195c24dbefd.png'
            alt=''
            height={500}
            width={500}
            />
        </div>
      </div>
      </div>

        </div>

        {/* eight */}

        <div>
            <div></div>
        <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='w-4/6 text-4xl font-bold'>We’re making protocols safer— but don’t just take our word for it</div>
        <div className='w-4/6 text-xl font-light'>Heres a sneak peek into our previous smart contract audits and how weve helped secure tens of billions of dollars across blockchains and protocols.</div>
        <div className='bg-green-400 h-[600px] rounded-xl w-2/6 p-6 '>
            <div className='flex flex-col h-full gap-14 text-xl'>
                <div className='text-xl font-bold text-white'>Enhancing the security of Oku Trade on-chain limit orders.</div>
                <div className='h-4/6 rounded-xl bg-white w-full p-6 flex flex-col gap-6 bg-opacity-35 shadow-md'>
                <div>It was a pleasure to work with the Cyfrin team. Their approach to security and meticulous testing is exceptionally thorough. Additionally, their intimate knowledge of the Chainlink protocol made them particularly useful for our audit.</div>
                <div className='text-sm'>—
                Getty Hill, Oku Trade Founder</div>
                <div className='text-[20px]'> Read case study</div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-9'><button  className='bg-blue-600 p-1 w-[200px] h-[50px]  text-white rounded-md  '>Explore all case studies</button></div>
      </div>
      <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='w-4/6 text-4xl font-bold'>An all-star, world-class team</div>
        <div className='w-3/6 text-xl font-light'>Home to some of the best smart contract security researchers in the market— professionals at Cyfrin come from backgrounds like Chainlink, Alchemy, Aragon, WorldCoin, Microsoft, and Google.</div>
        <div className='h-[700px] w-full'></div>
        <div className='w-full flex items-center justify-center mt-9'><button  className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about cyfrin</button></div>
        </div>

        <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='w-full text-4xl font-bold flex justify-between'>
            <div>Secure your protocol today</div>
            <div className='text-xl font-semibold pl-10 flex items-start gap-5'>
            <button className='bg-white  p-1 h-[50px] w-[250px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Our Auditing process</button>
            <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
            
            </div>
        <div className='w-3/6 text-xl font-light'>Join some of the biggest protocols and companies in creating a better internet. Our security researchers will help you throughout the whole process.</div>
        <div className='w-2/4  flex flex-wrap gap-5 mt-4 '>

        <div><svg width="213" height="52" viewBox="0 0 213 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.37396 6.09336H35.8346V11.7442H43.6434L42.0069 17.395H40.6212V40.2558C41.3161 40.2558 41.8802 40.8306 41.8802 41.5401V43.0806H42.1323C42.8285 43.0806 43.3926 43.6567 43.3926 44.3649V45.9066H29.2835V44.3649C29.2835 43.6567 29.8477 43.0806 30.5439 43.0806H30.7959V41.5401C30.7959 40.9226 31.2227 40.4078 31.7909 40.2838L31.7642 27.6698C31.3187 22.6298 27.1643 18.6794 22.1043 18.6794C17.0443 18.6794 12.8898 22.6298 12.4444 27.6698L12.4177 40.2731C13.0899 40.3745 13.9168 40.9026 13.9168 41.5401V43.0806H14.1688C14.8637 43.0806 15.4278 43.6567 15.4278 44.3649V45.9066H1.32008V44.3649C1.32008 43.6567 1.88423 43.0806 2.57908 43.0806H2.83115V41.5401C2.83115 40.8306 3.3953 40.2558 4.09148 40.2558V17.395H2.70578L1.06801 11.7442H8.37396V6.09336Z" fill="black"/>
        <path d="M35.8346 6.09336H35.9266V6H35.8346V6.09336ZM8.37396 6.09336V6H8.28194V6.09336H8.37396ZM35.8346 11.7442L35.7426 11.7442V11.8376H35.8346V11.7442ZM43.6434 11.7442L43.7327 11.7709L43.7674 11.6508H43.6434V11.7442ZM42.0069 17.395V17.4884H42.0749L42.095 17.4217L42.0069 17.395ZM40.6212 17.395V17.3017H40.5292V17.395L40.6212 17.395ZM40.6212 40.2558H40.5292V40.3492H40.6212V40.2558ZM41.8802 43.0806H41.7882V43.1752H41.8802V43.0806ZM43.3926 45.9066V46H43.4833V45.9066H43.3926ZM29.2835 45.9066H29.1915V46H29.2835V45.9066ZM30.7959 43.0806V43.1752H30.888V43.0806H30.7959ZM31.7909 40.2838L31.8109 40.3758L31.8829 40.3598V40.2838H31.7909ZM31.7642 27.6698H31.8562V27.6658L31.8549 27.6618L31.7642 27.6698ZM12.4444 27.6698L12.3524 27.6618V27.6698H12.4444ZM12.4177 40.2731H12.3257L12.3243 40.3545L12.403 40.3665L12.4177 40.2731ZM13.9168 43.0806H13.8247V43.1752H13.9168V43.0806ZM15.4278 45.9066V46H15.5199V45.9066H15.4278ZM1.32008 45.9066H1.22805V46H1.32008V45.9066ZM2.83115 43.0806V43.1752H2.92317V43.0806H2.83115ZM4.09148 40.2558V40.3492H4.18351V40.2558H4.09148ZM4.09148 17.395L4.18351 17.395V17.3017H4.09148V17.395ZM2.70578 17.395L2.61776 17.4217L2.63643 17.4884H2.70578V17.395ZM1.06801 11.7442V11.6508H0.945312L0.979988 11.7709L1.06801 11.7442ZM8.37396 11.7442V11.8376H8.46599V11.7442L8.37396 11.7442ZM35.8346 6H8.37396V6.18672H35.8346V6ZM35.9266 11.7442V6.09336H35.7426V11.7442H35.9266ZM43.6434 11.6508H35.8346V11.8376H43.6434V11.6508ZM42.095 17.4217L43.7327 11.7709L43.5553 11.7175L41.9176 17.3684L42.095 17.4217ZM40.6212 17.4884H42.0069V17.3017H40.6212V17.4884ZM40.7132 40.2558V17.395H40.5292V40.2558H40.7132ZM41.9723 41.5401C41.9723 40.7786 41.3668 40.1624 40.6212 40.1624V40.3492C41.2654 40.3492 41.7882 40.8826 41.7882 41.5401H41.9723ZM41.9723 43.0806V41.5401H41.7882V43.0806H41.9723ZM42.1323 42.9872H41.8802V43.1752H42.1323V42.9872ZM43.4833 44.3649C43.4833 43.6047 42.8792 42.9872 42.1323 42.9872V43.1752C42.7778 43.1752 43.3006 43.7074 43.3006 44.3649H43.4833ZM43.4833 45.9066V44.3649H43.3006V45.9066H43.4833ZM35.8346 46H43.3926V45.8133H35.8346V46ZM31.8029 46H35.8346V45.8133H31.8029V46ZM29.2835 46H31.8029V45.8133H29.2835V46ZM29.1915 44.3649V45.9066H29.3756V44.3649H29.1915ZM30.5439 42.9872C29.797 42.9872 29.1915 43.6047 29.1915 44.3649H29.3756C29.3756 43.7074 29.8984 43.1752 30.5439 43.1752V42.9872ZM30.7959 42.9872H30.5439V43.1752H30.7959V42.9872ZM30.7039 41.5401V43.0806H30.888V41.5401H30.7039ZM31.7722 40.1918C31.1614 40.3252 30.7039 40.8773 30.7039 41.5401H30.888C30.888 40.968 31.2827 40.4905 31.8109 40.3758L31.7722 40.1918ZM31.6722 27.6698L31.6988 40.2838H31.8829L31.8562 27.6698H31.6722ZM22.1043 18.7727C27.115 18.7727 31.2307 22.6858 31.6722 27.6778L31.8549 27.6618C31.4054 22.5738 27.2123 18.586 22.1043 18.586V18.7727ZM12.5364 27.6778C12.9779 22.6858 17.0923 18.7727 22.1043 18.7727V18.586C16.9963 18.586 12.8031 22.5738 12.3524 27.6618L12.5364 27.6778ZM12.5097 40.2731L12.5364 27.6698H12.3524L12.3257 40.2731H12.5097ZM14.0088 41.5401C14.0088 41.1787 13.7754 40.864 13.474 40.6306C13.1712 40.3972 12.7818 40.2331 12.431 40.1811L12.403 40.3665C12.7245 40.4145 13.0845 40.5652 13.3633 40.7799C13.6447 40.9973 13.8247 41.2641 13.8247 41.5401H14.0088ZM14.0088 43.0806V41.5401H13.8247V43.0806H14.0088ZM14.1688 42.9872H13.9168V43.1752H14.1688V42.9872ZM15.5199 44.3649C15.5199 43.6047 14.9144 42.9872 14.1688 42.9872V43.1752C14.813 43.1752 15.3358 43.7074 15.3358 44.3649H15.5199ZM15.5199 45.9066V44.3649H15.3358V45.9066H15.5199ZM12.4044 46H15.4278V45.8133H12.4044V46ZM12.195 46H12.4044V45.8133H12.195V46ZM8.37396 46H12.195V45.8133H8.37396V46ZM1.32008 46H8.37396V45.8133H1.32008V46ZM1.22805 44.3649V45.9066H1.4121V44.3649H1.22805ZM2.57908 42.9872C1.83355 42.9872 1.22805 43.6047 1.22805 44.3649H1.4121C1.4121 43.7074 1.93491 43.1752 2.57908 43.1752V42.9872ZM2.83115 42.9872H2.57908V43.1752H2.83115V42.9872ZM2.73912 41.5401V43.0806H2.92317V41.5401H2.73912ZM4.09148 40.1624C3.34462 40.1624 2.73912 40.7786 2.73912 41.5401H2.92317C2.92317 40.8826 3.44598 40.3492 4.09148 40.3492V40.1624ZM3.99946 17.395V40.2558H4.18351V17.395H3.99946ZM2.70578 17.4884H4.09148V17.3017H2.70578V17.4884ZM0.979988 11.7709L2.61776 17.4217L2.79381 17.3684L1.15604 11.7175L0.979988 11.7709ZM8.37396 11.6508H1.06801V11.8376H8.37396V11.6508ZM8.28194 6.09336V11.7442H8.46599V6.09336H8.28194Z" fill="black"/>
        <path d="M71.3852 20.1016V24.0421H59.7116V20.1016H71.3852ZM62.3838 39.0158V18.7348C62.3838 17.3639 62.6506 16.2269 63.1842 15.3239C63.726 14.4208 64.4648 13.7436 65.4007 13.2921C66.3365 12.8406 67.3996 12.6148 68.59 12.6148C69.3945 12.6148 70.1292 12.6764 70.7942 12.7995C71.4673 12.9226 71.9681 13.0335 72.2964 13.132L71.3606 17.0724C71.1554 17.0068 70.9009 16.9452 70.5971 16.8877C70.3016 16.8303 69.9979 16.8015 69.6859 16.8015C68.9142 16.8015 68.3765 16.9821 68.0728 17.3433C67.769 17.6963 67.6172 18.193 67.6172 18.8333V39.0158H62.3838Z" fill="black"/>
        <path d="M79.3061 39.3729C78.0994 39.3729 77.024 39.1635 76.0799 38.7449C75.1358 38.318 74.3888 37.69 73.8388 36.8609C73.2969 36.0235 73.026 34.9809 73.026 33.7331C73.026 32.6823 73.219 31.7998 73.6048 31.0856C73.9906 30.3714 74.516 29.7968 75.181 29.3617C75.8459 28.9266 76.6012 28.5982 77.4467 28.3766C78.3005 28.1549 79.1953 27.999 80.1312 27.9087C81.2312 27.7937 82.1178 27.687 82.791 27.5885C83.4641 27.4818 83.9526 27.3258 84.2563 27.1206C84.5601 26.9153 84.7119 26.6116 84.7119 26.2093V26.1355C84.7119 25.3556 84.4656 24.7522 83.9731 24.3253C83.4887 23.8984 82.7992 23.685 81.9044 23.685C80.9603 23.685 80.2091 23.8943 79.6509 24.313C79.0927 24.7235 78.7233 25.2406 78.5427 25.8645L73.691 25.4705C73.9373 24.3212 74.4216 23.3279 75.144 22.4905C75.8664 21.645 76.7982 20.9965 77.9393 20.5449C79.0886 20.0852 80.4185 19.8554 81.929 19.8554C82.9798 19.8554 83.9854 19.9785 84.9459 20.2248C85.9146 20.4711 86.7725 20.8528 87.5195 21.37C88.2747 21.8872 88.8699 22.5521 89.305 23.3648C89.7401 24.1693 89.9576 25.1339 89.9576 26.2586V39.0158H84.9828V36.3929H84.8351C84.5313 36.984 84.125 37.5053 83.616 37.9568C83.107 38.4001 82.4954 38.749 81.7812 39.0035C81.067 39.2497 80.242 39.3729 79.3061 39.3729ZM80.8084 35.7526C81.5801 35.7526 82.2615 35.6007 82.8525 35.297C83.4436 34.985 83.9074 34.5664 84.244 34.041C84.5806 33.5156 84.7489 32.9204 84.7489 32.2555V30.2483C84.5847 30.355 84.3589 30.4535 84.0716 30.5438C83.7925 30.6259 83.4764 30.7039 83.1234 30.7778C82.7704 30.8435 82.4174 30.905 82.0644 30.9625C81.7114 31.0118 81.3913 31.0569 81.104 31.098C80.4883 31.1883 79.9506 31.3319 79.4908 31.5289C79.0311 31.726 78.674 31.9928 78.4195 32.3293C78.165 32.6577 78.0378 33.0682 78.0378 33.5607C78.0378 34.2749 78.2964 34.8208 78.8136 35.1985C79.339 35.5679 80.0039 35.7526 80.8084 35.7526Z" fill="black"/>
        <path d="M94.0274 39.0158V20.1016H99.113V23.4018H99.31C99.6548 22.2278 100.234 21.3412 101.046 20.742C101.859 20.1345 102.795 19.8307 103.854 19.8307C104.117 19.8307 104.4 19.8472 104.704 19.88C105.007 19.9128 105.274 19.958 105.504 20.0154V24.6701C105.258 24.5962 104.917 24.5305 104.482 24.4731C104.047 24.4156 103.649 24.3869 103.287 24.3869C102.516 24.3869 101.826 24.5552 101.219 24.8918C100.619 25.2201 100.143 25.6798 99.7903 26.2709C99.4455 26.862 99.2731 27.5433 99.2731 28.315V39.0158H94.0274Z" fill="black"/>
        <path d="M115.881 39.3852C113.944 39.3852 112.278 38.9747 110.882 38.1538C109.495 37.3247 108.427 36.1754 107.68 34.7059C106.942 33.2365 106.572 31.5454 106.572 29.6326C106.572 27.6952 106.946 25.9959 107.693 24.5346C108.448 23.0652 109.519 21.92 110.907 21.0991C112.294 20.2699 113.944 19.8554 115.857 19.8554C117.507 19.8554 118.952 20.155 120.191 20.7543C121.431 21.3536 122.412 22.195 123.134 23.2786C123.857 24.3623 124.255 25.6347 124.329 27.0959H119.379C119.239 26.1519 118.87 25.3925 118.27 24.8179C117.679 24.235 116.904 23.9436 115.943 23.9436C115.13 23.9436 114.42 24.1652 113.813 24.6085C113.213 25.0436 112.746 25.6798 112.409 26.5172C112.072 27.3545 111.904 28.3684 111.904 29.5587C111.904 30.7655 112.068 31.7916 112.397 32.6372C112.733 33.4827 113.205 34.1272 113.813 34.5705C114.42 35.0138 115.13 35.2354 115.943 35.2354C116.542 35.2354 117.08 35.1123 117.556 34.866C118.04 34.6197 118.439 34.2626 118.751 33.7947C119.071 33.3186 119.28 32.748 119.379 32.0831H124.329C124.247 33.5279 123.853 34.8003 123.147 35.9004C122.449 36.9922 121.484 37.846 120.253 38.4617C119.022 39.0774 117.564 39.3852 115.881 39.3852Z" fill="black"/>
        <path d="M133.081 39.3729C131.874 39.3729 130.799 39.1635 129.855 38.7449C128.911 38.318 128.164 37.69 127.614 36.8609C127.072 36.0235 126.801 34.9809 126.801 33.7331C126.801 32.6823 126.994 31.7998 127.38 31.0856C127.765 30.3714 128.291 29.7968 128.956 29.3617C129.621 28.9266 130.376 28.5982 131.221 28.3766C132.075 28.1549 132.97 27.999 133.906 27.9087C135.006 27.7937 135.893 27.687 136.566 27.5885C137.239 27.4818 137.727 27.3258 138.031 27.1206C138.335 26.9153 138.487 26.6116 138.487 26.2093V26.1355C138.487 25.3556 138.24 24.7522 137.748 24.3253C137.263 23.8984 136.574 23.685 135.679 23.685C134.735 23.685 133.984 23.8943 133.426 24.313C132.867 24.7235 132.498 25.2406 132.317 25.8645L127.466 25.4705C127.712 24.3212 128.196 23.3279 128.919 22.4905C129.641 21.645 130.573 20.9965 131.714 20.5449C132.863 20.0852 134.193 19.8554 135.704 19.8554C136.755 19.8554 137.76 19.9785 138.721 20.2248C139.689 20.4711 140.547 20.8528 141.294 21.37C142.05 21.8872 142.645 22.5521 143.08 23.3648C143.515 24.1693 143.732 25.1339 143.732 26.2586V39.0158H138.758V36.3929H138.61C138.306 36.984 137.9 37.5053 137.391 37.9568C136.882 38.4001 136.27 38.749 135.556 39.0035C134.842 39.2497 134.017 39.3729 133.081 39.3729ZM134.583 35.7526C135.355 35.7526 136.036 35.6007 136.627 35.297C137.218 34.985 137.682 34.5664 138.019 34.041C138.355 33.5156 138.524 32.9204 138.524 32.2555V30.2483C138.359 30.355 138.134 30.4535 137.846 30.5438C137.567 30.6259 137.251 30.7039 136.898 30.7778C136.545 30.8435 136.192 30.905 135.839 30.9625C135.486 31.0118 135.166 31.0569 134.879 31.098C134.263 31.1883 133.725 31.3319 133.266 31.5289C132.806 31.726 132.449 31.9928 132.194 32.3293C131.94 32.6577 131.813 33.0682 131.813 33.5607C131.813 34.2749 132.071 34.8208 132.588 35.1985C133.114 35.5679 133.779 35.7526 134.583 35.7526Z" fill="black"/>
        <path d="M163.539 25.4951L158.737 25.7907C158.655 25.3802 158.478 25.0108 158.207 24.6824C157.936 24.3458 157.579 24.079 157.136 23.882C156.701 23.6768 156.18 23.5742 155.572 23.5742C154.759 23.5742 154.074 23.7466 153.516 24.0913C152.958 24.4279 152.678 24.8794 152.678 25.4459C152.678 25.8974 152.859 26.2791 153.22 26.5911C153.581 26.903 154.201 27.1534 155.08 27.3422L158.503 28.0318C160.342 28.4094 161.713 29.0169 162.616 29.8542C163.519 30.6916 163.97 31.7916 163.97 33.1544C163.97 34.394 163.605 35.4817 162.874 36.4176C162.152 37.3534 161.159 38.084 159.894 38.6094C158.638 39.1266 157.189 39.3852 155.548 39.3852C153.044 39.3852 151.049 38.8639 149.563 37.8213C148.085 36.7705 147.219 35.3421 146.965 33.5361L152.124 33.2652C152.28 34.0287 152.658 34.6115 153.257 35.0138C153.856 35.4078 154.624 35.6048 155.56 35.6048C156.479 35.6048 157.218 35.4283 157.776 35.0753C158.343 34.7141 158.63 34.2503 158.638 33.6839C158.63 33.2077 158.429 32.8178 158.035 32.514C157.641 32.2021 157.033 31.964 156.213 31.7998L152.937 31.1472C151.09 30.7778 149.715 30.1375 148.812 29.2262C147.917 28.315 147.47 27.1534 147.47 25.7414C147.47 24.5264 147.798 23.4798 148.455 22.6014C149.12 21.723 150.051 21.0457 151.25 20.5696C152.457 20.0934 153.869 19.8554 155.486 19.8554C157.875 19.8554 159.755 20.3602 161.126 21.37C162.505 22.3797 163.309 23.7548 163.539 25.4951Z" fill="black"/>
        <path d="M177.334 20.1016V24.0421H165.944V20.1016H177.334ZM168.53 15.5701H173.775V33.2036C173.775 33.688 173.849 34.0656 173.997 34.3365C174.145 34.5992 174.35 34.7839 174.613 34.8906C174.883 34.9973 175.195 35.0507 175.548 35.0507C175.795 35.0507 176.041 35.0302 176.287 34.9891C176.534 34.9399 176.722 34.9029 176.854 34.8783L177.679 38.7818C177.416 38.8639 177.047 38.9583 176.57 39.065C176.094 39.18 175.516 39.2497 174.834 39.2744C173.57 39.3236 172.462 39.1553 171.509 38.7695C170.565 38.3837 169.831 37.7844 169.305 36.9717C168.78 36.159 168.521 35.1328 168.53 33.8932V15.5701Z" fill="black"/>
        <path d="M189.168 39.3852C187.222 39.3852 185.547 38.9912 184.143 38.2031C182.748 37.4068 181.673 36.2821 180.917 34.8291C180.162 33.3678 179.784 31.6398 179.784 29.6449C179.784 27.6993 180.162 25.9918 180.917 24.5223C181.673 23.0529 182.736 21.9077 184.107 21.0868C185.486 20.2658 187.103 19.8554 188.958 19.8554C190.206 19.8554 191.368 20.0565 192.443 20.4588C193.527 20.8528 194.471 21.448 195.275 22.2443C196.088 23.0406 196.72 24.0421 197.172 25.2489C197.623 26.4474 197.849 27.8512 197.849 29.4602V30.9009H181.878V27.6501H192.911C192.911 26.8948 192.747 26.2258 192.418 25.6429C192.09 25.06 191.634 24.6044 191.052 24.2761C190.477 23.9395 189.808 23.7712 189.044 23.7712C188.248 23.7712 187.542 23.9559 186.926 24.3253C186.319 24.6865 185.843 25.175 185.498 25.7907C185.153 26.3981 184.977 27.0754 184.969 27.8225V30.9132C184.969 31.8491 185.141 32.6577 185.486 33.3391C185.839 34.0204 186.335 34.5458 186.976 34.9153C187.616 35.2847 188.375 35.4694 189.254 35.4694C189.837 35.4694 190.37 35.3873 190.855 35.2231C191.339 35.0589 191.753 34.8126 192.098 34.4843C192.443 34.1559 192.706 33.7536 192.886 33.2775L197.738 33.5977C197.492 34.7634 196.987 35.7813 196.223 36.6515C195.468 37.5135 194.491 38.1866 193.293 38.671C192.102 39.1471 190.727 39.3852 189.168 39.3852Z" fill="black"/>
        <path d="M201.272 39.0158V20.1016H206.358V23.4018H206.555C206.9 22.2278 207.478 21.3412 208.291 20.742C209.104 20.1345 210.04 19.8307 211.099 19.8307C211.361 19.8307 211.645 19.8472 211.948 19.88C212.252 19.9128 212.519 19.958 212.749 20.0154V24.6701C212.502 24.5962 212.162 24.5305 211.727 24.4731C211.292 24.4156 210.893 24.3869 210.532 24.3869C209.76 24.3869 209.071 24.5552 208.463 24.8918C207.864 25.2201 207.388 25.6798 207.035 26.2709C206.69 26.862 206.518 27.5433 206.518 28.315V39.0158H201.272Z" fill="black"/>
        </svg>
        </div>
    
                    <div className='flex items-center justify-center'><svg width="126" height="25" viewBox="0 0 126 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2251_33671)">
            <mask id="mask0_2251_33671"  maskUnits="userSpaceOnUse" x="0" y="0" width="126" height="25">
            <path d="M125.072 0H0.0716553V25H125.072V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2251_33671)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4629 12.2708L31.1556 0V8.98437L18.9368 17.9792L31.1556 17.9896V24.5365L43.4629 12.2708Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0716553 12.2656L12.379 24.5313V15.6198L24.5977 6.55208L12.379 6.54167V0L0.0716553 12.2656Z" fill="black"/>
            <path d="M61.8012 18.3955H52.3793V15.6924L57.7699 9.68197H52.5147V7.02051H61.7022V9.58822L56.1501 15.7132H61.796V18.3955H61.8012Z" fill="black"/>
            <path d="M74.6553 7.02083L70.098 11.8073L74.749 18.3958H70.9782L67.9678 14.0469L66.6969 15.3854V18.3906H63.6188V1.65625H66.6969V11.25L70.6292 7.02083H74.6553Z" fill="black"/>
            <path d="M88.046 5.91081L85.1762 6.79102C85.0668 6.20768 84.7752 5.67122 84.296 5.19727C83.8168 4.7181 83.1137 4.47852 82.1918 4.47852C81.4366 4.47852 80.8168 4.68685 80.3377 5.10352C79.8585 5.50456 79.6189 5.98893 79.6189 6.56185C79.6189 7.56185 80.2127 8.18164 81.4002 8.41081L83.6918 8.84831C85.1449 9.12435 86.2699 9.70246 87.072 10.5827C87.8741 11.4629 88.2752 12.4941 88.2752 13.6816C88.2752 15.0358 87.7335 16.2233 86.6554 17.2441C85.5929 18.2441 84.1554 18.7493 82.3481 18.7493C81.3116 18.7493 80.3793 18.5931 79.546 18.2858C78.7127 17.9785 78.0408 17.5671 77.5304 17.0618C77.0199 16.5358 76.6189 15.9889 76.3272 15.4212C76.0512 14.8379 75.8793 14.2337 75.8168 13.6191L78.7804 12.8327C78.8585 13.7129 79.197 14.4421 79.8012 15.0306C80.4158 15.6139 81.2752 15.9108 82.3689 15.9108C83.2022 15.9108 83.8481 15.7233 84.3116 15.3535C84.7908 14.9837 85.0304 14.4993 85.0304 13.8952C85.0304 13.416 84.8533 13.0098 84.4991 12.6712C84.1606 12.3171 83.671 12.0775 83.0408 11.9525L80.7491 11.4889C79.421 11.2129 78.3741 10.666 77.6033 9.84831C76.8324 9.0306 76.447 8.01497 76.447 6.79622C76.447 5.34831 77.0043 4.12956 78.1137 3.14518C79.2387 2.16081 80.5929 1.66602 82.1658 1.66602C83.1085 1.66602 83.947 1.79622 84.6866 2.05664C85.4262 2.31706 86.0199 2.67122 86.4679 3.11914C86.9158 3.55143 87.2647 3.99935 87.5095 4.45768C87.7543 4.92122 87.9366 5.4056 88.0408 5.91602L88.046 5.91081Z" fill="black"/>
            <path d="M93.4623 22.8799H90.1967L92.879 16.9632L88.0405 7.02051H91.4884L94.5196 13.682L97.3217 7.02051H100.608L93.4571 22.8799H93.4623Z" fill="black"/>
            <path d="M104.862 11.8486V18.3903H101.784V7.02051H104.768V8.43197C105.091 7.87467 105.555 7.4528 106.159 7.16113C106.763 6.86947 107.393 6.72363 108.055 6.72363C109.399 6.72363 110.414 7.14551 111.112 7.99447C111.82 8.8278 112.175 9.90592 112.175 11.234V18.4007H109.096V11.7653C109.096 11.0882 108.919 10.5413 108.565 10.1247C108.227 9.70801 107.701 9.49967 106.992 9.49967C106.346 9.49967 105.826 9.72363 105.44 10.1715C105.055 10.6195 104.862 11.182 104.862 11.859V11.8486Z" fill="black"/>
            <path d="M119.722 9.5153C118.904 9.5153 118.217 9.80176 117.66 10.3695C117.102 10.9372 116.826 11.7184 116.826 12.7028C116.826 13.6872 117.102 14.4736 117.66 15.0622C118.232 15.6351 118.925 15.9163 119.743 15.9163C120.467 15.9163 121.045 15.7288 121.477 15.359C121.91 14.9736 122.201 14.5205 122.357 13.9945L125.066 14.8955C124.79 15.9424 124.186 16.8434 123.259 17.5986C122.331 18.3538 121.16 18.734 119.738 18.734C118.04 18.734 116.613 18.1663 115.456 17.0205C114.316 15.8643 113.743 14.4215 113.743 12.6976C113.743 10.9736 114.305 9.5153 115.43 8.37467C116.571 7.23405 117.977 6.66113 119.644 6.66113C121.097 6.66113 122.285 7.04134 123.206 7.79655C124.134 8.53613 124.727 9.43717 124.988 10.4997L122.232 11.4268C121.863 10.1455 121.019 9.51009 119.712 9.51009L119.722 9.5153Z" fill="black"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_2251_33671">
            <rect width="125" height="25" fill="white" transform="translate(0.0716553)"/>
            </clipPath>
            </defs>
            </svg>

        </div>

                <div className='flex items-center justify-center'><svg className='flex items-center justify-center' width="140" height="25" viewBox="0 0 140 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_16_3)">
        <path d="M45.4185 7.54274L42.218 16.5459C42.2034 16.5893 42.1745 16.6266 42.136 16.6519C42.0976 16.6772 42.0516 16.689 42.0057 16.6853H41.7632C41.7171 16.6871 41.6715 16.6748 41.6328 16.6497C41.594 16.6248 41.5641 16.5885 41.5469 16.5459L39.1476 10.2316L36.7523 16.5459C36.7363 16.5885 36.7071 16.625 36.669 16.6501C36.6308 16.6751 36.5856 16.6875 36.5399 16.6853H36.2935C36.2476 16.6879 36.2022 16.6757 36.164 16.6506C36.1258 16.6254 36.0967 16.5887 36.0811 16.5459L32.8807 7.54589C32.8315 7.40636 32.8846 7.31964 33.0209 7.31964H34.0114C34.0581 7.31495 34.1049 7.32622 34.1442 7.35159C34.1836 7.37696 34.213 7.4149 34.2277 7.45918L36.5089 14.2755L38.8282 8.03305C38.8449 7.99007 38.8748 7.95342 38.9137 7.92836C38.9526 7.9033 38.9983 7.89111 39.0446 7.89353H39.253C39.2987 7.89122 39.3439 7.90352 39.3822 7.92862C39.4204 7.95372 39.4495 7.99032 39.4653 8.03305L41.8536 14.2755L44.0818 7.45918C44.0964 7.4149 44.126 7.37696 44.1653 7.35159C44.2046 7.32622 44.2514 7.31495 44.298 7.31964H45.2735C45.4137 7.31964 45.4668 7.40636 45.4177 7.54274" fill="black"/>
        <path d="M59.3473 11.9271C59.3384 12.8544 59.054 13.7583 58.5296 14.525C58.0053 15.2917 57.2647 15.8868 56.4009 16.2356C55.5373 16.5843 54.5892 16.6709 53.6761 16.4846C52.763 16.2983 51.9258 15.8473 51.2698 15.1885C50.6138 14.5297 50.1685 13.6925 49.9899 12.7824C49.8113 11.8723 49.9075 10.93 50.2662 10.074C50.6249 9.21818 51.2302 8.48708 52.0058 7.97279C52.7815 7.4585 53.6927 7.18405 54.6247 7.18401C55.2512 7.17525 55.873 7.29228 56.4529 7.52812C57.0329 7.76396 57.559 8.11374 57.9999 8.55656C58.4408 8.99937 58.7873 9.52614 59.0189 10.1053C59.2504 10.6844 59.3621 11.3041 59.3473 11.9271ZM58.0376 11.9271C58.0376 9.74435 56.6066 8.24111 54.6247 8.24111C52.643 8.24111 51.212 9.74435 51.212 11.9271C51.212 14.1099 52.643 15.6133 54.6247 15.6133C56.6066 15.6133 58.0376 14.1099 58.0376 11.9271Z" fill="black"/>
        <path d="M71.854 16.1612C71.8842 16.1959 71.9031 16.2389 71.9081 16.2846C71.9131 16.3302 71.9043 16.3763 71.8824 16.4168C71.8606 16.4572 71.827 16.4902 71.786 16.5113C71.745 16.5323 71.6985 16.5405 71.6527 16.5348H70.7605C70.7314 16.5339 70.7031 16.5259 70.6779 16.5115C70.6528 16.497 70.6316 16.4765 70.6163 16.452L68.377 13.0907H65.9706V16.3464C65.97 16.3963 65.9497 16.4441 65.9142 16.4795C65.8787 16.5149 65.8306 16.5349 65.7804 16.5356H64.9087C64.8587 16.5348 64.8108 16.5145 64.7755 16.4792C64.7401 16.4439 64.72 16.3962 64.7194 16.3464V7.50883C64.7202 7.45905 64.7404 7.41151 64.7757 7.37623C64.811 7.34094 64.8588 7.32066 64.9087 7.31964H68.3366C70.7359 7.31964 71.9206 8.57382 71.9206 10.2048C71.9352 10.8529 71.7162 11.4848 71.3034 11.9863C70.8905 12.4879 70.311 12.8259 69.6694 12.9394L71.854 16.1612ZM68.0918 12.0337C69.9785 12.0337 70.6124 11.2556 70.6124 10.2056C70.6124 9.15558 69.9785 8.37753 68.0918 8.37753H65.9698V12.0337H68.0918Z" fill="black"/>
        <path d="M86.5946 7.17141H86.879C86.9044 7.16979 86.9299 7.17358 86.9537 7.18251C86.9775 7.19144 86.9991 7.20533 87.0171 7.22323C87.0351 7.24113 87.049 7.26264 87.058 7.28633C87.067 7.31002 87.0709 7.33534 87.0692 7.3606V16.3472C87.0709 16.3724 87.067 16.3977 87.058 16.4214C87.049 16.4451 87.0351 16.4666 87.0171 16.4845C86.9991 16.5024 86.9775 16.5163 86.9537 16.5252C86.9299 16.5341 86.9044 16.538 86.879 16.5363H86.0074C85.982 16.538 85.9566 16.5341 85.9327 16.5252C85.909 16.5163 85.8873 16.5024 85.8694 16.4845C85.8513 16.4666 85.8374 16.4451 85.8284 16.4214C85.8194 16.3977 85.8156 16.3724 85.8172 16.3472V9.96751L82.3055 15.0244C82.2939 15.0494 82.2755 15.0706 82.2522 15.0854C82.229 15.1003 82.2019 15.1082 82.1743 15.1082C82.1467 15.1082 82.1196 15.1003 82.0963 15.0854C82.0731 15.0706 82.0546 15.0494 82.0432 15.0244L78.5321 9.96751V16.3464C78.5337 16.3716 78.53 16.397 78.521 16.4206C78.512 16.4443 78.498 16.4658 78.48 16.4837C78.462 16.5017 78.4404 16.5155 78.4166 16.5244C78.3928 16.5334 78.3673 16.5371 78.3419 16.5355H77.4704C77.445 16.5371 77.4195 16.5334 77.3956 16.5244C77.3719 16.5155 77.3503 16.5017 77.3322 16.4837C77.3142 16.4658 77.3003 16.4443 77.2913 16.4206C77.2823 16.397 77.2786 16.3716 77.2801 16.3464V7.35981C77.2786 7.33455 77.2823 7.30923 77.2913 7.28554C77.3003 7.26186 77.3142 7.24034 77.3322 7.22244C77.3503 7.20454 77.3719 7.19066 77.3956 7.18173C77.4195 7.17279 77.445 7.169 77.4704 7.17062H77.7516C77.7989 7.1708 77.8453 7.18263 77.8868 7.20505C77.9282 7.22748 77.9635 7.2598 77.9893 7.29912L82.1731 13.1112L86.36 7.29912C86.3845 7.26 86.4186 7.22769 86.4591 7.20522C86.4995 7.18274 86.5451 7.17084 86.5914 7.17062" fill="black"/>
        <path d="M101.157 7.50883V16.3456C101.156 16.3955 101.136 16.4432 101.1 16.4785C101.065 16.5138 101.016 16.5339 100.967 16.5348H100.095C100.045 16.5339 99.9969 16.5138 99.9611 16.4785C99.9254 16.4432 99.9052 16.3955 99.9043 16.3456V12.3198H94.1383V16.3456C94.1374 16.3955 94.1172 16.4432 94.0815 16.4785C94.0466 16.5138 93.999 16.5339 93.9485 16.5348H93.0766C93.0262 16.5339 92.9785 16.5138 92.9428 16.4785C92.9079 16.4432 92.8878 16.3955 92.8868 16.3456V7.50883C92.8878 7.45891 92.9079 7.41126 92.9428 7.37595C92.9785 7.34065 93.0262 7.32046 93.0766 7.31964H93.9485C93.999 7.32046 94.0466 7.34065 94.0815 7.37595C94.1172 7.41126 94.1374 7.45891 94.1383 7.50883V11.2627H99.9043V7.50883C99.9052 7.45891 99.9254 7.41126 99.9611 7.37595C99.9969 7.34065 100.045 7.32046 100.095 7.31964H100.967C101.016 7.32046 101.065 7.34065 101.1 7.37595C101.136 7.41126 101.156 7.45891 101.157 7.50883Z" fill="black"/>
        <path d="M115.974 11.9271C115.964 12.8544 115.68 13.7583 115.156 14.525C114.631 15.2917 113.891 15.8868 113.027 16.2356C112.163 16.5843 111.215 16.6709 110.302 16.4846C109.389 16.2983 108.552 15.8473 107.896 15.1885C107.24 14.5297 106.794 13.6925 106.616 12.7824C106.438 11.8723 106.534 10.93 106.892 10.074C107.251 9.21818 107.856 8.48708 108.632 7.97279C109.407 7.4585 110.319 7.18405 111.251 7.18401C111.877 7.17525 112.499 7.29228 113.079 7.52812C113.659 7.76396 114.185 8.11374 114.626 8.55656C115.067 8.99937 115.413 9.52614 115.645 10.1053C115.876 10.6844 115.988 11.3041 115.974 11.9271ZM114.663 11.9271C114.663 9.74435 113.232 8.24111 111.251 8.24111C109.269 8.24111 107.838 9.74435 107.838 11.9271C107.838 14.1099 109.269 15.6133 111.251 15.6133C113.232 15.6133 114.663 14.1099 114.663 11.9271Z" fill="black"/>
        <path d="M127.902 15.6661V16.3456C127.904 16.3708 127.901 16.3961 127.891 16.4199C127.882 16.4435 127.869 16.4651 127.85 16.483C127.833 16.5008 127.811 16.5148 127.787 16.5237C127.763 16.5326 127.738 16.5364 127.713 16.5348H121.537C121.486 16.5339 121.439 16.5138 121.403 16.4785C121.367 16.4432 121.347 16.3955 121.346 16.3456V7.50883C121.347 7.45891 121.367 7.41126 121.403 7.37595C121.439 7.34065 121.486 7.32046 121.537 7.31964H122.408C122.458 7.32066 122.506 7.34094 122.542 7.37623C122.577 7.41151 122.597 7.45905 122.598 7.50883V15.4769H127.714C127.74 15.4753 127.766 15.479 127.79 15.488C127.814 15.4969 127.835 15.5108 127.853 15.5287C127.871 15.5466 127.885 15.5681 127.894 15.5918C127.902 15.6155 127.907 15.6408 127.905 15.6661" fill="black"/>
        <path d="M139.936 15.6661V16.3455C139.938 16.3708 139.934 16.3961 139.925 16.4198C139.916 16.4435 139.902 16.465 139.884 16.483C139.865 16.5008 139.844 16.5147 139.82 16.5237C139.797 16.5326 139.771 16.5363 139.745 16.5348H133.076C133.026 16.5339 132.978 16.5138 132.942 16.4785C132.907 16.4431 132.886 16.3955 132.886 16.3455V7.50878C132.886 7.45886 132.907 7.41121 132.942 7.37591C132.978 7.3406 133.026 7.3204 133.076 7.3196H139.594C139.62 7.31797 139.645 7.32176 139.669 7.33069C139.693 7.33963 139.714 7.35351 139.732 7.37141C139.751 7.38931 139.764 7.41082 139.774 7.43451C139.782 7.4582 139.786 7.48352 139.785 7.50878V8.18829C139.786 8.21356 139.782 8.23888 139.774 8.26256C139.764 8.28626 139.751 8.30776 139.732 8.32567C139.714 8.34357 139.693 8.35745 139.669 8.36639C139.645 8.37532 139.62 8.3791 139.594 8.37748H134.136V11.2626H138.987C139.013 11.2611 139.037 11.2647 139.061 11.2734C139.084 11.2821 139.106 11.2957 139.124 11.3131C139.142 11.3306 139.156 11.3516 139.165 11.3749C139.174 11.3981 139.178 11.423 139.177 11.4479V12.1313C139.179 12.1564 139.174 12.1816 139.166 12.2051C139.157 12.2287 139.143 12.25 139.124 12.2678C139.107 12.2857 139.085 12.2995 139.061 12.3084C139.038 12.3173 139.013 12.3212 138.987 12.3197H134.136V15.4768H139.746C139.772 15.4752 139.797 15.479 139.821 15.4879C139.845 15.4969 139.866 15.5108 139.885 15.5286C139.903 15.5466 139.917 15.5681 139.926 15.5918C139.934 15.6155 139.939 15.6408 139.937 15.6661" fill="black"/>
        <path d="M12.2176 24.5193C8.98511 24.5172 5.88539 23.2297 3.5986 20.9393C1.31182 18.6489 0.0247447 15.5426 0.0197754 12.3019C0.024744 9.06117 1.31175 5.95468 3.59849 3.66399C5.88523 1.3733 8.98496 0.085434 12.2176 0.0829468C15.4504 0.085434 18.5501 1.3733 20.8367 3.66399C23.1235 5.95468 24.4106 9.06117 24.4155 12.3019C24.4106 15.5426 23.1235 18.6489 20.8367 20.9393C18.5499 23.2297 15.4502 24.5172 12.2176 24.5193ZM12.2176 1.02359C9.23371 1.02566 6.37238 2.2143 4.26152 4.32867C2.15065 6.44305 0.962632 9.31051 0.958075 12.3019C0.960972 15.2937 2.14853 18.162 4.2598 20.2764C6.37106 22.391 9.23334 23.5787 12.2176 23.5787C15.202 23.5787 18.0643 22.391 20.1755 20.2764C22.2868 18.162 23.4743 15.2937 23.4772 12.3019C23.4726 9.31051 22.2846 6.44305 20.1738 4.32867C18.0629 2.2143 15.2016 1.02566 12.2176 1.02359Z" fill="black"/>
        <path d="M13.7597 22.5862C11.0816 22.5842 8.51364 21.5173 6.61916 19.6195C4.72469 17.7218 3.65844 15.1482 3.6543 12.4633C3.65844 9.77846 4.72469 7.20492 6.61916 5.30718C8.51364 3.40944 11.0816 2.3425 13.7597 2.34042C16.4379 2.3425 19.0059 3.40944 20.9004 5.30718C22.7948 7.20492 23.8611 9.77846 23.8652 12.4633C23.8611 15.1482 22.7948 17.7218 20.9004 19.6195C19.0059 21.5173 16.4379 22.5842 13.7597 22.5862ZM13.7597 3.071C11.275 3.07307 8.89256 4.06309 7.13501 5.82387C5.37745 7.58465 4.38832 9.97237 4.3846 12.4633C4.38873 14.9541 5.37807 17.3414 7.13558 19.1018C8.89309 20.8623 11.2753 21.852 13.7597 21.8541C16.2442 21.852 18.6264 20.8623 20.3839 19.1018C22.1414 17.3414 23.1308 14.9541 23.1349 12.4633C23.1308 9.97264 22.1414 7.5853 20.3839 5.82487C18.6264 4.06442 16.2442 3.07464 13.7597 3.07257V3.071Z" fill="black"/>
        <path d="M15.3014 20.6548C13.1778 20.6532 11.1416 19.8071 9.63935 18.3023C8.13714 16.7975 7.29164 14.7568 7.28833 12.628C7.29164 10.499 8.13714 8.45835 9.63935 6.95357C11.1416 5.44878 13.1778 4.60277 15.3014 4.60112C17.4252 4.60236 19.4616 5.44823 20.9639 6.95311C22.4662 8.45799 23.3115 10.4989 23.3144 12.628C23.3111 14.7568 22.4656 16.7975 20.9634 18.3023C19.4612 19.8071 17.425 20.6532 15.3014 20.6548ZM15.3014 5.12316C13.3157 5.12441 11.4118 5.91529 10.0071 7.32225C8.60246 8.72922 7.81196 10.6373 7.80906 12.628C7.81237 14.6182 8.60307 16.526 10.0076 17.9326C11.4122 19.3392 13.316 20.1299 15.3014 20.1311C17.2867 20.1299 19.1905 19.3392 20.5951 17.9326C21.9997 16.526 22.7905 14.6182 22.7938 12.628C22.7908 10.6373 22.0003 8.72922 20.5957 7.32225C19.1911 5.91529 17.287 5.12441 15.3014 5.12316Z" fill="black"/>
        <path d="M16.8435 18.7217C15.2745 18.7205 13.77 18.0954 12.66 16.9836C11.5501 15.8717 10.9254 14.364 10.9229 12.791C10.925 11.2177 11.5496 9.70951 12.6595 8.59734C13.7695 7.48517 15.2743 6.85987 16.8435 6.85863C18.4129 6.85987 19.9177 7.48517 21.0277 8.59734C22.1377 9.70951 22.7621 11.2177 22.7642 12.791C22.7618 14.364 22.137 15.8717 21.0271 16.9836C19.9172 18.0954 18.4127 18.7205 16.8435 18.7217ZM16.8435 7.17217C15.3572 7.17342 13.932 7.76568 12.8807 8.81905C11.8294 9.87243 11.2378 11.3009 11.2357 12.791C11.2382 14.2808 11.8299 15.7088 12.8813 16.7619C13.9325 17.8148 15.3574 18.4069 16.8435 18.4082C18.3297 18.4069 19.7546 17.8148 20.8059 16.7619C21.8572 15.7088 22.4489 14.2808 22.4514 12.791C22.4494 11.3009 21.8579 9.87243 20.8065 8.81905C19.7552 7.76568 18.33 7.17342 16.8435 7.17217Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_16_3">
        <rect width="140" height="24.5711" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        </div>

                <div><svg width="210" height="48" viewBox="0 0 240 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2659_41930)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5558 77.429H40.8139C19.4589 77.429 2.14722 60.1174 2.14722 38.7623C2.14722 17.4073 19.4589 0.0957031 40.8139 0.0957031C62.1688 0.0957031 79.4805 17.4073 79.4805 38.7623C79.4805 40.6745 79.3415 42.5553 79.0728 44.3952H73.6604C73.9717 42.5656 74.1341 40.6839 74.1341 38.7623C74.1341 20.3602 59.2162 5.4422 40.8139 5.4422C22.4116 5.4422 7.49372 20.3602 7.49372 38.7623C7.49372 57.1646 22.4116 72.0825 40.8139 72.0825H60.6314C55.5707 75.099 49.7647 76.9951 43.5558 77.429ZM68.0389 66.3542H40.8139C25.5753 66.3542 13.2221 54.0008 13.2221 38.7623C13.2221 23.5239 25.5753 11.1706 40.8139 11.1706C56.0524 11.1706 68.4056 23.5239 68.4056 38.7623C68.4056 40.6911 68.2073 42.5755 67.8296 44.3952H62.3404C62.8093 42.5982 63.0591 40.7109 63.0591 38.7623C63.0591 26.4766 53.0996 16.517 40.8139 16.517C28.5282 16.517 18.5686 26.4766 18.5686 38.7623C18.5686 51.0482 28.5282 61.0076 40.8139 61.0076H72.5615C71.2159 62.9245 69.7011 64.7139 68.0389 66.3542ZM40.8139 55.2792H75.891C76.7009 53.5624 77.3884 51.7765 77.9423 49.9328H40.8139C34.6446 49.9328 29.6436 44.9316 29.6436 38.7623C29.6436 32.5932 34.6446 27.592 40.8139 27.592C46.9831 27.592 51.9842 32.5932 51.9842 38.7623C51.9842 40.82 51.4301 42.7425 50.4627 44.3952H56.3445C56.9827 42.6364 57.3307 40.7388 57.3307 38.7623C57.3307 29.6404 49.9358 22.2455 40.8139 22.2455C31.6919 22.2455 24.2969 29.6404 24.2969 38.7623C24.2969 47.8844 31.6919 55.2792 40.8139 55.2792ZM114.335 60.9971C101.614 60.9971 93.8853 51.9017 93.8853 38.7638C93.8853 25.2098 102.03 16.5304 114.335 16.5304C126.998 16.5304 134.845 25.507 134.845 38.7043C134.845 52.3773 126.641 60.9971 114.335 60.9971ZM114.335 22.4158C106.013 22.4158 100.841 28.8955 100.841 38.7043C100.841 48.751 106.132 54.993 114.335 54.993C122.777 54.993 127.889 48.5132 127.889 38.7638C127.889 28.7766 122.539 22.4158 114.335 22.4158ZM145.987 60.4027H139.745V29.1333H145.215L146.047 34.9591H146.463C148.425 30.8574 152.229 28.5388 156.926 28.5388C163.94 28.5388 167.745 33.5919 167.745 41.3201V60.4027H161.444V41.9741C161.444 36.5048 158.947 33.9486 154.548 33.9486C149.376 33.9486 145.987 38.0505 145.987 43.9952V60.4027ZM202.584 60.4027V16.6493H196.283V35.1969H195.925C194.321 31.3328 190.636 28.5388 185.285 28.5388C177.378 28.5388 172.028 34.8402 172.028 45.0058C172.028 54.8146 177.199 60.9971 185.226 60.9971C190.099 60.9971 194.261 58.6787 195.925 54.8741H196.283L196.997 60.4027H202.584ZM196.283 46.6108C196.283 51.7828 192.597 55.6469 187.129 55.6469C181.896 55.6469 178.448 52.0206 178.448 45.0058C178.448 38.2883 181.54 33.9486 187.246 33.9486C192.418 33.9486 196.283 37.456 196.283 43.1629V46.6108ZM222.546 60.9971C213.391 60.9971 207.327 54.3985 207.327 44.8275C207.327 35.1969 213.391 28.5388 222.546 28.5388C231.702 28.5388 237.705 35.1969 237.705 44.8275C237.705 54.3985 231.702 60.9971 222.546 60.9971ZM222.546 33.9486C217.135 33.9486 213.747 38.11 213.747 44.768C213.747 51.3072 216.958 55.528 222.546 55.528C227.896 55.528 231.284 51.4856 231.284 44.7086C231.284 38.2883 228.135 33.9486 222.546 33.9486Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_2659_41930">
        <rect width="240" height="77.3333" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        </div>

                <div><svg width="108" height="42" viewBox="0 0 108 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1844_38661)">
        <path d="M40.2347 25.4485L40.1816 25.5042C40.1569 25.5298 40.1317 25.5553 40.1064 25.5806L25.5609 40.1027C23.027 42.6325 18.9189 42.6325 16.385 40.1027L12.3683 36.0926C12.0835 35.8094 12.0829 35.3488 12.3664 35.0644C12.4498 34.9807 12.5523 34.9186 12.6651 34.8834C16.9704 33.5544 20.4687 32.0202 23.1597 30.2811C29.5686 26.1391 35.2602 24.5282 40.2347 25.4485ZM37.1852 13.5024C42.5556 15.1947 41.9288 19.1453 42 20.7028C36.1187 17.6188 29.0433 18.7492 20.7739 24.0937C14.6102 28.0772 9.4472 29.7195 5.28483 29.0208C1.12245 28.322 0.186141 23.2386 0 21.8878C4.57369 24.2003 10.7031 22.873 18.388 17.9063C25.5492 13.2782 31.8149 11.8102 37.1852 13.5024ZM25.5609 1.89732L29.3351 5.66495C29.6194 5.9486 29.6198 6.40916 29.3362 6.69347C29.235 6.79491 29.1061 6.86417 28.9657 6.89246C23.5019 7.99318 19.1322 9.60202 15.8567 11.719C10.2438 15.3466 5.46063 17.0326 1.5073 16.7773L1.50773 16.7762L16.385 1.89732C18.9189 -0.63244 23.027 -0.63244 25.5609 1.89732Z" fill="black"/>
        </g>
        <g clip-path="url(#clip1_1844_38661)">
        <path d="M61.592 17.3402C61.5173 16.6406 61.2022 16.096 60.6468 15.7061C60.0968 15.3163 59.3812 15.1214 58.5001 15.1214C57.8807 15.1214 57.3493 15.2148 56.9061 15.4017C56.4629 15.5886 56.1238 15.8423 55.8888 16.1627C55.6538 16.4831 55.5337 16.8489 55.5283 17.2601C55.5283 17.6019 55.6058 17.8982 55.7606 18.1492C55.9208 18.4002 56.1371 18.6138 56.4095 18.79C56.6818 18.9609 56.9835 19.1051 57.3146 19.2226C57.6457 19.3401 57.9795 19.4388 58.3159 19.519L59.8538 19.9034C60.4733 20.0476 61.0687 20.2426 61.6401 20.4881C62.2169 20.7338 62.7321 21.0435 63.1861 21.4173C63.6453 21.7911 64.0084 22.2424 64.2754 22.771C64.5424 23.2998 64.6759 23.9192 64.6759 24.6294C64.6759 25.5906 64.4303 26.4371 63.939 27.1686C63.4477 27.8949 62.7375 28.4636 61.8083 28.8748C60.8845 29.2806 59.7657 29.4836 58.4521 29.4836C57.1758 29.4836 56.0677 29.286 55.1278 28.8909C54.1933 28.4956 53.4617 27.9189 52.9331 27.1606C52.4097 26.4023 52.1267 25.4785 52.084 24.3891H55.0077C55.0504 24.9605 55.2266 25.4357 55.5364 25.8149C55.8461 26.194 56.2493 26.4771 56.7459 26.664C57.2479 26.8509 57.8086 26.9444 58.428 26.9444C59.0742 26.9444 59.6402 26.8483 60.1262 26.656C60.6175 26.4584 61.002 26.1861 61.2796 25.8389C61.5573 25.4865 61.6989 25.0754 61.7042 24.6054C61.6989 24.1782 61.5733 23.8257 61.3277 23.548C61.082 23.265 60.7376 23.03 60.2944 22.8432C59.8565 22.6509 59.3438 22.48 58.7564 22.3305L56.8901 21.8499C55.539 21.5028 54.471 20.9768 53.686 20.2719C52.9064 19.5617 52.5165 18.6192 52.5165 17.4443C52.5165 16.4778 52.7782 15.6314 53.3015 14.9051C53.8302 14.1789 54.5484 13.6155 55.4563 13.215C56.3641 12.8091 57.392 12.6062 58.5402 12.6062C59.7043 12.6062 60.7243 12.8091 61.6 13.215C62.4811 13.6155 63.1727 14.1735 63.6747 14.8891C64.1766 15.5993 64.4356 16.4164 64.4517 17.3402H61.592ZM69.7363 29.2353L66.26 16.9317H69.2157L71.3785 25.5827H71.4905L73.7014 16.9317H76.6251L78.8358 25.5346H78.956L81.0867 16.9317H84.0504L80.5661 29.2353H77.5462L75.2393 20.9207H75.0711L72.7642 29.2353H69.7363ZM91.1695 29.4756C89.9359 29.4756 88.8705 29.2192 87.9735 28.7066C87.0817 28.1886 86.3954 27.457 85.9148 26.5118C85.4342 25.5612 85.1939 24.4425 85.1939 23.1556C85.1939 21.89 85.4342 20.7792 85.9148 19.8233C86.4008 18.8621 87.079 18.1145 87.9494 17.5805C88.8198 17.0412 89.8425 16.7715 91.0173 16.7715C91.7755 16.7715 92.4912 16.8943 93.164 17.1399C93.8422 17.3802 94.4403 17.7541 94.9582 18.2614C95.4816 18.7687 95.8928 19.4148 96.1918 20.1998C96.4909 20.9795 96.6404 21.9086 96.6404 22.9873V23.8765H86.5556V21.922H93.8609C93.8555 21.3666 93.7354 20.8726 93.5004 20.4401C93.2655 20.0022 92.9371 19.6578 92.5152 19.4068C92.0987 19.1558 91.6127 19.0303 91.0573 19.0303C90.4646 19.0303 89.9439 19.1745 89.4954 19.4629C89.0468 19.7459 88.697 20.1197 88.446 20.5843C88.2004 21.0435 88.0749 21.5482 88.0696 22.0982V23.8044C88.0696 24.52 88.2004 25.1341 88.4621 25.6467C88.7237 26.154 89.0895 26.5439 89.5594 26.8162C90.0293 27.0832 90.5794 27.2167 91.2095 27.2167C91.6314 27.2167 92.0132 27.158 92.355 27.0405C92.6967 26.9177 92.9931 26.7387 93.2441 26.5038C93.4951 26.2688 93.6846 25.9778 93.8128 25.6307L96.5202 25.935C96.3493 26.6506 96.0236 27.2754 95.543 27.8095C95.0678 28.3381 94.459 28.7493 93.7167 29.043C92.9744 29.3314 92.1254 29.4756 91.1695 29.4756ZM101.993 12.8305V29.2353H99.0935V12.8305H101.993ZM107.875 12.8305V29.2353H104.975V12.8305H107.875Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1844_38661">
        <rect width="42" height="42" fill="white"/>
        </clipPath>
        <clipPath id="clip1_1844_38661">
        <rect width="56" height="18.1176" fill="white" transform="translate(51.8823 11.9412)"/>
        </clipPath>
        </defs>
        </svg>

        </div>

        <div><svg width="140" height="53" viewBox="0 0 140 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_160_11954)">
            <path d="M59.0085 45V24.6364H66.804C68.2756 24.6364 69.4986 24.8684 70.473 25.3324C71.4541 25.7898 72.1866 26.4162 72.6705 27.2116C73.161 28.0071 73.4062 28.9086 73.4062 29.9162C73.4062 30.7448 73.2472 31.4541 72.929 32.044C72.6108 32.6274 72.1832 33.1013 71.6463 33.4659C71.1094 33.8305 70.5095 34.0923 69.8466 34.2514V34.4503C70.5691 34.4901 71.2618 34.7121 71.9247 35.1165C72.5942 35.5142 73.1411 36.0777 73.5653 36.8068C73.9896 37.536 74.2017 38.4176 74.2017 39.4517C74.2017 40.5057 73.9465 41.4536 73.4361 42.2955C72.9257 43.1307 72.1567 43.7902 71.1293 44.2741C70.1018 44.758 68.8092 45 67.2514 45H59.0085ZM62.6974 41.9176H66.6648C68.0038 41.9176 68.9683 41.6624 69.5582 41.152C70.1548 40.6349 70.4531 39.9721 70.4531 39.1634C70.4531 38.5601 70.304 38.0166 70.0057 37.5327C69.7074 37.0421 69.2831 36.6577 68.733 36.3793C68.1828 36.0942 67.5265 35.9517 66.7642 35.9517H62.6974V41.9176ZM62.6974 33.2969H66.3466C66.983 33.2969 67.5563 33.1809 68.0668 32.9489C68.5772 32.7102 68.9782 32.3755 69.2699 31.9446C69.5682 31.5071 69.7173 30.9901 69.7173 30.3935C69.7173 29.6046 69.4389 28.955 68.8821 28.4446C68.3319 27.9342 67.5133 27.679 66.4261 27.679H62.6974V33.2969ZM90.2475 24.6364H93.9364V37.9403C93.9364 39.3987 93.5917 40.6813 92.9023 41.7884C92.2196 42.8954 91.2584 43.7604 90.0188 44.3835C88.7792 45 87.3308 45.3082 85.6737 45.3082C84.0098 45.3082 82.5581 45 81.3185 44.3835C80.079 43.7604 79.1178 42.8954 78.435 41.7884C77.7522 40.6813 77.4109 39.3987 77.4109 37.9403V24.6364H81.0998V37.6321C81.0998 38.4806 81.2854 39.2363 81.6566 39.8991C82.0344 40.562 82.5647 41.0824 83.2475 41.4602C83.9303 41.8314 84.739 42.017 85.6737 42.017C86.6083 42.017 87.417 41.8314 88.0998 41.4602C88.7892 41.0824 89.3195 40.562 89.6907 39.8991C90.0619 39.2363 90.2475 38.4806 90.2475 37.6321V24.6364ZM101.635 24.6364V45H97.946V24.6364H101.635ZM105.63 45V24.6364H109.319V41.9077H118.287V45H105.63ZM128.39 45H121.489V24.6364H128.529C130.551 24.6364 132.287 25.044 133.739 25.8594C135.197 26.6681 136.318 27.8314 137.1 29.3494C137.882 30.8674 138.273 32.6837 138.273 34.7983C138.273 36.9195 137.879 38.7424 137.09 40.267C136.308 41.7917 135.177 42.9616 133.699 43.777C132.228 44.5923 130.458 45 128.39 45ZM125.178 41.8082H128.211C129.629 41.8082 130.812 41.5497 131.76 41.0327C132.708 40.509 133.421 39.7301 133.898 38.696C134.375 37.6553 134.614 36.3561 134.614 34.7983C134.614 33.2405 134.375 31.9479 133.898 30.9205C133.421 29.8864 132.715 29.1141 131.78 28.6037C130.852 28.0866 129.699 27.8281 128.32 27.8281H125.178V41.8082Z" fill="black"/>
            <path d="M58.0094 10.0706C57.9816 9.30655 58.1092 8.54477 58.3849 7.83099C58.6605 7.11721 59.0784 6.46624 59.6134 5.91712C60.1484 5.368 60.7895 4.93201 61.4982 4.63547C62.207 4.33884 62.9687 4.18778 63.7376 4.19122C66.6349 4.19122 68.3497 5.8815 68.8671 7.86583L67.0489 8.47577C66.8888 7.73601 66.4659 7.07833 65.8578 6.62341C65.2496 6.16849 64.4968 5.94688 63.7376 5.9991C61.8602 5.9991 59.9829 7.35869 59.9829 10.1073C59.9829 12.8559 61.8159 14.164 63.7597 14.164C64.5232 14.1861 65.2719 13.9525 65.8858 13.5007C66.4997 13.0489 66.9431 12.4051 67.145 11.6727L68.9114 12.246C68.609 13.3642 67.9308 14.3457 66.9896 15.0276C66.0484 15.7095 64.9007 16.0505 63.7376 15.994C62.9617 16.0084 62.1913 15.8634 61.4745 15.5678C60.7577 15.2722 60.1101 14.8326 59.5723 14.2764C59.0345 13.7202 58.618 13.0595 58.3491 12.3358C58.0802 11.612 57.9645 10.8409 58.0094 10.0706Z" fill="black"/>
            <path d="M72.4152 15.7222H70.5527V4.16187H72.4152V8.69633C72.6866 8.37734 73.027 8.12372 73.411 7.95442C73.7951 7.78512 74.2128 7.70459 74.6326 7.71888C76.5617 7.71888 77.493 9.09318 77.493 10.8056V15.7222H75.6822V11.1215C75.7162 10.8978 75.6989 10.6692 75.6318 10.4529C75.5647 10.2367 75.4495 10.0382 75.2948 9.87225C75.1399 9.70639 74.9496 9.57726 74.7377 9.4945C74.5258 9.41182 74.2979 9.37759 74.0709 9.39453C73.8456 9.39471 73.6229 9.44142 73.4167 9.53166C73.2106 9.62199 73.0255 9.75387 72.8733 9.91905C72.7212 10.0841 72.6052 10.2789 72.5327 10.491C72.4602 10.7031 72.4328 10.9278 72.4522 11.151L72.4152 15.7222Z" fill="black"/>
            <path d="M81.6523 11.2683L83.6553 10.9596C84.1062 10.9008 84.2318 10.6729 84.2318 10.401C84.2318 9.74694 83.7883 9.21778 82.7535 9.21778C82.554 9.20075 82.3531 9.22423 82.163 9.28669C81.9727 9.34923 81.7973 9.44946 81.6474 9.58142C81.4974 9.71339 81.376 9.87426 81.2904 10.0543C81.2049 10.2344 81.1569 10.4298 81.1497 10.6288L79.4497 10.2467C79.5901 8.9018 80.817 7.70386 82.7387 7.70386C85.1483 7.70386 86.0648 9.06345 86.0648 10.6435V14.5019C86.0605 14.9203 86.0926 15.3383 86.1609 15.7512H84.4239C84.3643 15.424 84.3395 15.0914 84.35 14.7591C84.0906 15.1545 83.7318 15.4757 83.3093 15.691C82.8866 15.9062 82.4148 16.0081 81.9405 15.9864C81.6099 16.0134 81.277 15.9735 80.9623 15.8691C80.6476 15.7646 80.3575 15.5977 80.1095 15.3786C79.8614 15.1594 79.6606 14.8925 79.5193 14.5941C79.378 14.2956 79.299 13.9717 79.2871 13.642C79.2871 12.2236 80.3145 11.4593 81.6523 11.2683ZM84.2318 12.5176V12.1649L82.1919 12.4661C81.9146 12.4756 81.6517 12.5908 81.4577 12.7878C81.2636 12.9849 81.1533 13.2486 81.1497 13.5244C81.152 13.6668 81.184 13.8071 81.2437 13.9365C81.3034 14.066 81.3896 14.1816 81.4965 14.2762C81.6035 14.3709 81.7291 14.4424 81.8653 14.4863C82.0016 14.5302 82.1454 14.5455 82.288 14.5312C82.557 14.5586 82.829 14.5245 83.0829 14.4317C83.3369 14.339 83.5663 14.1898 83.7537 13.9957C83.9411 13.8016 84.0815 13.5676 84.1643 13.3115C84.2472 13.0554 84.2702 12.7839 84.2318 12.5176Z" fill="black"/>
            <path d="M89.231 4.00009C89.3923 3.99811 89.5525 4.02805 89.7022 4.08818C89.8519 4.14823 89.9881 4.23719 90.1029 4.35006C90.2177 4.46284 90.3089 4.59713 90.3711 4.74527C90.4333 4.89332 90.4653 5.05222 90.4653 5.21275C90.4653 5.53234 90.3376 5.83895 90.1103 6.06494C89.883 6.29102 89.5746 6.418 89.2532 6.418C88.9317 6.418 88.6233 6.29102 88.3961 6.06494C88.1687 5.83895 88.041 5.53234 88.041 5.21275C88.0409 4.89616 88.1653 4.59205 88.3877 4.36545C88.61 4.13894 88.9127 4.00775 89.231 4.00009ZM88.3219 15.7588V7.94664H90.1623V15.722L88.3219 15.7588Z" fill="black"/>
            <path d="M94.4329 15.7217H92.5703V7.94633H94.3885V8.98254C94.6245 8.58474 94.9639 8.25741 95.3709 8.03502C95.778 7.81255 96.2378 7.70321 96.702 7.71844C98.6089 7.71844 99.5254 9.09274 99.5254 10.8051V15.7217H97.6628V11.1211C97.6628 10.1658 97.2268 9.3941 96.0589 9.3941C95.8265 9.39547 95.597 9.4458 95.3854 9.54164C95.174 9.63747 94.9852 9.77675 94.8317 9.95018C94.6781 10.1237 94.5632 10.3276 94.4944 10.5484C94.4257 10.7692 94.4048 11.002 94.4329 11.2314V15.7217Z" fill="black"/>
            <path d="M101.795 15.7222V4.16187H103.657V15.7222H101.795Z" fill="black"/>
            <path d="M106.984 4C107.307 4 107.618 4.12775 107.846 4.35521C108.075 4.58258 108.204 4.89099 108.204 5.21265C108.202 5.45035 108.13 5.68237 107.996 5.87946C107.862 6.07655 107.673 6.22985 107.452 6.32018C107.231 6.41051 106.988 6.43374 106.753 6.38703C106.519 6.34023 106.303 6.22564 106.134 6.05745C105.965 5.88935 105.85 5.67531 105.803 5.44218C105.756 5.20904 105.779 4.96739 105.87 4.74741C105.961 4.52753 106.115 4.33921 106.313 4.20621C106.512 4.07321 106.745 4.00146 106.984 4ZM106.068 15.7587V7.94655H107.915V15.722L106.068 15.7587Z" fill="black"/>
            <path d="M112.189 15.7219H110.326V7.94654H112.137V8.98275C112.374 8.58599 112.713 8.2596 113.12 8.0373C113.527 7.815 113.987 7.70506 114.45 7.71865C116.364 7.71865 117.281 9.09295 117.281 10.8053V15.7219H115.418V11.1213C115.453 10.8976 115.435 10.669 115.368 10.4527C115.301 10.2364 115.186 10.038 115.031 9.87203C114.876 9.70616 114.686 9.57703 114.474 9.49428C114.262 9.4116 114.034 9.37736 113.807 9.39431C113.575 9.3956 113.346 9.44584 113.135 9.54176C112.923 9.63768 112.735 9.77705 112.582 9.95074C112.429 10.1243 112.315 10.3283 112.247 10.5492C112.179 10.77 112.159 11.0025 112.189 11.2316V15.7219Z" fill="black"/>
            <path d="M123.651 11.2318L126.933 15.7222H124.649L122.35 12.5179L121.389 13.5248V15.7295H119.541V4.16187H121.389V11.0921L124.39 7.94676H126.866L123.651 11.2318Z" fill="black"/>
            <path d="M22.7212 11.4508L35.8319 18.9376V33.9711L22.7573 41.5059L9.64659 34.031V18.9974L22.7212 11.4508ZM22.7212 0.399902L17.9099 3.17458L4.81127 10.7212L0 13.4959V19.0213V34.0429V39.5683L4.81127 42.3191L17.922 49.8059L22.7332 52.5566L27.5446 49.782L40.6192 42.2354L45.4304 39.4726V33.9473V18.9136V13.3883L40.6192 10.6375L27.5085 3.15066L22.6972 0.399902H22.7212Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_160_11954">
            <rect width="140" height="53" fill="white"/>
            </clipPath>
            </defs>
            </svg>

        </div>    

        </div>
        </div> 


        </div>
        <div className='flex flex-row bg-white '>
        <div className='h-[700px] w-full gap-9 p-10 flex-col'>
            <div className='text-black text-4xl font-bold'>FAQs</div>
            <div className='text-black'>Can’t find an answer? Join our Discord or follow us Twitter.</div>
        </div>
        <div className='h-[700px] w-full flex items-center justify-center'></div>
      </div>

    </div>
  )
}

export default HeroSection