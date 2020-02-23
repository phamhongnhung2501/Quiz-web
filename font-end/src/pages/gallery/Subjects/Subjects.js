import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Container, Row, Col, Input, Button, Card, CardBody, Label, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPencilAlt, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Css/Subjects.css";

class SubjectElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: {
                editSubject: false
            },
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleShowModal(modal) {
        let state = Object.assign({}, this.state);
        state.showModal[modal] = true;
        this.setState(state);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <FontAwesomeIcon icon={faPencilAlt} className="float-right" onClick={this.handleShowModal.bind(this, "editSubject")} />
                    {this.state.showModal.editSubject ? (
                        <Input
                            className="my-5"
                            type="text"
                            name="editSubject"
                            id="editSubject"
                            defaultValue={this.props.subject}
                            onChange={this.handleChange}
                            style={{ fontSize: "1.5rem" }}
                        />
                    ) : (
                        <h2 className="text-center align-middle m-5">{this.props.subject}</h2>
                    )}
                </CardBody>
            </Card>
        );
    }
}

class Subjects extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            subjects: ["Animals", "Flowers", "Color", "Math", "English", "Plant", "Ani", "Flowers", "Color", "Math", "English", "Plant", "A", "B", "C", "D"],
            currentPage: 1,
            subjectsPerPage: 6
        };
        this.chosePage = this.chosePage.bind(this);
    }

    chosePage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    nextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    beforePage() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }

    render() {
        const currentPage = this.state.currentPage;
        const subjectsPerPage = this.state.subjectsPerPage;
        const indexOfLastNews = currentPage * subjectsPerPage;
        const indexOfFirstNews = indexOfLastNews - subjectsPerPage;
        const currentSubjects = this.state.subjects.slice(indexOfFirstNews, indexOfLastNews);
        const pageNumbers = [];
        const pages = Math.ceil(this.state.subjects.length / subjectsPerPage);
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i);
        }
        return (
            console.log(pageNumbers),
            (
                <Container>
                    <Row>
                        <Col xl="4">
                            <h1 className="font-weight-bold">Subjects</h1>
                        </Col>
                        <Col xl="8">
                            <div className="input-group w-50">
                                <Input type="text" name="search" placeholder="Search ..." className="rounded-0" />
                                <Button type="button" className="bg-info border-info rounded-0">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col xl="12">
                            <FormGroup className="float-right">
                                <Label>Sort by:</Label>
                                <Input type="select" name="sort">
                                    <option>Alphabetical order</option>
                                    <option>Recently added</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        {currentSubjects.map((subject, index) => {
                            return (
                                <Col xl="4">
                                    <SubjectElement subject={subject} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col xl="2"></Col>
                        <Col xl="8" className="d-flex justify-content-center">
                            {currentPage < pages ? (
                                <Button type="button" className="bg-info border-info px-5" onClick={this.nextPage.bind(this)}>
                                    Next
                                </Button>
                            ) : (
                                <Button type="button" className="bg-info border-info px-5" disabled>
                                    Next
                                </Button>
                            )}
                        </Col>
                        <Col xl="2" className="d-flex justify-content-end list-unstyled page-numbers">
                            {pageNumbers.map(number => {
                                if (this.state.currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active border px-2 mx-1">
                                            {number}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={number} id={number} onClick={this.chosePage} className="border px-2 mx-1">
                                            {number}
                                        </li>
                                    );
                                }
                            })}
                        </Col>
                    </Row>
                </Container>
            )
        );
    }
}

export default withCookies(Subjects);
