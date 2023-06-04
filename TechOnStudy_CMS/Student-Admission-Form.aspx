<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="Student-Admission-Form.aspx.cs" Inherits="TechOnStudy_CMS.Student_Admission_Form" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <link href="assets/bootstrapa.min.css" rel="stylesheet" />
    <script src="assets/alertpop.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel5" runat="server">
        <ContentTemplate>
            <div class="content-wrapper ml-0">
                <section class="content">
                    <div class="row">
                        <div class="col-lg-12 pinpin">
                            <div class="card lobicard" data-sortable="true">
                                <div class="card-header">
                                    <div class="card-title custom_title">
                                        <h3 style="font-weight: 600;">ONLINE ADMISSION FORM</h3>
                                    </div>
                                </div>

                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="row">

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CANDIDATE NAME :*</label>
                                                    <asp:TextBox ID="txtcandidatename" runat="server" placeholder="CANDIDATE NAME" class="form-control"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Candidate Name Required" ControlToValidate="txtcandidatename" ForeColor="Red"></asp:RequiredFieldValidator>
                                                </div>
                                                <!-- Text input-->



                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">GENDER : * </label>
                                                    <asp:RadioButtonList ID="rdogender" runat="server" RepeatDirection="Horizontal">
                                                        <asp:ListItem Selected="True" Text="MALE" Value="0">MALE</asp:ListItem>
                                                        <asp:ListItem Text="FEMALE" Value="1">FEMALE</asp:ListItem>
                                                    </asp:RadioButtonList>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">CATEGORY *</label>
                                                    <asp:DropDownList ID="ddlcategory" runat="server" class="form-control">
                                                        <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                        <asp:ListItem Text="Gen" Value="1">Gen</asp:ListItem>
                                                        <asp:ListItem Text="Gen-EWS" Value="5">Gen-EWS</asp:ListItem>
                                                        <asp:ListItem Text="SC" Value="2">SC</asp:ListItem>
                                                        <asp:ListItem Text="ST" Value="3">ST</asp:ListItem>
                                                        <asp:ListItem Text="OBC" Value="4">OBC</asp:ListItem>
                                                    </asp:DropDownList>
                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ErrorMessage="Category Required" ControlToValidate="ddlcategory" ForeColor="Red"></asp:RequiredFieldValidator>
                                             
                                                </div>

                                            
                                               
                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">DOB : *</label><br />
                                                    <%--<asp:TextBox ID="txtdob" runat="server" placeholder="Date Of Birth" CssClass="Calender form-control" disabled></asp:TextBox>--%>
                                                    <input type="date" id="birthdaytime" name="birthdaytime" runat="server" CssClass="form-control" />
                                                    <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="Date of Birth Required" ControlToValidate="txtdob" ForeColor="Red"></asp:RequiredFieldValidator>
                                                --%>
                                                </div>
                                            </div>
                                            <div class="row">

                                                <!-- Text input-->



                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">EMAIL ID *</label>
                                                    <asp:TextBox ID="txtemaiid" runat="server" placeholder="EMAIL ID" class="form-control"></asp:TextBox>
                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="EmailId Required" ControlToValidate="txtemaiid" ForeColor="Red"></asp:RequiredFieldValidator>                                                
                                                    <asp:RegularExpressionValidator ID="regexEmailValid" runat="server" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ControlToValidate="txtemaiid" ErrorMessage="Invalid Email Format" ForeColor="Red"></asp:RegularExpressionValidator>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CONFIRM EMAIL ID</label>
                                                    <asp:TextBox ID="txtconfirmemail" runat="server" placeholder="CONFIRM EMAIL ID" class="form-control"></asp:TextBox>
                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="Confirm EmailId Required" ControlToValidate="txtconfirmemail" ForeColor="Red"></asp:RequiredFieldValidator>
                                                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ControlToValidate="txtconfirmemail" ErrorMessage="Invalid Email Format" ForeColor="Red"></asp:RegularExpressionValidator>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CONTACT NO *</label>
                                                    <asp:TextBox ID="txtcontactno" runat="server" placeholder="Contact No" class="form-control"></asp:TextBox>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CONFIRM CONTACT NO</label>
                                                    <asp:TextBox ID="txtconfirmno" runat="server" placeholder="Contact No" class="form-control"></asp:TextBox>
                                                </div>





                                            </div>
                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                FATHER'S/GUARDIAN'S DETAILS
                                            </div>
                                            <div class="row">


                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">FATHER'S NAME *</label>
                                                    <asp:TextBox ID="txtfathername" runat="server" placeholder="FATHER'S NAME" class="form-control"></asp:TextBox>
                                                </div>

                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">OCCUPATION : *</label>
                                                    <asp:TextBox ID="txtOCCUPATION" runat="server" placeholder="OCCUPATION" class="form-control"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ErrorMessage="FATHER'S OCCUPATION Required" ControlToValidate="txtOCCUPATION" ForeColor="Red"></asp:RequiredFieldValidator>
                                                </div>

                                                <div class="col-md-4 form-group">
                                                    <label class="control-label">MOTHER'S OCCUPATION : * </label>
                                                    <asp:TextBox ID="txtmother_OCCUPATION" runat="server" placeholder="OCCUPATION" class="form-control"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ErrorMessage="MOTHER'S OCCUPATION Required" ControlToValidate="txtOCCUPATION" ForeColor="Red"></asp:RequiredFieldValidator>
                                                </div>

                                            </div>

                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                PERMANENT ADDRESS
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 form-group">
                                                    <label class="control-label">LINE 1 *</label>
                                                    <asp:TextBox ID="txtPERMANENT_ADDRESS" runat="server" placeholder="PERMANENT ADDRESS" class="form-control"></asp:TextBox>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CITY/TOWN </label>
                                                    <asp:TextBox ID="txtCity" runat="server" placeholder="City/Town" class="form-control" autocomplete="off"></asp:TextBox>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">Country :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlCountry" runat="server" class="form-control" OnSelectedIndexChanged="ddlCountry_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                    </div>

                                                </div>
                                                <!-- Text input-->
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">State :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlstate" runat="server" class="form-control" OnSelectedIndexChanged="ddlstate_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                    </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">City :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlcity" runat="server" class="form-control"></asp:DropDownList>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">

                                                <div class="col-md-12 form-group">
                                                    <asp:CheckBox ID="chksame" runat="server" class="form-control" Text="" OnCheckedChanged="chksame_CheckedChanged" AutoPostBack="true" />
                                                    <p><b>IS YOUR COMMUNICATION ADDRESS IS SAME AS YOUR PERMANENT ADDRESSCOMMUNICATION ADDRESS</b></p>
                                                </div>
                                            </div>
                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                COMMUNICATION ADDRESS
                                            </div>

                                            <div class="row">

                                                <div class="col-md-12 form-group">
                                                    <label class="control-label">LINE 2 </label>
                                                    <asp:TextBox ID="txtCOMMUNICATION_ADDRESS" runat="server" placeholder="COMMUNICATION ADDRESS" class="form-control"></asp:TextBox>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CITY/TOWN </label>
                                                    <asp:TextBox ID="txt_cd_city" runat="server" placeholder="CITY/TOWN" class="form-control" autocomplete="off"></asp:TextBox>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">Country :</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddl_cd_country" runat="server" class="form-control" OnSelectedIndexChanged="ddl_cd_country_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                    </div>

                                                </div>
                                                <!-- Text input-->
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">State :</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddl_cd_state" runat="server" class="form-control" OnSelectedIndexChanged="ddl_cd_state_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
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
                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                COURSE DETAILS
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">SESSION  :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlsession" runat="server" class="form-control">
                                                            <asp:ListItem Text="---SELECT---" Value="0">---SELECT---</asp:ListItem>
                                                            <asp:ListItem Text="2023-2024" Value="1">2023-2024</asp:ListItem>
                                                            <asp:ListItem Text="2024-2025" Value="2">2024-2025</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">CENTRE :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlcenter" runat="server" class="form-control">
                                                            <asp:ListItem Text="---SELECT---" Value="0">---SELECT---</asp:ListItem>
                                                            <asp:ListItem Text="DELHI" Value="1">DELHI</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">COURSE  :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlcourse" runat="server" class="form-control">
                                                            <asp:ListItem Text="---SELECT---" Value="0">---SELECT---</asp:ListItem>
                                                            <asp:ListItem Text="Sociology Foundation Batch" Value="1">Sociology Foundation Batch</asp:ListItem>
                                                            <asp:ListItem Text="Sociology 500+Test Series" Value="2">Sociology 500+Test Series</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">BATCH TYPE :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">

                                                        <asp:DropDownList ID="ddl_batch" runat="server" class="form-control">
                                                            <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                            <asp:ListItem Text="Online Classes" Value="1">Online</asp:ListItem>
                                                            <asp:ListItem Text="Online test Series" Value="2">Offline</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                 <div class="col-md-3 form-group">
                                                    <label class="control-label">OPTIONAL SUBJECT  :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">

                                                        <asp:DropDownList ID="ddlstream" runat="server" class="form-control">
                                                            <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                            <asp:ListItem Text="Sociology" Value="1">Sociology</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                               
                                                <div class="col-md-2 form-group">
                                                    <label class="control-label">UPSC Roll No  :</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">

                                                     <asp:TextBox ID="txtUpscRollno" runat="server" placeholder="UPSC Roll No" class="form-control"></asp:TextBox>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                EDUCATION DETAILS
                                            </div>
                                            <div class="row">




                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">QUALIFICATION  :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddl_qualification" runat="server" class="form-control">
                                                            <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                            <asp:ListItem Text="B.Tech" Value="1"> B.Tech</asp:ListItem>
                                                            <asp:ListItem Text="BE" Value="2"> BE</asp:ListItem>
                                                            <asp:ListItem Text="AMI" Value="3"> AMI</asp:ListItem>
                                                            <asp:ListItem Text="BA" Value="4"> BA</asp:ListItem>
                                                            <asp:ListItem Text=" B.Com" Value="5"> B.Com</asp:ListItem>
                                                            <asp:ListItem Text="OTHERS" Value="6"> OTHERS  </asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">STREAM  :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">
                                                        <asp:DropDownList ID="ddlstream2" runat="server" class="form-control">
                                                            <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                            <asp:ListItem Text="Civil Engineering" Value="1">Civil Engineering</asp:ListItem>
                                                            <asp:ListItem Text="Computer Science &amp; IT" Value="2">Computer Science &amp; IT</asp:ListItem>
                                                            <asp:ListItem Text="Economics" Value="3">Economics</asp:ListItem>
                                                            <asp:ListItem Text="Electrical Engineering" Value="4">Electrical Engineering</asp:ListItem>
                                                            <asp:ListItem Text="Electronics Engineering" Value="5">Electronics Engineering</asp:ListItem>
                                                            <asp:ListItem Text="Geography" Value="6">Geography</asp:ListItem>
                                                            <asp:ListItem Text="Mathematics" Value="7">Mathematics</asp:ListItem>
                                                            <asp:ListItem Text="Mechanical Engineering" Value="8">Mechanical Engineering</asp:ListItem>
                                                            <asp:ListItem Text="Philosophy" Value="9">Philosophy</asp:ListItem>
                                                            <asp:ListItem Text="Political Science" Value="10">Political Science</asp:ListItem>
                                                            <asp:ListItem Text="Public Administration" Value="10">Public Administration</asp:ListItem>
                                                            <asp:ListItem Text="Sociology" Value="12">Sociology</asp:ListItem>
                                                            <asp:ListItem Text="Others" Value="13">Others</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>

                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">NAME OF COLLEGE (WITH CITY)* </label>
                                                    <asp:TextBox ID="txtcolllegename" runat="server" placeholder="NAME OF COLLEGE (WITH CITY)" class="form-control"></asp:TextBox>
                                                </div>


                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">PASSING YEAR .*</label>
                                                    <asp:TextBox ID="txtpassingyear" runat="server" placeholder="Passing Year" class="form-control"></asp:TextBox>
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">MARKS IN % *</label>
                                                    <asp:TextBox ID="txtmarks" runat="server" placeholder="Marks in %" class="form-control"></asp:TextBox>
                                                </div>
                                                <%--<div class="col-md-3 form-group">
                                                    <label class="control-label">OPTIONAL SUBJECT IN CSE :*</label>
                                                    <!-- <input type="text" placeholder="Degree/Cource" class="form-control"> -->
                                                    <div class="input-group">

                                                        <asp:DropDownList ID="ddloptonalsubject" runat="server" class="form-control">
                                                            <asp:ListItem Text="---Select---" Value="0">---Select---</asp:ListItem>
                                                            <asp:ListItem Text="Sociology" Value="1">Sociology</asp:ListItem>
                                                        </asp:DropDownList>
                                                    </div>
                                                </div>--%>

                                            </div>

                                            <div class="row" style="background-color: #2e2e2e; color: #fff; padding: 10px 13px; font-weight: 600; letter-spacing: 0.5px; margin-top: 15px; margin-bottom: 15px;">
                                                UPLOAD IMAGE / DOCUMENTS
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">UPLOAD PHOTO  *</label>
                                                    <asp:FileUpload ID="file_photo" runat="server" />
                                                    <asp:RequiredFieldValidator ID="rfvFileupload" runat="server" ErrorMessage="* PHOTO required" ControlToValidate="file_photo" ForeColor="Red" />
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">UPLOAD SIGNATURE  *</label>
                                                    <asp:FileUpload ID="file_signature" runat="server" />
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="* SIGNATURE required" ControlToValidate="file_signature" ForeColor="Red" />
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">UPLOAD ID PROOF : *</label>
                                                    <asp:FileUpload ID="file_id" runat="server" />
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="* ID PROOF required" ControlToValidate="file_id" ForeColor="Red" />
                                                </div>
                                                <div class="col-md-3 form-group">
                                                    <label class="control-label">UPLOAD UPSC ADMIT CARD : </label>
                                                    <asp:FileUpload ID="file_admitcard" runat="server" />                                                    
                                                </div>
                                            </div>
                                            <div class="row">

                                                <div class="col-md-12 form-group">
                                                    <asp:CheckBox ID="CheckBox3" runat="server" class="form-control" Text="Declaration: I hereby declare that all the information contained in the form is true and i shall abide by all the rules and regulations of the institute" />
                                                </div>
                                            </div>

                                            <div class="row">

                                                <div class="col-md-4 form-group user-form-group">
                                                    <div class="pull-right">
                                                        <div class="messagealert" id="alert_container">
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="col-md-12 form-group user-form-group">
                                                    <div class="text-center">
                                                        <asp:Button ID="Button1" runat="server" Text="Reset" class="btn btn-danger btn-sm" OnClick="Button1_Click" />
                                                        <asp:Button ID="Button2" runat="server" Text="Submit" class="btn btn-add btn-sm" OnClick="Button2_Click" />
                                                          
                                                        <asp:Label ID="lblerrormsg" runat="server" Text="" ForeColor="Red" class="control-label"></asp:Label>
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



        </ContentTemplate>
        <Triggers>
            <asp:PostBackTrigger ControlID="Button2" />
        </Triggers>
    </asp:UpdatePanel>
    <script type="text/javascript">
        function pageLoad() {
            $(function () {
                $('.Calender').datepicker({
                    showButtonPanel: true,
                    dateFormat: "mm/dd/yy",
                    showAnim: "slide",
                    changeMonth: true,
                    changeYear: true,
                    showOn: "button",
                    buttonImage: "Upload/calender.png",
                    buttonImageOnly: true,

                    showButtonPanel: true
                });
            });

        }

    </script>
</asp:Content>
