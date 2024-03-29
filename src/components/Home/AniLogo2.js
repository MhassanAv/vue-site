import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AniLogo2() {
  const icon1 = {
    hidden: {
      pathLength: 0,
      strokeWidth: 0,
      opacity: 0,
      fill: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 1,
        delay: 0,
        fill: { duration: 1.5, ease: "linear" },
      },
    },
    visible: {
      pathLength: 1,
      strokeWidth: 2,
      stroke: "white",
      opacity: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 1,
        delay: 0,
        fill: { duration: 1.5, ease: "linear", delay:1  },
      },
    },
  };

  const icon2 = {
    hidden: {
      pathLength: 0,
      strokeWidth: 0,
      opacity: 0,
      fill: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 1,
        delay: 0.5,
        fill: { duration: 1.5, ease: "linear" },
      },
    },
    visible: {
      pathLength: 1,
      strokeWidth: 2,
      stroke: "white",
      opacity: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 1,
        delay: 0.5,
        fill: { duration: 1.5, ease: "linear", delay:1.5 },
      },
    },
  };
  const icon3 = {
    hidden: {
      pathLength: 0,
      strokeWidth: 0,
      opacity: 0,
      fill: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 1,
        delay: 1,
        fill: { duration: 1.5, ease: "linear" },
      },
    },
    visible: {
      pathLength: 1,
      strokeWidth: 2,
      stroke: "white",
      opacity: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 1,
        delay: 1,
        fill: { duration: 1.5, ease: "linear" ,delay:2 },
      },
    },
  };

  return (
    <chakra.svg
      w={["full", "70vw", "40vw"]}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 575 199"
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          {/* <stop offset="0%" stopColor="#473896" /> */}
          <stop offset="0%" stopColor="#a83593" />
          <stop offset="100%" stopColor="#cb274a" />
        </linearGradient>
      </defs>
      <motion.path
        variants={icon1}
        initial="hidden"
        animate="visible"
        d="M156.8,55.7H48.7c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5h108.1c13,0,23.5,10.5,23.5,23.5
	C180.3,45.2,169.7,55.7,156.8,55.7z"
      />
      <motion.path
        variants={icon2}
        initial="hidden"
        animate="visible"
        d="M123.3,122.7H48.7c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5h74.6c13,0,23.5,10.5,23.5,23.5
	C146.8,112.2,136.3,122.7,123.3,122.7z"
      />
      <motion.path
        variants={icon3}
        initial="hidden"
        animate="visible"
        d="M251.6,189.9H48.7c-13,0-23.5-10.5-23.5-23.5s10.5-23.5,23.5-23.5h202.9c13,0,23.5,10.5,23.5,23.5
        S264.6,189.9,251.6,189.9z"
      />
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        >
        <path fill="url(#linear)" d="M384.9,170.5c0,7.1-5.2,11.8-12.8,11.8c-3.1,0-6.2-0.8-7.5-1.6l1.1-6.5c1.6,0.9,4.2,1.5,6.4,1.5
		c3.6,0,5.3-1.9,5.3-4.4c0-2.8-1.8-4.2-5.1-6.3c-5.3-3.3-7.3-7.3-7.3-10.9c0-6.2,4.1-11.4,12.3-11.4c2.6,0,5,0.7,6.1,1.4l-1.2,6.5
		c-1.1-0.7-2.8-1.3-4.9-1.3c-3.2,0-4.8,2-4.8,4c0,2.3,1.2,3.6,5.4,6.1C383.1,162.5,384.9,166.4,384.9,170.5z M423.2,143.1l-8.4,38.9
		h7.3l1.7-8.9h6.9l1.7,8.9h7.4l-7.5-38.9H423.2z M430.1,167.3h-5.5l1.4-8.1c0.4-2.3,1-6.3,1.4-8.9h0.1c0.4,2.5,0.9,6.4,1.3,8.8
		L430.1,167.3L430.1,167.3z M352.2,143.1h7.6V182h-7.6V143.1z M466,143.1h7.5V182H466V143.1z M510.1,175.4h10v6.6h-17.6v-38.9h16.9
		v6.6h-9.3v8.9h8.9v6.3h-8.9V175.4z M404,143.1h7.6V167c0,10-3.8,15.4-11.3,15.4c-8.1,0-11.3-5.6-11.3-15.3v-24h7.6v25.3
		c0,5.7,1.7,7.5,3.7,7.5c2.2,0,3.7-1.6,3.7-7.5L404,143.1L404,143.1z M543.8,146.5c-2.5-2.3-5.9-3.5-10.8-3.5c-3,0-5.8,0.3-7.7,0.7
		v38.4c1.4,0.2,3.8,0.4,6.2,0.4c5.4,0,9.3-1.3,11.9-3.8c3.4-3.1,5.4-8.6,5.4-16.5C548.8,154.6,547.1,149.5,543.8,146.5z M534.2,176
		c-0.5,0-1,0-1.4-0.1v-26.8c0.5-0.2,1-0.2,1.5-0.2c4.6,0,6.7,4.8,6.7,12.8C541,172.4,537.8,176,534.2,176z M340.7,143.2h8.3l-9,38.8
		h-8.4l-8.7-38.9h8.4l2.8,16.8c0.7,4.2,1.5,8.9,2,13.5h0.1c0.5-4.6,1.1-9.3,1.8-13.6L340.7,143.2z M451.7,175.6h9.9v6.4h-17.5v-38.9
		h7.6V175.6z M478.6,143h19.7v5.6l-11.8,26.5v0.2h11.7v6.6h-20.8l0.1-4.4l12.3-27.7v-0.2h-11.2V143z"/>
	<path fill='white' d="M331.2,76.1l2.4,38.9h-6.8l-0.7-13.6c-0.2-3.7-0.4-8.7-0.4-12.9h-0.1c-0.7,4.2-1.7,8.9-2.5,12l-3.4,13.9h-5.4
		l-3.2-13.7c-0.7-3.1-1.8-8-2.4-12.2h-0.1c-0.1,4.2-0.4,9.1-0.6,13l-0.7,13.5h-6.5l2.8-38.9h8l3.1,14.1c1.1,4.9,2.1,9.2,2.8,13.6
		h0.1c0.6-4.3,1.5-8.7,2.5-13.6l3.1-14.1C323.2,76.1,331.2,76.1,331.2,76.1z M288,76.1h7.6V115H288V76.1z M422.3,76h6.6v39H422
		l-5.9-14.8c-1.3-3.3-3.1-8.2-4-11.7H412c0.2,3.9,0.5,9.9,0.5,17.7v8.7h-6.6V76.1h6.9l6,15.2c1.2,3,3.1,8,4.2,11.3h0.1
		c-0.3-4.1-0.8-10.8-0.8-18L422.3,76L422.3,76z M441.2,76.1l-8.4,38.9h7.3l1.7-8.9h6.9l1.7,8.9h7.4l-7.5-38.9H441.2z M448.1,100.4
		h-5.5l1.4-8.1c0.4-2.3,1-6.3,1.4-8.9h0.1c0.4,2.5,0.9,6.4,1.3,8.8L448.1,100.4L448.1,100.4L448.1,100.4z M481.8,76.1h7.6V115h-7.6
		V76.1z M375.5,93.3h10.4V114c-1.7,0.7-5.2,1.4-8,1.4c-4.4,0-7.8-1.2-10.4-3.8c-3.3-3.3-5.1-9-5-15.7c0.2-14.2,8.2-20,16.5-20
		c3,0,5.1,0.6,6.3,1.2l-1.3,6.5c-1.1-0.6-2.6-0.9-4.4-0.9c-5.1,0-9.2,3.6-9.2,13.7c0,9.3,3.6,12.7,7.1,12.7c0.7,0,1.2-0.1,1.5-0.2
		v-9.4h-3.5V93.3z M206,75.7c-8.6,0-12.8,9.2-12.8,19.8c0,10.7,3.5,20,12.3,20c7.4,0,12.6-5.9,12.6-20.6
		C218.1,86,215.5,75.7,206,75.7z M205.9,108.9c-3.1,0-4.7-4.5-4.7-13.3c0-8.4,1.6-13.4,4.6-13.4c3.5,0,4.5,6.1,4.5,13
		C210.3,103.1,209.1,108.9,205.9,108.9z M344.4,76.1L336,115h7.4l1.7-8.9h6.9l1.7,8.9h7.4l-7.6-38.9H344.4z M351.4,100.4h-5.5
		l1.4-8.1c0.4-2.3,1-6.3,1.4-8.9h0.1c0.4,2.5,0.9,6.4,1.3,8.8L351.4,100.4L351.4,100.4L351.4,100.4z M391.6,76.1h7.6V115h-7.6V76.1z
		 M237.7,76.1h7.6V100c0,10-3.8,15.4-11.3,15.4c-8.1,0-11.3-5.6-11.3-15.3v-24h7.6v25.3c0,5.7,1.7,7.5,3.7,7.5
		c2.2,0,3.7-1.6,3.7-7.5V76.1z M267.6,96.8L267.6,96.8c4-1.9,6-5.6,6-9.8c0-3.4-0.7-5.9-3.1-8.1c-2.5-2.3-6.3-2.9-10.4-2.9
		c-2.9,0-5.9,0.2-8.3,0.7l0.1,38.3h7.5V99.5h1.1c2.5,0,3.7,1.4,4.4,6.2c0.6,4.3,1.5,8.2,2,9.3h7.9c-0.7-1.4-1.7-6.2-2.5-10.5
		C271.6,100.3,270.2,97.9,267.6,96.8z M260.7,93.7h-1.3V82.1c0.4-0.1,1.1-0.2,1.8-0.2c3.4,0.1,4.7,2.5,4.7,5.8S264,93.7,260.7,93.7z
		 M456.5,76.1h21.3v7h-6.9V115h-7.6V83.1h-6.8V76.1z M546.9,76v39H540l-5.9-14.8c-1.3-3.3-3.1-8.2-4-11.7H530
		c0.2,3.9,0.5,9.9,0.5,17.7v8.7h-6.6V76.1h6.9l6,15.2c1.2,3,3.1,8,4.2,11.3h0.1c-0.3-4.1-0.8-10.8-0.8-18V76H546.9z M507,75.7
		c-8.6,0-12.8,9.2-12.8,19.8c0,10.7,3.5,20,12.3,20c7.4,0,12.6-5.9,12.6-20.6C519.1,86,516.4,75.7,507,75.7z M506.8,108.9
		c-3.1,0-4.7-4.5-4.7-13.3c0-8.4,1.6-13.4,4.6-13.4c3.5,0,4.5,6.1,4.5,13C511.2,103.1,510,108.9,506.8,108.9z"/>
	<path fill='white' d="M240.4,9.2h7.8l-8.7,23.7V48l-7.4,0.1V33.2l-8.6-24h8.1l2.6,9.3c0.7,2.5,1.5,5.4,2,8.2h0.1
		c0.5-2.8,1.1-5.6,1.8-8.4L240.4,9.2z M261.3,8.7c-8.6,0-12.8,9.2-12.8,19.8c0,10.7,3.5,20,12.3,20c7.4,0,12.6-5.9,12.6-20.6
		C273.4,19,270.8,8.7,261.3,8.7z M261.1,41.9c-3.1,0-4.7-4.5-4.7-13.3c0-8.3,1.7-13.3,4.6-13.4c3.5,0,4.5,6.1,4.5,13
		C265.5,36.1,264.3,41.9,261.1,41.9z M293,9.2h7.6v23.9c0,10-3.8,15.4-11.3,15.4c-8.1,0-11.3-5.6-11.3-15.3v-24h7.6v25.3
		c0,5.7,1.7,7.5,3.7,7.5c2.2,0,3.7-1.6,3.7-7.5L293,9.2L293,9.2z M322.7,29.9v-0.1c4-1.8,6-5.5,6-9.7c0-3.4-0.7-5.9-3.1-8.1
		c-2.5-2.3-6.3-2.9-10.4-2.9c-2.8,0-5.8,0.2-8.2,0.7v38.3h7.5V32.6h1.1c2.5,0,3.7,1.4,4.4,6.2c0.6,4.3,1.5,8.2,2,9.3h7.9
		c-0.7-1.4-1.8-6.2-2.5-10.5C326.7,33.4,325.3,31,322.7,29.9z M316,26.7h-1.3V15.1c0.4-0.1,1.1-0.2,1.8-0.2c3.4,0.1,4.7,2.5,4.7,5.8
		S319.3,26.7,316,26.7z M380.8,9.2h7.6v38.9h-7.6V31.8h-7.9v16.3h-7.6V9.2h7.6v15.6h7.9V9.2z M340,9.2h21.3v7h-6.9V48h-7.6V16.2H340
		V9.2z M462.7,26.3h10.4V47c-1.7,0.7-5.2,1.4-8,1.4c-4.4,0-7.8-1.2-10.4-3.8c-3.3-3.3-5.1-9-5-15.7c0.2-14.2,8.2-20,16.5-20
		c3,0,5.1,0.6,6.3,1.2l-1.3,6.5c-1.1-0.6-2.6-0.9-4.4-0.9c-5.1,0-9.2,3.6-9.2,13.7c0,9.3,3.6,12.7,7.1,12.7c0.7,0,1.2-0.1,1.5-0.2
		v-9.4h-3.5V26.3z M405.8,8.7c-8.6,0-12.8,9.2-12.8,19.8c0,10.7,3.5,20,12.3,20c7.4,0,12.6-5.9,12.6-20.6
		C417.9,19,415.3,8.7,405.8,8.7z M405.7,41.9c-3.1,0-4.7-4.5-4.7-13.3c0-8.3,1.6-13.3,4.6-13.4c3.5,0,4.5,6.1,4.5,13
		C410.1,36.1,408.9,41.9,405.7,41.9z M437.5,9.2h7.6v23.9c0,10-3.8,15.4-11.3,15.4c-8.1,0-11.3-5.6-11.3-15.3v-24h7.6v25.3
		c0,5.7,1.7,7.5,3.7,7.5c2.2,0,3.7-1.6,3.7-7.5L437.5,9.2L437.5,9.2z M494.2,9.2h7.6v38.9h-7.6V31.8h-7.9v16.3h-7.6V9.2h7.6v15.6
		h7.9V9.2z M505.8,9.2h21.3v7h-6.9V48h-7.6V16.2h-6.8V9.2z M549.2,36.6c0,7.1-5.2,11.8-12.8,11.8c-3.1,0-6.2-0.8-7.5-1.6l1.1-6.5
		c1.6,0.9,4.2,1.5,6.4,1.5c3.6,0,5.3-1.9,5.3-4.4c0-2.8-1.8-4.2-5.1-6.3c-5.3-3.3-7.3-7.3-7.3-10.9c0-6.2,4.1-11.4,12.3-11.4
		c2.6,0,5,0.7,6.1,1.4l-1.2,6.5c-1.1-0.7-2.8-1.3-4.9-1.3c-3.2,0-4.8,2-4.8,4c0,2.3,1.2,3.6,5.4,6.1
		C547.4,28.6,549.2,32.5,549.2,36.6z"/>
  </motion.g>
    </chakra.svg>
  );
}
