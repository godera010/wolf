import imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1 from "figma:asset/a306ff2bd95bbfb239ff7e9d8b26c60f646d26e4.png";
import imgAboutUs from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgGeminiGeneratedImageGb3Zaqgb3Zaqgb3Z21 from "figma:asset/3a733a3e44520e7f060922e1f8b95c202527412d.png";

function Frame3() {
  return (
    <div className="absolute bg-[#e96f30] border-0 border-[#e96f30] border-solid h-[50px] left-[211px] overflow-clip rounded-[26px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[348px] w-[189px]">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[24px] text-[16px] text-white top-[15px] w-[150px] whitespace-pre-wrap">{`Book a  Seat Now`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[211px] top-[348px]">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[472px] left-[22px] overflow-clip top-[171px] w-[649px]">
      <p className="absolute font-['Montserrat:Black',sans-serif] font-black h-[472px] leading-[normal] left-0 text-[64px] text-white top-0 w-[649px] whitespace-pre-wrap">Ride with the Pack – Travel Smarter, Faster, Wilder</p>
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[22px] top-[171px]">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-gradient-to-r from-[11.398%] from-[rgba(1,54,117,0.53)] h-[720px] left-0 overflow-clip rounded-[5px] to-[rgba(153,153,153,0.1)] top-0 w-[1280px]">
      <Group />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[37px] left-[1084px] top-[20px] w-[101px]" data-name="button">
      <div className="absolute bg-[#042880] inset-0 rounded-[7.25px]" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#012275] border-solid inset-[-0.5px] pointer-events-none rounded-[7.75px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#01257d] h-[77px] left-0 right-[-1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] top-0">
      <Button />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[31px_96px_34px_1088px] leading-[normal] text-[15px] text-white whitespace-pre-wrap">Book Now</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[668px] text-[#e96f30] text-[15px] top-[calc(50%-8.5px)] w-[47px] whitespace-pre-wrap">Home</p>
      <p className="absolute bottom-[31px] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[883px] text-[15px] text-white top-[31px] w-[54px] whitespace-pre-wrap">Routes</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[980px] text-[15px] text-white top-[calc(50%-8.5px)] w-[71px] whitespace-pre-wrap">About Us</p>
      <p className="absolute bottom-[31px] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[754px] text-[15px] text-white top-[31px] w-[98px] whitespace-pre-wrap">Check Ticket</p>
      <div className="absolute bottom-[29px] left-[668px] top-[48px] w-[47px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 1">
            <line id="Line 1" stroke="var(--stroke-0, #E96F30)" x2="47" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[126px] left-[47px] top-[-39px] w-[94px]" data-name="Gemini_Generated_Image_m0ozgqm0ozgqm0oz-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageM0Ozgqm0Ozgqm0OzRemovebgPreview1} />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="relative size-full" data-name="about us">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-0 pointer-events-none size-full" src={imgAboutUs} />
      <div className="absolute h-[751px] left-[-33px] top-0 w-[1345px]" data-name="Gemini_Generated_Image_gb3zaqgb3zaqgb3z (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageGb3Zaqgb3Zaqgb3Z21} />
      </div>
      <Frame1 />
      <Frame />
    </div>
  );
}