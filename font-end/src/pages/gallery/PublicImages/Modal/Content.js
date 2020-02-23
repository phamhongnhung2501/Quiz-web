import React, { Component } from 'react';
import { CardImg, Label, Input, Button, Col, Row } from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import './../Css/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Content extends Component {
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
      description: ''
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

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

  handleNext(event) {
    event.preventDefault();
    const { totalImages, pageNumber, imageIndex, totalPages } = this.props;
    let allowNext = false;
    if (pageNumber <= totalPages) {
      allowNext = true;
    }
    if (allowNext) {
      if (imageIndex >= totalImages - 1) {
        this.setState({ tags: [], description: '' });
        this.props.handleChangePageNumber(Number(pageNumber) + 1);
        this.props.handleChangeImage(0);
      }
      else {
        this.setState({ tags: [], description: '' });
        this.props.handleChangeImage(Number(imageIndex) + 1);
      }
    }
  }

  handlePrevious(event) {
    event.preventDefault();
    const { totalImages, imageIndex, pageNumber } = this.props;
    let allowPrevious = false;
    if (pageNumber > 0) {
      allowPrevious = true;
    }
    if (allowPrevious) {
      if (imageIndex < 1) {
        this.setState({ tags: [], description: '' });
        this.props.handleChangePageNumber(Number(pageNumber) - 1);
        this.props.handleChangeImage(totalImages - 1);
      }
      else {
        this.setState({ tags: [], description: '' });
        this.props.handleChangeImage(Number(imageIndex) - 1)
      }
    }
  }

  render() {
    const { image, totalImages, imageIndex, pageNumber, totalPages } = this.props;
    const { subjects, tagInput, tags, description } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col className="border-right">
            {(imageIndex === 0 && Number(pageNumber) === 1) ? null :
              <a className="carousel-control-prev" onClick={this.handlePrevious.bind(this)}>
                <FontAwesomeIcon size={'3x'} color={'white'} icon={faChevronLeft} />
              </a>
            }
            <CardImg className="image-fix" src={image !== undefined ? image.url : null} />
            {(imageIndex === Number(totalImages) - 1 && Number(pageNumber) === Number(totalPages)) ? null :
              <a className="carousel-control-next" onClick={this.handleNext.bind(this)}>
                <FontAwesomeIcon size={'3x'} color={'white'} icon={faChevronRight} />
              </a>
            }
          </Col>
          <Col>
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

export default Content;