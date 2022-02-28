import React from 'react'
import { sagaModal } from 'redux-saga-modal'
import ReactModal from 'react-modal'

const Modal = ({
  modal: { name },
  isOpen,
  show,
  update,
  destroy,
  click,
  submit,
  hide,
  showModal,
  updateModal,
  submitModal,
  clickModal,
  hideModal,
  destroyModal,
  ...ownProps
}) => (
  <ReactModal
    isOpen={isOpen}
    appElement={document.getElementById('root') || undefined}
    className='messageBax'
  >
    <div className="messageBax-content">
      <div className='messageBax-body'>
      <p>{ownProps.text}</p>
      </div>
      <div className='messageBax-footer'>
          <button onClick={() => hide()}>Cancel</button>
          <button onClick={() => submit()}>Ok</button>
      </div>

    </div>
  </ReactModal>
)

export default sagaModal({
  // an unique name for the modal
  name: 'CONFIRM_MODAL'
})(Modal)
