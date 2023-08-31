import { motion } from "framer-motion";
import { CenterMessage } from "../../styles/welcomeAnimation";
import { useEffect, useRef, useState } from "react";


function Animation ({ message }) {

    const messageRef = useRef()
    const [offsetHeight, setOffsetHeight] = useState(0)

    const messageVariants = {
      initial: { 
        y: '120%', 
        opacity: .2,
        transition: { 
          y: { duration: 4, ease: [.42, 0, .58, 1] },
          opacity: { duration: 1, ease: [.42, 0, .58, 1] },
        }
      },
      animate: { 
        y: `calc(50% - ${offsetHeight/2}px)`, 
        // y: '50%', 
        opacity: 1,
        transition: { 
          y: { duration: 4, ease: [.42, 0, .58, 1] },
          opacity: { duration: 4, ease: [.42, 0, .58, 1] },
        }
      },
      exit: { 
        y: '-120%', 
        opacity: .2,
        transition: { 
          y: { duration: 4, ease: [.42, 0, .58, 1] },
          opacity: { duration: 4, ease: [.42, 0, .58, 1] },
        }
      }
    }

    useEffect(() => {
      setOffsetHeight(messageRef.current.offsetHeight)
    })

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