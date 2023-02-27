import { Col } from "reactstrap";

export default function Block({ children, ...props }) {
  return (
    <Col lg="4" md="6" className="m-b-30">
      <h5 className="m-b-20">{props.title}</h5>
      {children}
    </Col>
  );
}
