/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.daoImpl;

import com.helper.DBHelper;
import com.model.Entries;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Manish
 */
public class DictionaryDaoImpl {

    Statement stmt = null;
    Connection conn = null;

    public List<Entries> fetch(String input) throws SQLException {

        try {
            this.conn = DBHelper.getConnection();

            List<Entries> entriesList;

            String sql = "SELECT * from entries"
                    + " WHERE word = '" + input + "'";
            stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if (rs == null) {
                return null;
            }

            entriesList = new ArrayList<>();
            while (rs.next()) {
                Entries f = new Entries(rs.getString("word").trim(), rs.getString("wordtype").trim(),
                        rs.getString("definition").trim());
                entriesList.add(f);

            }

            return entriesList;

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DictionaryDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        } finally {

            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException sqlex) {
                    // ignore -- as we can't do anything about it here           
                }

                stmt = null;
            }

            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException sqlex) {
                    // ignore -- as we can't do anything about it here     
                }

                conn = null;
            }
        }
        return null;
    }

}
