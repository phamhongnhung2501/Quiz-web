import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";
import Page500 from "../auth/Page500"

require("fullcalendar");
const $ = require("jquery");

class Calendar extends React.Component {
  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: null
    };
  }
  componentDidMount() {
    fetch('http://tinasoft.com.vn/api/v1/')
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: 456,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        );

    $("#fullcalendar").fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listMonth"
      },
      weekNumbers: true,
      eventLimit: true,
      editable: true,
      events: "https://fullcalendar.io/demo-events.json"
    });
  }

  render() {
    const {error, isLoaded} = this.state;
    if (error){
      return <Page500/>
    } else if(!isLoaded){
      return(
          <Container fluid className="p-0">
            <h1 className="h3 mb-3">Calendarsss</h1>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">FullCalendar</CardTitle>
                <h6 className="card-subtitle text-muted">
                  Open source JavaScript jQuery plugin for a full-sized, drag & drop
                  event calendar.
                </h6>
              </CardHeader>
              <CardBody>
                <div id="fullcalendar"></div>
              </CardBody>
            </Card>
          </Container>
      );
    } else
    return (
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Calendar</h1>
        <Card>
          <CardHeader>
            <CardTitle tag="h5">FullCalendar</CardTitle>
            <h6 className="card-subtitle text-muted">
              Open source JavaScript jQuery plugin for a full-sized, drag & drop
              event calendar.
            </h6>
          </CardHeader>
          <CardBody>
            <div id="fullcalendar" />
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Calendar;
