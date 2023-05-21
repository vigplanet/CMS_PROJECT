<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="add-category-images.aspx.cs" Inherits="TechOnStudy_CMS.Admin.add_category_images" %>
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
                    <h1>Add Category</h1>
                    <small>Category list</small>
                </div>
            </section>
            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <!-- Form controls -->
                    <div class="col-sm-12">
                        <div class="panel panel-bd lobidrag">
                            <div class="panel-heading">
                                <div class="btn-group" id="buttonlist">
                                    <a class="btn btn-add " href="clientlist.aspx">
                                        <i class="fa fa-list"></i>Category List </a>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="col-sm-6">

                                     <div class="form-group">
                                        <label>Product Name</label>                                        
                                        <asp:DropDownList ID="ddproduct"  class="form-control"  runat="server"  placeholder="Select" ></asp:DropDownList>
                                    </div>

                                    <div class="form-group">
                                        <label>Product Code</label>                                        
                                        <asp:FileUpload runat="server" ID="FileUpload2"></asp:FileUpload>
                                    </div>

                                    <asp:Button ID="btnSubmit" runat="server" OnClick="Button2_Click" class="btn btn-warning" Text="Save" />
                                    <asp:Button ID="btnreset" runat="server" class="btn btn-warning" Text="Reset" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.content -->
        </div>
   
</asp:Content>
