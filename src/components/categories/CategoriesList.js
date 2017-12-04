import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter, IconButton} from 'material-ui';
import '../products/products.css';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';



const CategoriesList = ({categories, deleteCategory, updateCategory}) => {
    return (
        <Table className={"table-body"}>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                        Categories
                    </TableHeaderColumn>
                </TableRow>
                <TableRow>
                    <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Nombre">Name</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Presentación">Slug</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Borrar" >Borrar</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Editar">Editar</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}>

                {categories.map( (c, index) => (
                    <TableRow key={index}>
                        <TableRowColumn>{c.id}</TableRowColumn>
                        <TableRowColumn>{c.name}</TableRowColumn>
                        <TableRowColumn>{c.slug}</TableRowColumn>
                        <TableRowColumn>
                            <IconButton onClick={()=>deleteCategory(c)}>
                                <Delete/>
                            </IconButton>
                        </TableRowColumn>
                        <TableRowColumn>
                            <IconButton onClick={()=>updateCategory(c)}>
                                <Edit/>
                            </IconButton>
                        </TableRowColumn>

                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>

                    </TableRowColumn>
                </TableRow>
            </TableFooter>
        </Table>
    )
};

export default CategoriesList;