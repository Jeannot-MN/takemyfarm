import * as React from 'react';
import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useProductsQuery } from "../../generated/graphql";
import Styles from '../../globalStyles/DataTableStyling';
import { SellerContext } from '../../context/SellerContext';

export const ProductsPage = () => {
    const globalClasses = Styles();

    const { seller } = React.useContext(SellerContext);
    const { loading, data, refetch } = useProductsQuery({
        variables: {
            search: '',
            sellerId: seller?.id || 0
        }
    });

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //TODO: after: rowsPerPage * page - 1

    const [searchValue, setSearchValue] = React.useState<string>('');

    const navigate = useNavigate();
    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt="36px"
        >
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                flexDirection="column"
                maxWidth="1440px"
            >
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    maxWidth="1180px"
                    pl="20px"
                    pr="20px"
                >
                    <Box display="flex" width="100%" flexDirection="column">
                        <Box>
                            <Typography className={globalClasses.HeaderText}>
                                Products
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems={'flex-end'}
                            mt="0px"
                        >
                            <Box width="100%">
                                <Typography className={globalClasses.subHeaderText}>
                                    Create, view, edit and manage your products
                                </Typography>
                            </Box>

                            <Box display="flex" width="100%" justifyContent="flex-end">
                                <Button
                                    color="primary"
                                    onClick={async () => {
                                        navigate("/newProduct");
                                    }}
                                >
                                    <Typography className={globalClasses.textButton}>
                                        Create New Product
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>

                        <Divider
                            className={globalClasses.Divider}
                            style={{ marginTop: '10px' }}
                        />
                    </Box>

                    <Box display="flex" width="100%" pt="20px" flexDirection="column">
                        <Table className={globalClasses.MuiTable}>
                            <TableHead className={globalClasses.MuiTableHead}>
                                <TableRow>
                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography className={globalClasses.TableHeaderText}>
                                            NAME
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography className={globalClasses.TableHeaderText}>
                                            DESCRIPTION
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography noWrap className={globalClasses.TableHeaderText}>
                                            PRICE
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography noWrap className={globalClasses.TableHeaderText}>
                                            CATEGORY
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography className={globalClasses.TableHeaderText}>
                                            STATUS
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.products.data.map((product, index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            className={index % 2 !== 0 ? globalClasses.OddTableRow : globalClasses.EvenTableRow}
                                        >
                                            <TableCell>
                                                <Typography noWrap className={globalClasses.TableBodyText}>
                                                    {product.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography noWrap className={globalClasses.TableBodyText}>
                                                    {product.description}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography noWrap className={globalClasses.TableBodyText}>
                                                    {product.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography noWrap className={globalClasses.TableBodyText}>
                                                    {product.category}
                                                </Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Typography className={globalClasses.TableBodyText}>
                                                    {product.status}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="span"
                        count={data?.products.total || 0}
                        rowsPerPage={rowsPerPage}
                        onPageChange={() => { }}
                        page={page}
                        onChangePage={(_event, pageNumber) => {
                            setPage(pageNumber);
                        }}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Box>
            </Box>
        </Box>
    );
}