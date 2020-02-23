import React from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Translation} from "react-i18next";

function customTotal(from, to, size) {
    return(
        <Translation>
            {t => (
                <span className="react-bootstrap-table-pagination-total">
                    Showing {from} to {to} of {size} Results
                </span>
            )}
        </Translation>
    )
}

export function customCaret(order) {
    if (!order)
        return (
            <React.Fragment>
                <FontAwesomeIcon icon={faCaretUp} className="ml-1" />
                <FontAwesomeIcon icon={faCaretDown} />
            </React.Fragment>
        );
    else if (order === 'asc') return <FontAwesomeIcon icon={faCaretUp} className="ml-1" />;
    else if (order === 'desc') return <FontAwesomeIcon icon={faCaretDown} className="ml-1" />;
    return null;
}


export function emailFormatter(cell, row) {
    return(
    <span>{cell}</span>
    )
}

export const paginationOptions = {
    // paginationSize: 15,
    sizePerPage: 20,
    pageStartIndex: 0,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    paginationTotalRenderer: customTotal
};