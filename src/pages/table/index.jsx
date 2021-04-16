import React, { useState, useEffect } from "react";
import "./table.scss";
import { Table, PageHeader, Button, Drawer, Popconfirm, message, Form, Input, Select } from "antd";



const Tables = () => {
    const [dataSource, setDataSource] = useState([]);
    const [DataSourceOrg, setDataSourceOrg] = useState([]);

    const [options, setOptions] = useState([]);
    const [filterValue, setFilterValue] = useState(undefined);
    const columns = [
        {
            title: 'project_id',
            dataIndex: 'project_id',
            key: 'project_id',
        },
        {
            title: 'project_code',
            dataIndex: 'project_code',
            key: 'project_code',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'start_date',
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: 'end_date',
            dataIndex: 'end_date',
            key: 'end_date',
        },

        {
            title: 'company_name',
            dataIndex: 'company_name',
            key: 'company_name',
        },

        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    useEffect(() => {
        fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
            .then(res => res.json())
            .then(dataSource => {
                const arr = [];
                dataSource.data.forEach(item => {
                    if (!arr.includes(item.status)) {
                        arr.push(item.status);

                    }
                    // {
                    //  if(!arr.includes(item.project_code)){
                    //         arr.push(item.project_code);

                    //     }
                })

                setOptions(arr);
                setDataSource(dataSource.data);
                setDataSourceOrg(dataSource.data);
            })

            .catch(err => console.log(err))
    }, []);


    const Filter = (name) => {
        console.log(name);


        if (!name) {
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
            <Form.Item
                lable="Filter"
                name="Select"
            >
                <Select
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

            </Form.Item>

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

                <Table dataSource={dataSource} columns={columns} />;


            </div>
        </div>
    )
}

export default Tables;