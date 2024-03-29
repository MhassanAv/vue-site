import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AniLogo() {
    const icon1 = {
        hidden: {
          pathLength: 0,
          strokeWidth: 0,
          opacity: 0,
          fill: "rgba(255, 255, 255, 0)",
          transition: {
            duration: 1,
            delay:0,
            fill: { duration: 1.5, ease: "linear" },
          },
        },
        visible: {
          pathLength: 1,
          strokeWidth: 4,
          stroke: "white",
          opacity: 1,
          fill: "rgba(255, 255, 255, 1)",
          transition: {
            duration: 1,
            delay:0,
            fill: { duration: 1.5, ease: "linear" },
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
            delay:0.5,
            fill: { duration: 1.5, ease: "linear" },
          },
        },
        visible: {
          pathLength: 1,
          strokeWidth: 4,
          stroke: "white",
          opacity: 1,
          fill: "rgba(255, 255, 255, 1)",
          transition: {
            duration: 1,
            delay:0.5,
            fill: { duration: 1.5, ease: "linear" },
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
            delay:1,
            fill: { duration: 1.5, ease: "linear" },
          },
        },
        visible: {
          pathLength: 1,
          strokeWidth: 4,
          stroke: "white",
          opacity: 1,
          fill: "rgba(255, 255, 255, 1)",
          transition: {
            duration: 1,
            delay:1,
            fill: { duration: 1.5, ease: "linear" },
          },
        },
      };
  return (
    
    <chakra.svg
        w={['full','full',"50vw"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
      >
        <motion.g
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          id="Layer_2"
          data-name="Layer 2"
        >
          <path
            d="M263.4,743.45h9c7.48,0,12.67,4.82,12.67,12.38S280,768.64,272.4,768.64h-9Zm2.1,23.39h6.59c7.21,0,10.76-4.68,10.76-10.9,0-5.55-3.2-10.69-10.76-10.69H265.5Z"
          />
          <path  d="M312.69,743.45v25.19h-2.1V743.45Z" />
          <path
            
            d="M360.85,768.64H359.1a17.38,17.38,0,0,1-.27-4c-1,1.73-3.12,4.32-8.81,4.32-7.83,0-11.85-5.51-11.85-12.67,0-7.52,4.29-13.17,12.28-13.17,5.88,0,9.78,2.84,10.64,7.48H359c-1.17-3.56-3.85-5.68-8.61-5.68-6.82,0-9.94,4.89-9.94,11.26,0,5.76,3,11,9.67,11s8.73-4.1,8.73-9.68v-.29H350v-1.8h10.83Z"
          />
          <path  d="M389.49,743.45v25.19h-2.1V743.45Z" />
          <path
            
            d="M422.46,745.25H413.3v-1.8h20.5v1.8h-9.2v23.39h-2.14Z"
          />
          <path
           
            d="M457.06,759.93l-3.47,8.71h-2.14l10-25.19H464l10.45,25.19h-2.3l-3.55-8.71Zm10.79-1.8c-3-7.49-4.6-11.09-5.14-12.78h0c-.66,1.91-2.42,6.37-4.87,12.78Z"
          />
          <path
            
            d="M498.71,743.45h2.1v23.39h14.66l-.39,1.8H498.71Z"
          />
          <path
            
            d="M569.2,761.88c.82,3.34,3.23,5.32,7.71,5.32,5,0,6.9-2.3,6.9-5s-1.36-4.6-7.36-6c-5.77-1.33-8.27-3.06-8.27-6.7,0-3.31,2.62-6.4,8.46-6.4,6,0,8.53,3.38,8.89,6.44h-2.19c-.62-2.7-2.53-4.64-6.82-4.64-3.93,0-6.08,1.69-6.08,4.49s1.8,3.86,6.82,5c7.68,1.76,8.81,4.61,8.81,7.63,0,3.71-2.92,6.91-9.23,6.91-6.82,0-9.32-3.67-9.82-7Z"
          />
          <path
          
            d="M634.54,755.86c0,6.88-4,13.14-12.39,13.14-7.68,0-12.16-5.72-12.16-13s4.33-12.95,12.43-12.95C629.91,743.09,634.54,748.52,634.54,755.86Zm-22.29.08c0,5.79,3.47,11.26,10,11.26,7.05,0,10-5.32,10-11.3s-3.35-11-9.93-11C615.33,744.89,612.25,750.25,612.25,755.94Z"
          />
          <path  d="M660,743.45h2.11v23.39h14.65l-.39,1.8H660Z" />
          <path
            
            d="M701.56,743.45v15.26c0,6.69,4.09,8.42,8,8.42,4.56,0,8-1.76,8-8.42V743.45h2.14V758.6c0,7.88-4.52,10.33-10.17,10.33-5.37,0-10-2.7-10-10V743.45Z"
          />
          <path
           
            d="M752.45,745.25h-9.16v-1.8h20.5v1.8h-9.2v23.39h-2.14Z"
          />
          <path  d="M789.43,743.45v25.19h-2.11V743.45Z" />
          <path
           
            d="M839.46,755.86c0,6.88-4,13.14-12.39,13.14-7.68,0-12.16-5.72-12.16-13s4.33-12.95,12.43-12.95C834.82,743.09,839.46,748.52,839.46,755.86Zm-22.29.08c0,5.79,3.47,11.26,10,11.26,7.06,0,10-5.32,10-11.3s-3.35-11-9.94-11C820.25,744.89,817.17,750.25,817.17,755.94Z"
          />
          <path
            
            d="M864.94,768.64V743.45h3.12c4.25,6,14.22,20.12,15.94,22.85h0c-.24-3.63-.2-7.34-.2-11.44V743.45H886v25.19H883.1c-4.05-5.83-14.18-20.48-16.13-23.25h0c.19,3.31.15,7,.15,11.55v11.7Z"
          />
          <path
            
            d="M913.3,761.88c.82,3.34,3.23,5.32,7.71,5.32,5,0,6.9-2.3,6.9-5s-1.36-4.6-7.37-6c-5.76-1.33-8.26-3.06-8.26-6.7,0-3.31,2.61-6.4,8.46-6.4s8.53,3.38,8.88,6.44h-2.18c-.62-2.7-2.53-4.64-6.82-4.64-3.93,0-6.08,1.69-6.08,4.49s1.8,3.86,6.82,5c7.68,1.76,8.81,4.61,8.81,7.63,0,3.71-2.92,6.91-9.24,6.91-6.81,0-9.31-3.67-9.82-7Z"
          />
        </motion.g>
        <g id="Layer_1" data-name="Layer 1">
          <motion.path
            variants={icon2}
            initial="hidden"
            animate="visible"
            d="M691.29,421a27.69,27.69,0,0,0-20.46-9.24c-16,0-28.94,14.12-28.94,31.55v87.5c0,.41,0,.81,0,1.21-.07,2.1-.16,4.19-.16,6.29v7.66a42.21,42.21,0,1,1-84.42,0V534.44c0-1,0-2.16,0-3.68v-87.5c0-17.43-13-31.55-28.94-31.55h-.16c-16,0-29,14.16-28.94,31.62l.16,87.43q0,50.93,26.42,85.23t73.77,34.3q47.79,0,74-33t26.2-86.54v-87.5A32.91,32.91,0,0,0,691.29,421Z"
          />
          <motion.path
            variants={icon1}
            initial="hidden"
            animate="visible"
            d="M412.78,428.34l-44,111.89a4.46,4.46,0,0,1-8.3,0L316.38,428.34c-5.29-13.61-21-20.49-35-15.37s-21.16,20.31-15.87,33.93l.18.44,73.48,185.71c5.33,13.6,21,20.44,35.09,15.28A26.83,26.83,0,0,0,390,633.05l73.47-185.71c5.42-13.56-1.54-28.81-15.54-34s-29.75,1.49-35.17,15"
          />
          <motion.rect
            variants={icon3}
            initial="hidden"
            animate="visible"
            x="729.63"
            y="411.69"
            width="200.54"
            height="61.8"
            rx="30.9"
            transform="translate(1659.8 885.17) rotate(180)"
          />
          <motion.rect
            variants={icon3}
            initial="hidden"
            animate="visible"
            x="729.63"
            y="499.76"
            width="122.3"
            height="61.8"
            rx="30.9"
            transform="translate(1581.56 1061.32) rotate(180)"
          />
          <motion.rect
            variants={icon3}
            initial="hidden"
            animate="visible"
            x="729.63"
            y="588.06"
            width="200.54"
            height="61.8"
            rx="30.9"
            transform="translate(1659.8 1237.93) rotate(180)"
          />
        </g>
      </chakra.svg>
  )
}
