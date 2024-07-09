"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Source Code Procurement",
    description:"We gather code specifications to understand smart contract behavior, review architecture for structure, and ensure secure third-party integration.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://www.iarpa.gov/images/research-programs/SOURCE_CODE/SoURCE_CODE_Logo_-_F_Transparent.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Preliminary Client Consultation",
    description:"We discuss DApp security concerns with developers and clients, analyzing code to tailor audits for identifying and mitigating vulnerabilities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/scroll/settings.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Manual Analysis of Smart Contracts",
    description:"We conduct a detailed smart contract inspection for threats like race conditions, transaction dependencies, timestamp issues, external calls, and DoS attacks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Functional & Logical Code Testing",
    description:"We Test Smart Contract Features to verify that the business and operational logic are implemented and working as intended.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Automated Tests Analysis",
    description:"Alongside manual testing, our audit included automated tools to execute diverse test cases, boosting efficiency and coverage.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Functional & Logical Code Testing",
    description:"We Test Smart Contract Features to verify that the business and operational logic are implemented and working as intended.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Submission of Initial Audit Report",
    description:"Following the completion of the audit phases, a detailed report was generated. This report documented all identified vulnerabilities, categorized by severity level.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Bug-fix by Client's Developers",
    description:"Client developers address identified vulnerabilities and issues, ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Analyse the Rectified Code",
    description:"We re-evaluate the updated codebase to ensure all vulnerabilities have been effectively resolved and the DApp meets the highest security standards.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Final Audit Report Submission",
    description:"We deliver a comprehensive audit report detailing findings, fixes, and recommendations, ensuring the DApp’s robust security and optimal performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Audit Announcement Post",
    description:"We share the completion of the audit, highlighting key findings and improvements to demonstrate the enhanced security and reliability of the DApp.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "AMA Session Based on Your Project",
    description:"In the AMA session, we discuss project features, development progress, and future plans, engaging with the community to build excitement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Niche Targeted PR for Your Project",
    description:"We create targeted PRs to showcase your project's unique features and benefits, maximizing impact and engagement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
