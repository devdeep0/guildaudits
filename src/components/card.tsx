import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AUDIT REPORT & REMEDIATION",
    description:
      "We will explain vulnerabilities and provide comprehensive solutions for each identified smart contract issue after a thorough audit.",
    link: "",
  },
  {
    title: "PREVENT EXPENSIVE MISTAKES",
    description:
      "Smart contract vulnerabilities can lead to financial losses, reputational damage, and wasted time. Our audits ensure DApp security.",
    link: "AS",
  },
  {
    title: "UNHACKABLE DAPP AUDITS",
    description:"Our audits enhance DApp security, ensuring resilience against hacks. None of our audited DApps have experienced breaches.",
      link: "AS",
   
},
  
];
