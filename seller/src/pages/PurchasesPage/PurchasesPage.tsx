import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@material-ui/core";
import Styles from '../../globalStyles/DataTableStyling';

export const PurchasesPage = () => {
    const globalClasses = Styles();
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
                                Purchases
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
                                    View your customers purchases
                                </Typography>
                            </Box>

                            <Box display="flex" width="100%" justifyContent="flex-end">
                                <Button
                                    color="primary"
                                    onClick={async () => { }}
                                >
                                    <Typography className={globalClasses.textButton}>
                                        Download Report
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
                                            PRODUCT NAME
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography className={globalClasses.TableHeaderText}>
                                            QUANTITY
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography noWrap className={globalClasses.TableHeaderText}>
                                            PRICE
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography noWrap className={globalClasses.TableHeaderText}>
                                            TOTAL AMOUNT
                                        </Typography>
                                    </TableCell>

                                    <TableCell className={globalClasses.MuiTableHeaderCell}>
                                        <Typography noWrap className={globalClasses.TableHeaderText}>
                                            BUYER
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
                                <TableRow>
                                    <TableCell>
                                        <Typography noWrap className={globalClasses.TableBodyText}>
                                            2 Litters Fresh Milk
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography noWrap className={globalClasses.TableBodyText}>
                                            5
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography noWrap className={globalClasses.TableBodyText}>
                                            49.99
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography noWrap className={globalClasses.TableBodyText}>
                                            249.95
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography noWrap className={globalClasses.TableBodyText}>
                                            John Doe
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography className={globalClasses.TableBodyText}>
                                            PENDING DELIVERY
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="span"
                        count={47}
                        rowsPerPage={5}
                        onPageChange={()=>{}}
                        page={1}
                    />
                </Box>
            </Box>
        </Box>
    );
}