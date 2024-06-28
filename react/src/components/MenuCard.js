import { Link } from 'react-router-dom'
const MenuCard=(props)=>{

   return(
    <div className="col">
        <div className="card menu-card h-100">
            <img src={`/images/${props.imgUrl}`} alt={`image of ${props.title}`} className="img-fluid image card-img-top menu-image"/>
            <div className="card-body">
                <h3 className="card-title menu-title">
                    <Link to={`/${props.path}/${props.id}`}>
                        {props.title}
                    </Link>
                    <p className="card-text">
                        ${props.price}
                    </p>
                </h3>
                <div className='row cart-btns-div'>
                    {/* <div className="qty-div col-6">
                        <button 
                            className="btn btn-primary btn-subtract" 
                            id="btnSubtract`${props.id}`"
                            data-id="`${props.id}`"
                            data-qty="`${props.qty}`">
                            - 
                        </button>
                        <span className="quantity" id="quantity`${props.id}`">{props.qty}</span>
                        <button 
                            className="btn btn-primary btn-add" 
                            id="btnAdd${props.id}"
                            data-id="${props.id}"
                            data-qty="${props.qty}">
                            + 
                        </button>
                    </div> */}
                    <div className="add-to-cart col-6">
                        <button 
                            className="btn cart-btn btn-primary" 
                            id="Btn${props.id}" 
                            data-id="${props.id}"
                            data-price="${props.price}" 
                            data-qty="${props.qty}"
                            data-props="${props.props}">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
   )
}

export default MenuCard