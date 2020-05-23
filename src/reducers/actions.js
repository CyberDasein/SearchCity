export function setSities(sities) {
 
  return {
    type: "LOAD_SITIES",
    payload: sities,
  };
}
export function addSity(sity) {
 
  return {
    type: "ADD_SITY",
    payload: sity,
  };
}

export function removeSity(id) {
  
  return {
    type: "REMOVE_SITY",
    payload: id,
  };
}
