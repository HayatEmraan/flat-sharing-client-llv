"use client";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../../../shared/dataTable/DataTable";
import { IUser, TResponse } from "@/interface";
import moment from "moment";
import { Confirm, Report } from "notiflix";
import { useRouter } from "next/navigation";
import { ChangeUserPermission } from "@/actions/auser/useractions";
import { UserStatus } from "@/constant/user.status";
import { UserRole } from "@/constant/user.role";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import Image from "next/image";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "photo",
    headerName: "Photo",

    renderCell: (params) => {
      return <Image src={params.row.photo || "/noavatar.png"} alt="avatar" />;
    },
  },
  {
    field: "username",
    type: "string",
    headerName: "Username",
    width: 120,
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 145,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 170,
  },
  {
    field: "profession",
    type: "string",
    headerName: "Profession",
    width: 150,
  },
  {
    field: "role",
    type: "string",
    headerName: "Role",
    width: 100,
    renderCell: (params) => {
      return (
        <p
          className={`${
            params.row.role === UserRole.admin
              ? "text-white bg-green-400"
              : "text-white bg-red-700"
          } p-1 rounded-md`}>
          {params.row.role}
        </p>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 130,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    type: "string",
    width: 130,
  },
];

const Users = ({ users }: { users: TResponse<IUser[]> }) => {
  const router = useRouter();
  const props = users?.data?.map((user) => ({
    username: user?.username,
    email: user?.email,
    photo: user?.userprofile?.photo,
    profession: user?.userprofile?.profession,
    name: user?.userprofile?.name,
    slugId: user?.id,
    role: user?.role,
    id: "#" + user?.id?.slice(0, 8),
    createdAt: moment(user?.createdAt)?.startOf("day")?.fromNow(),
    updatedAt: moment(user?.userprofile?.updatedAt)?.startOf("day")?.fromNow(),
  }));

  const handleDelete = (id: string) => {
    Confirm.show(
      "Delete Confirmation ⚠️",
      "Are you really want to delete?",
      "{ Yes }",
      "{ No }",
      async () => {
        const updatedInfo = await ChangeUserPermission({
          id,
          isActive: UserStatus.deactivate,
        });
        if (updatedInfo?.success) {
          Report.success(
            "Successful ✔️",
            '"User has been deleted successfully, allow some time to take effect"',
            "{ I understood }",
            () => {
              router.refresh();
            }
          );
        } else {
          Report.failure(
            "UnSuccessful ❌",
            '"Something went wrong, User has not deleted successfully, Please try again"',
            "{ I'll do }",
            () => {}
          );
        }
      },
      () => {}
    );
  };

  const handleRole = (id: string, role: string) => {
    const upperCaseRole = role?.toUpperCase();
    Confirm.show(
      "Permission Confirmation ⚠️",
      `you really wanna make ${upperCaseRole} role?`,
      "{ Yes }",
      "{ No }",
      async () => {
        const updatedInfo = await ChangeUserPermission({
          id,
          role,
        });
        console.log(updatedInfo);
        if (updatedInfo?.success) {
          Report.success(
            "Successful ✔️",
            '"User role has been changed successfully, allow some time to take effect"',
            "{ I understood }",
            () => {
              router.refresh();
            }
          );
        } else {
          Report.failure(
            "UnSuccessful ❌",
            '"Something went wrong, User role has not changed successfully, Please try again"',
            "{ I'll do }",
            () => {}
          );
        }
      },
      () => {}
    );
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      const currentRole = params.row.role;
      const role =
        currentRole === UserRole.admin ? UserRole.user : UserRole.admin;
      return (
        <div className="action">
          <div
            className="cursor-pointer"
            onClick={() => handleRole(params.row.slugId, role)}>
            {currentRole === UserRole.admin ? (
              <MdAdminPanelSettings style={{ height: "23px", width: "22px" }} />
            ) : (
              <FaUserShield style={{ height: "23px", width: "22px" }} />
            )}
          </div>
          <div
            className="delete"
            onClick={() => handleDelete(params.row.slugId)}>
            <Image src="/delete.svg" alt="" />
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
                  Users
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          Users
        </h1>
      </div>
      <DataTable columns={[...columns, actionColumn]} rows={props} />
    </div>
  );
};

export default Users;
