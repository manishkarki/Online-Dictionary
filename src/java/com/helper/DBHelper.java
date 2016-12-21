/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.helper;

import java.sql.*;
/**
 *
 * @author 985363
 */
public class DBHelper {
    // JDBC driver name and database URL
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "jdbc:mysql://localhost/entries";

   //  Database credentials
   static final String USER = "root";
   static final String PASS = "password";
   static Connection conn = null;
   
   public static Connection getConnection() throws SQLException, ClassNotFoundException{
       //STEP 2: Register JDBC driver
      Class.forName("com.mysql.jdbc.Driver");

      //STEP 3: Open a connection
      conn = DriverManager.getConnection(DB_URL,USER,PASS);
      
      return conn;
   }
   
}
