import React from 'react'
import {NavLink} from "react-router-dom";
import data from '../../data/products.json'

function Admin() {
    function refreshPage() {
        window.location.reload();
    }

    function loopNames(){
        console.log(data.products.length, "hi");
    var output;
        for (var i=0;i<data.products.length;i++){

            console.log(data.products[i]);

            output += "<option value="+data.products[i].name+">"+data.products[i].name+"</option>";

        }
        return       <select
            dangerouslySetInnerHTML={{__html:
                output}}></select>;
    }

    function handleSubmit(e) {
        e.preventDefault();


        data.products.push({
            "id": data.products.length +1,
            "name": e.target[0].value.trim(),
            "description":e.target[1].value.trim(),
            "image":e.target[2].value.trim(),
            "stock":e.target[3].value.trim(),
            "price":e.target[4].value.trim()
        });

        for (var i=0;i<e.target.length-1;i++) {
        e.target[i].value = "";


        }

    }

    function handleUpdate(e) {
        e.preventDefault();

        data.products.push({
            "description":e.target[1].value.trim(),
            "image":e.target[2].value.trim(),
            "stock":e.target[3].value.trim(),
            "price":e.target[4].value.trim()
        });

    }

    return (<div><form onSubmit={(event) => handleSubmit(event)}>
        <h2>Add New Item</h2>
        <div> Name: <input type="text" required={true}/> </div>

        <div>Description:   <input type="text" required={true} /></div>

        <div>Image:  <input type="url" required={true} /></div>

        <div>Stock:   <input type="text" required={true} /></div>

        <div>Price:   <input type="text" required={true} /></div>
        <input type="submit" value="Submit" />

        </form>
            <form onSubmit={(event) => handleSubmit(event)}>


                <h2>Edit Existing Item</h2>
                <div> Name:

                    {loopNames()}

                 </div>

                <div>Description:   <input type="text" required={true} /></div>

                <div>Image:  <input type="url" required={true} /></div>

                <div>Stock:   <input type="text" required={true} /></div>

                <div>Price:   <input type="text" required={true} /></div>
                <input type="submit" value="Submit" />
            </form>
</div>
    )



}



export default Admin;