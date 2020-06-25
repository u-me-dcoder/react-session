import React from 'react'

export default function CategoryList(props) {
    console.log(props)
    let {categories} = props
    let categoryList = categories.map(item=>{
        return (
        <div key={item._id}>
            <img src={`http://localhost:5000/static/logos/${item.avatar}`} alt={item.name}/>
            <h1>{item.name}</h1>
        </div>
        )
    })
    return (
        <div>
            {categoryList}
        </div>
    )
}
