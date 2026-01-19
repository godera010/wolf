import svgPaths from "./svg-euslon1743";
import clsx from "clsx";
import imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1 from "figma:asset/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";
type GroupTextProps = {
  text: string;
  additionalClassNames?: string;
};

function GroupText({ text, additionalClassNames = "" }: GroupTextProps) {
  return (
    <div className={clsx("relative shrink-0 size-[40px]", additionalClassNames)}>
      <div className="absolute left-1/2 size-[40px] top-0 translate-x-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <ellipse cx="20" cy="20" fill="var(--fill-0, white)" id="Ellipse 1" rx="20" ry="20" />
        </svg>
      </div>
      <p className="absolute font-['Montserrat:Light',sans-serif] font-light h-[40px] leading-[normal] left-[calc(50%-7px)] text-[#01257d] text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[6px] w-[20px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("h-[28px] relative rounded-[10px] shrink-0 w-[217px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[6px] text-[12px] text-black text-nowrap top-[6px]">{text}</p>
        <div className="absolute flex items-center justify-center left-[198px] size-[14px] top-[7px]">
          <div className="flex-none rotate-[180deg]">
            <KeyboardArrowUp />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#01257d] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function KeyboardArrowUp() {
  return (
    <div className="relative size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="keyboard_arrow_up">
          <path d={svgPaths.pe959140} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

export default function Booking() {
  return (
    <div className="bg-black relative size-full" data-name="booking 1">
      <div className="absolute bg-white font-['Montserrat:Medium',sans-serif] font-medium h-[80px] leading-[normal] left-0 right-[-1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] text-[#01257d] text-[15px] top-0" data-name="menu">
        <p className="absolute left-[778px] top-[calc(50%-9px)] w-[47px]">Home</p>
        <p className="absolute bottom-[31px] left-[993px] top-[31px] w-[54px]">Routes</p>
        <p className="absolute left-[1090px] top-[calc(50%-9px)] w-[71px]">About Us</p>
        <p className="absolute bottom-[31px] left-[864px] top-[31px] w-[98px]">Check Ticket</p>
      </div>
      <div className="absolute h-[126px] left-[46px] top-[-23px] w-[94px]" data-name="Gemini_Generated_Image_m0ozgqm0ozgqm0oz-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1} />
      </div>
      <div className="absolute bg-white h-[640px] left-0 overflow-clip right-0 top-[80px]" data-name="hero">
        <p className="absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#01257d] leading-[normal] right-[898px] text-[64px] to-[#e96f30] top-[19px] translate-x-[100%] w-[525px]" style={{ WebkitTextFillColor: "transparent" }}>
          Online Booking
        </p>
        <p className="absolute font-['Montserrat:Light',sans-serif] font-light leading-[normal] left-[478px] text-[16px] text-black text-nowrap top-[97px]">Secure your seat in just a few simple steps</p>
        <div className="absolute border border-solid border-white h-[272px] left-[305px] overflow-clip rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[276px] w-[670px]">
          <div className="absolute gap-[25px] grid-cols-[repeat(4,_fit-content(100%))] grid-rows-[repeat(2,_fit-content(100%))] inline-grid left-[21px] top-[68px]">
            <p className="[grid-area:1_/_1] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap">From :</p>
            <div className="[grid-area:1_/_2] h-[28px] relative rounded-[10px] shrink-0 w-[217px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[9px] text-[12px] text-black text-nowrap top-[6px]">Choose your Departure point</p>
                <div className="absolute flex items-center justify-center left-[198px] size-[14px] top-[7px]">
                  <div className="flex-none rotate-[180deg]">
                    <KeyboardArrowUp />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#01257d] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]" />
            </div>
            <p className="[grid-area:1_/_3] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap">Date :</p>
            <Text text="Choose your Destination point" additionalClassNames="[grid-area:1_/_4]" />
            <p className="[grid-area:2_/_1] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap">To :</p>
            <Text text="Choose your Destination point" additionalClassNames="[grid-area:2_/_2]" />
            <div className="[grid-area:2_/_4] place-self-stretch relative shrink-0" data-name="button">
              <div className="absolute bg-[#042880] inset-0 rounded-[7.25px]" data-name="Background">
                <div aria-hidden="true" className="absolute border border-[#012275] border-solid inset-[-0.5px] pointer-events-none rounded-[7.75px]" />
              </div>
            </div>
          </div>
          <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[426px] text-[15px] text-nowrap text-white top-[155px]">Search</p>
          <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[224px] text-[14px] text-black text-nowrap top-[14px]">Choose your route options below.</p>
        </div>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[304px] text-[14px] text-black text-nowrap top-[207px]">Search</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[471px] text-[14px] text-black text-nowrap top-[207px]">Seat</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[593px] text-[14px] text-black text-nowrap top-[207px]">Passanger Info</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[767px] text-[14px] text-black text-nowrap top-[207px]">Payment</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[919px] text-[14px] text-black text-nowrap top-[207px]">Confirm</p>
        <div className="absolute gap-[115px] grid-cols-[repeat(5,_fit-content(100%))] grid-rows-[repeat(1,_fit-content(100%))] h-[49px] inline-grid left-[310px] overflow-clip px-0 py-[8px] top-[150px]" data-name="info_selector">
          <div className="[grid-area:1_/_1] relative shrink-0 size-[40px]" data-name="group 1">
            <div className="absolute left-1/2 size-[40px] top-0 translate-x-[-50%]">
              <div className="absolute inset-[0_-10%_-20%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g filter="url(#filter0_d_2_530)" id="Ellipse 1">
                    <ellipse cx="24" cy="20" fill="var(--fill-0, white)" rx="20" ry="20" />
                    <path d={svgPaths.p20730380} stroke="url(#paint0_linear_2_530)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2_530" width="48" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_530" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_530" mode="normal" result="shape" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_530" x1="24" x2="24" y1="0" y2="40">
                      <stop stopColor="#E96F30" />
                      <stop offset="1" stopColor="#01257D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="absolute font-['Montserrat:Light',sans-serif] font-light h-[40px] leading-[normal] left-[calc(50%-8px)] text-[#01257d] text-[40px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[-3px] w-[15px]">1</p>
          </div>
          <GroupText text="2" additionalClassNames="[grid-area:1_/_2]" />
          <GroupText text="3" additionalClassNames="[grid-area:1_/_3]" />
          <GroupText text="4" additionalClassNames="[grid-area:1_/_4]" />
          <GroupText text="5" additionalClassNames="[grid-area:1_/_5]" />
        </div>
        <div className="absolute left-[310px] size-[40px] top-[159px]" data-name="navigation_info" />
      </div>
      <div className="absolute h-0 left-[calc(25%-15px)] top-[281px] w-[670.001px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 670.001 3">
            <line id="Line 2" stroke="url(#paint0_linear_2_526)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="668.501" y1="1.5" y2="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_526" x1="0" x2="670.001" y1="3.5" y2="3.5">
                <stop stopColor="#01257D" />
                <stop offset="1" stopColor="#E96F30" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}