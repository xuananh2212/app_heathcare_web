"use client"
import { Button, Pagination } from '@nextui-org/react'
import React from 'react'

const BottomContent = () => {
     return (
          <div className="py-2 px-2 flex justify-between items-center">
               <span className="w-[30%] text-small text-default-400">
                    {/* {selectedKeys === "all"
                         ? "All items selected"
                         : `${selectedKeys.size} of ${filteredItems.length} selected`} */}
               </span>
               <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
               // page={page}
               // total={pages}
               // onChange={setPage}
               />
               <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                         Trước
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                         Sau
                    </Button>
               </div>
          </div>
     )
}

export default BottomContent