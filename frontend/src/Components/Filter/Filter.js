import React, { useMemo, useState } from "react";

const comidas = [

    'Canjica',
    'milho',
    'bolo',
    ' Pé de moleque',
    'paçoca',
    'Cachorro-quente',

]
export const Filter = () => {
    const [search, setSearch] = useState('')

    const restaurantFilter = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return comidas.filter((comida) =>
            comida.toLowerCase().includes(lowerSearch));
    }, [search])

    const onChangeSearch = (event) => {
        setSearch(event.target.value)
      
        
    }

    return (
        <div>
            <h1>Filtro</h1>
            <input
                type={'text'}
                onChange={onChangeSearch}
                value={search}
            ></input>

            <ul>
                {restaurantFilter.map((comida) => (
                    <li >{comida} </li>

                ))}

            </ul>


        </div>
    )
}