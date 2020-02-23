import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Button, Input, ListGroup, Label } from 'reactstrap';
import Content from './Content';
import './../Css/modal.css';
import { List, Checkbox } from '@material-ui/core';

class ModalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listReport: [
            {
                content: 'ieowqpopwe333qipoewiqopeiwqp'
            },
            {
                content: 'ieowqpop3213weqipoewiqopeiwqp'
            },
            {
                content: 'ieowqpopw44324eqipoewiqopeiwqp'
            },
            {
                content: 'ieowqpopweqipoewiqopeiwqp'
            },
            {
                content: 'ieowqpopweqipoewiqope3213213iwqp'
            },
            {
                content: 'ieowqpopweqipoewiqope321312321iwqp'
            },
            {
                content: 'ieowqpopweqipoewiqope321321312iwqp'
            },
            {
                content: 'ieowqpopweqipoewiqo3213213peiwqp'
            },
            {
                content: 'ieowqpopweqipo32131321ewiqopeiwqp'
            },
            {
                content: 'ieowqpopweqip321321ewiqopeiwqp'
            },
            {
                content: 'ieowqpop3213weqipoewiqopeiwqp'
            },
            {
                content: 'ieowqpo321pweqipoewiqopeiwqp'
            },
            {
                content: 'ieo3213211wqpopweqipoewiqopeiwqp'
            }
        ]
    };
  }

  handleToggleModal() {

  }

  render () {
    const { isOpenReport } = this.props;
    const { listReport } = this.state;
    return (
      <React.Fragment>
        <Modal isOpen={isOpenReport} size="md" centered scrollable>
          <ModalHeader toggle={this.props.handleToggleReportModal.bind(this)}>
            <b>Report</b>
        </ModalHeader>
        <ModalBody>
            <ListGroup className="ml-4">
                {listReport.map((report, index) =>
                    <Label key={index} size="lg">
                        <Input type="checkbox"/>
                        <span className="">{report.content}</span>
                    </Label>
                )}
            </ListGroup>
            <div className="mt-2 ml-1">Others</div>
            <Input
                name="others"
                type="textarea"
                bsSize="lg"
                className="mt-2"
                style={{height: '100px'}}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.handleToggleReportModal.bind(this)}>Send report</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default ModalReport;