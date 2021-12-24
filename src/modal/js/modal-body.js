const modalBody = (bodyElement) => {
  let modal_body = document.createElement('div')

  modal_body.className = 'modal-body'

  bodyElement instanceof HTMLElement ? modal_body.append(bodyElement) : modal_body.innerHTML = bodyElement

  return modal_body
}
export default modalBody