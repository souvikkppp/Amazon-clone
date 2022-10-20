import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      
      {products.slice(0,3).map(product =>  <Product key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} />)}
      
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
      
      <div className="col-span-full ">
        {products.slice(3,4).map(product =>  <Product key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} />)}
      </div>

      
        {products.slice(4, products.length).map(product =>  <Product key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} />)}
      

    </div>
  )
}

export default ProductFeed;

// function (product) {
//   <p>{product.image}</p>
  
// } 



