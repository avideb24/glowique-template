import React from 'react';


const Filter = ({ selectedTab, setSelectedTab, tabItems }) => {
    return (
        <div>
            <div className='w-fit mx-auto flex justify-center items-center border-b border-b-slate-300 mb-5'>

                {
                    tabItems?.map((item, idx) =>
                        <button key={idx} onClick={() => setSelectedTab(item)} className={`border border-b-0  ${selectedTab == item ? "border-slate-300 font-semibold" : "border-white"} px-4 py-1 duration-300 capitalize`}>
                            {item}
                        </button>
                    )
                }
            </div>

        </div>
    );
};

export default Filter;