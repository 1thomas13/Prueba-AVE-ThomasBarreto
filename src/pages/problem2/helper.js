export const orderArray = (value, filtered) => {
    
  let arresa = filtered
  if (value === 'weight') {
    arresa = arresa.sort(function (a, b) {
      if (a.value.weight < b.value.weight) {
        return -1;
      }
      if (a.value.weight > b.value.weight) {
        return 1;
      }
      return 0;
    });
  }

  if (value === 'name') {
    arresa = arresa.sort(function (a, b) {
      if (a.value.name < b.value.name) {
        return -1;
      }
      if (a.value.name > b.value.name) {
        return 1;
      }
      return 0;
    });
  }

  if (value === 'type') {
    arresa = arresa.sort(function (a, b) {
      if (a.value.types[0].type.name < b.value.types[0].type.name) {
        return -1;
      }
      if (a.value.types[0].type.name > b.value.types[0].type.name) {
        return 1;
      }
      return 0;
    })
  }
  return arresa
}