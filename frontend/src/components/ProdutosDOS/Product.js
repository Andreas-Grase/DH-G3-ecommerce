import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
// import { ProductConsumer } from './context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md col-lg-3 my-3">
                <div className="card mb-3">
                    <div className="img-container p-10" onClick={console.log("you clicked me on the image container")
                    }>
                        <Link to="/produtos/produto/:id">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>

                    </div>
                    {/* Card Footer que deixou de ser footer para ir acima do carrito*/}
                    <div className="card-footer d-flex">
                        <p className=" mb-0">
                            {title}
                        </p>
                        <h5 className="font-weight-bold mb-0">
                            <span className="mr-1 ml-2">$</span>
                            {price}
                        </h5>
                    </div>
                     <button
                    className="cart-btn"
                // disabled={inCart ? true : false}
                // onClick={() => {
                //     console.log('added to the cart');
                // }}
                >
                    {/* {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                            in cart
                                </p>
                            ) : ( */}
                    <p className="mensaje-carrito">Adicionar ao carrinho<i className="fas fa-cart-plus ml-1" /></p>
                    {/* )} */}
                </button>
                </div>
               
            </ProductWrapper>
            
        );
    }
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    ${'' /* border-top: transparent; */}
    transition: all 1s linear; 
    height: 4.5rem;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247, 247, 247);
    }
}
// .img-container{
//     position: relative;
//     overflow: hidden;
// }
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.1);
}
.cart-btn{
    // position: absolute;
    // bottom: 0;
    // right: 0;
    border-radius: 3px;
    // padding: 0.2rem 0.4rem;
    background: #af804866;
    border: none;    
    font-size: 1.4rem;
    // text-align: center;
    // border-radius: 0.5rem 0 0 0;
    // transform: translate(100%,100%);
    transition: all 0.5s linear;
}
.mensaje-carrito{
 margin-top 1rem;

}
// .img-container:hover .cart-btn{
//     transform: translate(0,0);
// }
.cart-btn:hover{
    background: #af8048;
    cursor: pointer;
}
`