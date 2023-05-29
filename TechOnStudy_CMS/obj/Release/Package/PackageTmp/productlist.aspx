<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="productlist.aspx.cs" Inherits="TechOnStudy_CMS.Admin.productlist" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="header-icon">
                    <i class="fa fa-users"></i>
                </div>
                <div class="header-title">
                    <h1>Product</h1>
                    <small>Product List</small>
                </div>
            </section>
            <!-- Main content -->



            <section class="content">
                <div class="row">
                    <div class="col-sm-12">

                        <div class="panel panel-bd lobidrag">

                            <div class="panel-heading">
                                <div class="btn-group" id="buttonexport">
                                    <a href="#">
                                        <h4>Product List </h4>
                                    </a>
                                </div>
                            </div>
                            <div class="panel-body">
                                <!-- Plugin content:powerpoint,txt,pdf,png,word,xl -->
                                <div class="btn-group">
                                    <div class="buttonexport" id="buttonlist">
                                        <a class="btn btn-add" href="AddProductNew.aspx"><i class="fa fa-plus"></i>Add Product</a>
                                        <a href="#" class="btn btn-add" data-toggle="modal" data-target="#additem"><i class="fa fa-plus"></i>Filter</a>

                                    </div>

                                </div>

                                <div class="table-responsive">



                                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" class="dynamicTable table table-striped table-bordered table-condensed" EmptyDataText="!!! No Data Found !!!" OnRowEditing="GridView1_RowEditing" DataKeyNames="productid">
                                        <Columns>
                                            <asp:BoundField DataField="productid" HeaderText="productid" Visible="false" />
                                            <asp:BoundField DataField="productcode" HeaderText="productcode" />
                                            <asp:BoundField DataField="categoryname" HeaderText="categoryname" />
                                            <asp:BoundField DataField="subcatname" HeaderText="Sub Category" />
                                            <asp:BoundField DataField="productname" HeaderText="productname" />
                                            <asp:BoundField DataField="mrprate" HeaderText=" mrprate" />
                                            <asp:BoundField DataField="description" HeaderText="description" />                                            
                                            <asp:CommandField ShowEditButton="true" HeaderText="Edit" />
                                        </Columns>
                                    </asp:GridView>
                                    <%-- <asp:Button ID="button1" runat="server" class="btn btn-danger btn-sm"
                                        Text="Delete" />
                                    <asp:Button ID="button2" runat="server" class="btn btn-add btn-sm"
                                        Text="Edit" />--%>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="additem" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header modal-header-primary">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h3><i class="fa fa-plus m-r-5"></i>Add new Item</h3>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form class="form-horizontal">
                                            <fieldset>

                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">Product Code</label>
                                                    <asp:TextBox ID="Ft_txtClientCode" runat="server" placeholder="Client Code" class="form-control" AutoCompleteType="Disabled"></asp:TextBox>
                                                </div>
                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">Product Name</label>
                                                    <asp:TextBox ID="Ft_txtclientname" runat="server" placeholder="Client Name" class="form-control" AutoCompleteType="Disabled"></asp:TextBox>
                                                </div>

                                               <%-- <div class="col-md-4 form-group">
                                                    <label class="control-label">Mobile No</label>
                                                    <asp:TextBox ID="Ft_txtmobileno" runat="server" placeholder="Mobile no" class="form-control" AutoCompleteType="Disabled"></asp:TextBox>
                                                </div>

                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">EmailID</label>
                                                    <asp:TextBox ID="Ft_txtemailid" runat="server" placeholder="EmailID" class="form-control" AutoCompleteType="Disabled"></asp:TextBox>
                                                </div>


                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">City </label>
                                                    <asp:DropDownList ID="Ft_ddcity" runat="server" placeholder="City" class="form-control"></asp:DropDownList>
                                                </div>
                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">Area </label>
                                                    <asp:DropDownList ID="Ft_ddarea" runat="server" placeholder="Area" class="form-control"></asp:DropDownList>
                                                </div>
                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">Sales Executive</label>
                                                    <asp:DropDownList ID="Ft_ddsalesexctive" runat="server" placeholder="Sales Executive" class="form-control"></asp:DropDownList>
                                                </div>

                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">Sales Executive</label>
                                                    <asp:CheckBox ID="CheckBox1" runat="server" class="form-control" Text="Select All"></asp:CheckBox>

                                                </div>--%>


                                                <div class="col-md-12 form-group user-form-group">
                                                    <div class="pull-right">
                                                        <asp:Button ID="btnSearch" runat="server" Text="Search" class="btn btn-add btn-sm" OnClick="btnSearch_Click" />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <%--<div class="modal-footer">
                                <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                            </div>--%>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>


            </section>
            <!-- /.content -->
        </div>
  
</asp:Content>
