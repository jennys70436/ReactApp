import { createModal } from 'redux-saga-modal'
import { race } from 'redux-saga/effects'

interface InitProps {
    text: string
    title: string
    type: string
}

interface ModalRaceResult {
    submit?: object
    hide?: object
}

export function * createMessageBox (initProps: InitProps) {
  const modal = createModal(
    'MESSAGEBOX'
  )

  yield modal.show(initProps)

  const winner: ModalRaceResult = yield race({
    submit: modal.takeSubmit(),
    hide: modal.takeHide()
  })
  if (winner.submit) {
    yield modal.hide()
    return true
  }
  yield modal.destroy()
  return false
}
