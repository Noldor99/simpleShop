import { Offcanvas, Stack } from "react-bootstrap"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"


export function ShoppingCart() {

  const {openPanel, closePanel} = useActions()
  const {isOpen} = useSelector(state=>state.panel)
  return (
    <Offcanvas show={isOpen} onHide={()=>closePanel()} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>

          <div className="ms-auto fw-bold fs-5">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
