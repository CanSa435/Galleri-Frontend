import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import type React from 'react';
import type { JSX } from '@emotion/react/jsx-runtime';
import type GalleristCarModel from '../../../models/GalleristCarModel';

const GalleristCarList : React.FC<GalleristCarModel> = ({id, dtoCar, dtoGallerist } : GalleristCarModel) : JSX.Element => {
 return (
    <>
       <TableRow>
          <TableCell align='center'>
            {id}
          </TableCell>
          <TableCell align='center'>
            {dtoGallerist.firstName + " " + dtoGallerist.lastName}
          </TableCell>
         <TableCell align='center'>
           {dtoCar.production}
         </TableCell>
         <TableCell align='center'>
           {dtoCar.model + " / " + dtoCar.productionYear}
         </TableCell>
         <TableCell align='center'>
           {dtoCar.plaka}
         </TableCell>
       </TableRow>
      </>
   )
}

export default GalleristCarList