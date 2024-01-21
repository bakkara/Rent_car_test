import { List, ListItem } from "./CarList.styled"
import { CarItem } from "../CarItem/CarItem";
import { Filter } from "../Filter/Filter";

export const CarList = ({ cars }) => {
    
  return (

      <>
    <Filter />
     <List>
        {cars.map(item => (
            <ListItem key={item.id}>
            <CarItem car={item}/>
            </ListItem>
      ))}
          </List>
      </>

 )
}