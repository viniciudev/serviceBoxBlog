import React, { Component } from 'react';
import {
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    CardBody,
    Card,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    CardColumns,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button, CardFooter
} from "reactstrap";
import { URL_DescriptionFiles } from 'services/fileService'
import axios from 'axios';
import { enumGroup } from 'views/Products/Enum';
import NumberFormat from 'react-number-format';
import Pagination from 'react-js-pagination';
import { URL_SearchDescriptionFiles } from 'services/fileSearchService'

export default class Bags extends Component {
    state = {
        files: [],
        formFiles: { results: [], currentPage: '', pageCount: '', pageSize: '', rowCount: '', firstRowOnPage: '', lastRowOnPage: '' },
    }

    componentDidMount() {
        axios.get(`${URL_DescriptionFiles}/${enumGroup.bags}/group`).then(resp => {
            const { data } = resp
            if (data) {
                this.setState({ formFiles: data })
            }
        })
    }

    toggleModal = (files) => {
        this.setState({
            modal: !this.state.modal
        });
        if (!this.state.modal)
            this.setState({
                files: files
            })
    }

    consultFilter(e) {
        let text
        if (e.key === 'Enter') {
            text = e.target.value != '' ? e.target.value : ' '
            axios.get(`${URL_SearchDescriptionFiles}/${text}/${enumGroup.bags}`).then(resp => {
                const { data } = resp
                if (data)
                    this.setState({ formFiles: data })
            })
        }
    }

    query = (pageSizeValue, pageNumber) => {
        let pageSize = ''
        if (pageSizeValue)
            pageSize = pageSizeValue.target.value

        let data = {
            pageSize: pageSize,
            pageNumber: pageNumber
        }

        axios.patch(`${URL_DescriptionFiles}/${enumGroup.bags}/group`, data).then(resp => {
            const { data } = resp
            if (data)
                this.setState({
                    formFiles: data
                })
        })
    }

    render() {
        const style = {
            display: "inline",
            float: "right",
            color: "pink"
        }
        const { activeIndex, items, formFiles } = this.state
        const { results, currentPage, pageSize, rowCount } = formFiles;
        const myStyle = {
            width: '100%'
        }
        return (

            <div>
                <Card>
                    <CardBody>

                        <Row>
                            <Col md={6}>

                                <InputGroup>

                                    <Input placeholder="O que você está Procurando"
                                        onKeyPress={e => this.consultFilter(e)}

                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText><i class="nc-icon nc-zoom-split" /></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            {
                                results.map(f => (
                                    f.groupItems == 3 ?
                                        <Col md={3} >
                                            <Card>
                                                <a>
                                                    <img
                                                        onClick={e => this.toggleModal(f.files)}
                                                        width={100} className="img-fluid" src={"data:image/png;base64," + f.files[0].files} alt="Demo" />
                                                </a>

                                                <CardBody>

                                                    <p className="text-center">
                                                        <span>
                                                            <small className="mr-1">Semi
                                                <a className="ml-1" href="">Joia</a>
                                                            </small>
                                                            {/* <small className="mr-1">May 03, 2015</small> */}
                                                        </span>
                                                        <span className="ml-right">
                                                            <small>
                                                                <strong>R$</strong>
                                                                <span><NumberFormat
                                                                    thousandSeparator='.'
                                                                    decimalSeparator=','
                                                                    prefix={''}
                                                                    displayType={'text'}
                                                                    value={this.state.payable}
                                                                /> {f.valueProduct}</span>
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <h4>
                                                        <a href="">{f.nameProduct}</a>
                                                    </h4>
                                                    <p>{f.descriptionProduct}.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        :
                                        null
                                ))}
                        </Row>
                        <Modal className="modal-dialog" centered isOpen={this.state.modal} toggle={this.toggleModal}>

                            <ModalBody>
                                <ModalCarousel files={this.state.files} />
                            </ModalBody>
                        </Modal>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-left">
                            <div>
                                <select className="custom-select" name="selectOptionAmount" onChange={(pageSize) => this.query(pageSize, '')} defaultValue="" multiple="">
                                    <option >10</option>
                                    <option defaultValue="1">25</option>
                                    <option defaultValue="2">50</option>
                                    <option defaultValue="3">100</option>
                                </select>
                            </div>
                            <div className="ml-auto">

                                <Pagination
                                    activePage={currentPage}
                                    totalItemsCount={rowCount}
                                    itemsCountPerPage={pageSize}
                                    onChange={(pageNumber) => this.query('', pageNumber)}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    firstPageText="Primeira"
                                    lastPageText="Última"
                                />
                            </div>
                        </div>
                    </CardFooter>
                </Card>

            </div>
        );
    }
}

class ModalCarousel extends Component {

    state = {
        activeIndex: 0,
        animating: false,
        items: [
            {
                src: require("assets/img/soroush-karimi.jpg"),
                altText: "Somewhere",
                caption: "Somewhere",
            },
            {
                src: require("assets/img/federico-beccari.jpg"),
                altText: "Somewhere else",
                caption: "Somewhere else",
            },
        ],
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    };

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    };

    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex });
    };
    onExiting = () => {
        this.setState({ animating: true });
    };
    onExited = () => {
        this.setState({ animating: false });
    };

    render() {
        const { files } = this.props
        const { activeIndex, items } = this.state
        return (
            <Row>
                <Col md="12">
                    <Card className="page-carousel">
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators
                                items={items}
                                activeIndex={activeIndex}
                                onClickHandler={this.goToIndex}
                            />
                            {files.map((item) => {
                                return (
                                    <CarouselItem
                                        onExiting={this.onExiting}
                                        onExited={this.onExited}
                                        key={"data:image/png;base64," + item.files}
                                    >
                                        <img width="100" src={"data:image/png;base64," + item.files}

                                        />
                                        <CarouselCaption
                                            // captionText={item.caption}
                                            captionHeader=""
                                        />
                                    </CarouselItem>
                                );
                            })}
                            <a
                                className="left carousel-control carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.previous();
                                }}
                                role="button"
                            >
                                <span className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="right carousel-control carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.next();
                                }}
                                role="button"
                            >
                                <span className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </a>
                        </Carousel>
                    </Card>
                </Col>
            </Row>
        );
    }
}