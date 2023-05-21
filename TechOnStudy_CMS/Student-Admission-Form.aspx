<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="Student-Admission-Form.aspx.cs" Inherits="TechOnStudy_CMS.Student_Admission_Form" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-lg-12 pinpin">
                    <div class="card lobicard" data-sortable="true">
                        <div class="card-header">
                            <div class="card-title custom_title">
                                <h4>Student Admission</h4>
                            </div>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="row">
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Session :</label>
                                            <select name="Country Name" class="form-control"></select>
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Form No.</label>
                                            <input type="number" placeholder="From No." class="form-control">
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">College En. No./Student ID No.</label>
                                            <input type="number" placeholder="College En. No./Student ID No."
                                                class="form-control">
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">First Name :</label>
                                            <input type="text" placeholder="First Name" class="form-control">
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Last Name :</label>
                                            <input type="text" placeholder="Last Name" class="form-control">
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Libary Card No. :</label>
                                            <input type="text" placeholder="Libary Card No." class="form-control">
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Nationality :</label>
                                            <div class="input-group">
                                                <select name="Country Name" class="form-control"></select>
                                                <div class="input-group-append">
                                                    <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                        data-target="#Nationality-Master">
                                                        <i
                                                            class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Admission Date :</label>
                                            <div class="input-group">
                                                <input id='minMaxExample' type="text" class="form-control">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><a href="#"><i
                                                        class="fa fa-calendar text-center"></i></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Birth Date :</label>
                                            <div class="input-group">
                                                <input id='minMaxExample' type="text" class="form-control">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><a href="#"><i
                                                        class="fa fa-calendar text-center"></i></a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Admission Type :</label>
                                            <select name="Country Name" class="form-control"></select>
                                        </div>

                                        <div class="card-body card_card">
                                            <!-- Nav tabs -->
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="basic-detail-tab" data-toggle="tab"
                                                        href="#basic-detail" role="tab" aria-controls="home"
                                                        aria-selected="true">Basic Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="document-detail-tab" data-toggle="tab"
                                                        href="#document-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Document Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="previous-detail-tab" data-toggle="tab"
                                                        href="#previous-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Previous Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="current-detail-tab" data-toggle="tab"
                                                        href="#current-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Current Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="fee-detail-tab" data-toggle="tab"
                                                        href="#fee-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Fee Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="relative-detail-tab" data-toggle="tab"
                                                        href="#relative-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Relative Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="facilities-detail-tab" data-toggle="tab"
                                                        href="#facilities-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Facilities Detail</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profileScholarship-tab" data-toggle="tab"
                                                        href="#Scholarship" role="tab" aria-controls="profile"
                                                        aria-selected="false">Scholarship</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="medical-detail-tab" data-toggle="tab"
                                                        href="#medical-detail" role="tab" aria-controls="profile"
                                                        aria-selected="false">Medical Detail</a>
                                                </li>
                                            </ul>
                                            <!-- Tab panels -->
                                            <div class="tab-content mycontent" id="myTabContent">
                                                <div class="tab-pane fade show active" id="basic-detail" role="tabpanel"
                                                    aria-labelledby="basic-detail-tab">
                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-6 form-group">
                                                            <label class="control-label">Father's Name :</label>
                                                            <input type="text" placeholder="Father's Name"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-6 form-group">
                                                            <label class="control-label">Mother's Name :</label>
                                                            <input type="text" placeholder="Mother's Name"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-12 form-group">
                                                            <label class="control-label">Permanent Address :</label>
                                                            <input type="text" placeholder="Permanent Address"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Country :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Country-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">State :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#State-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">City :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#City-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Pincode :</label>
                                                            <input type="text" placeholder="Pincode"
                                                                class="form-control">
                                                        </div>

                                                        <div class="col-md-12 form-group">
                                                            <input type="checkbox" data-toggle="modal">
                                                            <label class="control-label">
                                                                if same as Permanent
                                                                    :</label>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-12 form-group">
                                                            <label class="control-label">
                                                                Permanent Address/Local Address
                                                                :</label>
                                                            <input type="text"
                                                                placeholder="Permanent Address/Local Address"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Country :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Country-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">State :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#State-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">City :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#City-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Pincode :</label>
                                                            <input type="text" placeholder="Pincode"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Mobile No.1 :</label>
                                                            <input type="text" placeholder="Mobile No.1"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Mobile No.2 :</label>
                                                            <input type="text" placeholder="Mobile No.2"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Mobile No.3 :</label>
                                                            <input type="text" placeholder="Mobile No.3"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Landline No. :</label>
                                                            <div class="col-md-6 form-group user-form-group">
                                                                <input type="text" placeholder="STD"
                                                                    class="form-control">
                                                            </div>
                                                            <input type="text" placeholder="Landline No."
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Residential Type :</label>
                                                            <select name="Country Name" class="form-control"></select>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">E-Mail :</label>
                                                            <input type="text" placeholder="E-Mail"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Religion :</label>
                                                            <select name="Country Name" class="form-control"></select>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Cast :</label>
                                                            <select name="Country Name" class="form-control"></select>
                                                        </div>



                                                    </div>
                                                    <!-- </div> -->
                                                </div>
                                                <div class="tab-pane fade" id="document-detail" role="tabpanel"
                                                    aria-labelledby="document-detail-tab">

                                                    <!-- Text input-->
                                                    <div class="col-md-4 form-group">
                                                        <label class="control-label">Document Type :</label>
                                                        <div class="input-group">
                                                            <select name="Country Name" class="form-control"></select>
                                                            <div class="input-group-append">
                                                                <button type="button" class="btn btn-add btn-sm"
                                                                    data-toggle="modal"
                                                                    data-target="#Document-Type-Master">
                                                                    <i
                                                                        class="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-8 form-group">
                                                            <label class="control-label">Remark :</label>
                                                            <input type="text" placeholder="Remark"
                                                                class="form-control">
                                                        </div>

                                                        <div class="col-md-8 form-group user-form-group">
                                                            <div class="pull-right">
                                                                <button type="submit"
                                                                    class="btn btn-add btn-sm">
                                                                    Add</button>
                                                                <button type="button"
                                                                    class="btn btn-danger btn-sm">
                                                                    Remove</button>
                                                            </div>
                                                        </div>
                                                        <table class="table table-bordered table-striped table-hover">
                                                            <thead class="back_table_color">
                                                                <tr class="info">
                                                                    <th>Document Type</th>
                                                                    <th>Remark</th>
                                                                    <th>Attachment</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="previous-detail" role="tabpanel"
                                                    aria-labelledby="previous-detail-tab">

                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-8 form-group">
                                                            <label class="control-label">School Name :</label>
                                                            <input type="text" placeholder="School Name"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Board/University :</label>
                                                            <input type="text" placeholder="Board/University"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Class :</label>
                                                            <input type="text" placeholder="Class" class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Class Session :</label>
                                                            <input type="text" placeholder="Class Session"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Passing Year :</label>
                                                            <input type="text" placeholder="Passing Year"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Country :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Country-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">State :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#State-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">City :</label>
                                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#City-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Total Marks :</label>
                                                            <input type="text" placeholder="Total Marks"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Obtain Marks :</label>
                                                            <input type="text" placeholder="Obtain Marks"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Percentage :</label>
                                                            <input type="text" placeholder="Percentage"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-12 form-group">
                                                            <label class="control-label">Remark :</label>
                                                            <input type="text" placeholder="Remark"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-12 form-group">
                                                            <input type="checkbox" data-toggle="modal">
                                                            <label class="control-label">Same Record</label>
                                                        </div>

                                                        <div class="col-md-12 form-group user-form-group">
                                                            <div class="pull-right">
                                                                <button type="submit"
                                                                    class="btn btn-add btn-sm">
                                                                    Add</button>
                                                                <button type="button"
                                                                    class="btn btn-danger btn-sm">
                                                                    Remove</button>
                                                            </div>
                                                        </div>
                                                        <table class="table table-bordered table-striped table-hover">
                                                            <thead class="back_table_color">
                                                                <tr class="info">
                                                                    <th>Organization</th>
                                                                    <th>Board</th>
                                                                    <th>Class</th>
                                                                    <th>Session</th>
                                                                    <th>PassingYear</th>
                                                                    <th>TotalMarks</th>
                                                                    <th>ObtainMarks</th>
                                                                    <th>Per</th>
                                                                    <th>Country</th>
                                                                    <th>State</th>
                                                                    <th>City</th>
                                                                    <th>Remark</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="current-detail" role="tabpanel"
                                                    aria-labelledby="current-detail-tab">

                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Degree/Course/Class :</label>
                                                            <select name="Country Name" class="form-control"></select>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-3 form-group">
                                                            <label class="control-label">Sem/Year :</label>
                                                            <select name="Country Name" class="form-control"></select>
                                                        </div>
                                                        <div class="col-md-6 form-group">
                                                            <table
                                                                class="table table-bordered table-striped table-hover">
                                                                <thead class="back_table_color">
                                                                    <tr class="info">
                                                                        <th>Check</th>
                                                                        <th>Paper/SubjectName</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="fee-detail" role="tabpanel"
                                                    aria-labelledby="fee-detail-tab">

                                                    <div class="row">

                                                        <div class="col-md-6 form-group">
                                                            <table
                                                                class="table table-bordered table-striped table-hover">
                                                                <thead class="back_table_color">
                                                                    <tr class="info">
                                                                        <th>Check</th>
                                                                        <th>Paper/SubjectName</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Extra Fee :</label>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Document-Type-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div class="pull-right my-3">
                                                                <button type="submit"
                                                                    class="btn btn-add btn-sm">
                                                                    Add</button>
                                                                <button type="button"
                                                                    class="btn btn-danger btn-sm">
                                                                    Remove</button>
                                                            </div>
                                                            <div class="col-md-4 form-group">
                                                                <input type="checkbox" data-toggle="modal">
                                                                <label class="control-label">EMI</label>
                                                            </div>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#EMI-Type-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <!-- Text input-->
                                                            <!-- <div class="col-md-8 form-group"> -->
                                                            <label class="control-label">Total Amount :</label>
                                                            <input type="text" placeholder="Total Amount"
                                                                class="form-control">
                                                            <!-- </div> -->
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="relative-detail" role="tabpanel"
                                                    aria-labelledby="relative-detail-tab">

                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Relation :</label>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#RelationShip-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Text input-->
                                                        <div class="col-md-8 form-group">
                                                            <label class="control-label">Relative Name :</label>
                                                            <input type="text" placeholder="Relative Name"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Annual Income :</label>
                                                            <input type="text" placeholder="Annual Income"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Contact No. :</label>
                                                            <input type="text" placeholder="Contact No."
                                                                class="form-control">
                                                        </div>

                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Occupation :</label>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Occuapation-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-8 form-group">
                                                            <label class="control-label">Remark :</label>
                                                            <input type="text" placeholder="Remark"
                                                                class="form-control">
                                                        </div>

                                                        <div class="pull-right">
                                                            <button type="submit"
                                                                class="btn btn-add btn-sm">
                                                                Add</button>
                                                            <button type="button"
                                                                class="btn btn-danger btn-sm">
                                                                Remove</button>
                                                        </div>
                                                        <div class="col-md-12 form-group">
                                                            <table
                                                                class="table table-bordered table-striped table-hover">
                                                                <thead class="back_table_color">
                                                                    <tr class="info">
                                                                        <th>Relation Name</th>
                                                                        <th>Relative Name</th>
                                                                        <th>Contact No.</th>
                                                                        <th>Annual Income</th>
                                                                        <th>Remark</th>
                                                                        <th>Business</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>
                                                                            <button type="button"
                                                                                class="btn btn-add btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-pencil"></i>
                                                                            </button>
                                                                            <button type="button"
                                                                                class="btn btn-danger btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-trash-o"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>
                                                                            <button type="button"
                                                                                class="btn btn-add btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-pencil"></i>
                                                                            </button>
                                                                            <button type="button"
                                                                                class="btn btn-danger btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-trash-o"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="facilities-detail" role="tabpanel"
                                                    aria-labelledby="relative-detail-tab">

                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Tranport Slab :</label>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Transport-Slab-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Bus Route :</label>
                                                            <div class="input-group">
                                                                <select name="Country Name"
                                                                    class="form-control">
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button type="button" class="btn btn-add btn-sm"
                                                                        data-toggle="modal"
                                                                        data-target="#Bus-Route-Master">
                                                                        <i
                                                                            class="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 form-group">
                                                            <input type="checkbox" data-toggle="modal">
                                                            <label class="control-label">Sibling</label>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-8 form-group">
                                                            <label class="control-label">Ref Sibling Id :</label>
                                                            <input type="text" placeholder="Ref Sibling Id"
                                                                class="form-control">
                                                        </div>



                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="Scholarship" role="tabpanel"
                                                    aria-labelledby="profileScholarship-tab">

                                                    <div class="row">

                                                        <div class="col-md-12 form-group">
                                                            <table
                                                                class="table table-bordered table-striped table-hover">
                                                                <thead class="back_table_color">
                                                                    <tr class="info">
                                                                        <th>Check</th>
                                                                        <th>Scholarship Name</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>
                                                                            <button type="button"
                                                                                class="btn btn-add btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-pencil"></i>
                                                                            </button>
                                                                            <button type="button"
                                                                                class="btn btn-danger btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-trash-o"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td>
                                                                            <button type="button"
                                                                                class="btn btn-add btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-pencil"></i>
                                                                            </button>
                                                                            <button type="button"
                                                                                class="btn btn-danger btn-sm"
                                                                                data-toggle="modal"
                                                                                data-target="#Nationality-Master">
                                                                                <i
                                                                                    class="fa fa-trash-o"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="medical-detail" role="tabpanel"
                                                    aria-labelledby="medical-detail-tab">

                                                    <div class="row">
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Height :</label>
                                                            <input type="text" placeholder="Height"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Weight :</label>
                                                            <input type="text" placeholder="Weight"
                                                                class="form-control">
                                                        </div>

                                                        <div class="col-md-4 form-group">
                                                            <!-- <input type="checkbox" placeholder="Remark"
                                                            class="form-control"> -->
                                                            <input type="checkbox" data-toggle="modal">
                                                            <label class="control-label">Person With Disability</label>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Blood Group :</label>
                                                            <select name="Country Name"
                                                                class="form-control">
                                                            </select>
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-4 form-group">
                                                            <label class="control-label">Eye Sight :</label>
                                                            <input type="text" placeholder="Eye Sight"
                                                                class="form-control">
                                                        </div>
                                                        <!-- Text input-->
                                                        <div class="col-md-12 form-group">
                                                            <label class="control-label">Remark :</label>
                                                            <input type="text" placeholder="Remark"
                                                                class="form-control">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-12 form-group user-form-group">
                                            <div class="pull-right">
                                                <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                                <button type="submit" class="btn btn-add btn-sm">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


    <!--Nationality Master-->
    <div class="modal fade" id="Nationality-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Nationality Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Nationality Name:</label>
                                        <input type="text" placeholder="Nationality Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Nationality Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Indian</th>
                                        <td></td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Nationality-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Nationality-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">American</th>
                                        <td>American</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Nationality-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Nationality-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--Country Master-->
    <div class="modal fade" id="Country-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Country Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Country Name:</label>
                                        <input type="text" placeholder="Country Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Country Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">India</th>
                                        <td>India</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Country-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Country-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">America</th>
                                        <td>America</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Country-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Country-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--State Master-->
    <div class="modal fade" id="State-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>State Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Country Name:</label>
                                        <!-- <input type="" placeholder="Country Name" class="form-control"> -->
                                        <select name="Country Name" class="form-control"></select>
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">State Name:</label>
                                        <input type="text" placeholder="Country Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>State Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Rajasthan</th>
                                        <td>Raj</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#State-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#State-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dehli</th>
                                        <td>jun 05,2017</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#State-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#State-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--City Master-->
    <div class="modal fade" id="City-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>City Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Country Name:</label>
                                        <!-- <input type="" placeholder="Country Name" class="form-control"> -->
                                        <select name="Country Name" class="form-control"></select>
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">State Name:</label>
                                        <!-- <input type="text" placeholder="Country Name" class="form-control"> -->
                                        <select name="Country Name" class="form-control"></select>
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">City Name:</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>City Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Jaipur</th>
                                        <td>J</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#City-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#City-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sikar</th>
                                        <td>S</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#City-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#City-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!--Document Type Master-->
    <div class="modal fade" id="Document-Type-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Document Type Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Document Type Name:</label>
                                        <input type="" placeholder="Document Type Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Document Type Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">10 th MarkSheet</th>
                                        <td>10 th MArksheet</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Document-Type-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Document-Type-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12 th Mangrksheet</th>
                                        <td>12 th MArksheet</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Document-Type-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Document-Type-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--Extra Fees Head Master-->
    <div class="modal fade" id="Extra-Fees-Head-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Extra Fees Head Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Extra Fees Head Name:</label>
                                        <input type="" placeholder="Extra Fees Head Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Extra Fees Head Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">TC</th>
                                        <td>TC & CC</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Adminsion</th>
                                        <td></td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--EMI Type Master-->
    <div class="modal fade" id="EMI-Type-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>EMI Type Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">EMI Name :</label>
                                            <input type="" placeholder="EMI Name" class="form-control">
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">No. of EMI</label>
                                            <input type="text" placeholder="No. of EMI" class="form-control">
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <label class="control-label">Amount</label>
                                                <input type="text" placeholder="Amount" class="form-control">
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <button type="button" class="btn btn-add btn-sm">Fill EMI</button>
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <input type="checkbox" data-toggle="modal">
                                                <label class="control-label">All EMI Same Amount</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 form-group user-form-group">
                                            <div class="pull-right">
                                                <button type="button" class="btn btn-add btn-sm">Edit</button>
                                                <button type="submit" class="btn btn-success btn-sm">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <table class="table table-bordered table-striped table-hover">
                                            <thead class="back_table_color">
                                                <tr>
                                                    <th>EMI No.</th>
                                                    <th>Amount</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="info1">
                                                    <th scope="row">TC</th>
                                                    <td>TC & CC</td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                            data-target="#Extra-Fees-Head-Master">
                                                            <i
                                                                class="fa fa-pencil"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger btn-sm"
                                                            data-toggle="modal" data-target="#Extra-Fees-Head-Master">
                                                            <i
                                                                class="fa fa-trash-o"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Adminsion</th>
                                                    <td></td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                            data-target="#Extra-Fees-Head-Master">
                                                            <i
                                                                class="fa fa-pencil"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger btn-sm"
                                                            data-toggle="modal" data-target="#Extra-Fees-Head-Master">
                                                            <i
                                                                class="fa fa-trash-o"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>EMI Type</th>
                                        <th>No. of Installment</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">TC</th>
                                        <td>TC & CC</td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Adminsion</th>
                                        <td></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Extra-Fees-Head-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!--RelationShip Master-->
    <div class="modal fade" id="RelationShip-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>RelationShip Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">RelationShip Name:</label>
                                        <input type="" placeholder="RelationShip Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>RelationShip Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Father</th>
                                        <td>Fath</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#RelationShip-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#RelationShip-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mother</th>
                                        <td>Moth</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#RelationShip-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#RelationShip-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <!--Occuapation Master-->
    <div class="modal fade" id="Occuapation-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Occuapation Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Occuapation Name:</label>
                                        <input type="" placeholder="Occuapation Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Occuapation Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Private</th>
                                        <td>Private</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Occuapation-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Occuapation-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Business</th>
                                        <td>Business</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Occuapation-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Occuapation-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!--Transport Slab Master-->
    <div class="modal fade" id="Transport-Slab-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Transport Slab Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Transport Slab Name:</label>
                                        <input type="" placeholder="Transport Slab Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Transport Slab Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Slab-1</th>
                                        <td>S1</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Transport-Slab-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Transport-Slab-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Slab-2</th>
                                        <td>S2</td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Transport-Slab-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Transport-Slab-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>



    <!--Bus Route Master-->
    <div class="modal fade" id="Bus-Route-Master" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-primary">
                    <h3><i class="fa fa-user m-r-5"></i>Bus Route Master</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="row">
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Bus Route Name:</label>
                                        <input type="" placeholder="Bus Route Name" class="form-control">
                                    </div>
                                    <!-- Text input-->
                                    <div class="col-md-6 form-group">
                                        <label class="control-label">Short Name</label>
                                        <input type="text" placeholder="Short Name" class="form-control">
                                    </div>
                                    <div class="col-md-12 form-group user-form-group">
                                        <div class="pull-right">
                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                            <button type="submit" class="btn btn-add btn-sm">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="Workslist">
                        <div class="worklistdate">
                            <table class="table table-hover">
                                <thead class="border_border">
                                    <tr>
                                        <th>Bus Route Name</th>
                                        <th>Short Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="info1">
                                        <th scope="row">Root-1</th>
                                        <td></td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Bus-Route-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Bus-Route-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Root-2</th>
                                        <td></td>
                                        <td><span class="label-custom label label-default">Active</span></td>
                                        <td>
                                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal"
                                                data-target="#Bus-Route-Master">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                                data-target="#Bus-Route-Master">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</asp:Content>
