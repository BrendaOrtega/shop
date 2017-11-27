import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductList from "./ProductList";
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProductForm from "./ProductForm";
import * as productActions from '../../redux/actions/productActions';
import './products.css';

class ProductsPage extends Component {
    state = {
        open:false,
        newProduct:{},
    };


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleText=(e)=>{
        let newProduct = Object.assign({},this.state.newProduct);
        let field = e.target.name;
        newProduct[field] = e.target.value;
        this.setState({newProduct});

    };
    saveProduct=()=>{
        this.props.productActions.saveProduct(this.state.newProduct)
            .then(r=>{
                this.handleClose();
                this.setState({newProduct:{}});
            }).catch(e=>{

        })
    };
    deleteProduct=(product)=>{
        this.props.productActions.deleteProduct(product)
            .then(r=>{
                console.log(r)
            }).catch(e=>{
                console.log(e)
        })
    };


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.saveProduct}
            />,
        ];
        return (
            <div className="products-admin">
               <ProductList
                   products={this.props.products}
                    fetched={this.props.fetched}
                deleteProduct={this.deleteProduct}/>

                <FloatingActionButton
                    onClick={this.handleOpen}
                    className="add-product-button">
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width:'30%'}}>
                    <ProductForm
                        handleText={this.handleText}
                        newProduct={this.state.newProduct}/>
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        products: state.products,
        fetched: state.products!==undefined,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export default ProductsPage;
