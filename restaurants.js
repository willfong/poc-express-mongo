import { Restaurants } from "./db.js";

export const getAll = async () => {                                                                                                       
  const projection = { _id: 1, restaurant_id: 1, name: 1 };                                                                                     
  const results = await Restaurants.find({}, { projection }).limit(5).toArray();                                                                         
  return results;                                                                                                                               
}     
