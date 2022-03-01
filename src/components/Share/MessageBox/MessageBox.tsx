import React from 'react'
import { sagaModal, ModalHelpers } from 'redux-saga-modal'
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
}: ModalHelpers) => (
  <ReactModal
    isOpen={isOpen}
    appElement={document.getElementById('root') || undefined}
    className='messageBax'
  >
    <div>
      <h3>{ownProps.title}</h3>
      <p>{ownProps.text}</p>
      <div>
          {
            ownProps.type === 'confirm'
              ? (
              <>
                <button className='btn btn-outline-success' onClick={() => submit()}>Ok</button>
                <button className='btn btn-outline-dark' onClick={() => hide()}>Cancel</button>
              </>
                )
              : <button className='btn btn-outline-danger' onClick={() => hide()}>Ok</button>
          }
      </div>
    </div>
  </ReactModal>
)

export default sagaModal({
  name: 'MESSAGEBOX'
})(Modal)
