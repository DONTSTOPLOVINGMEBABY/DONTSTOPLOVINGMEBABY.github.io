import { motion } from "framer-motion";
import { CenterMessage } from "../../styles/welcomeAnimation";
import { useRef } from "react";

const messageVariants = {
    initial: { 
      y: '120%', 
      opacity: .5,
      transition: { duration: 1, type: 'tween', ease: 'easeInOut' }
    },
    animate: { 
      y: '50%', 
      opacity: 1,
      transition: { duration: 4, type: 'tween', ease: 'easeInOut' }
    },
    exit: { 
      y: '-120%', 
      opacity: .5,
      transition: { duration: 4, type: 'tween', ease: [0.42, 0, 0.58, 1] } 
    }
}

function Animation ({ message }) {

    const messageRef = useRef()

    return (
        <motion.div
        key={message}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={messageVariants}
        style={{
            position: 'absolute',
            bottom: '0',
            height: '100%', 
            width : '100%', 
        }}
    >
        <CenterMessage ref={messageRef}>
            {message}
        </CenterMessage>
    </motion.div>
    )
}

export default Animation