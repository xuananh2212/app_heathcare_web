"use client";
import { useEffect, useState, useCallback, useMemo } from 'react';
import {
     Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input,
     Pagination, TableBody, TableCell, TableColumn, TableHeader, TableRow, Table,
     User
} from '@nextui-org/react';
import { SearchIcon } from '../users/components/SearchIcon';
import { ChevronDownIcon } from '../users/components/ChevronDownIcon';
import { PlusIcon } from '../users/components/PlusIcon';
import { useDispatch, useSelector } from 'react-redux';
import { doctorState, setDoctors } from '@/stores/slices/docotor.slices';
import { useGetDoctorsQuery } from '@/stores/slices/api/doctor.slices.api';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TopContent from './components/TopContent';
import { capitalize } from '../users/utils/capitalize';
import { VerticalDotsIcon } from '../users/components/VerticalDotsIcon';
import { columns } from './configs/columns.configs';
import { formatVND } from './utils/formatVND';

const Doctor = () => {
     const [pages, setPages] = useState(1);
     const { doctors } = useSelector(doctorState);
     const dispatch = useDispatch();
     const searchParams = useSearchParams();
     const pathname = usePathname();
     const router = useRouter();
     const queryParams = {};

     searchParams.forEach((value, key) => {
          queryParams[key] = value;
     });

     const { error, isLoading, refetch, data: doctorResponse } = useGetDoctorsQuery(
          { ...queryParams },
          { refetchOnMountOrArgChange: true, refetchOnFocus: true }
     );
     console.log("doctors111", doctors);

     const topContent = useMemo(() => (
          <div className="flex flex-col gap-4">
               <div className="flex justify-between gap-3 items-end">
                    <Input
                         isClearable
                         className="w-full sm:max-w-[44%]"
                         placeholder="Search by name..."
                         startContent={<SearchIcon />}
                         onClear={() => onClear()}
                    />
                    <div className="flex gap-3">
                         <Dropdown>
                              <DropdownTrigger className="hidden sm:flex">
                                   <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                        Status
                                   </Button>
                              </DropdownTrigger>
                              <DropdownMenu disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectionMode="multiple">
                                   {/* {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {capitalize(status.name)}
                </DropdownItem>
              ))} */}
                              </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                              <DropdownTrigger className="hidden sm:flex">
                                   <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                        Ẩn/Hiện Cột
                                   </Button>
                              </DropdownTrigger>
                              <DropdownMenu disallowEmptySelection aria-label="Table Columns" closeOnSelect={false} selectionMode="multiple">
                                   {columns.map((column) => (
                                        <DropdownItem key={column.uid} className="capitalize">
                                             {capitalize(column.name)}
                                        </DropdownItem>
                                   ))}
                              </DropdownMenu>
                         </Dropdown>
                         <Button color="primary" endContent={<PlusIcon />}>
                              Thêm mới
                         </Button>
                    </div>
               </div>
               <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {doctors.length} Bác sĩ</span>
                    <label className="flex items-center text-default-400 text-small">
                         Hàng trên mỗi trang:
                         <select className="bg-transparent outline-none text-default-400 text-small">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                         </select>
                    </label>
               </div>
          </div>
     ), [doctors]);

     const bottomContent = useMemo(() => (
          <div className="py-2 px-2 flex justify-between items-center">
               <span className="w-[30%] text-small text-default-400">
               </span>
               <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"

               />
               <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat">
                         Trước
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" >
                         Sau
                    </Button>
               </div>
          </div>
     ), [doctors]);

     const renderCell = useCallback((user, columnKey) => {
          const cellValue = user[columnKey];
          console.log("columnKey,user", columnKey, user)
          switch (columnKey) {
               case "name":
                    return <User avatarProps={{ radius: "lg", src: user.image }} name={cellValue} ></User>;
               case "exp":
                    return <p className="text-bold text-small capitalize">{`${cellValue} năm`}</p>;
               case "price":
                    return <p className="text-bold text-small capitalize">{formatVND(cellValue)}</p>;
               case "actions":
                    return (
                         <div className="relative flex justify-end items-center gap-2">
                              <Dropdown>
                                   <DropdownTrigger>
                                        <Button isIconOnly size="sm" variant="light">
                                             <VerticalDotsIcon className="text-default-300" />
                                        </Button>
                                   </DropdownTrigger>
                                   <DropdownMenu>
                                        <DropdownItem>Xem chi tiết</DropdownItem>
                                        <DropdownItem>Sửa</DropdownItem>
                                        <DropdownItem>Xóa</DropdownItem>
                                   </DropdownMenu>
                              </Dropdown>
                         </div>
                    );
               default:
                    return cellValue;
          }
     }, []);

     return (
          <Table
               aria-label="Example table with custom cells, pagination and sorting"
               isHeaderSticky
               bottomContent={bottomContent}
               bottomContentPlacement="outside"
               classNames={{
                    wrapper: "max-h-[382px]",
               }}
               selectionMode="multiple"
               topContent={topContent}
               topContentPlacement="outside"
          >
               <TableHeader columns={columns}>
                    {(column) => (
                         <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} allowsSorting={column.sortable}>
                              {column.name}
                         </TableColumn>
                    )}
               </TableHeader>
               {doctors && (
                    <TableBody emptyContent={"No users found"} items={doctors}>
                         {(item) => (
                              <TableRow key={item.id}>
                                   {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                              </TableRow>
                         )}
                    </TableBody>
               )}
          </Table>
     );
};

export default Doctor;
