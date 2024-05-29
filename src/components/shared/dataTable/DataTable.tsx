import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.css";

type Props = {
  columns: GridColDef<object>[];
  rows: object[];
};

const DataTable = (props: Props) => {
  return (
    <div className="dataTable !max-h-[88vh] w-[75vw]">
      <DataGrid
        className="dataGrid"
        rows={props?.rows}
        columns={props?.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 11,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        density="standard"
        disableRowSelectionOnClick
        disableVirtualization
      />
    </div>
  );
};

export default DataTable;
