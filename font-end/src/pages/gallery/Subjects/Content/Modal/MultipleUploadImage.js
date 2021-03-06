import React, { Component } from 'react';
import { 
    Label, Input, Button, Col, Row, Card, CardBody, CardHeader, CardFooter,
} from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import './../Css/modal.css';

class MultipleUploadImage extends Component {
  fileObj = [];
  fileArray = [];
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
      file: [null]
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
  }
    // ------Start upload file image---------
    uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
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
    const { subjects, tagInput, tags, description } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col className="border-right">          
            <Card className="mb-0">
              <CardBody className="p-0">
                    <div className="multiple-image multiple-image-scroll">
                        {(this.fileArray || []).map(url => (
                            <img src={url} className="preview-multiple-image m-1" alt="..." />
                        ))}
                    </div>
                    <div className="mt-3">
                        <input type="file" className="" onChange={this.uploadMultipleFiles} multiple />
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

export default MultipleUploadImage;