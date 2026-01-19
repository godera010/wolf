import svgPaths from "./svg-uoxvregu7n";
import clsx from "clsx";
import imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1 from "figma:asset/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_-10%_-20%_-10%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        {children}
      </svg>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ additionalClassNames = "" }: ButtonProps) {
  return (
    <div className={clsx("absolute size-[37px]", additionalClassNames)}>
      <div className="absolute bg-[#042880] inset-0 rounded-[7.25px]" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#012275] border-solid inset-[-0.5px] pointer-events-none rounded-[7.75px]" />
      </div>
    </div>
  );
}
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

export default function Booking() {
  return (
    <div className="bg-black relative size-full" data-name="booking 2">
      <div className="absolute bg-white font-['Montserrat:Medium',sans-serif] font-medium h-[80px] leading-[normal] left-0 right-[-1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] text-[#01257d] text-[15px] top-0" data-name="menu">
        <p className="absolute left-[778px] top-[calc(50%-9px)] w-[47px]">Home</p>
        <p className="absolute bottom-[31px] left-[993px] top-[31px] w-[54px]">Routes</p>
        <p className="absolute left-[1090px] top-[calc(50%-9px)] w-[71px]">About Us</p>
        <p className="absolute bottom-[31px] left-[864px] top-[31px] w-[98px]">Check Ticket</p>
      </div>
      <div className="absolute h-[126px] left-[46px] top-[-23px] w-[94px]" data-name="Gemini_Generated_Image_m0ozgqm0ozgqm0oz-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1} />
      </div>
      <div className="absolute bg-white h-[1107px] left-0 overflow-clip right-0 top-[80px]" data-name="hero">
        <p className="absolute bg-clip-text bg-gradient-to-r font-['Montserrat:Bold',sans-serif] font-bold from-[#01257d] leading-[normal] right-[898px] text-[64px] to-[#e96f30] top-[19px] translate-x-[100%] w-[525px]" style={{ WebkitTextFillColor: "transparent" }}>
          Online Booking
        </p>
        <p className="absolute font-['Montserrat:Light',sans-serif] font-light leading-[normal] left-[478px] text-[16px] text-black text-nowrap top-[97px]">Secure your seat in just a few simple steps</p>
        <div className="absolute border border-solid border-white h-[750px] left-[305px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[276px] w-[670px]" />
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[304px] text-[14px] text-black text-nowrap top-[207px]">Search</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[471px] text-[14px] text-black text-nowrap top-[207px]">Seat</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[593px] text-[14px] text-black text-nowrap top-[207px]">Passanger Info</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[767px] text-[14px] text-black text-nowrap top-[207px]">Payment</p>
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[919px] text-[14px] text-black text-nowrap top-[207px]">Confirm</p>
        <div className="absolute gap-[115px] grid-cols-[repeat(5,_fit-content(100%))] grid-rows-[repeat(1,_fit-content(100%))] h-[49px] inline-grid left-[310px] overflow-clip px-0 py-[8px] top-[150px]" data-name="info_selector">
          <div className="[grid-area:1_/_2] relative shrink-0 size-[40px]" data-name="group 1">
            <div className="absolute left-1/2 size-[40px] top-0 translate-x-[-50%]">
              <Wrapper>
                <g filter="url(#filter0_d_2_544)" id="Ellipse 1">
                  <ellipse cx="24" cy="20" fill="var(--fill-0, white)" rx="20" ry="20" />
                  <path d={svgPaths.p20730380} stroke="url(#paint0_linear_2_544)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2_544" width="48" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_544" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_544" mode="normal" result="shape" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_544" x1="24" x2="24" y1="0" y2="40">
                    <stop stopColor="#E96F30" />
                    <stop offset="1" stopColor="#01257D" />
                  </linearGradient>
                </defs>
              </Wrapper>
            </div>
            <p className="absolute font-['Montserrat:Light',sans-serif] font-light h-[40px] leading-[normal] left-[calc(50%-10px)] text-[#01257d] text-[40px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[-3px] w-[15px]">2</p>
          </div>
          <GroupText text="3" additionalClassNames="[grid-area:1_/_3]" />
          <GroupText text="4" additionalClassNames="[grid-area:1_/_4]" />
          <GroupText text="5" additionalClassNames="[grid-area:1_/_5]" />
          <div className="[grid-area:1_/_1] relative shrink-0 size-[40px]" data-name="group 1">
            <Wrapper>
              <g id="group 1">
                <rect fill="white" height="40" transform="translate(4)" width="40" />
                <g filter="url(#filter0_d_2_535)" id="Ellipse 1">
                  <ellipse cx="24" cy="20" fill="var(--fill-0, #01257D)" rx="20" ry="20" />
                  <path d={svgPaths.p20730380} stroke="url(#paint0_linear_2_535)" />
                </g>
                <g clipPath="url(#clip0_2_535)" id="Check circle">
                  <path d={svgPaths.p20e26900} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2_535" width="48" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_535" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_535" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_535" x1="24" x2="24" y1="0" y2="40">
                  <stop stopColor="#E96F30" />
                  <stop offset="1" stopColor="#01257D" />
                </linearGradient>
                <clipPath id="clip0_2_535">
                  <rect fill="white" height="20" transform="translate(14 10)" width="20" />
                </clipPath>
              </defs>
            </Wrapper>
          </div>
        </div>
        <div className="absolute left-[310px] size-[40px] top-[159px]" data-name="navigation_info" />
      </div>
      <div className="absolute h-0 left-[calc(25%-15px)] top-[281px] w-[670.001px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 670.001 3">
            <line id="Line 2" stroke="url(#paint0_linear_2_540)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="668.501" y1="1.5" y2="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_540" x1="0" x2="670.001" y1="3.5" y2="3.5">
                <stop stopColor="#01257D" />
                <stop offset="1" stopColor="#E96F30" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[746px] left-[calc(25%+11px)] overflow-clip top-[356px] w-[304px]" data-name="Figma design - Screenshot 2026-01-07 151808.png">
        <div className="absolute bg-white h-[746px] left-0 right-0 top-0" data-name="Root">
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[746px] right-[15px] w-[289px]" data-name="Groups">
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[23px] h-[663px] right-[141px] w-[148px]" data-name="Groups">
              <div className="absolute bottom-[10px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[123.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                <p className="leading-[normal]">13</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[41px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b8cee8] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">48</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[41px] right-[57px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b0c6e4] text-[19px] translate-x-[100%] translate-y-[50%] w-[26px]">
                  <p className="leading-[normal]">47</p>
                </div>
              </div>
              <div className="absolute bottom-[63px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[123.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                <p className="leading-[normal]">12</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[94px] h-[43px] right-[10px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b6cce7] text-[19px] translate-x-[100%] translate-y-[50%] w-[26px]">
                  <p className="leading-[normal]">44</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[94px] right-[57px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b2c6e5] text-[19px] translate-x-[100%] translate-y-[50%] w-[26px]">
                  <p className="leading-[normal]">43</p>
                </div>
              </div>
              <div className="absolute bottom-[115px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[123.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                <p className="leading-[normal]">11</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[141px] h-[53px] right-0 w-[148px]" data-name="Groups">
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[5px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b6cde7] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                    <p className="leading-[normal]">40</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[5px] h-[45px] right-[57px] w-[44px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[22px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#b7cee8] text-[17px] translate-x-[100%] translate-y-[50%] w-[24px]">
                    <p className="leading-[normal]">39</p>
                  </div>
                </div>
                <div className="absolute bottom-[27px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[123.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                  <p className="leading-[normal]">10</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[196px] h-[50px] right-0 w-[148px]" data-name="Groups">
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[10px] w-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#bbd0e8] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                    <p className="leading-[normal]">36</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[2px] h-[44px] right-[56px] w-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[3px] right-[4px]" />
                  <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b7cde7] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                    <p className="leading-[normal]">35</p>
                  </div>
                </div>
                <div className="absolute bottom-[24px] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] right-[124px] text-[17px] text-black text-center translate-x-[50%] translate-y-[50%] w-[12px]">
                  <p className="leading-[normal]">9</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[248px] h-[51px] right-0 w-[148px]" data-name="Groups">
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#bdd1e9] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                    <p className="leading-[normal]">32</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] right-[56px] size-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[4px]" />
                  <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b5c9e6] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                    <p className="leading-[normal]">31</p>
                  </div>
                </div>
                <div className="absolute bottom-[25px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                  <p className="leading-[normal]">8</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[301px] h-[53px] right-0 w-[148px]" data-name="Groups">
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[10px] w-[45px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[21px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#bbd0e8] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                    <p className="leading-[normal]">28</p>
                  </div>
                </div>
                <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[57px] w-[44px]" data-name="Button">
                  <Button additionalClassNames="bottom-[2px] right-[3px]" />
                  <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#b8cee7] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                    <p className="leading-[normal]">27</p>
                  </div>
                </div>
                <div className="absolute bottom-[24.5px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                  <p className="leading-[normal]">7</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[356px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b6cce7] text-[19px] translate-x-[100%] translate-y-[50%] w-[26px]">
                  <p className="leading-[normal]">24</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[356px] h-[45px] right-[57px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] right-[33px] text-[#b9cee8] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">23</p>
                </div>
              </div>
              <div className="absolute bottom-[378px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                <p className="leading-[normal]">6</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[408px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[3px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#b8cee8] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">20</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[408px] right-[57px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[3px] right-[3px]" />
                <div className="absolute bottom-[22.5px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic right-[32px] text-[#b8cee8] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">19</p>
                </div>
              </div>
              <div className="absolute bottom-[430px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                <p className="leading-[normal]">5</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[461px] h-[44px] right-[10px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[32px] text-[#b9cfe7] text-[19px] translate-x-[100%] translate-y-[50%] w-[23px]">
                  <p className="leading-[normal]">16</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[461px] h-[45px] right-[57px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22.5px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic right-[20.5px] text-[#b6cee8] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                  <p className="leading-[normal]">15</p>
                </div>
              </div>
              <div className="absolute bottom-[483.5px] flex flex-col font-['Montserrat:Light',sans-serif] font-light h-[19px] justify-center leading-[0] right-[124px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                <p className="leading-[normal]">4</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[514px] h-[43px] right-[10px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic right-[32px] text-[#bccfe7] text-[19px] translate-x-[100%] translate-y-[50%] w-[23px]">
                  <p className="leading-[normal]">12</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[513px] h-[44px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[3px] right-[4px]" />
                <div className="absolute bottom-[22.5px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic right-[21.5px] text-[#b6cae7] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[23px]">
                  <p className="leading-[normal]">11</p>
                </div>
              </div>
              <div className="absolute bottom-[535px] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                <p className="leading-[normal]">3</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[566px] right-[10px] size-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[21px] text-[#bbd1e9] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                  <p className="leading-[normal]">8</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[566px] h-[45px] right-[57px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium h-[22px] justify-center leading-[0] not-italic right-[20px] text-[#b5cde7] text-[13px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                  <p className="leading-[normal]">７</p>
                </div>
              </div>
              <div className="absolute bottom-[588px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[124.5px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                <p className="leading-[normal]">2</p>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[618px] h-[45px] right-[10px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[3px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] not-italic right-[21.5px] text-[#aec2e3] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[15px]">
                  <p className="leading-[normal]">4</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[618px] h-[45px] right-[57px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[3px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[20px] text-[#b9cee7] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                  <p className="leading-[normal]">3</p>
                </div>
              </div>
              <div className="absolute bottom-[640px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] right-[124px] text-[19px] text-black text-center translate-x-[50%] translate-y-[50%] w-[12px]">
                <p className="leading-[normal]">1</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[696px] h-[50px] right-px w-[250px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[11px] h-[39px] right-[10px] w-[234px]" data-name="Button">
                <div className="absolute bottom-[19.5px] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] right-[155px] text-[#01257d] text-[23px] translate-x-[100%] translate-y-[50%] w-[76px]">
                  <p className="leading-[normal]">Front</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] bottom-[13px] h-[673px] right-[17px] w-[111px]" data-name="Groups">
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[42px] right-[10px] w-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-px right-[3px]" />
              <div className="absolute bottom-[20px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c3d3ea] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                <p className="leading-[normal]">49</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[42px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-px right-[3px]" />
              <div className="absolute bottom-[20px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c2d7ec] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                <p className="leading-[normal]">50</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[51px] right-[10px] size-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c3d3ea] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                <p className="leading-[normal]">45</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[51px] h-[44px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#bdd2e9] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                <p className="leading-[normal]">46</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[98px] h-[53px] right-0 w-[111px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[6px] right-[10px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c4cfe9] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">41</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[6px] h-[43px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21.5px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic right-[34px] text-[#c7d8ec] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">42</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[153px] h-[51px] right-0 w-[110px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] right-[10px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#c8d9ec] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">37</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[44px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c8d8ec] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">38</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[206px] h-[50px] right-0 w-[110px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[10px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#c7d8ec] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">33</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#c3d3ea] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">34</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[258px] h-[51px] right-0 w-[110px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] right-[10px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic right-[33px] text-[#cbd9ec] text-[18px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">29</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[44px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c9daec] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">30</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[311px] h-[50px] right-0 w-[110px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[10px] w-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] right-[33px] text-[#cadaec] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">25</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[3px] h-[43px] right-[56px] w-[45px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[21px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c2d6eb] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">26</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[364px] h-[52px] right-0 w-[110px]" data-name="Groups">
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[2px] right-[10px] size-[44px]" data-name="Button">
                <Button additionalClassNames="bottom-[2px] right-[3px]" />
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic right-[33px] text-[19px] text-white translate-x-[100%] translate-y-[50%] w-[24px]">
                  <p className="leading-[normal]">21</p>
                </div>
              </div>
              <Button additionalClassNames="bottom-[4px] right-[59px]" />
              <div className="absolute bg-[rgba(0,0,0,0)] bottom-[2px] h-[44px] right-[56px] w-[45px]" data-name="Button">
                <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[34px] text-[#c6d7ec] text-[19px] translate-x-[100%] translate-y-[50%] w-[25px]">
                  <p className="leading-[normal]">22</p>
                </div>
              </div>
            </div>
            <Button additionalClassNames="bottom-[421px] right-[13px]" />
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[418px] right-[10px] size-[44px]" data-name="Button">
              <div className="absolute bottom-[22.5px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic right-[32px] text-[#d3e1f0] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                <p className="leading-[normal]">17</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[419px] h-[43px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[21px] text-[#c7d9ec] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[24px]">
                <p className="leading-[normal]">18</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[471px] right-[10px] size-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[32px] text-[#cfdeef] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                <p className="leading-[normal]">13</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[471px] h-[44px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22.5px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic right-[33px] text-[#c1d2e9] text-[19px] translate-x-[100%] translate-y-[50%] w-[24px]">
                <p className="leading-[normal]">14</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[523px] h-[45px] right-[10px] w-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[3px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic right-[20px] text-[#c8d7eb] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                <p className="leading-[normal]">9</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[524px] h-[43px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[21px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic right-[21px] text-[#c8daec] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[24px]">
                <p className="leading-[normal]">10</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[576px] right-[10px] size-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] not-italic right-[21px] text-[#c8dcee] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                <p className="leading-[normal]">5</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[576px] h-[44px] right-[56px] w-[45px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] not-italic right-[21px] text-[#c8d8ec] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                <p className="leading-[normal]">6</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[628px] h-[45px] right-[10px] w-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[3px] right-[3px]" />
              <div className="absolute bottom-[22px] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] not-italic right-[20.5px] text-[#cbdaeb] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[13px]">
                <p className="leading-[normal]">1</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(0,0,0,0)] bottom-[629px] right-[57px] size-[44px]" data-name="Button">
              <Button additionalClassNames="bottom-[2px] right-[2px]" />
              <div className="absolute bottom-[21px] flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[22px] italic justify-center leading-[0] right-[20px] text-[#c8d9ec] text-[19px] text-center translate-x-[50%] translate-y-[50%] w-[14px]">
                <p className="leading-[normal]">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}