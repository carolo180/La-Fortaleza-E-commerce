import React from "react";
import Products from "./Products";
import "./Products.css"
import { useState } from "react";
import { connect } from "react-redux";

const SectProducts = ({ products }) => {

 const [filteringKeyword, setFilteringKeyword] = useState("");
  const [filter, setFilter] = useState(products)

  //filtrar por palabra clave
    function searchInput(filteringKeyword){
    return function(x){
      return x.name.includes(filteringKeyword) || !filteringKeyword;
    }
  }
   //filtrar por categoria
  const filterProduct =(cat)=>{
    const updatedList = products.filter((x) =>x.category === cat)
    setFilter(updatedList)
  }

    const ShowProducts = () =>{
    return(
      <>
        <div className="buttonFilters">
          <button className="btn btn-outline-dark" onClick={()=>setFilter(products)}>All</button>
          <button className="btn btn-outline-dark" onClick={()=>filterProduct("Control de accesos")}>Acces Control</button>
          <button className="btn btn-outline-dark" onClick={()=>filterProduct("Camaras")}>Camaras</button>
          <button className="btn btn-outline-dark" onClick={()=>filterProduct("DVR'S")}>Dvr's</button>
        </div>
                {
                  filter.filter(searchInput(filteringKeyword)).map(prod =>(
                    <div className="col-6 col-md-3" key={prod.id}>
                      <Products key={prod.id} product={prod} />
                    </div>
                  ))
                }
      </>
    )
  
  }

  return (
   <div id="sectcamara" className="container-fluid">
            <form className="filterCamps">
              <input className="buscador"
                  type="search" 
                  placeholder="    Search Filter.."
                  onChange={e => setFilteringKeyword(e.target.value)}
                />
           
           </form>

           <div className="row">

              <ShowProducts />
           </div>

    </div>
  )
}

//funcion que trae los datos del estado inicial(products) desde el shopping reducer
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(SectProducts); 