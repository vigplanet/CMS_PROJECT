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
                                        
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">CANDIDATE NAME :</label>                                            
                                            <asp:TextBox ID="txtcandidatename" runat="server" placeholder="CANDIDATE NAME" class="form-control"></asp:TextBox>
                                        </div>
                                        <!-- Text input-->

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Admission Date :</label>
                                            <div class="input-group">
                                                <%--<input id='minMaxExample' type="text" class="form-control" />--%>
                                                <asp:TextBox ID="minMaxExample" runat="server" placeholder="CANDIDATE NAME" class="form-control"></asp:TextBox>
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><a href="#"><i
                                                        class="fa fa-calendar text-center"></i></a></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">GENDER  </label>
                                            <asp:RadioButtonList ID="rdogender" runat="server" RepeatDirection="Horizontal">
                                                <asp:ListItem Selected="True">MALE</asp:ListItem>
                                                <asp:ListItem>FEMALE	</asp:ListItem>
                                            </asp:RadioButtonList>
                                        </div>
                                    </div>

                                    <div class="row">

                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">CATEGORY </label>                                            
                                            <asp:DropDownList ID="ddlcategory" runat="server" class="form-control"></asp:DropDownList>
                                        </div>


                                        <div class="col-md-4 form-group">
                                            <label class="control-label">EMAIL ID</label>                                            
                                            <asp:TextBox ID="txtemaiid" runat="server" placeholder="EMAIL ID" class="form-control"></asp:TextBox>
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">CONFIRM EMAIL ID</label>                                            
                                            <asp:TextBox ID="txtconfirmemail" runat="server" placeholder="CONFIRM EMAIL ID" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">CONTACT NO</label>                                            
                                            <asp:TextBox ID="txtcontactno" runat="server" placeholder="Contact No" class="form-control"></asp:TextBox>
                                        </div>


                                        <div class="col-md-4 form-group">
                                            <label class="control-label">Select</label>
                                            <asp:CheckBox ID="chk_handicapped" runat="server" class="form-control" Text="HANDICAPPED (PHYSICALLY DISABLE)" />
                                        </div>
                                        
                                    </div>
                                    <div class="row" style="background-color: gray; color: white;">
                                        FATHER'S/GUARDIAN'S DETAILS
                                    </div>
                                    <div class="row">


                                        <div class="col-md-4 form-group">
                                            <label class="control-label">FATHER'S NAME</label>                                            
                                            <asp:TextBox ID="txtfathername" runat="server" placeholder="FATHER'S NAME" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">OCCUPATION </label>                                            
                                            <asp:TextBox ID="txtOCCUPATION" runat="server" placeholder="OCCUPATION" class="form-control"></asp:TextBox>
                                        </div>


                                        <div class="col-md-4 form-group">
                                            <label class="control-label">MOBILE NO.</label>                                            
                                            <asp:TextBox ID="txtmobileno" runat="server" placeholder="Mobile No" class="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 form-group">
                                            <label class="control-label">MOTHER'S NAME</label>                                            
                                            <asp:TextBox ID="txtmothername" runat="server" placeholder="Mother's name" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label class="control-label">OCCUPATION </label>                                            
                                            <asp:TextBox ID="txtmother_OCCUPATION" runat="server" placeholder="OCCUPATION" class="form-control"></asp:TextBox>
                                        </div>


                                        <div class="col-md-4 form-group">
                                            <label class="control-label">MOBILE NO.</label>                                            
                                            <asp:TextBox ID="txtmother_mobile" runat="server" placeholder="MOBILE NO." class="form-control"></asp:TextBox>
                                        </div>


                                    </div>
                                    <div class="row" style="background-color: gray; color: white;">
                                        PERMANENT ADDRESS
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label class="control-label">LINE 1 </label>                                            
                                            <asp:TextBox ID="txtPERMANENT_ADDRESS" runat="server" placeholder="PERMANENT ADDRESS" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-3 form-group">
                                            <label class="control-label">CITY/TOWN </label>                                            
                                            <asp:TextBox ID="txtCity" runat="server" placeholder="City/Town" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-3 form-group">
                                            <label class="control-label">Country :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddlCountry" runat="server" class="form-control"></asp:DropDownList>
                                            </div>

                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">State :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddlstate" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">City :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                              
                                                <asp:DropDownList ID="ddlcity" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-12 form-group">
                                            <asp:CheckBox ID="chksame" runat="server" class="form-control" Text="IS YOUR COMMUNICATION ADDRESS IS SAME AS YOUR PERMANENT ADDRESSCOMMUNICATION ADDRESS" />
                                        </div>
                                    </div>
                                    <div class="row" style="background-color: gray; color: white;">
                                        COMMUNICATION ADDRESS
                                    </div>

                                    <div class="row">

                                        <div class="col-md-12 form-group">
                                            <label class="control-label">LINE 2 </label>                                            
                                            <asp:TextBox ID="txtCOMMUNICATION_ADDRESS" runat="server" placeholder="COMMUNICATION ADDRESS" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-3 form-group">
                                            <label class="control-label">CITY/TOWN </label>                                            
                                            <asp:TextBox ID="txt_cd_city" runat="server" placeholder="CITY/TOWN" class="form-control"></asp:TextBox>
                                        </div>

                                        <div class="col-md-3 form-group">
                                            <label class="control-label">Country :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddl_cd_country" runat="server" class="form-control"></asp:DropDownList>
                                            </div>

                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">State :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                               
                                                <asp:DropDownList ID="ddl_cd_state" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <!-- Text input-->
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">City :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddl_cd_city" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style="background-color: gray; color: white;">
                                        COURSE DETAILS
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">SESSION  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddlsession" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">CENTRE :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                               
                                                <asp:DropDownList ID="ddlcenter" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">COURSE  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                 
                                                <asp:DropDownList ID="ddlcourse" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">BATCH TYPE :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">
                                               
                                                <asp:DropDownList ID="ddl_batch" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">EXAM  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">
                                                
                                                <asp:DropDownList ID="ddlexam" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">STREAM  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">
                                                
                                                <asp:DropDownList ID="ddlstream" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">BATCH  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">
                                                
                                                <asp:DropDownList ID="ddl_batch2" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style="background-color: gray; color: white;">
                                        EDUCATION DETAILS
                                    </div>
                                    <div class="row">




                                        <div class="col-md-3 form-group">
                                            <label class="control-label">QUALIFICATION  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                 
                                                <asp:DropDownList ID="ddl_qualification" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">STREAM  :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">                                                
                                                <asp:DropDownList ID="ddlstream2" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>

                                        <div class="col-md-3 form-group">
                                            <label class="control-label">NAME OF COLLEGE (WITH CITY) </label>                                            
                                            <asp:TextBox ID="txtcolllegename" runat="server" placeholder="NAME OF COLLEGE (WITH CITY)" class="form-control"></asp:TextBox>
                                        </div>


                                        <div class="col-md-3 form-group">
                                            <label class="control-label">PASSING YEAR .</label>                                            
                                            <asp:TextBox ID="txtpassingyear" runat="server" placeholder="Passing Year" class="form-control"></asp:TextBox>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">MARKS IN %</label>                                            
                                            <asp:TextBox ID="txtmarks" runat="server" placeholder="Marks in %" class="form-control"></asp:TextBox>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">OPTIONAL SUBJECT IN CSE :</label>
                                            <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                            <div class="input-group">
                                                
                                                <asp:DropDownList ID="ddloptonalsubject" runat="server" class="form-control"></asp:DropDownList>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row" style="background-color: gray; color: white;">
                                        UPLOAD IMAGE / DOCUMENTS
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">UPLOAD PHOTO  </label>
                                            <asp:FileUpload ID="FileUpload1" runat="server" />
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">UPLOAD SIGNATURE  </label>
                                           <asp:FileUpload ID="FileUpload2" runat="server" />
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="control-label">UPLOAD ID PROOF: </label>
                                           <asp:FileUpload ID="FileUpload3" runat="server" />
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-12 form-group">

                                            <asp:CheckBox ID="CheckBox3" runat="server" class="form-control" Text="I AGREE TERMS & CONDITIONS" />
                                        </div>
                                    </div>

                                    <div class="row">
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
     
     
     
</asp:Content>
