import FastMarquee from 'react-fast-marquee';

const ColMarq = () => {
  const CustomSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 881 130"
        version="1.1"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
      >
        {[-634.728, -447.914, -261.961, -76.0238, 109.853].map((translateX, i) => (
          <g
            key={i}
            transform={`matrix(1,0,0,1,${translateX},-382.568)`}
          >
            <path
              d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
              fill="currentColor"
            />
          </g>
        ))}
      </svg>
    );
  };
  const CustomSVG2 = () => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 122.88 92.81"
        xmlSpace="preserve"
        className="w-full h-full "
      >
        <g>
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.97,92.81H84.89c-8.5,0-15.45-6.95-15.45-15.45
             c0-31.79-8.12-66.71,30.84-76.68c17.65-4.51,22.25,14.93,3.48,16.27
             c-11.45,0.82-13.69,8.22-14.04,19.4h17.71c8.5,0,15.45,6.95,15.45,15.45v25.09
             C122.88,85.65,115.72,92.81,106.97,92.81L106.97,92.81z 
             M38.23,92.81H16.15c-8.5,0-15.45-6.95-15.45-15.45
             c0-31.79-8.12-66.71,30.84-76.68C49.2-3.84,53.8,15.6,35.02,16.95
             c-11.45,0.82-13.69,8.22-14.04,19.4H38.7c8.5,0,15.45,6.95,15.45,15.45v25.09
             C54.14,85.65,46.98,92.81,38.23,92.81L38.23,92.81z"
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="col_marq px-10 max-w-[1200px]">
      <div className="marq_wrapper rounded-2xl border border-[#ffffff1a] py-[15px] ">
        <FastMarquee
          gradient={true}
          pauseOnClick={true}
          gradientColor={'black'}
          gradientWidth={40}
          speed={40}
          autoFill={true}
          className="features-marquee flex "
        >
          <div className="marq_box rounded-2xl flex flex-col justify-center px-[25px] mr-[15px] min-h-[600px] border border-[#c9c9c9] flex flex-col">
            <div className="text-[#228645] w-[77px] mb-[20px]">
              <CustomSVG />
            </div>
            <div className="text-[#13311e] w-[77px] -mb-2.5 -ml-2.5">
              <CustomSVG2 />
            </div>
            <p className="text-white max-w-[30ch]">
              Strategic Spare Parts Supply for an Oil &amp; Gas Company
              <br />
              <br />
              <strong className="!pt-10">Challenge:</strong> <br />A leading oil and gas company faced a critical shortage of spare parts essential for its operational equipment, putting production continuity at risk.
              <br />
              <br />
              <strong>Solution:</strong>
              <br />
              Leveraging our global supplier network and industry expertise, Colonel General Trading promptly sourced and delivered the required parts, ensuring full compliance with the technical specifications and performance standards.
              <br />
              <br />
              <strong>Outcome:</strong>
              <br />
              The supply chain issue was resolved without any unplanned production downtime, and the reliability of the company's equipment was reinforced.
              <br />
            </p>
          </div>
          <div className="marq_box rounded-2xl flex flex-col justify-center px-[25px] mr-[15px] min-h-[600px] border border-[#c9c9c9] flex flex-col">
            <div className="text-[#228645] w-[77px] mb-[20px]">
              <CustomSVG />
            </div>
            <div className="text-[#13311e] w-[77px] -mb-2.5 -ml-2.5">
              <CustomSVG2 />
            </div>
            <p className="text-white max-w-[30ch]">
              Emergency Food Supplies for a Humanitarian Relief Program
              <br />
              <br />
              <strong className="!pt-10">Challenge:</strong> <br />
              An urgent need arose to provide large quantities of staple food items to support a relief program in a disaster-affected region.
              <br />
              <br />
              <strong>Solution:</strong>
              <br />
              Colonel General Trading swiftly procured and delivered essential food supplies—including rice, flour, cooking oil, and canned goods—while adhering to strict food safety and quality standards. Logistics were efficiently coordinated for distribution in the affected areas.
              <br />
              <br />
              <strong>Outcome:</strong>
              <br />
              The emergency needs of the population were met on time, providing vital relief and support to those impacted.
              <br />
            </p>
          </div>
          <div className="marq_box rounded-2xl flex flex-col justify-center px-[25px] mr-[15px] min-h-[600px] border border-[#c9c9c9] flex flex-col">
            <div className="text-[#228645] w-[77px] mb-[20px]">
              <CustomSVG />
            </div>
            <div className="text-[#13311e] w-[77px] -mb-2.5 -ml-2.5">
              <CustomSVG2 />
            </div>
            <p className="text-white max-w-[30ch]">
              Integrated Equipment Supply for a Government Institutionbr <br />
              <br />
              <strong className="!pt-10">Challenge:</strong> <br />A major government entity required a full infrastructure upgrade, including modern electronic equipment and office furniture, to enhance operational efficiency and improve the working environment for staff.
              <br />
              <br />
              <strong>Solution:</strong>
              <br />
              Colonel General Trading conducted a detailed assessment of the client’s needs and delivered a comprehensive solution that included the supply of the latest computers, printers, communication systems, and high-quality office furniture. The project was completed on time and within budget.
              <br />
              <br />
              <strong>Outcome:</strong>
              <br />
              The upgrade significantly improved operational workflows and created a modern, productive workplace environment with enhanced digital capabilities.
              <br />
            </p>
          </div>
        </FastMarquee>
      </div>
    </div>
  );
};

export default ColMarq;
