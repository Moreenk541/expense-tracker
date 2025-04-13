import React from "react";

function Expenses (){
    return (
        <>
        <div>
            <form>
                <h1>Add Expense</h1>
                <label>Enter your expense details below</label><br></br>
                <input type="text" placeholder="Enter expense Name"></input>
                <input type="text" placeholder="Enter expense Description"></input>
                <input type="text" placeholder="Enter expense Category"></input>
                <input type="number" placeholder="Enter expense Amount"></input>
                <input type="date" placeholder="Enter expense date"></input>


            </form>
        </div>
        <div>
        <table>
            <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
            <tr>
                <td>Ugali Matumbo</td>
                <td>Wednesday's Lunch</td>
                <td>Food</td>
                <td>200</td>
                <td>01/27/2024</td>
                

            </tr>

        </table>
        </div>
        </>

    )
}


export default Expenses;