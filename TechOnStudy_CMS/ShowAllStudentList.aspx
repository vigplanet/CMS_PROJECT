<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="ShowAllStudentList.aspx.cs" Inherits="TechOnStudy_CMS.ShowAllStudentList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .scrolling {
            position: absolute;
        }

        
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <!-- Content Header (Page header) -->

    <!-- Main content -->


    <div class="content-wrapper ml-0">
        <section class="content-header">
            <div class="header-icon">
                <i class="fa fa-users"></i>
            </div>
            <div class="header-title">
                <h1>Student Admission form List</h1>
                <small>Admission form List</small>
            </div>
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="row">

               
                <div class="col-lg-12 pinpin">
                    <div class="card lobicard" data-sortable="true">

                        <div class="card-body">

                            <div class="table-responsive">

                                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" class="table table-bordered table-striped table-hover"
                                    EmptyDataText="!!! No Data Found !!!"  DataKeyNames="id" OnRowCommand="GridView1_RowCommand"
                                    ForeColor="#333333" Width="800px" OnRowDeleting="GridView1_RowDeleting">
                                    <Columns>
                                        <asp:TemplateField>
                                            <HeaderTemplate>
                                                Print
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <asp:Button Text="Print" runat="server" CommandName="Print" CommandArgument="<%# Container.DataItemIndex %>" />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                         <asp:CommandField ShowDeleteButton="true" /> 
                                      <%--  <asp:TemplateField>
                                            <HeaderTemplate>
                                                Show Photo
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <asp:Button Text="Show Photo" runat="server" CommandName="Photo" CommandArgument="<%# Container.DataItemIndex %>" />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:TemplateField>
                                             <HeaderTemplate>
                                              Show Sign
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <asp:Button Text="Show Sign" runat="server" CommandName="Sign" CommandArgument="<%# Container.DataItemIndex %>" />
                                            </ItemTemplate>
                                        </asp:TemplateField>--%>
                                        <asp:TemplateField>
                                             <HeaderTemplate>
                                              Show ID
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <asp:Button Text="Show Id" runat="server" CommandName="Id" CommandArgument="<%# Container.DataItemIndex %>" />
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                      <%--  <asp:TemplateField>
                                             <HeaderTemplate>
                                             Show Admit Card
                                            </HeaderTemplate>
                                            <ItemTemplate>
                                                <asp:Button Text="Show Admit Card" runat="server" CommandName="AdmitCard" CommandArgument="<%# Container.DataItemIndex %>" />
                                            </ItemTemplate>
                                        </asp:TemplateField>--%>
                                        <asp:BoundField DataField="CANDIDATENAME" HeaderText="CANDIDATENAME" />
                                        <asp:BoundField DataField="GenderName" HeaderText="GenderName" />
                                        <asp:BoundField DataField="CATEGORYNAME" HeaderText="CATEGORYNAME" />
                                        <asp:BoundField DataField="EMAILID" HeaderText="EMAILID" />
                                        <asp:BoundField DataField="CONTACTNO" HeaderText="CONTACTNO" />
                                        <asp:BoundField DataField="FATHERSNAME" HeaderText="FATHERSNAME" />
                                        <asp:BoundField DataField="OCCUPATION" HeaderText="OCCUPATION" />
                                        <asp:BoundField DataField="MOCCUPATION" HeaderText="MOCCUPATION" />
                                        <asp:BoundField DataField="PA_LINE" HeaderText="PA_LINE" />
                                        <asp:BoundField DataField="PA_CITY_TOWN" HeaderText="PA_CITY_TOWN" />
                                        <asp:BoundField DataField="PA_CountryName" HeaderText="PA_CountryName" />
                                        <asp:BoundField DataField="PA_StateName" HeaderText="PA_StateName" />
                                        <asp:BoundField DataField="PA_CityName" HeaderText="PA_CityName" />
                                        <asp:BoundField DataField="CA_LINE" HeaderText="CA_LINE" />
                                        <asp:BoundField DataField="CA_CITY_TOWN" HeaderText="CA_CITY_TOWN" />
                                        <asp:BoundField DataField="CA_CountryName" HeaderText="CA_CountryName" />
                                        <asp:BoundField DataField="CA_StateName" HeaderText="CA_StateName" />
                                        <asp:BoundField DataField="CA_CityName" HeaderText="CA_CityName" />
                                        <asp:BoundField DataField="SESSIONNAME" HeaderText="SESSIONNAME" />
                                        <asp:BoundField DataField="CName" HeaderText="CName" />
                                        <asp:BoundField DataField="COURSENAME" HeaderText="COURSENAME" />
                                        <asp:BoundField DataField="BATCH_TYPENAME" HeaderText="BATCH_TYPENAME" />
                                        <asp:BoundField DataField="C_STREAMNAME" HeaderText="C_STREAMNAME" />
                                        <asp:BoundField DataField="QUALIFICATIONNAME" HeaderText="QUALIFICATIONNAME" />
                                        <asp:BoundField DataField="E_STREAMNAME" HeaderText="E_STREAMNAME" />
                                        <asp:BoundField DataField="NAME_OF_COLLEGE" HeaderText="NAME_OF_COLLEGE" />
                                        <asp:BoundField DataField="PASSING_YEAR" HeaderText="PASSING_YEAR" />
                                        <asp:BoundField DataField="MARKS_PER" HeaderText="MARKS_PER" />
                                        <asp:BoundField DataField="OPTIONAL_SUBJECT_CSENAME" HeaderText="OPTIONAL_SUBJECT_CSENAME" />
                                        <asp:BoundField DataField="PHOTOS" HeaderText="PHOTOS" Visible="false" />
                                        <asp:BoundField DataField="SIGNATURE" HeaderText="SIGNATURE" Visible="false" />
                                        <asp:BoundField DataField="IDPROOF" HeaderText="IDPROOF" Visible="false" />
                                        <asp:BoundField DataField="CreatedDatetime" HeaderText="CreatedDatetime" />
                                        <asp:BoundField DataField="UpscRollNo" HeaderText="UpscRollNo" />
                                        <asp:BoundField DataField="ADMITCARD" HeaderText="ADMITCARD" Visible="false" />
                                        <asp:BoundField DataField="dob" HeaderText="dob" />
                                        <asp:BoundField DataField="EnrollNo" HeaderText="EnrollNo" />
                                    </Columns>
                                     

                                </asp:GridView>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </div>




</asp:Content>
