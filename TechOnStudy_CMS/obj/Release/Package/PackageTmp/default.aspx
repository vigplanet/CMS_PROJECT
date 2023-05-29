﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="TechOnStudy_CMS.pdc._default" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>CRM Admin Panel</title>

    <!-- Favicon and touch icons -->
    <link rel="shortcut icon" href="assets/dist/img/ico/favicon.png" type="image/x-icon">
    <!-- Bootstrap -->
    <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Pe-icon-7-stroke -->
    <link href="assets/pe-icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet" />
    <!-- style css -->
    <link href="assets/dist/css/stylecrm.css" rel="stylesheet" />

</head>
<body>
    <!-- Content Wrapper -->
    <div class="login-wrapper">
        <div class="back-link">
            <a href="index.html" class="btn btn-add">Back to Dashboard</a>
        </div>
        <div class="container-center">
            <div class="login-area">
                <div class="card panel-custom">
                    <div class="card-heading custom_head">
                        <div class="view-header">
                            <div class="header-icon">
                                <i class="pe-7s-unlock"></i>
                            </div>
                            <div class="header-title">
                                <h3>Login</h3>
                                <small><strong>Please enter your credentials to login.</strong></small>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form id="loginForm" novalidate runat="server">
                            <div class="form-group">
                                <label class="control-label" for="username">Username</label>
                                <input type="text" placeholder="example@gmail.com" title="Please enter you username" required="" value="" name="username" id="username" class="form-control" runat="server">
                                <span class="help-block small">Your unique username to app</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="password">Password</label>
                                <input type="password" title="Please enter your password" placeholder="******" required="" value="" name="password" id="password" class="form-control" runat="server">
                                <span class="help-block small">Your strong password</span>
                            </div>
                            <div>
                                <%--<button class="btn green_btn">Login</button>--%>
                                <asp:Button ID="Button1" runat="server" Text="Login" class="btn green_btn" OnClick="Button1_Click" />
                                <%--<a class="btn btn-warning" href="register.html">Register</a>--%>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.content-wrapper -->
    <!-- jQuery -->
    <script src="assets/plugins/jQuery/jquery-1.12.4.min.js"></script>
    <!-- Bootstrap proper -->
    <script src="assets/bootstrap/js/popper.min.js"></script>
    <!-- Bootstrap -->
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
