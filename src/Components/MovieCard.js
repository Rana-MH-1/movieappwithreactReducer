import { Rating } from "@mui/material";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {data.map((el) => (
            <Link to={`/movie/${el._id}`}>
          <Col>
            <Card>
              <Card.Img variant="top" src={el.imgUrl} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
              </Card.Body>
              <Rating style={{margin:'0 auto'}} name="read-only" value={el.rate} readOnly />
            </Card>
          </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default MovieCard;
