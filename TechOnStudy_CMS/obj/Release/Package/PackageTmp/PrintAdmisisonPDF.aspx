﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageSms.Master" AutoEventWireup="true" CodeBehind="PrintAdmisisonPDF.aspx.cs" Inherits="TechOnStudy_CMS.PrintAdmisisonPDF" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=10.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
    Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Width="100%" Height="1100px">
        </rsweb:ReportViewer>
        <%--<asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />--%>
</asp:Content>
