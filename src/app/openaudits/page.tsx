import React from 'react'
import {OrbitingCirclesDemo} from "@/components/spinningcircle"
import Header from '@/components/Header'
import { GridBackgroundDemo } from '@/components/gridbg'
function page() {
  return (
    <>
    <Header/>
    <div className='h-auto w-full flex flex-col pt-[130px] gap-10 '>
      {/* top */}
      <div className='flex flex-row'>
      <div className='w-2/4 flex flex-col items-center gap-10'>
        <h1 className='text-4xl font-bold'>Audits</h1>
        <div className='w-3/4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellendus doloremque vel rem delectus, nesciunt eos, corporis quis illum unde cum in, nemo vitae optio. Obcaecati reprehenderit tempore enim et.
        Fugiat tempora deserunt soluta ipsam quaerat voluptates culpa voluptatibus ipsum, suscipit laboriosam est molestiae, distinctio doloribus harum maiores atque quis? Unde maiores quisquam officiis reprehenderit atque quis error doloribus eum.
        Deleniti quos, porro commodi aliquid, mollitia cumque voluptas dignissimos tenetur optio nam eaque dicta impedit quidem magni eius labore non provident libero soluta nihil iste similique enim consequuntur dolorem! Incidunt.
        Nemo, doloribus dolores id distinctio reprehenderit modi voluptate iusto dignissimos dolor atque facere et beatae voluptatum fuga eveniet consectetur quis. Animi totam nostrum, voluptas eligendi alias obcaecati? Temporibus, rerum. Necessitatibus.
        Similique ipsam totam, ipsum fuga ab quibusdam tempora deleniti temporibus mollitia vero id magnam! Facere dicta temporibus odit ad ipsum hic, eum ducimus sit repellat, harum voluptatum ea quo vitae.</div>
        
        <div className='text-xl font-semibold  flex items-start gap-5 '>
                <button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about audit</button>
                <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
      </div>
      <OrbitingCirclesDemo/>
      </div>

      {/* second */}
        <h1 className='text-4xl '>Smart Contracts</h1>
      <div className='w-full flex justify-center font-bold h-auto mt-20'>
        <div>
          
        <GridBackgroundDemo/>
        </div>
      </div>
    </div>

    </>
  )
}

export default page