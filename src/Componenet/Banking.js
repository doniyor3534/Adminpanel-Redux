import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BankingSaitbar } from './ALL';
import { Select, Button, Table, Form, Typography, Popconfirm, InputNumber, Input } from 'antd';
import { BidirectionalBar } from '@ant-design/plots';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ImportExportIcon from '@mui/icons-material/ImportExport';




   
    const DemoBidirectionalBar = () => {
        const data = [
            {
                country: 'Yanvar',
                '2016年耕地总面积': 13.4,
                '2016年转基因种植面积': 12.3,
            },
            {
                country: 'Febral',
                '2016年耕地总面积': 14.4,
                '2016年转基因种植面积': 6.3,
            },
            {
                country: 'Mart',
                '2016年耕地总面积': 18.4,
                '2016年转基因种植面积': 8.3,
            },
            {
                country: 'Aprel',
                '2016年耕地总面积': 34.4,
                '2016年转基因种植面积': 13.8,
            },
            {
                country: 'May',
                '2016年耕地总面积': 44.4,
                '2016年转基因种植面积': 19.5,
            },
            {
                country: 'Iyun',
                '2016年耕地总面积': 24.4,
                '2016年转基因种植面积': 18.8,
            },
            {
                country: 'Iyul',
                '2016年耕地总面积': 54.4,
                '2016年转基因种植面积': 24.7,
            },
            {
                country: 'Avgust',
                '2016年耕地总面积': 104.4,
                '2016年转基因种植面积': 5.3,
            },
            {
                country: 'Sentyabr',
                '2016年耕地总面积': 165.2,
                '2016年转基因种植面积': 72.9,
            },
        ];
        const config = {
            data,
            theme: 'dark',
            layout: 'vertical',
            xField: 'country',
            yField: ['2016年耕地总面积', '2016年转基因种植面积'],
            yAxis: {
                '2016年耕地总面积': {
                    nice: true,
                },
                '2016年转基因种植面积': {
                    min: 0,
                    max: 100,
                },
            },
            tooltip: {
                shared: true,
                showMarkers: false,
            },
        };
        return <BidirectionalBar {...config} />;
    };
// /////////////////////////////////////////////////////////////////////////////
    const Banking = () => {
   const {comments}=useSelector(state=>state)
        const originData = [];

        // for (let i = 0; i < comments.length; i++) {
        //     originData.push({
        //         key: i.toString(),
        //         opp:<ImportExportIcon/> ,
        //         name:'hjhdhd',
        //         address: `London Park no. ${i}`,
        //     });
        // }
        comments.map((val,i)=>(
            originData.push({
                key: i.toString(),
                opp:<ImportExportIcon/> ,
                name:val.name,
                address:`-$${ val.narx}`,
            })
        ))
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const { Option } = Select;
const [form] = Form.useForm();
const [data, setData] = useState(originData);
const [editingKey, setEditingKey] = useState('');

const isEditing = (record) => record.key === editingKey;

const edit = (record) => {
    form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
    });
    setEditingKey(record.key);
};

const cancel = () => {
    setEditingKey('');
};

const save = async (key) => {
    try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);

        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...row });
            setData(newData);
            setEditingKey('');
        } else {
            newData.push(row);
            setData(newData);
            setEditingKey('');
        }
    } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
    }
};

const columns = [
    {
        title: 'opp',
        dataIndex: 'opp',
        width: '25%',
        editable: true,
    },
    {
        title: 'name',
        dataIndex: 'name',
        width: '15%',
        editable: true,
    },
    {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true,
    },
    {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
                <span>
                    <Typography.Link
                        onClick={() => save(record.key)}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        Save
                    </Typography.Link>
                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                        <a>Cancel</a>
                    </Popconfirm>
                </span>
            ) : (
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    Edit
                </Typography.Link>
            );
        },
    },
];
const mergedColumns = columns.map((col) => {
    if (!col.editable) {
        return col;
    }

    return {
        ...col,
        onCell: (record) => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
        }),
    };
});



const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


        return (
            <div className='banking'>
                <h1 className='h1'>Banking</h1>
                <div className="bankingPage">
                    <div className="bankingLeft">
                        <div className="profit">
                            <div className="proftiTitle">
                                <h5>Profit</h5>
                                <Select
                                    defaultValue="lucy"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="proftiTitleBody">
                                <DemoBidirectionalBar />
                            </div>
                        </div>
                        <div className="lesttest">
                            <div className="lestestTitle">
                                <h5>Lastest Transaction</h5>
                                <div className="lestBtnGroup">
                                    <Button  > Newest  <ArrowDropDownIcon /> </Button>
                                    <Button  > <LocalPrintshopIcon /> </Button>
                                    <Button  > <FileDownloadIcon /> </Button>
                                </div>
                            </div>
                            <div className="lestestBody">
                                <Table
                                    components={{
                                        body: {
                                            cell: EditableCell,
                                        },
                                    }}
                                    bordered
                                    dataSource={data}
                                    columns={mergedColumns}
                                    rowClassName="editable-row"
                                    pagination={{
                                        onChange: cancel,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <BankingSaitbar />
                </div>
            </div>
        );
    };

    export default Banking;