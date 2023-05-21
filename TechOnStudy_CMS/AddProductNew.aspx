<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="AddProductNew.aspx.cs" Inherits="TechOnStudy_CMS.AddProductNew" %>

<%@ Register Assembly="CKEditor.NET" Namespace="CKEditor.NET" TagPrefix="CKEditor" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       <script src="ckeditor/ckeditor.js" type="text/javascript"></script>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="header-icon">
                <i class="fa fa-users"></i>
            </div>
            <div class="header-title">
                <h1>Add Product</h1>
                <small>Product list</small>
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
                                <a class="btn btn-add " href="productlist.aspx">
                                    <i class="fa fa-list"></i>Product List </a>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label>Category Name</label>
                                    <asp:DropDownList ID="ddArea" class="form-control" runat="server" placeholder="Select Area" OnSelectedIndexChanged="ddArea_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                </div>

                                <div class="form-group">
                                    <label>Sub Category Name</label>
                                    <asp:DropDownList ID="DropDownList1" class="form-control" runat="server" placeholder="Select Area"></asp:DropDownList>
                                </div>

                                <div class="form-group">
                                    <label>Product Code</label>
                                    <asp:TextBox ID="txtcode" runat="server" class="form-control" placeholder="Product Code" Enabled="false" AutoCompleteType="Disabled"></asp:TextBox>
                                </div>
                                <div class="form-group">
                                    <label>Product Name</label>
                                    <asp:TextBox ID="txtproductname" runat="server" class="form-control" placeholder="Enter Product Name" AutoCompleteType="Disabled"></asp:TextBox>
                                </div>


                                <div class="form-group">
                                    <label>Customer MRP RATE</label>
                                    <asp:TextBox ID="txtmrprate" runat="server" class="form-control" placeholder="Enter MRP RATE" AutoCompleteType="Disabled"></asp:TextBox>
                                </div>

                                <div class="form-group">
                                    <label>Dealer MRP RATE</label>
                                    <asp:TextBox ID="txtdealerrate" runat="server" class="form-control" placeholder="Enter Dealer MRP RATE" AutoCompleteType="Disabled"></asp:TextBox>
                                </div>

                                <%-- <div class="form-group">
                                        <label>Ph No</label>
                                        <asp:TextBox ID="txtphno" runat="server" class="form-control" placeholder="Enter Phone no." AutoCompleteType="Disabled"></asp:TextBox>
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile No</label>
                                        <asp:TextBox ID="txtMObileNO" runat="server" class="form-control" placeholder="Enter Mobile No" AutoCompleteType="Disabled"></asp:TextBox>
                                    </div>

                                      <div class="form-group">
                                        <label>Address</label>
                                        <asp:TextBox ID="txtaddress" runat="server" class="form-control" placeholder="Enter Address" TextMode="MultiLine" Rows="3" AutoCompleteType="Disabled"></asp:TextBox>
                                    </div>

                                    <div class="form-group">
                                        <label>City Name</label>                                        
                                        <asp:DropDownList ID="ddcity"  class="form-control"  runat="server"  placeholder="Select City" ></asp:DropDownList>
                                    </div>--%>




                                <div class="form-group">
                                    <label>Description</label>


                                    <CKEditor:CKEditorControl ID="txtOverview" BasePath="/ckeditor/" runat="server" ClientIDMode="Static" MaxLength="6000">
                                    </CKEditor:CKEditorControl>

                                    <%--<asp:TextBox ID="txtOverview" runat="server" class="form-control" placeholder="Enter OverView" TextMode="MultiLine" Rows="5" AutoCompleteType="Disabled"></asp:TextBox>--%>
                                </div>


                                <%-- <div class="form-group">
                                        <label>Property Type</label>                                        
                                        <asp:DropDownList ID="ddpropertytype" runat="server"  class="form-control"   placeholder="Select Type" >
                                            <asp:ListItem>PG</asp:ListItem>
                                            <asp:ListItem>HOSTEL</asp:ListItem>
                                            <asp:ListItem>PG/HOSTEL</asp:ListItem>
                                        </asp:DropDownList>
                                    </div>--%>

                                <%-- <div class="form-group">
                                        <label>Sales Executive</label>                                        
                                        <asp:DropDownList ID="ddsaleemp" runat="server"   class="form-control"  placeholder="Sales Executive" ></asp:DropDownList>
                                    </div>--%>


                                <div class="table-responsive">


                                    <%-- <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                                        <thead class="back_table_color">
                                            <tr class="info">
                                                <th>Id</th>
                                                <th>Attribute Name</th>
                                                <th>Enter Data</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <asp:Repeater ID="Repeater1" runat="server">
                                                <ItemTemplate>
                                                    <tr>
                                                        <td><%# Eval("categorycode")%></td>
                                                        <td><%# Eval("CategoryName")%></td>
                                                        <td><%# Eval("Categoryid")%></td>
                                                        <td>

                                                            <asp:LinkButton class="btn btn-danger btn-sm" ID="lnkDelete" CommandArgument='<%#Eval("categoryid") %>' CommandName="Delete"
                                                                OnClientClick="return confirm('Are you sure want to delete..?')" runat="server"><i class="fa fa-trash-o"></i></asp:LinkButton>

                                                        </td>
                                                    </tr>
                                                </ItemTemplate>
                                            </asp:Repeater>
                                        </tbody>
                                    </table>--%>



                                    <asp:GridView ID="DataDisplay" CssClass="table table-bordered table-striped table-hover"
                                        runat="server" AutoGenerateColumns="False" CellPadding="3"
                                        AllowPaging="true" PageSize="25">
                                        <Columns>
                                            <asp:TemplateField HeaderText="S.No">
                                                <ItemTemplate>
                                                    <%# Container.DataItemIndex + 1%>
                                                    <asp:HiddenField runat="server" ID="hdnsrvid" Value='<%# Eval("Attid") %>' />
                                                    <asp:HiddenField runat="server" ID="HiddenField1" Value='<%# Eval("dtid") %>' />
                                                    <asp:CheckBox runat="server" ID="chkid" />
                                                </ItemTemplate>
                                            </asp:TemplateField>

                                            <asp:BoundField DataField="Name" HeaderText="Attribute Name" />
                                            <asp:TemplateField HeaderText="Enter Value">
                                                <ItemTemplate>
                                                    <asp:TextBox runat="server" ID="txtvaluename" Text='<%#Eval("Avalue") %>'></asp:TextBox>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                        </Columns>
                                    </asp:GridView>
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
