<%@page import="java.sql.*,java.util.*"%>
<%
String fname=request.getParameter("fname");
String lname=request.getParameter("lname");
String email=request.getParameter("email");
String pass=request.getParameter("pass");
String cpass=request.getParameter("cpass");
String loacation=request.getParameter("location");
String state=request.getParameter("state");
int mobile=Integer.parseInt(request.getParameter("mobile"));
        try{
         Class.forName("com.mysql.jdbc.Driver");
           Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/server", "admin", "tiger");
           Statement st=con.createStatement();
           int i=st.executeUpdate("insert into user(firstname,lastname,email,pass,confirm_pass,location,mobile) values('"+fname+"','"+lname+"','"+email+"','"+pass+"','"+cpass+"','"+location+"','"+mobile+")");
        out.println("Data is successfully inserted!");
        }
        catch(Exception e){
        System.out.print(e);
        e.printStackTrace();
        }
        %>