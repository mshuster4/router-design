import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';

function ProjectModal({ children, open, onExited, ...rest }) {
  const [showModal, setShowModal] = useState(false);

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
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

ProjectModal.propTypes = {
  ...Dialog.propTypes
};

export default ProjectModal;