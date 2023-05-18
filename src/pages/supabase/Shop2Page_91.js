import{ useState,useEffect} from 'react';

const Shop2Page_91=() => {
  const[products,setProducts]=useState([]);
  
  const getShop2_91 =async()=>{
    try{
      const response=await fetch(`https://axkkvqkfwhcfrwtjvyam.supabase.co/rest/v1/shop2_91?select=*`,{
        method:'GET',
        headers:{
          apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4a2t2cWtmd2hjZnJ3dGp2eWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc3ODAsImV4cCI6MTk5ODA2Mzc4MH0.YvCTPYAwQwazzdT77WfTcEBdbdmRI-4cTC7sTXD9I-M`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4a2t2cWtmd2hjZnJ3dGp2eWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc3ODAsImV4cCI6MTk5ODA2Mzc4MH0.YvCTPYAwQwazzdT77WfTcEBdbdmRI-4cTC7sTXD9I-M`
        }
      });
      const data=await response.json();
      console.log('shop2 data',data);
      setProducts(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getShop2_91();
  },[]);

  return (
    <div className="shop-page">
    <div className="collection-page">
      <h1 className="title">All Product -- Supabase shop2</h1>
      <div className="items">
        { products.map( ( product)=> {
          const{name,price,local_url} =product;
          return(
          <div className="collection-item">
          <img className="image" src={local_url} />
          <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
          </div>
          <button className="custom-button">Add to Cart</button>
          </div>
        )
        })}
      </div>
    </div>
  </div>
  );
}

export default Shop2Page_91;
