"use client";
import { GridColDef } from "@mui/x-data-grid";
import { TResponse } from "@/interface";
import moment from "moment";
import DataTable from "@/components/shared/dataTable/DataTable";
import { IProperty } from "@/interface/iproperty/iproperty";
import Link from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "name",
    headerName: "Name",
    type: "string",
    width: 160,
  },
  {
    field: "category",
    type: "string",
    headerName: "Category",
    width: 150,
  },
  {
    field: "location",
    type: "string",
    headerName: "Location",
    width: 150,
  },
  {
    field: "purpose",
    type: "string",
    headerName: "Purpose",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 150,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    type: "string",
    width: 150,
  },
];

const ReserveProperties = ({
  properties,
}: {
  properties: TResponse<IProperty[]>;
}) => {
  const props = properties?.data?.map((property) => ({
    id: "#" + property?.id.slice(0, 8),
    name: property?.name,
    category: property?.category,
    location: property?.location,
    purpose: property?.purpose,
    price: "$" + property?.price,
    slugId: property?.id,
    createdAt: moment(property?.createdAt)?.startOf("day")?.fromNow(),
    updatedAt: moment(property?.updatedAt)?.startOf("day")?.fromNow(),
  }));

  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link href={`/property/details/${params.row.slugId}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="users px-4">
      <div className="my-7 col-span-full">
        <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                <svg
                  className="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                  aria-current="page">
                  Properties
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          Properties
        </h1>
      </div>
      <DataTable columns={[...columns, actionColumn]} rows={props} />
    </div>
  );
};

export default ReserveProperties;
