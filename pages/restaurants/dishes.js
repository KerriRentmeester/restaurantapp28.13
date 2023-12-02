//this file magically appeared in 28.12. 
// The video did not show the code, so I guessed by taking code from starter file folder: GraphQL squema.... 
// in vid 28.16 @ 8:20, the following code is displayed. I edited it accordingly (by adding code and commenting out the unneeded code at thsi time).

import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  //const {addItem} = useContext(AppContext)
  //return all restaurants and all dishes
  const GET_RESTAURANTS = gql`
  query {
    restaurants {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
        url
        }
      }
    }
  }
`;

// return the selected restaurant 
const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;
console.log(`restaurant = ${restaurantID}`)
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;
  console.log(restID)
  if (restId > 0){

    return (
      <>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  style={{ height: 150, width:150 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button color="info"
                    outline
                    color="primary"
                    //onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  
                </div>
              </Card>
            </Col>
          ))}
          <Col xs="4" style={{ padding: 0 }}>
            <div>
              Cart in here
            </div>
          </Col>
        </>
        )}
        else{
          return <h1> No Dishes</h1>
        }
    }
    export default Dishes