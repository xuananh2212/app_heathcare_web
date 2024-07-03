"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'
import React from 'react'
import { SearchIcon } from '../../users/components/SearchIcon'
import { ChevronDownIcon } from '../../users/components/ChevronDownIcon'
import { PlusIcon } from '../../users/components/PlusIcon'
import { columns } from '../../users/configs/data'

const TopContent = () => {
     return (
          <div className="flex flex-col gap-4">
               <div className="flex justify-between gap-3 items-end">
                    <Input
                         isClearable
                         className="w-full sm:max-w-[44%]"
                         placeholder="Search by name..."
                         startContent={<SearchIcon />}
                         // value={filterValue}
                         onClear={() => onClear()}
                    // onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                         <Dropdown>
                              <DropdownTrigger className="hidden sm:flex">
                                   <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                        Status
                                   </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                   disallowEmptySelection
                                   aria-label="Table Columns"
                                   closeOnSelect={false}
                                   // selectedKeys={statusFilter}
                                   selectionMode="multiple"
                              // onSelectionChange={setStatusFilter}
                              >
                                   {statusOptions.map((status) => (
                                        <DropdownItem key={status.uid} className="capitalize">
                                             {capitalize(status.name)}
                                        </DropdownItem>
                                   ))}
                              </DropdownMenu>
                         </Dropdown>
                         <Dropdown>
                              <DropdownTrigger className="hidden sm:flex">
                                   <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                        Ẩn/Hiện Cột
                                   </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                   disallowEmptySelection
                                   aria-label="Table Columns"
                                   closeOnSelect={false}
                                   // selectedKeys={visibleColumns}
                                   selectionMode="multiple"
                              // onSelectionChange={setVisibleColumns}
                              >
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
                    <span className="text-default-400 text-small">Total {users.length} users</span>
                    <label className="flex items-center text-default-400 text-small">
                         Hàng trên mỗi trang:
                         <select
                              className="bg-transparent outline-none text-default-400 text-small"
                         // onChange={onRowsPerPageChange}
                         >
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                         </select>
                    </label>
               </div>
          </div>
     )
}

export default TopContent