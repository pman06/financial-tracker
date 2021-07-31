import React from 'react';

export default function Header({activeCategory, setActiveCategory, categories, setShowAddCategory}){
    const itemStyle = {cursor: "pointer"}
    
    return(
        <>
            <h1>Header Component</h1>
            <div className="row">
                <div className="col-6">
                    <ul className='nav'>
                        <li 
                        className={`p-3 nav-item ${!activeCategory ?"fw-bold    bg-warning":""}`} 
                        onClick={()=>setActiveCategory("")} 
                        style={itemStyle}>
                            All 
                        </li>
                        {categories.map((category, index)=>{ 
                            return <li 
                                    onClick={()=>setActiveCategory(category.name)} 
                                    className={`p-3 nav-item ${activeCategory === category.name? "fw-bold bg-warning":""}`} 
                                    style={itemStyle} 
                                    key={index}>
                                {category.name}
                            </li>
                        })}
                        <li 
                        className={"font-weight-bold p-3 nav-link"}
                        style={itemStyle}
                        onClick={()=>setShowAddCategory(true)}>
                            +
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )   
} 
