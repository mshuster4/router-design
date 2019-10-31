import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, useMediaQuery } from '@material-ui/core';
import "./style.css"

export default function ProjectModal({ children, open, onExited, ...rest }) {
  const [showModal, setShowModal] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    if (open) {
      setShowModal(true);
    }
  }, [open]);

  function startExitAnimation() {
    setShowModal(false);
  }

  function onExitAnimationEnd() {
    onExited();
  }

  return (
    <Dialog
      {...rest}
      open={showModal}
      onClose={startExitAnimation}
      onExited={onExitAnimationEnd}
      fullScreen={fullScreen}
      maxWidth="lg"
      aria-labelledby="responsive-dialog-title"
    >
      {children}
    </Dialog>
  );
}

ProjectModal.propTypes = {
  ...Dialog.propTypes
};
