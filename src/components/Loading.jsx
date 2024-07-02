import React from 'react';
import {
     HashLoader
} from 'react-spinners';

const Loading = ({ loading }) => {
     return (
          <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-[#ffffff7d]">
               <HashLoader
                    color="#292929" loading={loading} size={150} />
          </div>
     );
};

export default Loading;