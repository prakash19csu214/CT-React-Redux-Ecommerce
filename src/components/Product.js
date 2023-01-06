import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
export class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <div className="container">
            <div className="row mt-2 ml-2 ml-md-5">
              {_products.map((item, index) => (
                <div key={index} className="row">
                  <div className="col-12 col-md-4 my-5">
                    <div className="d-flex justify-content-center featured mr-5 ml-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "150px" }}
                        className="img-fluid list-img"
                      />
                    </div>
                  </div>
                  <div className="col-11 col-md-5 mt-5 ml-md-5 ml-2">
                    <div className="row text-center featured-head my-2">
                      {item.title}
                    </div>
                    <div className="row text-center featured-para">
                      <b> $ {item.price} </b>&nbsp; &nbsp;
                    </div>
                    <div className="list-para row my-1">{item.description}</div>
                    <div className="row mt-2">
                      <button
                        onClick={() => this.props.AddCart(item)}
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        <span className="btnn2-text">Add To Card</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-12" style={{marginLeft: "500px", marginTop: "100px"}}>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
