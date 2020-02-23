import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import  SearchBar  from '../../../../components/SearchBar';
import GridList from '@material-ui/core/GridList';
import { 
    FormGroup, Input, Button, ButtonGroup,
    Row, Col,
    Modal, ModalBody, ModalHeader, ModalFooter,
    CardImg,
    Label,
} from 'reactstrap';

import { config_api } from '../../../../config/config';
import ModalOfContent from "./Modal/ModalOfContent";
import ContentOfAddNewImage from "./Modal/ContentOfAddNewImage";
import MultipleUploadImage from "./Modal/MultipleUploadImage";

class Content extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            isOpen: false,
            showModal: {
                createImage: false,
            },
            dropdownOpen: false,
            pageOfItems: [],
            data: [
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg',
                  status: 'ignored',
                  tags: 'dog'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'ignored',
                },
                {
                  url: 'https://trumboss.vn/wp-content/uploads/2018/11/160afecd64be2630442856681010e81e.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://i.ytimg.com/vi/e4e4t_hmiE0/maxresdefault.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://www.nhatkyngayhoa.com/wp-content/uploads/2019/12/hoa-mai-3.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/Nguyen/T6-2017/anh-sang-xanh-va-nhung-tac-hai-khong-tot-den-suc-khoe-con-nguoi-2.png',
                  status: 'ignored'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
                  status: 'nig'
                },
                {
                  url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
                  status: 'nig'
                }
              ],
            pageNumber: 1,
            pager: {},
            imageIndex: 0,
            cellHeight:  window.innerWidth*0.11,
        };
    }
    checkWindowResize = () => {
        this.setState({ cellHeight: window.innerWidth*0.11 });
      }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    }
    onChangePage(pageOfItems, pageNumber, pager) {
        this.setState({ 
          pageOfItems: pageOfItems, 
          pageNumber: pageNumber,
          pager: pager
        });
        window.scrollTo({top:100, left:0, behavior: 'smooth'});
    }
    handleChangePageNumber(page) {
    this.setState({
        pageNumber: page,
        imageIndex: 0
    })
    }
    handleToggleModal(imageIndex) {
      this.setState({
          imageIndex: imageIndex,
          isOpen: !this.state.isOpen
      })
    }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    handleChangeImage(imageIndex) {
        this.setState({
          imageIndex: imageIndex
        })
      }
    handleSearch(event) {
        event.preventDefault();
        const {cookies} = this.props;
        if (this.state.search && this.state.search.length > 0) {
            fetch(config_api.library + this.state.search, {
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    "Authorization": cookies.get('token')
                },
            })
            .then(res => res.json())
            .then(data => {
                let images = [];
                data.forEach(image => {
                  images.push({
                    "url": image.url, 
                    "id": image.id
                  });
                })
                this.setState({ 
                  data: images,
                })
            })
        } 
    }
    handleRemoveImageFromPageOfItems(imageIndex) {
      const { pager, pageNumber, pageOfItems } = this.state;
      let newDataNig = [...this.state.dataNig];
      let allowNext = false;
      let closeModal = false;
      let endImageOfList = false;
      let nextPageHasOneImage = false;
      let oneImageLeft = false;
      let lastImageOfPage = false;
      if (imageIndex === (pager.endIndex - pager.startIndex)) {
        // if (imageIndex < pager.totalItems) {
          if (pager.endIndex === pager.startIndex) {
            if (pager.totalItems - pager.startIndex === 1) {
              lastImageOfPage = true;
              oneImageLeft = false;  
            }
            if (pageNumber === 1) {
              oneImageLeft = true;
              lastImageOfPage = false;
            }
          }
          else {
            if (pager.totalItems - pager.endIndex === 2) {
              nextPageHasOneImage = true;
            }
            // else {
            //   if (imageIndex === pager.endIndex) {
            //     endImageOfList = true;
            //   }      
            // }
          }
        // }
      }
      if (pager.startIndex + imageIndex < pager.totalItems - 1) // 180 + 7 < 193 - 1
        allowNext = true;
      else {
        if (pager.startIndex + imageIndex === pager.totalItems - 1) {
          if (oneImageLeft) {
            allowNext = true;
          }
          else {
            if (lastImageOfPage) {
              allowNext = true
            }
            else {
              allowNext = true;
              closeModal = true;
            } 
          }
        }
      }
      if (allowNext) {
        newDataNig.splice(pager.startIndex + imageIndex, 1);
        if (closeModal) {
          this.setState({ 
            imageIndex: 0, 
            isOpen: !this.state.isOpen,
            dataNig: newDataNig, 
            prevPageNumber: pageNumber
          })
        }
        else {
          // if (endImageOfList) { 
          //   this.setState({ 
          //     dataNig: newDataNig,
          //     pageNumber: pageNumber + 1,
          //     imageIndex: 0
          //   })
          // }
          // else {
            if (nextPageHasOneImage) {
              this.setState({
                dataNig: newDataNig, 
                prevPageNumber: pageNumber,
                imageIndex: imageIndex
              })
            }
            else {
              if (oneImageLeft) {
                this.setState({
                  isOpen: !this.state.isOpen,
                  dataNig: newDataNig, 
                  imageIndex: 0,
                  oneImageLeft: true
                })
              }
              else {
                if (lastImageOfPage) {
                  this.setState({
                    dataNig: newDataNig, 
                    imageIndex: pager.pageSize - 1,
                    pageNumber: pageNumber - 1
                  })
                }
                this.setState({
                  dataNig: newDataNig, 
                  prevPageNumber: pageNumber
                })
              }
            }
          // }
        }
      }
    }
    handleAddNewImage(){
        let state = Object.assign({}, this.state);
        state.showModal.createImage = true;
        this.setState(state)
    }
    handleToggleAddNewImage(){
      let state = Object.assign({}, this.state);
      state.showModal.createImage = false;
      this.setState(state)
  }
    render() {
        const {pageOfItems, status, dataNig, dataIgnored, dataViolated, 
          pageNumber, pager, isOpen, imageIndex, prevPageNumber, oneImageLeft, isOpenModalAddImage,
          cellHeight, data, showModal } = this.state;
        return (
            <React.Fragment>
                <div>
                    <h1 className="display-4 mb-4" style={{fontFamily: "Times New Roman, Times, serif"}}><i><b>Animals</b></i></h1>
                    <SearchBar
                        handleSearch={this.handleSearch.bind(this)}
                        handleChange={this.handleChange.bind(this)}
                    />
                    <Modal 
                        size="xl" centered contentClassName="modal-fix"
                        isOpen={showModal.createImage}
                        className="modal-image"
                    >
                        <ModalHeader toggle={this.handleToggleAddNewImage.bind(this)}>
                          <b><h1>Add new image to gallery</h1></b>
                        </ModalHeader>
                        <ModalBody>
                            {/* <ContentOfAddNewImage/> */}
                            <MultipleUploadImage/>
                        </ModalBody>
                        <ModalFooter>
                          <Button size={'lg'} color="primary" >Save</Button>
                          <Button size={'lg'} color="secondary" onClick={this.handleToggleAddNewImage.bind(this)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Row>
                        <Col md="3" lg="3">
                            <FormGroup align="left" >
                                <ButtonGroup>
                                    <Button>Check all</Button>
                                    <Button>
                                        <Input type="select" name="select">
                                            <option value="ignored">Delete</option>
                                            <option value="violated">Edit</option>
                                        </Input>
                                    </Button>
                                </ButtonGroup>
                            </FormGroup>
                        </Col>
                        <Col md="9" lg="9" align="right">
                         
                            <FormGroup >
                                <ButtonGroup className="mr-3">
                                    <h5 className="mt-3 mr-2 font-weight-bold">Sort by:</h5>
                                    <Button>
                                        <Input type="select" name="select">
                                            <option value="nig">Alphabetical order</option>
                                            <option value="ignored">Recently added</option>
                                        </Input>
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button className="py-2"
                                        onClick={()=>this.handleAddNewImage()}
                                    >
                                        <FontAwesomeIcon icon={faPlus} width={3} height={2} className="mr-3"/>Add new
                                    </Button>
                                </ButtonGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <GridList cellHeight={cellHeight} cols={6} spacing={8} >
                        {data.map((item, index) => (
                            <CardImg
                            key={index}
                            src={item.url} 
                            style={{cursor: 'pointer'}}
                            onClick={()=> {this.handleToggleModal(index)}}
                            />
                        ))}
                        <ModalOfContent 
                             isOpen={isOpen}
                             image={data[imageIndex]}
                             imageIndex={imageIndex}
                             startIndex={pager.startIndex}
                             pageNumber={pageNumber} 
                             totalImages={data.length}
                             totalPages={pager.totalPages}
                             handleToggleModal={this.handleToggleModal.bind(this)}
                             handleChangePageNumber={this.handleChangePageNumber.bind(this)}
                             handleChangeImage={this.handleChangeImage.bind(this)}
                             handleRemoveImageFromPageOfItems={this.handleRemoveImageFromPageOfItems.bind(this)}
                        />
                    </GridList>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default withCookies(Content);
