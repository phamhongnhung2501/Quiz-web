import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {Translation} from "react-i18next";
import ContentModal from '../popup-us-employees/PopupUs';
import {
    customCaret,
    paginationOptions,
    emailFormatter
} from "../../layouts/CustomTableComponent";

class ListEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                dataField: 'userId',
                text: 'ID',
                hidden: true
            },
            {
                dataField: 'userName',
                text: 'User name',
                searchable: true,
                sort: true,
                sortCaret: customCaret,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                filter: textFilter({
                })

            },
            {
                dataField: 'email',
                text: 'Email',
                searchable: true,
                sort: true,
                sortCaret: customCaret,
                formatter: emailFormatter,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                hover: {
                    overflow: 'visible'
                },
                filter: textFilter({
                })
            },
            {
                dataField: 'organization',
                text: 'Oganization/ Company',
                sort: true,
                sortCaret: customCaret,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                filter: textFilter({
                })
            },
            {
                dataField: 'phoneNumber',
                text: 'Phone number',
                sort: true,
                sortCaret: customCaret,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                filter: textFilter({
                })
            },
            {
                dataField: 'shortedAddress',
                text: 'Address',
                sort: true,
                sortCaret: customCaret,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                filter: textFilter({
                })
            },
            {
                dataField: 'active',
                text: 'Active',
                sort: true,
                sortCaret: customCaret,
                headerAlign: 'center',
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'center'
                },
                filter: textFilter({
                })
            },
        ];
        this.state = {
            data: [
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f1',
                    fullName: 'Nguyen Van CC',
                    userName: 'user_employee',
                    email: "user_employee@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Vĩnh Phúc',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f2',
                    fullName: 'User employee',
                    userName: 'user_employee',
                    email: "user_employee@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f3',
                    fullName: 'User employee',
                    userName: 'user_employee',
                    email: "user_employee@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Thái Bình',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f4',
                    fullName: 'User employee',
                    userName: 'user_employee',
                    email: "user_employee@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Company',
                    shortedAddress: 'Thanh Hóa',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f5',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f6',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f7',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f8',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f9',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f10',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f11',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f12',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f13',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f14',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f15',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'
                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f16',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Premium',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'

                },
                {
                    id: '5e0c52f3f2d3dsadfb001b9109f17',
                    fullName: 'Nguyen Quoc Trung',
                    userName: 'qtrung8000',
                    email: "truongnguyen0697@gmail.com",
                    dateOfBirth: '1997-01-01T15:50:18+07:00',
                    organization: 'Tinasoft',
                    class: 8,
                    subjects: 'Toán, Lý, Hóa, Luyện thi ĐH',
                    sex: 'male',
                    phoneNumber: '0359434413',
                    plan: 'Company',
                    shortedAddress: 'Hà Nội',
                    active: true,
                    totalQuestion: 20,
                    password: 'ajsdkkklalasdjnfgskdfjg',
                    permission: 'Permission for manager',
                    country: 'Viet Nam',
                    province: 'Ha Noi',
                    city: 'Ha Noi',
                    district: 'Ha Dong',
                    wards: 'Mo Lao'

                },
                
            ],
            modal: {
                isOpen: false,
                current_user: {},
            },
        };
    }

    saveRecord (user_edited) {
        this.setState({
            modal: {
                isOpen: !this.state.modal.isOpen
            }
        }) ;
        console.log('User saved !!!', user_edited.fullName)
    }

    closeModal(){
        this.setState({
            modal: {
                isOpen: false
            }
        });
    }

    rowEvents = {
        onClick: (e, row, rowIndex) => {
            this.setState({
                modal: {
                    isOpen: !this.state.modal.isOpen,
                    current_user: row
                }
            });
        }
    };
    selectRow = {
        mode: 'checkbox',
        style: { backgroundColor: '#c8e6c9' }
    }

    removeRecord(item) {
        console.log("remove");
        console.log(item)
    }

    render() {
        const { current_user } = this.state.modal;
        return (
            <Translation>
                {t => (
                    <ToolkitProvider keyField="id" data={this.state.data} columns={this.columns}>
                        {props => (
                            <div style={{backgroundColor: "#e9ecef", borderRadius: '10px', padding: '5px'}}>
                                <BootstrapTable
                                    bootstrap4
                                    hover
                                    keyField='id'
                                    bordered={false}
                                    {...props.baseProps}
                                    pagination={paginationFactory(paginationOptions)}
                                    filter={filterFactory()}
                                    rowEvents={ this.rowEvents }
                                    filterPosition="bottom"
                                    selectRow={this.selectRow}
                                    noDataIndication="Table is Empty"
                                    responsive
                                    scrollable
                                />
                                <Modal size='xl' isOpen={this.state.modal.isOpen} centered scrollable>
                                    <ModalHeader toggle={this.closeModal.bind(this)}>Full name of user</ModalHeader>
                                    <ModalBody>
                                        <ContentModal data={current_user}  
                                            saveUs={this.saveRecord.bind(this)}
                                            close={this.closeModal.bind(this)}
                                        />
                                    </ModalBody>
                                </Modal>
                            </div>
                        )}
                    </ToolkitProvider>
                )}
            </Translation>
        );
    }
}
export default ListEmployees;
