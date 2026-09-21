import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  Search,
  Mail,
  Phone,
  Clock,
  Copy,
  Check,
  Eye,
  X,
  RefreshCw,
  FileSpreadsheet,
  Calendar,
  Filter,
  Trash2,
  MoreVertical,
  CheckCircle2,
  Users,
  Inbox,
  Tag,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Modals state
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    type: "single", // 'single' | 'bulk'
    targetId: null,
    targetName: "",
    count: 0,
  });

  // Action menu dropdown state
  const [openActionMenuId, setOpenActionMenuId] = useState(null);

  // Toast helper
  const showToast = (message, type = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Fetch real contacts from backend
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = Array.isArray(res.data) ? res.data : [];
      setContacts(data);
      if (data.length > 0) {
        setSelectedContact((prev) => {
          if (!prev) return data[0];
          const found = data.find((c) => c._id === prev._id);
          return found || data[0];
        });
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      showToast("Failed to load contacts ledger", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setOpenActionMenuId(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Format Helper: Initials
  const getInitials = (name = "") => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return "CL";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  // Format Helper: Relative or clean date
  const formatSubmittedDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    if (isToday) return `Today, ${timeStr}`;
    if (isYesterday) return `Yesterday, ${timeStr}`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Status badge styling helper matching screenshot
  const getStatusBadge = (status = "New") => {
    switch (status) {
      case "Contacted":
        return {
          label: "Contacted",
          badgeText: "Contacted",
          classes: "bg-[#E8F8F5] text-[#0D9488] border-[#A7F3D0]",
        };
      case "New":
        return {
          label: "New",
          badgeText: "New Inquiry",
          classes: "bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]",
        };
      case "In Progress":
        return {
          label: "In Progress",
          badgeText: "In Progress",
          classes: "bg-[#FEF3E2] text-[#D97706] border-[#FDE68A]",
        };
      case "Converted":
        return {
          label: "Converted",
          badgeText: "Converted",
          classes: "bg-[#EBF5FE] text-[#0284C7] border-[#BAE6FD]",
        };
      case "Not Interested":
      case "Closed":
        return {
          label: status === "Not Interested" ? "Closed" : status,
          badgeText: "Closed",
          classes: "bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]",
        };
      default:
        return {
          label: status || "New",
          badgeText: status || "New",
          classes: "bg-[#E8F8F5] text-[#0D9488] border-[#A7F3D0]",
        };
    }
  };

  // Filtered contacts calculation
  const filteredContacts = useMemo(() => {
    return contacts.filter((item) => {
      // 1. Status Filter
      if (statusFilter !== "All" && (item.status || "New") !== statusFilter) {
        return false;
      }

      // 2. Date Filter
      if (dateFilter === "7days") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        if (new Date(item.createdAt) < sevenDaysAgo) return false;
      } else if (dateFilter === "30days") {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        if (new Date(item.createdAt) < thirtyDaysAgo) return false;
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = (item.name || "").toLowerCase().includes(q);
        const matchesEmail = (item.email || "").toLowerCase().includes(q);
        const matchesService = (item.service || "").toLowerCase().includes(q);
        const matchesPhone = (item.phone || "").toLowerCase().includes(q);
        const matchesMessage = (item.message || "").toLowerCase().includes(q);
        return matchesName || matchesEmail || matchesService || matchesPhone || matchesMessage;
      }

      return true;
    });
  }, [contacts, statusFilter, dateFilter, searchQuery]);

  // Real Dynamic KPI Stats
  const kpiStats = useMemo(() => {
    const total = contacts.length;
    const newCount = contacts.filter((c) => (c.status || "New") === "New").length;
    const inProgressCount = contacts.filter((c) => c.status === "In Progress").length;
    const convertedCount = contacts.filter((c) => c.status === "Converted").length;

    return {
      total,
      newCount,
      inProgressCount,
      convertedCount,
    };
  }, [contacts]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage) || 1;
  const paginatedContacts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredContacts.slice(start, start + itemsPerPage);
  }, [filteredContacts, currentPage]);

  // Checkbox handlers for bulk selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(paginatedContacts.map((c) => c._id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Open single delete confirmation
  const handleOpenSingleDelete = (id, name, e) => {
    if (e) e.stopPropagation();
    setDeleteModal({
      isOpen: true,
      type: "single",
      targetId: id,
      targetName: name || "this lead",
      count: 1,
    });
  };

  // Open bulk delete confirmation
  const handleOpenBulkDelete = () => {
    if (selectedIds.length === 0) return;
    setDeleteModal({
      isOpen: true,
      type: "bulk",
      targetId: null,
      targetName: "",
      count: selectedIds.length,
    });
  };

  // Confirm delete execution
  const handleExecuteDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      if (deleteModal.type === "single" && deleteModal.targetId) {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/admin/contacts/${deleteModal.targetId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        showToast("Contact record deleted successfully", "success");
        setContacts((prev) => {
          const next = prev.filter((c) => c._id !== deleteModal.targetId);
          if (selectedContact?._id === deleteModal.targetId) {
            setSelectedContact(next[0] || null);
          }
          return next;
        });
      } else if (deleteModal.type === "bulk" && selectedIds.length > 0) {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/admin/contacts/bulk-delete`,
          { ids: selectedIds },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        showToast(`Successfully deleted ${selectedIds.length} contact records`, "success");
        setContacts((prev) => {
          const next = prev.filter((c) => !selectedIds.includes(c._id));
          if (selectedContact && selectedIds.includes(selectedContact._id)) {
            setSelectedContact(next[0] || null);
          }
          return next;
        });
        setSelectedIds([]);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      showToast("Failed to delete contact record", "error");
    } finally {
      setDeleteModal({ isOpen: false, type: "single", targetId: null, targetName: "", count: 0 });
    }
  };

  // Update status handler (Works instantly on frontend & backend)
  const handleUpdateStatus = async (contactId, newStatus) => {
    if (!contactId) return;
    const token = localStorage.getItem("token");

    // 1. Optimistically update local state immediately
    setContacts((prev) =>
      prev.map((c) => (c._id === contactId ? { ...c, status: newStatus } : c))
    );
    if (selectedContact?._id === contactId) {
      setSelectedContact((prev) => ({ ...prev, status: newStatus }));
    }
    showToast(`Status updated to "${newStatus}"`, "success");

    // 2. Persist to backend
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/contacts/${contactId}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.warn("Retrying status update via secondary endpoint...");
      try {
        await axios.patch(
          `${import.meta.env.VITE_API_URL}/contacts/${contactId}/status`,
          { status: newStatus },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (err2) {
        console.error("Status update failed:", err2);
      }
    }
  };

  // Copy full lead details helper
  const handleCopyLeadDetails = (c) => {
    if (!c) return;
    const text = `--- DIGLIP7 CLIENT LEAD ---
Name: ${c.name || "N/A"}
Email: ${c.email || "N/A"}
Phone: ${c.phone || "N/A"}
Service: ${c.service || "General Consultation"}
Status: ${c.status || "New"}
Date: ${new Date(c.createdAt).toLocaleString()}
Message: ${c.message || "N/A"}`;
    navigator.clipboard.writeText(text);
    showToast("Lead details copied to clipboard!", "success");
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (contacts.length === 0) {
      showToast("No inquiries available to export", "warning");
      return;
    }
    const headers = ["Name", "Email", "Phone", "Service", "Status", "Date", "Message"];
    const rows = filteredContacts.map((c) => [
      `"${c.name || ""}"`,
      `"${c.email || ""}"`,
      `"${c.phone || ""}"`,
      `"${c.service || ""}"`,
      `"${c.status || "New"}"`,
      `"${new Date(c.createdAt).toISOString()}"`,
      `"${(c.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `diglip7_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Inquiries exported successfully as CSV!", "success");
  };

  // Active lead for right panel (Always shows the top/selected real lead)
  const activeLead = selectedContact || paginatedContacts[0] || contacts[0] || null;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 font-sans antialiased relative">
      {/* Toast Notification Container */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-2xl shadow-xl border flex items-center justify-between pointer-events-auto transition-all duration-300 animate-in slide-in-from-right ${
              toast.type === "success"
                ? "bg-[#0B1320] border-teal-500/40 text-white"
                : toast.type === "warning"
                ? "bg-amber-900/95 border-amber-700 text-white"
                : "bg-rose-900/95 border-rose-700 text-white"
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              {toast.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              )}
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-white/60 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* ================= 2-COLUMN LAYOUT (MAIN CONTENT + DOCKED RIGHT LEAD PANEL) ================= */}
      <div className="flex flex-col xl:flex-row items-start gap-6">
        {/* ================= LEFT MAIN WORKSPACE ================= */}
        <div className="flex-1 min-w-0 space-y-6 w-full">
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0D9488]">
                LEADS & INQUIRIES
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Contact Inquiries
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Manage and respond to leads submitted through your website.
              </p>
            </div>

            {/* Decorative Vector Artwork */}
            <div className="hidden sm:flex items-center gap-3.5 bg-gradient-to-r from-[#0D8B7A] to-[#0A6C60] text-white px-5 py-3 rounded-2xl shadow-sm border border-teal-600/40">
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-teal-200">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-teal-200 block">
                  More Leads
                </span>
                <span className="text-xs font-black text-white">More Growth</span>
              </div>
            </div>
          </div>

          {/* 4 Bento KPI Metric Cards (Real Database Data Only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Inquiries */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500">Total Inquiries</span>
                <div className="text-2xl font-black text-slate-900">{kpiStats.total}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                  Live Database
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#EAF8F5] text-[#0D9488] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>

            {/* New */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500">New</span>
                <div className="text-2xl font-black text-slate-900">{kpiStats.newCount}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                  Unprocessed
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#EAF3FD] text-[#0284C7] flex items-center justify-center">
                <Inbox className="w-5 h-5" />
              </div>
            </div>

            {/* In Progress */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500">In Progress</span>
                <div className="text-2xl font-black text-slate-900">{kpiStats.inProgressCount}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600">
                  In Discussion
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#FEF5E7] text-[#D97706] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            {/* Converted */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500">Converted</span>
                <div className="text-2xl font-black text-slate-900">{kpiStats.convertedCount}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-600">
                  Closed Deals
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#F5EDFD] text-[#8B5CF6] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Main Inquiries Table Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
            {/* Table Control Strip */}
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-black text-slate-900">Contact Inquiries</h2>
                <p className="text-xs text-slate-400">
                  View and manage all real client inquiries submitted on your site.
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center flex-wrap gap-2.5">
                {/* Search */}
                <div className="relative min-w-[220px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by name, email, phone, service..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Converted">Converted</option>
                    <option value="Not Interested">Closed</option>
                  </select>
                </div>

                {/* Date Dropdown */}
                <div className="relative">
                  <select
                    value={dateFilter}
                    onChange={(e) => {
                      setDateFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
                  >
                    <option value="all">All Time</option>
                    <option value="30days">Last 30 days</option>
                    <option value="7days">Last 7 days</option>
                  </select>
                </div>

                {/* Bulk Delete Button */}
                {selectedIds.length > 0 && (
                  <button
                    onClick={handleOpenBulkDelete}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete ({selectedIds.length})</span>
                  </button>
                )}

                {/* Export CSV */}
                <button
                  onClick={handleExportCSV}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  title="Export to CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>

                {/* Refresh */}
                <button
                  onClick={fetchContacts}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                  title="Refresh"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>

            {/* Real Data Table (No Fake Columns) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50/60 border-b border-slate-150 text-[11px] font-bold text-slate-400">
                    <th className="py-3 px-3 w-10 text-center">
                      <input
                        type="checkbox"
                        checked={
                          paginatedContacts.length > 0 &&
                          paginatedContacts.every((c) => selectedIds.includes(c._id))
                        }
                        onChange={handleSelectAll}
                        className="rounded text-teal-700 focus:ring-teal-500 cursor-pointer"
                      />
                    </th>
                    <th className="py-3 px-3">Contact</th>
                    <th className="py-3 px-3">Phone</th>
                    <th className="py-3 px-3">Service</th>
                    <th className="py-3 px-3">Submitted</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    [...Array(5)].map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td className="py-3.5 px-3 text-center"><div className="w-4 h-4 bg-slate-200 rounded mx-auto" /></td>
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 bg-slate-200 rounded-full" />
                            <div className="space-y-1">
                              <div className="w-20 h-3 bg-slate-200 rounded" />
                              <div className="w-28 h-2.5 bg-slate-100 rounded" />
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-3"><div className="w-20 h-3 bg-slate-200 rounded" /></td>
                        <td className="py-3.5 px-3"><div className="w-24 h-3 bg-slate-200 rounded" /></td>
                        <td className="py-3.5 px-3"><div className="w-16 h-3 bg-slate-200 rounded" /></td>
                        <td className="py-3.5 px-3"><div className="w-14 h-4 bg-slate-200 rounded-full" /></td>
                        <td className="py-3.5 px-3 text-right"><div className="w-12 h-5 bg-slate-200 rounded ml-auto" /></td>
                      </tr>
                    ))
                  ) : paginatedContacts.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-12 text-slate-400">
                        <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                        <p className="font-bold text-slate-700 text-xs">No contact inquiries found</p>
                      </td>
                    </tr>
                  ) : (
                    paginatedContacts.map((contact) => {
                      const initials = getInitials(contact.name);
                      const isSelected = selectedIds.includes(contact._id);
                      const isCurrentActive = activeLead?._id === contact._id;
                      const statusInfo = getStatusBadge(contact.status);

                      return (
                        <tr
                          key={contact._id}
                          onClick={() => setSelectedContact(contact)}
                          className={`hover:bg-slate-50/90 transition duration-150 cursor-pointer ${
                            isCurrentActive
                              ? "bg-teal-50/40"
                              : isSelected
                              ? "bg-slate-50"
                              : ""
                          }`}
                        >
                          {/* Checkbox */}
                          <td
                            className="py-3 px-3 text-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleSelectRow(contact._id)}
                              className="rounded text-teal-700 focus:ring-teal-500 cursor-pointer"
                            />
                          </td>

                          {/* Contact */}
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-[#31518D] text-white font-bold flex items-center justify-center text-[10px] shrink-0">
                                {initials}
                              </div>
                              <div className="min-w-0">
                                <span className="font-bold text-slate-900 block leading-tight truncate max-w-[150px]">
                                  {contact.name || "Client"}
                                </span>
                                <span className="text-[10px] text-slate-400 block truncate max-w-[150px]">
                                  {contact.email}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Phone */}
                          <td className="py-3 px-3 text-slate-700 font-medium whitespace-nowrap">
                            {contact.phone ? (
                              <a
                                href={`tel:${contact.phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="hover:text-teal-700 hover:underline"
                              >
                                {contact.phone}
                              </a>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>

                          {/* Service */}
                          <td className="py-3 px-3 text-slate-700 font-semibold whitespace-nowrap">
                            {contact.service || "General Consultation"}
                          </td>

                          {/* Submitted */}
                          <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                            {formatSubmittedDate(contact.createdAt)}
                          </td>

                          {/* Status Badge */}
                          <td className="py-3 px-3 whitespace-nowrap">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusInfo.classes}`}
                            >
                              {statusInfo.label}
                            </span>
                          </td>

                          {/* Action */}
                          <td
                            className="py-3 px-3 text-right whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => setSelectedContact(contact)}
                                className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                                  isCurrentActive
                                    ? "bg-[#0D8B7A] text-white"
                                    : "text-slate-600 hover:text-teal-800"
                                }`}
                              >
                                View
                              </button>

                              {/* 3-Dots Action Dropdown */}
                              <div className="relative">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenActionMenuId(
                                      openActionMenuId === contact._id ? null : contact._id
                                    );
                                  }}
                                  className="p-1 rounded hover:bg-slate-200 text-slate-400 transition cursor-pointer"
                                >
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>

                                {openActionMenuId === contact._id && (
                                  <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-40 text-left animate-in fade-in"
                                  >
                                    <button
                                      onClick={() => {
                                        handleCopyLeadDetails(contact);
                                        setOpenActionMenuId(null);
                                      }}
                                      className="w-full px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                                    >
                                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                                      <span>Copy Details</span>
                                    </button>
                                    <div className="h-px bg-slate-100 my-1" />
                                    <button
                                      onClick={(e) => {
                                        handleOpenSingleDelete(contact._id, contact.name, e);
                                        setOpenActionMenuId(null);
                                      }}
                                      className="w-full px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                      <span>Delete Lead</span>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="p-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div>
                Showing{" "}
                <span className="font-bold text-slate-800">
                  {filteredContacts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
                </span>{" "}
                -{" "}
                <span className="font-bold text-slate-800">
                  {Math.min(currentPage * itemsPerPage, filteredContacts.length)}
                </span>{" "}
                of <span className="font-bold text-slate-800">{filteredContacts.length}</span> inquiries
              </div>

              {totalPages > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1 rounded border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-6 h-6 rounded font-bold text-[11px] transition cursor-pointer ${
                          currentPage === page
                            ? "bg-[#0D8B7A] text-white"
                            : "border border-slate-200 hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1 rounded border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT DOCKED LEAD DETAIL CARD (SHOWS FIRST / SELECTED REAL USER) ================= */}
        <aside className="w-full xl:w-80 2xl:w-96 shrink-0 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs space-y-6">
          {activeLead ? (
            <>
              {/* Profile Card Top */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#31518D] text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {getInitials(activeLead.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border mb-1 ${
                      getStatusBadge(activeLead.status).classes
                    }`}
                  >
                    {getStatusBadge(activeLead.status).badgeText}
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-tight truncate">
                    {activeLead.name || "Client Lead"}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">{activeLead.email}</p>
                </div>
              </div>

              {/* Real Key-Value Details List */}
              <div className="space-y-3 text-xs text-slate-600 pt-1">
                {activeLead.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href={`tel:${activeLead.phone}`}
                      className="font-bold text-slate-800 hover:text-teal-700"
                    >
                      {activeLead.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${activeLead.email}`}
                    className="font-semibold text-slate-800 hover:text-teal-700 truncate"
                  >
                    {activeLead.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Interested In:</span>
                    <span className="font-bold text-slate-800">
                      {activeLead.service || "General Consultation"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Submitted:</span>
                    <span className="font-semibold text-slate-800">
                      {new Date(activeLead.createdAt).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Bubble Card */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 block">Message</span>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed whitespace-pre-line min-h-[90px]">
                  {activeLead.message || "No message content provided."}
                </div>
              </div>

              {/* Quick Status Actions (Instant Real Update) */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-bold text-slate-900 block">Quick Actions</span>
                <div className="space-y-2">
                  {/* Mark as Contacted */}
                  <button
                    onClick={() => handleUpdateStatus(activeLead._id, "Contacted")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0D8B7A] hover:bg-[#0b7869] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-xs cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Mark as Contacted</span>
                  </button>

                  {/* In Progress */}
                  <button
                    onClick={() => handleUpdateStatus(activeLead._id, "In Progress")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FEF3E2] hover:bg-[#fde8c8] text-[#D97706] border border-[#FDE68A] font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <Clock className="w-4 h-4" />
                    <span>In Progress</span>
                  </button>

                  {/* Converted */}
                  <button
                    onClick={() => handleUpdateStatus(activeLead._id, "Converted")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#EBF5FE] hover:bg-[#d6ecfd] text-[#0284C7] border border-[#BAE6FD] font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Converted</span>
                  </button>

                  {/* Not Interested */}
                  <button
                    onClick={() => handleUpdateStatus(activeLead._id, "Not Interested")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FDF2F2] hover:bg-[#fce1e4] text-[#E11D48] border border-[#FECDD3] font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span>Not Interested</span>
                  </button>
                </div>
              </div>

              {/* Delete Lead Button at Bottom */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopyLeadDetails(activeLead)}
                  className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Lead</span>
                </button>

                <button
                  onClick={(e) => handleOpenSingleDelete(activeLead._id, activeLead.name, e)}
                  className="px-3.5 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Entry</span>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20 text-slate-400 space-y-2">
              <Inbox className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-xs font-bold text-slate-700">No inquiries available</p>
              <p className="text-[11px] text-slate-400">New inquiries will appear here automatically.</p>
            </div>
          )}
        </aside>
      </div>

      {/* ================= DELETE CONFIRMATION MODAL ================= */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full space-y-4 shadow-2xl border border-slate-200 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h4 className="text-lg font-black text-slate-900">
                {deleteModal.type === "bulk" ? "Delete Selected Inquiries?" : "Delete Contact Inquiry?"}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {deleteModal.type === "bulk"
                  ? `Are you sure you want to permanently delete ${deleteModal.count} inquiries from the database? This action cannot be undone.`
                  : `Are you sure you want to permanently delete the inquiry from "${deleteModal.targetName}"? This action cannot be undone.`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() =>
                  setDeleteModal({ isOpen: false, type: "single", targetId: null, targetName: "", count: 0 })
                }
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteDelete}
                className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-xs cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
