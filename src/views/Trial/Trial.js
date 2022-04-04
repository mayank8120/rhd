import React, { useState, useEffect } from 'react'

export const Trial = () => {

    var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown",
        "Kill Bill", "Death Proof", "Inglourious Basterds"];





    return (
        <>
            <button onClick={() => { localStorage.setItem("h1", JSON.stringify(movies)); }}> hhhhhhhhhhhhhhhhhhhsdohfcesiubckbcdjbsdih</button>
            <button onClick={() => { console.log(JSON.parse((localStorage.getItem("h1")))) }}> hhhhhhhhhhhhhhhhhhhsdohfcesiubckbcdjbsdih</button>

        </>

    )
}
