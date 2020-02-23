import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from "reactstrap";

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 36
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pager: {},
            pageNumber: 1,
            page: 1,
            currentPage: null,
            totalPages: null
        };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.state.pageNumber);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.prevPageNumber);
        }
        if (this.props.pageNumber !== prevProps.pageNumber) {
            this.setState({pageNumber: this.props.pageNumber});
            this.setPage(this.props.pageNumber);
        }
    }

    setPage(pageNumber) {
        let { items, pageSize, oneImageLeft } = this.props;
        let pager = this.state.pager;
        if ((pageNumber < 1 && oneImageLeft === false) || (pageNumber > this.props.pager.totalPages && oneImageLeft === false))
            return
        pager = this.getPager(items.length, pageNumber, pageSize);
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager, pageNumber: pageNumber});
        this.props.onChangePage(pageOfItems, pageNumber, pager);
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage;
        pageSize = pageSize;
        let totalPages = Math.ceil(totalItems / pageSize);
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        return {
            currentPage: currentPage,
            totalItems: totalItems,
            pageSize: pageSize,
            totalPages: totalPages,
            startIndex: startIndex,
            endIndex: endIndex
        };
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.pageNumber)
            this.setPage(this.state.pageNumber);
        return;
    }
    
    render() {
        const { pager } = this.props;
        const { pageNumber } = this.state;
        if (pager.totalPages <= 1) {
            return null;
        }
        return (
            <ul className="pagination justify-content-center">
                <li className={Number(pager.currentPage) === 1 ? 'page-item disabled' : ''}>
                    <button className="page-link" onClick={() => this.setPage(Number(pager.currentPage) - 1)}>Previous</button>
                </li>
                <Form onSubmit={this.handleSubmit.bind(this)} className="page-item">
                    <Input
                        className="ml-1"
                        style={pageNumber > 1000 ? {height: '29px', width: '100px'} : {height: '29px', width: '90px'}}
                        name='pageNumber'
                        type="number"
                        min={1}
                        max={pager.totalPages}
                        value={pageNumber}
                        onChange={this.handleChange.bind(this)}
                    />
                </Form>
                <li className={Number(pager.currentPage) === pager.totalPages ? 'page-item disabled' : ''}>
                    <button className="page-link ml-1" onClick={() => this.setPage(Number(pager.currentPage) + 1)}>Next</button>
                </li>
                <span className="mt-1">&nbsp;of {pager.totalPages}</span>
            </ul>
            
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;