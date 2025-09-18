import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#222",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Admin Panel</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/admin" style={{ color: "#fff", textDecoration: "none" }}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/getcontact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header
          style={{
            background: "#f5f5f5",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3>Welcome, {user?.name || "Admin"}</h3>
          <button
            onClick={handleLogout}
            style={{
              background: "#e74c3c",
              border: "none",
              padding: "8px 16px",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Logout
          </button>
        </header>

        {/* Outlet where child pages render */}
        <main style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
