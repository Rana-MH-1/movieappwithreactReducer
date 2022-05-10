import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails({ dataMovie }) {
  let { id } = useParams();
  let navigate = useNavigate()
  return (
    <div>
      {dataMovie?.map(
        (el) =>
          el._id == id && (
            <div>
                {console.log(dataMovie)}
              <Card className="text-center">
                <Card.Header>{el.date}</Card.Header>
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>
                   {el.description}
                  </Card.Text>
                  <Button variant="primary"onClick={()=>navigate('/')} >Go Home</Button>
                  <Button variant="primary" onClick={()=>navigate(-1)}>Go BACK</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{el.category}</Card.Footer>
              </Card>
            </div>
          )
      )}
    </div>
  );
}

export default MovieDetails;
