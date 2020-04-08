import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" href="#">CALL API</a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a>Trang chủ</a>
                        </li>
                        <li>
                            <a>Quản lý sản phẩm</a>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" class="btn btn-info mb-10">
                                Thêm sản phẩm
                            </button>
                            
                            <div class="panel panel-primary">
                                  <div class="panel-heading">
                                        <h3 class="panel-title">Danh Sách Sản Phẩm</h3>
                                  </div>
                                  <div class="panel-body">
                                        <table class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Mã</th>
                                                    <th>Tên</th>
                                                    <th>Giá</th>
                                                    <th>Trạng Thái</th>
                                                    <th>Hành Động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>Iphone XS Max</td>
                                                    <td>20.000.000</td>
                                                    <td>
                                                        <span className="label label-warning">
                                                            Còn Hàng
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-success mr-10">
                                                            Sửa
                                                        </button>
                                                        <button type="button" class="btn btn-danger">
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
