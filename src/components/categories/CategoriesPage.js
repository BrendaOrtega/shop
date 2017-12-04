import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CategoriesList from "./CategoriesList";
import * as catActions from '../../redux/actions/categoryActions';
import {FloatingActionButton, Dialog, FlatButton, TextField} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CategoryForm from "./CategoryForm";


class CategoriesPage extends Component {
    state = {
        open:false,
        openConfirm:false,
        confirm:false,
        toDelete:'',
        newCat:{
            id:'',
            slug:'',
            image:'',
        },
        imagePreview:{
            src: '',
            file: ''
        },
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
        this.setState({open: true, newCat:{}});
    };

    handleClose = () => {
        this.setState({open: false, newCat:{}, imagePreview:{}});
    };
    handleText=(e)=>{
        let newCat = Object.assign({},this.state.newCat);
        let field = e.target.name;
        newCat[field] = e.target.value;
        this.setState({newCat});
        console.log(newCat)
        let slug = this.slugify(newCat.name);
        newCat.slug=slug;

    };
    slugify=(text)=> {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };
    saveCat=(e)=>{
        e.preventDefault();

        this.props.catActions.saveCategory(this.state.newCat, this.state.imagePreview)
            .then(r=>{
                this.handleClose();
                this.setState({newCat:{}, imagePreview:{}});
            }).catch(e=>{
        })
    };
    updateCat=(product)=>{
        this.setState({open:true, newCat:product})
    };
    //delete a product
    deleteCat=()=>{
        this.props.catActions.deleteCategory(this.state.toDelete)
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
                onClick={this.deleteCat}
            />,];
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                form="newCat"
                type="submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.saveCat}
            />,
        ];
        let {categories} = this.props;
        return (
            <div>
                <CategoriesList categories={categories} deleteCategory={this.openConfirm} updateCategory={this.updateCat}/>
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
                    title={this.state.newCat.name?'Editar Categoría':'Nueva Categoría'}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width:'30%'}}>
                    <CategoryForm
                        handleText={this.handleText}
                        newCat={this.state.newCat}
                        imagePreview={this.state.imagePreview}
                        uploadPhoto={this.uploadPhoto}
                        onSubmit={this.saveCat}

                    />
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        catActions: bindActionCreators(catActions, dispatch)
    }
}

CategoriesPage = connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
export default CategoriesPage;
