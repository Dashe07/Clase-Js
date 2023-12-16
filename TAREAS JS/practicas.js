// let nombres = ["camila", "andres", "juan", "mario", "pedro", "carlitos"];
// const generarNombre = ("camila", "andres", "juan", "mario", "pedro", "carlitos") => {
    // return generarNombre;}


   // let nombre = nombres[Math.floor(Math.random() * nombres.length)];


   let nombres = ["camila", "andres", "juan", "mario", "pedro", "carlitos"];
   const generarNombre = () => {
      let index = Math.floor(Math.random() * nombres.length);
       return nombres[index];
   };

   console.log(generarNombre());


