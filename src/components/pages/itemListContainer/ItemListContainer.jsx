export const ItemListContainer = (props) => {
  const { saludo } = props; //Desestructurando el objeto props

  return (
    <div>
      <h2>{saludo} Nombre de usuario</h2>
      <h2>Mis productos</h2>
      <div>Producto 1</div>
      <div>Producto 2</div>
      <div>Producto 3</div>
    </div>
  );
};
