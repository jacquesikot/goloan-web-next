import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Backdrop,
  Modal,
  LinkWrapper,
  LinkItem,
  BtnWrapper,
  Button,
  CloseIcon,
  CloseIconWrap,
} from './MenuModalElements';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const MenuModal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Modal variants={modal}>
            <CloseIconWrap onClick={setShowModal}>
              <CloseIcon />
            </CloseIconWrap>
            <LinkWrapper>
              <LinkItem>Home</LinkItem>
              <LinkItem>About Us</LinkItem>
              <LinkItem>Services</LinkItem>
              <LinkItem>How it Works</LinkItem>
            </LinkWrapper>
            <BtnWrapper>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: '100%',
                }}
              >
                <Button>Sign In</Button>
              </motion.div>
            </BtnWrapper>
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;
