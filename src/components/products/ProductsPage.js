import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductList from "./ProductList";
import {FloatingActionButton, Dialog, FlatButton, TextField} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProductForm from "./ProductForm";
import * as productActions from '../../redux/actions/productActions';
import './products.css';

class ProductsPage extends Component {
    state = {
        open:false,
        openConfirm:false,
        confirm:false,
        search:'',
        newProduct:{
            price:0,
            name:'',
            presentation:'',
            image:'',
            in_offer:false,
            category:'',
            offer_price:0,
        },
        imagePreview:{
            src: '',
            file: ''
        },
    };
    handleToggle=(e,v)=>{
        let {newProduct} = this.state;
        newProduct['in_offer'] = v;
        this.setState({newProduct});

    };
    handleChange=(e, i, cat)=>{
        let {newProduct} = this.state;
        newProduct['category'] = cat;
        this.setState({newProduct});
    };

    handleSearch=(e)=>{
        this.setState({search:e.target.value})
    };


    uploadPhoto=(e)=>{
        let {imagePreview} = this.state;
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload =  (e) => {
            imagePreview.src = e.target.result;
            imagePreview.file = file;
            this.setState({imagePreview});
        };

        reader.readAsDataURL(file);
    };

    handleOpen = () => {
        this.setState({open: true, newProduct:{}});
    };

    handleClose = () => {
        this.setState({open: false, newProduct:{}, imagePreview:{}});
    };
    handleText=(e)=>{
        let newProduct = Object.assign({},this.state.newProduct);
        let field = e.target.name;
        newProduct[field] = e.target.value;

        this.setState({newProduct});
        console.log(newProduct)

    };
    saveProduct=(e)=>{
        e.preventDefault();

        this.props.productActions.saveProduct(this.state.newProduct, this.state.imagePreview)
            .then(r=>{
                this.handleClose();
                this.setState({newProduct:{}, imagePreview:{}});
            }).catch(e=>{
            })
    };
    updateProduct=(product)=>{
        this.setState({open:true, newProduct:product})
    };
    //delete a product
    deleteProduct=()=>{
            this.props.productActions.deleteProduct(this.state.toDelete)
                .then(r=>{
                    console.log(r)
                }).catch(e=>{
                console.log(e)
            });
        this.setState({toDelete:'', openConfirm:false});
    };
    openConfirm=(product)=>{
        this.setState({openConfirm: true, toDelete:product});
    };
    closeConfirm=()=>{
        this.setState({openConfirm: false, toDelete:''});
    };


    render() {
        const regEx = new RegExp(this.state.search,'i');
        let items = this.props.products.slice();
        if(this.state.search){
            items = items.filter(item => regEx.test(item.name)|| regEx.test(item.id));
        }
        const confirmActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.closeConfirm}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.deleteProduct}
            />,];
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                form="newProduct"
                type="submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.saveProduct}
            />,
        ];
        return (
            <div className="products-admin">
                <div className="search">
                    <TextField
                        style={{width:'50%'}}
                        className="search-text"
                        hintText="Busca..."
                        name="search"
                        value={this.state.search}
                        onChange={this.handleSearch}/>
                </div>
               <ProductList
                    products={items}
                    fetched={this.props.fetched}
                    deleteProduct={this.openConfirm}
                    updateProduct={this.updateProduct}/>

                <FloatingActionButton
                    onClick={this.handleOpen}
                    className="add-product-button">
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    actions={confirmActions}
                    modal={false}
                    open={this.state.openConfirm}
                    onRequestClose={this.closeConfirm}
                >
                    ¿Seguro que deseas borrar?
                </Dialog>
                <Dialog
                    autoScrollBodyContent={true}
                    title={this.state.newProduct.name?'Editar Producto':'Nuevo Producto'}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width:'30%'}}>
                    <ProductForm
                        handleText={this.handleText}
                        newProduct={this.state.newProduct}
                        imagePreview={this.state.imagePreview}
                        uploadPhoto={this.uploadPhoto}
                        onSubmit={this.saveProduct}
                        handleChange={this.handleChange}
                        handleToggle={this.handleToggle}
                        categories={this.props.categories}
                    />
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        products: state.products,
        fetched: state.products!==undefined,
        categories:state.categories,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export default ProductsPage;
