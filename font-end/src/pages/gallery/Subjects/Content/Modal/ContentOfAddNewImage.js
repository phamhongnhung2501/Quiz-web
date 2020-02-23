import React, { Component } from 'react';
import { 
  CardImg, Label, Input, Button, Col, Row, Card, CardBody, CardHeader, CardFooter,
} from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import './../Css/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class ContentOfAddNewImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          name: 'Animals'
        },
        {
          name: 'Galaxy'
        },
        {
          name: 'Color'
        },
        {
          name: 'Tables'
        },
        {
          name: 'Children'
        },
        {
          name: 'Animals'
        },
        {
          name: 'Galaxy'
        },
        {
          name: 'Color'
        },
        {
          name: 'Animals'
        },
        {
          name: 'Galaxy'
        },
        {
          name: 'Color'
        },
        {
          name: 'Animals'
        },
        {
          name: 'Galaxy'
        },
        {
          name: 'Color'
        },
        {
          name: 'Animals'
        },
        {
          name: 'Galaxy'
        },
        {
          name: 'Color'
        },
      ],
      tagInput: '',
      tags: [],
      description: '',
      file: null,
    };
      this.uploadSingleFile = this.uploadSingleFile.bind(this);
      this.upload = this.upload.bind(this);
  }
  // ------Start upload file image---------
  uploadSingleFile(e) {
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
  }

  upload(e) {
      e.preventDefault()
      console.log(this.state.file)
  }
  //-------The end upload file image----------
  handleChange(tag) {
    this.setState({
      tags: tag === null ? [] : tag,
    });
  };

  handleDescriptionChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputChange(tagInput) {
    this.setState({ tagInput });
  };

  handleKeyDown(event) {
    const { tagInput, tags } = this.state;
    if (!tagInput) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        let allowCreate = true;
        if (tags)
          tags.map(tag => {
            if (tag.value === tagInput) allowCreate = false;
          })
        if (allowCreate) {
          this.setState({
            tagInput: '',
            tags: [
              ...tags,
              {
                label: tagInput,
                value: tagInput
              }
            ]
          });
          event.preventDefault();
        }
    }
  };
  render() {
    const { image} = this.props;
    const { subjects, tagInput, tags, description } = this.state;
    let imgPreview;
    if (this.state.file) {
        imgPreview = <img className="preview-image" src={this.state.file} alt='' />;
    }
    else {
      imgPreview = <img className="preview-image" src="https://fsm.undip.ac.id//assets/attachments/Images/default.jpg" alt='' />;
    }
    return (
      <React.Fragment>
        <Row>
          <Col className="border-right">          
            <Card className="mb-0">
              <CardBody>
                <div className="preview-image">
                  {imgPreview} 
                </div>
                <div className="mt-3">
                  <input type="file" onChange={this.uploadSingleFile} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Row>
              
            </Row>
            <Row>
              <Col xs={2}>
                <Label for="subjects" size="lg">Subjects:</Label>
              </Col>
              <Col xs={10} id="subjects">
                {subjects.map((subject, index) =>
                  <Button outline key={index} className="ml-1 mb-2 mt-1 subjects-fix">{subject.name}</Button>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Label for="tags" size="lg">Tags:</Label>
              </Col>
              <Col xs={10}>
                <CreatableSelect
                  className="ml-1 tags-fix"
                  components={{ DropdownIndicator: null }}
                  inputValue={tagInput}
                  isClearable
                  isMulti
                  menuIsOpen={false}
                  placeholder="Type tag and press enter..."
                  value={tags}
                  onChange={this.handleChange.bind(this)}
                  onInputChange={this.handleInputChange.bind(this)}
                  onKeyDown={this.handleKeyDown.bind(this)}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col xl={2}>
                <Label for="description" size="lg">Description:</Label>
              </Col>
              <Col xl={10} id="description">
                <Input
                  name="description"
                  type="textarea"
                  bsSize="lg"
                  className="mt-2 ml-1 description-fix"
                  onChange={this.handleDescriptionChange.bind(this)}
                  value={description}
                  style={{height: '100px'}}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ContentOfAddNewImage;