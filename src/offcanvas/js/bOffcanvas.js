import offcanvas from "./offcanvas"
import {getTimeString, offcanvasEvents, removeOffcanvas} from "./util/index"


/**
 * @param {Node|string|Function} headerNodeElement
 * @param {Node|string|Function} bodyNodeElement
 * @param {string} Placement
 * @param {Object} Options
 * @param {string} EventsType
 * @param {Function} EventsFunction
 */
const bOffcanvas = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString()
  let offcanvasId = 'offcanvasId_' + timeString

  let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement, offcanvasId)
  document.body.append(_offcanvas)

  EventsType && EventsFunction ? offcanvasEvents(timeString, EventsType, EventsFunction) : ''

  let xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas)
  xxx.show()
  removeOffcanvas(offcanvasId)
  return offcanvasId
}

export default bOffcanvas
