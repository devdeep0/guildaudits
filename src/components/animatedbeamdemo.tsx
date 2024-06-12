"use client";

import { cn } from "@/libs/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref} className="h-16 w-16">
            <Icons.openai className="h-6 w-6" />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp className="h-6 w-6" />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger className="h-6 w-6" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={15}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        reverse
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={15}
        reverse
        endYOffset={10}
      />
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1503"
      height="1504"
      fill="none"
      viewBox="0 0 1503 1504"
      {...props}
    >
      <path fill="#fff" d="M287 258H1215V1102H287z"></path>
      <path
        fill="#E84142"
        fillRule="evenodd"
        d="M1502.5 752c0 414.77-336.23 751-751 751-414.766 0-751-336.23-751-751C.5 337.234 336.734 1 751.5 1c414.77 0 751 336.234 751 751zm-963.812 298.86H392.94c-30.626 0-45.754 0-54.978-5.9-9.963-6.46-16.051-17.16-16.789-28.97-.554-10.88 7.011-24.168 22.139-50.735l359.87-634.32c15.313-26.936 23.061-40.404 32.839-45.385 10.516-5.35 23.062-5.35 33.578 0 9.778 4.981 17.527 18.449 32.839 45.385l73.982 129.144.377.659c16.539 28.897 24.926 43.551 28.588 58.931a109.562 109.562 0 010 51.289c-3.69 15.497-11.992 30.257-28.781 59.591L687.573 964.702l-.489.856c-16.648 29.135-25.085 43.902-36.778 55.042-12.73 12.18-28.043 21.03-44.832 26.02-15.313 4.24-32.47 4.24-66.786 4.24zm368.062 0h208.84c30.81 0 46.31 0 55.54-6.08 9.96-6.46 16.23-17.35 16.79-29.15.53-10.53-6.87-23.3-21.37-48.323-.5-.852-1-1.719-1.51-2.601L1060.43 785.75l-1.19-2.015c-14.7-24.858-22.12-37.411-31.65-42.263a36.734 36.734 0 00-33.391 0c-9.594 4.981-17.342 18.08-32.655 44.462L857.306 964.891l-.357.616c-15.259 26.34-22.885 39.503-22.335 50.303.738 11.81 6.826 22.69 16.788 29.15 9.041 5.9 24.538 5.9 55.348 5.9z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1503"
    height="1504"
    fill="none"
    viewBox="0 0 1503 1504"
    {...props}
  >
    <path fill="#fff" d="M287 258H1215V1102H287z"></path>
    <path
      fill="#E84142"
      fillRule="evenodd"
      d="M1502.5 752c0 414.77-336.23 751-751 751-414.766 0-751-336.23-751-751C.5 337.234 336.734 1 751.5 1c414.77 0 751 336.234 751 751zm-963.812 298.86H392.94c-30.626 0-45.754 0-54.978-5.9-9.963-6.46-16.051-17.16-16.789-28.97-.554-10.88 7.011-24.168 22.139-50.735l359.87-634.32c15.313-26.936 23.061-40.404 32.839-45.385 10.516-5.35 23.062-5.35 33.578 0 9.778 4.981 17.527 18.449 32.839 45.385l73.982 129.144.377.659c16.539 28.897 24.926 43.551 28.588 58.931a109.562 109.562 0 010 51.289c-3.69 15.497-11.992 30.257-28.781 59.591L687.573 964.702l-.489.856c-16.648 29.135-25.085 43.902-36.778 55.042-12.73 12.18-28.043 21.03-44.832 26.02-15.313 4.24-32.47 4.24-66.786 4.24zm368.062 0h208.84c30.81 0 46.31 0 55.54-6.08 9.96-6.46 16.23-17.35 16.79-29.15.53-10.53-6.87-23.3-21.37-48.323-.5-.852-1-1.719-1.51-2.601L1060.43 785.75l-1.19-2.015c-14.7-24.858-22.12-37.411-31.65-42.263a36.734 36.734 0 00-33.391 0c-9.594 4.981-17.342 18.08-32.655 44.462L857.306 964.891l-.357.616c-15.259 26.34-22.885 39.503-22.335 50.303.738 11.81 6.826 22.69 16.788 29.15 9.041 5.9 24.538 5.9 55.348 5.9z"
      clipRule="evenodd"
    ></path>
  </svg>
  ),
  openai: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 397.7 311.7"
    style={{
      
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:url(#SVGID_2_);}\n\t.st2{fill:url(#SVGID_3_);}\n"
      }
    </style>
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={360.8791}
      y1={351.4553}
      x2={141.213}
      y2={-69.2936}
      gradientTransform="matrix(1 0 0 -1 0 314)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#00FFA3",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#DC1FFF",
        }}
      />
    </linearGradient>
    <path
      className="st0"
      d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5 c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
    />
    <linearGradient
      id="SVGID_2_"
      gradientUnits="userSpaceOnUse"
      x1={264.8291}
      y1={401.6014}
      x2={45.163}
      y2={-19.1475}
      gradientTransform="matrix(1 0 0 -1 0 314)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#00FFA3",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#DC1FFF",
        }}
      />
    </linearGradient>
    <path
      className="st1"
      d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5 c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
    />
    <linearGradient
      id="SVGID_3_"
      gradientUnits="userSpaceOnUse"
      x1={312.5484}
      y1={376.688}
      x2={92.8822}
      y2={-44.061}
      gradientTransform="matrix(1 0 0 -1 0 314)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#00FFA3",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#DC1FFF",
        }}
      />
    </linearGradient>
    <path
      className="st2"
      d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4 c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
    />
  </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 784.37 1277.39"
  >
    <g>
      <g fillRule="nonzero">
        <path
          fill="#343434"
          d="M392.07 0L383.5 29.11 383.5 873.74 392.07 882.29 784.13 650.54z"
        ></path>
        <path
          fill="#8C8C8C"
          d="M392.07 0L0 650.54 392.07 882.29 392.07 472.33z"
        ></path>
        <path
          fill="#3C3C3B"
          d="M392.07 956.52L387.24 962.41 387.24 1263.28 392.07 1277.38 784.37 724.89z"
        ></path>
        <path
          fill="#8C8C8C"
          d="M392.07 1277.38L392.07 956.52 0 724.89z"
        ></path>
        <path
          fill="#141414"
          d="M392.07 882.29L784.13 650.54 392.07 472.33z"
        ></path>
        <path
          fill="#393939"
          d="M0 650.54L392.07 882.29 392.07 472.33z"
        ></path>
      </g>
    </g>
  </svg>
  ),
  googleDocs: (props: IconProps) => (
    <svg
      width="47px"
      height="65px"
      viewBox="0 0 47 65"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Docs-icon</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-1"
        ></path>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-3"
        ></path>
        <linearGradient
          x1="50.0053945%"
          y1="8.58610612%"
          x2="50.0053945%"
          y2="100.013939%"
          id="linearGradient-5"
        >
          <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%"></stop>
          <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%"></stop>
        </linearGradient>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-6"
        ></path>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-8"
        ></path>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-10"
        ></path>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-12"
        ></path>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-14"
        ></path>
        <radialGradient
          cx="3.16804688%"
          cy="2.71744318%"
          fx="3.16804688%"
          fy="2.71744318%"
          r="161.248516%"
          gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
          id="radialGradient-16"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
        </radialGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Consumer-Apps-Docs-Large-VD-R8"
          transform="translate(-451.000000, -463.000000)"
        >
          <g id="Hero" transform="translate(0.000000, 63.000000)">
            <g id="Personal" transform="translate(277.000000, 309.000000)">
              <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                <g id="Group">
                  <g id="Clipped">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <path
                      d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                      id="Path"
                      fill="#4285F4"
                      fillRule="nonzero"
                      mask="url(#mask-2)"
                    ></path>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <polygon
                      id="Path"
                      fill="url(#linearGradient-5)"
                      fillRule="nonzero"
                      mask="url(#mask-4)"
                      points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                    ></polygon>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-7" fill="white">
                      <use xlinkHref="#path-6"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <path
                      d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                      id="Shape"
                      fill="#F1F1F1"
                      fillRule="nonzero"
                      mask="url(#mask-7)"
                    ></path>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <g id="Group" mask="url(#mask-9)">
                      <g transform="translate(26.437500, -2.954545)">
                        <path
                          d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                          id="Path"
                          fill="#A1C2FA"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-11" fill="white">
                      <use xlinkHref="#path-10"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <path
                      d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      mask="url(#mask-11)"
                    ></path>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-13" fill="white">
                      <use xlinkHref="#path-12"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <path
                      d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-13)"
                    ></path>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-15" fill="white">
                      <use xlinkHref="#path-14"></use>
                    </mask>
                    <g id="SVGID_1_"></g>
                    <path
                      d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                      id="Path"
                      fillOpacity="0.1"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-15)"
                    ></path>
                  </g>
                </g>
                <path
                  d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                  id="Path"
                  fill="url(#radialGradient-16)"
                  fillRule="nonzero"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  zapier: (props: IconProps) => (
    <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 38.4 33.5"
    style={{
     
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{"\n\t.st0{fill:#8247E5;}\n"}</style>
    <g>
      <path
        className="st0"
        d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3 c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7 c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1 L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
      />
    </g>
  </svg>
  ),
  messenger: (props: IconProps) => (
    <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 500 500"
    style={{
     
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {"\n\t.st0{fill:#FF0420;}\n\t.st1{fill:#FFFFFF;}\n"}
    </style>
    <circle className="st0" cx={250} cy={250} r={250} />
    <path
      className="st1"
      d="M177.1,316.4c-14.9,0-27.1-3.5-36.6-10.5c-9.4-7.1-14.1-17.3-14.1-30.4c0-2.8,0.3-6.1,0.9-10.1 c1.6-9,3.9-19.8,6.9-32.5c8.5-34.4,30.5-51.6,65.9-51.6c9.6,0,18.3,1.6,25.9,4.9c7.6,3.1,13.6,7.9,18,14.3 c4.4,6.3,6.6,13.8,6.6,22.5c0,2.6-0.3,5.9-0.9,9.9c-1.9,11.1-4.1,22-6.8,32.5c-4.4,17.1-11.9,30-22.7,38.5 C209.5,312.3,195.1,316.4,177.1,316.4z M179.8,289.4c7,0,12.9-2.1,17.8-6.2c5-4.1,8.6-10.4,10.7-19c2.9-11.8,5.1-22,6.6-30.8 c0.5-2.6,0.8-5.3,0.8-8.1c0-11.4-5.9-17.1-17.8-17.1c-7,0-13,2.1-18,6.2c-4.9,4.1-8.4,10.4-10.5,19c-2.3,8.4-4.5,18.6-6.8,30.8 c-0.5,2.5-0.8,5.1-0.8,7.9C161.7,283.7,167.8,289.4,179.8,289.4z"
    />
    <path
      className="st1"
      d="M259.3,314.6c-1.4,0-2.4-0.4-3.2-1.3c-0.6-1-0.8-2.1-0.6-3.4l25.9-122c0.2-1.4,0.9-2.5,2.1-3.4 c1.1-0.9,2.3-1.3,3.6-1.3H337c13.9,0,25,2.9,33.4,8.6c8.5,5.8,12.8,14.1,12.8,25c0,3.1-0.4,6.4-1.1,9.8c-3.1,14.4-9.4,25-19,31.9 c-9.4,6.9-22.3,10.3-38.7,10.3h-25.3l-8.6,41.1c-0.3,1.4-0.9,2.5-2.1,3.4c-1.1,0.9-2.3,1.3-3.6,1.3H259.3z M325.7,242.9 c5.3,0,9.8-1.4,13.7-4.3c4-2.9,6.6-7,7.9-12.4c0.4-2.1,0.6-4,0.6-5.6c0-3.6-1.1-6.4-3.2-8.3c-2.1-2-5.8-3-10.9-3h-22.5l-7.1,33.6 H325.7z"
    />
  </svg>
  ),
};
