import React, { Component } from 'react';
import { config_api } from '../../../config/config';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import  SearchBar  from '../../../components/SearchBar';
import ModalAddImage from './Modal/ModalAddImage';
import { FormGroup, Label, Input, CardImg } from 'reactstrap';
import Pagination from './Pagination';
import GridList from '@material-ui/core/GridList';

class PublicImages extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      search: '',
      tag: '',
      data: [
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
          tags: 'hoa'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'data:image/jpeg;base64,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',
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
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violated',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'violated',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'violated'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },{
          url: 'https://i.pinimg.com/originals/e2/e0/ca/e2e0ca2c1d417e01d85da0ea6dd6cb13.png',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'violation',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig',
        },
        {
          url: 'https://image.giaoducthoidai.vn/768/uploaded/thuyvt/2019-11-16/1-nwyi.jpg',
          status: 'ignored',
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
          status: 'nig'
        },
        {
          url: 'https://hatgiongphuongnam.com/asset/editor/ResponsiveFilemanager-master/source/mon%20%C4%83n%20ve%20hoa/aa/hat-giong-hoa-co-may.jpg',
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
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
          status: 'nig'
        },
        {
          url: 'https://cdn.tuoitre.vn/2017/nhung-phan-sang-nhat-cua-nuoc-anh-ban-dem-nasa-1511426460318.jpg',
          status: 'ignored'
        },
        {
          url: 'https://portal.vtc.gov.vn/Storage/nguyenletan/attachfiles_82/THIEN_NHIEN_V_NAM_banner/THIEN%20NHIEN%20V%20NAM%20banner.jpg',
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
      status: 'nig',
      pageNumber: 1,
      prevPageNumber: 1,
      pager: {},
      pageOfItems: [],
      dataNig: [],
      dataIgnored: [],
      dataViolated: [],
      imageIndex: 0,
      oneImageLeft: false,
      cellHeight:  window.innerWidth*0.11
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }
  
  checkWindowResize = () => {
    this.setState({ cellHeight: window.innerWidth*0.11 });
  }

  componentDidMount() {
    let dataNig = [];
    let dataIgnored = [];
    let dataViolated = [];
    this.state.data.forEach(item => {
      if (item.status === 'nig')
        dataNig.push({ url: item.url, status: item.status, tag: item.tags })
      else {
        if (item.status === 'ignored')
          dataIgnored.push({ url: item.url, status: item.status })
        else {
          if (item.status === 'violated')
            dataViolated.push({ url: item.url, status: item.status })
        }
      }
    })
    this.setState({
      dataNig: dataNig,
      dataIgnored: dataIgnored,
      dataViolated: dataViolated
    });
    window.addEventListener('resize', this.checkWindowResize);
  }

  handleFilter(event) {
    this.setState({
      status: event.target.value,
    });
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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

  handleChangeImage(imageIndex) {
    this.setState({
      imageIndex: imageIndex
    })
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

  render() {
    const { pageOfItems, status, dataNig, dataIgnored, dataViolated, 
          pageNumber, pager, isOpen, imageIndex, prevPageNumber, oneImageLeft,
          cellHeight } = this.state
    let data = [];
    if (status === 'nig') data = dataNig;
    else if (status === 'ignored') data = dataIgnored;
    else data = dataViolated;
    return (
      <React.Fragment>
        <div>
          <h1 className="display-4 mb-4" style={{fontFamily: "Times New Roman, Times, serif"}}><i><b>Public Images</b></i></h1>
          <SearchBar
            handleSearch={this.handleSearch.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
          <FormGroup align="right" style={{marginBottom: '-10px'}}>
            <b>Filter </b>
            <Label for="exampleSelect">
              <Input type="select" name="select" onChange={this.handleFilter.bind(this)}>
                <option value="nig">Not in Gallery</option>
                <option value="ignored">Ignored</option>
                <option value="violated">Violated</option>
              </Input>
            </Label>
          </FormGroup>
          <Pagination 
            items={data} 
            onChangePage={this.onChangePage.bind(this)} 
            pageNumber={pageNumber}
            prevPageNumber={prevPageNumber}
            pager={pager}
            oneImageLeft={oneImageLeft}
            />
          <GridList cellHeight={cellHeight} cols={6} spacing={8} >
            {pageOfItems.map((item, index) => (
                <CardImg
                  key={index}
                  src={item.url} 
                  style={{cursor: 'pointer'}}
                  onClick={()=> {this.handleToggleModal(index)}}
                />
            ))}
            <ModalAddImage
              isOpen={isOpen}
              image={pageOfItems[imageIndex]}
              imageIndex={imageIndex}
              startIndex={pager.startIndex}
              pageNumber={pageNumber} 
              totalImages={pageOfItems.length}
              totalPages={pager.totalPages}
              handleToggleModal={this.handleToggleModal.bind(this)}
              handleChangePageNumber={this.handleChangePageNumber.bind(this)}
              handleChangeImage={this.handleChangeImage.bind(this)}
              handleRemoveImageFromPageOfItems={this.handleRemoveImageFromPageOfItems.bind(this)}
            />
          </GridList>
        </div>
        <div className="mt-4">
          <Pagination 
            items={data} 
            onChangePage={this.onChangePage.bind(this)} 
            pageNumber={pageNumber}
            prevPageNumber={prevPageNumber} 
            pager={pager}
            oneImageLeft={oneImageLeft}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withCookies(PublicImages);