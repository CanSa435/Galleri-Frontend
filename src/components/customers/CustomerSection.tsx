import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { TableBody, TableCell, TableRow } from '@mui/material';
import type CustomerModel from '../../models/CustomerModel';
import Customer from './Customer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type ApiResponse from '../../models/ApiResponse';

const CustomerSection = () => {
  const [customerList,setCustomerList] = useState<CustomerModel[]>([]);
  useEffect(() => {
    axios.get<ApiResponse<CustomerModel[]>>('http://localhost:8080/rest/api/customers/get-all-customers')
    .then((data:any) => (
      setCustomerList(data.data.payload)
    ))
  },[])
  return (
    <section className='pt-24'>
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl text-center">Müşterilerimiz</h1>
            <div className="m-5 mt-14">
              <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} aria-label='customers'>
                  <TableHead>
                      <TableRow>
                        <TableCell>Müşteri Adı</TableCell>
                        <TableCell>Müşteri Soyadı</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      customerList.map((customer:CustomerModel) => (
                        <Customer key={customer.id} id={customer.id} firstName={customer.firstName} lastName={customer.lastName}/>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
        </div>
    </section>
  )
}

export default CustomerSection