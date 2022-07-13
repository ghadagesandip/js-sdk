function capital(string) {
    const capitalizedString =
      string.substring(0, 1).toUpperCase() + string.substring(1)
    return capitalizedString
  }
  
  function getPokemonById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve({id: id, value: 100});
      }, 1000)
    });
  }

  export default capital
  export { getPokemonById }