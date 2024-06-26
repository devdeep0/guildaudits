import Link from "next/link"
import Image from "next/image"
function Footer() {
  return (
    <div className="bg-white p-10 text-black h-[280px] flex flex-col gap-5 w-full">
        <div className="flex justify-between">
            <div>
            <Image
            className="h-[50px] w-auto"
            src="/IMG-20240606-WA0004.jpg"
            alt=""
            height={500}
            width={500}
            />
            </div>
            <div className="flex text-xl items-center justify-center gap-10 font-semibold text-[#696d71]">
                <div>Home</div>
                <div>Audit</div>
                <div>Updraft</div>
                <div>CodeHawks</div>
                <div>Solodit</div>
            </div>
            <div className="flex gap-4">
               <div><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>github [#142]</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399C99.523,7399,104,7403.59,104,7409.253C104,7413.782,101.138,7417.624,97.167,7418.981C96.66,7419.082,96.48,7418.762,96.48,7418.489C96.48,7418.151,96.492,7417.047,96.492,7415.675C96.492,7414.719,96.172,7414.095,95.813,7413.777C98.04,7413.523,100.38,7412.656,100.38,7408.718C100.38,7407.598,99.992,7406.684,99.35,7405.966C99.454,7405.707,99.797,7404.664,99.252,7403.252C99.252,7403.252,98.414,7402.977,96.505,7404.303C95.706,7404.076,94.85,7403.962,94,7403.958C93.15,7403.962,92.295,7404.076,91.497,7404.303C89.586,7402.977,88.746,7403.252,88.746,7403.252C88.203,7404.664,88.546,7405.707,88.649,7405.966C88.01,7406.684,87.619,7407.598,87.619,7408.718C87.619,7412.646,89.954,7413.526,92.175,7413.785C91.889,7414.041,91.63,7414.493,91.54,7415.156C90.97,7415.418,89.522,7415.871,88.63,7414.304C88.63,7414.304,88.101,7413.319,87.097,7413.247C87.097,7413.247,86.122,7413.234,87.029,7413.87C87.029,7413.87,87.684,7414.185,88.139,7415.37C88.139,7415.37,88.726,7417.2,91.508,7416.58C91.513,7417.437,91.522,7418.245,91.522,7418.489C91.522,7418.76,91.338,7419.077,90.839,7418.982C86.865,7417.627,84,7413.783,84,7409.253C84,7403.59,88.478,7399,94,7399" id="github-[#142]"></path></g></g></g></g></svg></div>
               <Link href='https://x.com/GuildAudits' className=" flex items-center justify-center"> <div className=" flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.226 18L9.19002 12.2473L4.13753 18H2L8.24169 10.8953L2 2H7.48796L11.2918 7.42183L16.0578 2H18.1953L12.2433 8.77562L18.7139 18H13.226ZM15.6063 16.3782H14.1673L5.06062 3.62182H6.49988L10.1472 8.72957L10.7779 9.6159L15.6063 16.3782Z" fill="#242E36"></path></svg></div></Link>
                <Link href='https://discord.gg/XCyM85QK6K' className=" flex items-center justify-center"><div className=" flex items-center justify-center"><svg className='h-[40px] flex items-center justify-center' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill="white"></path> <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z" fill="#5865F2"></path> </g></svg></div></Link>
            </div>
        </div>
        <div className="w-full flex justify-center items-center text-xl text-[#b8bcc0]"><svg className="h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z" stroke="#b8bcc0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.646 9.00002C13.0379 7.58179 10.5975 7.6838 9.11336 9.23129C7.62921 10.7788 7.62921 13.2213 9.11336 14.7688C10.5975 16.3162 13.0379 16.4182 14.646 15" stroke="#b8bcc0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 2024 Guild Audits</div>
    </div>
  )
}

export default Footer