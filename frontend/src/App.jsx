import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import CategorySummary from "./components/CategorySummary";

const API = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000/api"
).replace(/\/$/, "");

const initialForm = {
  date: new Date().toISOString().slice(0, 10),
  category: "Food",
  amount: "",
  description: "",
};

function App() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({
    total: 0,
    count: 0,
    by_category: [],
  });

  const [form, setForm] = useState(initialForm);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadExpenses() {
    try {
      setLoading(true);
      setError("");

      const query = search
        ? `?q=${encodeURIComponent(search)}`
        : "";

      const [expensesResponse, summaryResponse] = await Promise.all([
        fetch(`${API}/expenses/${query}`),
        fetch(`${API}/summary/`),
      ]);

      if (!expensesResponse.ok || !summaryResponse.ok) {
        throw new Error("Unable to load expense data.");
      }

      const expensesData = await expensesResponse.json();
      const summaryData = await summaryResponse.json();

      setExpenses(expensesData);
      setSummary(summaryData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadExpenses();
  }, [search]);

  function updateField(field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");

      const url = editing
        ? `${API}/expenses/${editing}/`
        : `${API}/expenses/`;

      const response = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to save expense.");
      }

      cancelEdit();
      await loadExpenses();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      const response = await fetch(`${API}/expenses/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Unable to delete expense.");
      }

      await loadExpenses();
    } catch (error) {
      setError(error.message);
    }
  }

  function handleEdit(expense) {
    setEditing(expense.id);

    setForm({
      date: expense.date,
      category: expense.category,
      amount: expense.amount,
      description: expense.description || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditing(null);
    setForm(initialForm);
  }

  return (
    <div className="app">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <Header />

      <main className="dashboard">
        {error && (
          <div className="error-message">
            <span>⚠</span>
            {error}
          </div>
        )}

        <section className="stats-grid">
          <StatsCard
            icon="₹"
            label="Total Spent"
            value={`₹${Number(summary.total).toFixed(2)}`}
            accent="purple"
          />

          <StatsCard
            icon="↗"
            label="Transactions"
            value={summary.count}
            accent="blue"
          />

          <StatsCard
            icon="◆"
            label="Top Category"
            value={summary.by_category[0]?.category || "—"}
            accent="green"
          />
        </section>

        <section className="dashboard-grid">
          <ExpenseForm
            form={form}
            editing={editing}
            onChange={updateField}
            onSubmit={handleSubmit}
            onCancel={cancelEdit}
          />

          <CategorySummary categories={summary.by_category} />
        </section>

        <ExpenseTable
          expenses={expenses}
          search={search}
          loading={loading}
          onSearch={setSearch}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>

      <footer className="footer">
        <p>
          Expense Tracker • Built with React, Django & PostgreSQL
        </p>
      </footer>
    </div>
  );
}

export default App;