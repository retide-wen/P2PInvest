import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { GetExistNotes } from '../Services/P2PInvestService'; // Adjust the import path as needed

const columns: GridColDef[] = [
  { field: 'Rating', headerName: 'Rating', width: 100 },
  { field: 'NoteID', headerName: 'Note ID', width: 150 },
  { field: 'InvestmentAmount', headerName: 'Investment Amount', type: 'number', width: 150 },
  { field: 'Term', headerName: 'Term', type: 'number', width: 100 },
  { field: 'PurchaseDate', headerName: 'Purchase Date', width: 150 },
  { field: 'PaymentDueDate', headerName: 'Payment Due Date', width: 150 },
  { field: 'PaymentsReceived', headerName: 'Payments Received', type: 'number', width: 150 },
  { field: 'PrincipalReceived', headerName: 'Principal Received', type: 'number', width: 150 },
  { field: 'Yield', headerName: 'Yield', type: 'number', width: 100 },
  { field: 'Status', headerName: 'Status', width: 100 },
  { field: 'SubStatus', headerName: 'Sub Status', width: 100 },
];

const NotesDetails: React.FC = () => {
  interface Note {
    id: number;
    Rating: string;
    NoteID: string;
    InvestmentAmount: number;
    Term: number;
    PurchaseDate: string;
    PaymentDueDate: string;
    PaymentsReceived: number;
    PrincipalReceived: number;
    Yield: number;
    Status: string;
    SubStatus: string;
  }

  const [rows, setRows] = useState<Note[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = '/v1/Prosper/ExistNotes'; // Use relative URL
        const data = await GetExistNotes(endpoint);
        // Ensure each row has a unique id
        const formattedData = (data as any[]).map((item: any, index: number) => ({
          id: index,
          ...item,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </div>
      </Paper>
    </Box>
  );
};

export default NotesDetails;