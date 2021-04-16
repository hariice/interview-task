import React, { useState, useEffect } from "react";
import "./table.scss";
import { Table, PageHeader, Button, Drawer, Popconfirm, message, Form, Input, Select } from "antd";



const Tables = () => {
    const [dataSource, setDataSource] = useState([]);
    const [DataSourceOrg, setDataSourceOrg] = useState([]);

    const [options, setOptions] = useState([]);
    const [filterValue, setFilterValue] = useState("All");
    const [column, setColumn] = useState([]);

    useEffect(() => {
        fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
            .then(res => res.json())
            .then(dataSource => {
                const arr = [];
                arr.push("All");
                dataSource.data.forEach(item => {
                    if (!arr.includes(item.status)) {
                        arr.push(item.status);

                    }
                    // {
                    //  if(!arr.includes(item.project_code)){
                    //         arr.push(item.project_code);

                    //     }
                })

                let columns = dataSource.metadata.columns;
              columns=  columns.map(item=>{
                    if(item.title == "Project Name"){
                        item.dataIndex = "project_code"
                    }
                    return item;
                })

                setOptions(arr);
                setColumn(columns);
                setDataSource(dataSource.data);
                setDataSourceOrg(dataSource.data);
            })

            .catch(err => console.log(err))
            
    }, []);


    const Filter = (name) => {
        console.log(name);


        if (!name || name === "All") {
            setDataSource(DataSourceOrg)
        } else {
            let newData = DataSourceOrg;
            newData = newData.filter((item) => {
                return (item.status === name);

            });
            setDataSource(newData)
        }
    }

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (

        <div className="main-tab">
            
               
               <div className="slt" >Filter <Select
                    onChange={(e) => {
                        setFilterValue(e);
                        Filter(e);
                    }}
                    allowClear
                    value={filterValue}
                    style={{ width: 120 }}>
                    {options?.map((item) => (
                        <Option key={item} value={item}>{item}</Option>

                    ))}
                </Select>
</div>
            

            <div className="container">

                {/* <table>
                    <thead>
                        <tr>
                            <th>project_id</th>
                            <th>project_code</th>
                            <th>description</th>
                            <th>start_date</th>
                            <th>end_date</th>
                            <th>company_name</th>
                            <th>status</th>


                        </tr>
                    </thead>
                    <tbody>

                        {dataSource?.map((item) => (
                            <tr>
                                <td>{item.project_id}</td>
                                <td>{item.project_code}</td>
                                <td>{item.description}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>
                                <td>{item.company_name}</td>
                                <td>{item.status}</td>

                            </tr>
                        ))}

                    </tbody>

                </table> */}

                <Table dataSource={dataSource} columns={column} />;


            </div>
        </div>
    )
}

export default Tables;
