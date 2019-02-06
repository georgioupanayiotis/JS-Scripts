//filter and map array
 Object.keys(data).map((key) => ({
    id: key,
    name: 'Name',
    surname: data[key],
  }))
