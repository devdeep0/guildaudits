import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Accordian() {
  return (
    <Accordion type="single" collapsible className=" w-5/6 flex flex-col gap-5">
    <AccordionItem value="item-1" className=' bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger className=''>what is cyfrin?</AccordionTrigger>
      <AccordionContent>
      Cyfrin is a smart contract auditing and research company, building state of the art security tools while helping world's biggest protocols secure their codebase and users.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className='bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger>What is smart contract audit?</AccordionTrigger>
      <AccordionContent>
      A smart contract audit involves a team of security experts performing a detailed analysis of a protocol, system or contract's code to identify and correct security issues, potential exploiting vectors, and inefficient coding to enhance its security.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3 " className='bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger>How can I partner with Cyfrin to audit my protocol or codebase?</AccordionTrigger>
      <AccordionContent>
      Our team of experts will be happy to guide you through every and each step of the process. To start, please fill up our contacts form.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className='bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger>How long do Audit takes?</AccordionTrigger>
      <AccordionContent>
      Security review timelines vary based on the codebase complexity, scope, and type of support requested by a protocol's team. For a full rundown of our timelines, costs, and details, and get guidance about the whole auditing process, please get in touch with one of our experts filling up our contact form.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className='bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger>How much does a security review costs?</AccordionTrigger>
      <AccordionContent>
      Security review costs vary based on the codebase complexity, scope, and type of review requested by a protocol's team. For a full rundown of our timelines, costs, and details, and get guidance about the whole auditing process, please get in touch with one of our experts filling up our contacts form.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className='bg-[#ecf2f6] p-3 rounded-md'>
      <AccordionTrigger>What is a competetive audit?</AccordionTrigger>
      <AccordionContent>
      A smart contract auditing competition or open audit is a special type of security reviews offering the highest level of scrutiny for your codebase. A community of security researchers reviews a given codebase to identify vulnerabilities, inefficiencies, and any other potential issues. These auditors compete against each other to find as many issues as possible, and they are rewarded based on the significance and quality of their findings.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  )
}

export default Accordian