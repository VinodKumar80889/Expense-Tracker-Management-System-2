const categories = [
  "Food",
  "Travel",
  "Shopping",
  "Utilities",
  "Health",
  "Entertainment",
  "Other",
];

function ExpenseForm({
  form,
  editing,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <section className="card expense-form-card">
      <div className="card-heading">
        <div>
          <span className="section-label">
            {editing ? "UPDATE RECORD" : "NEW RECORD"}
          </span>

          <h2>{editing ? "Edit Expense" : "Add Expense"}</h2>
        </div>

        <div className="card-icon">＋</div>
      </div>

      <form className="expense-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            type="date"
            value={form.date}
            onChange={(event) =>
              onChange("date", event.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expense-category">Category</label>

          <select
            id="expense-category"
            value={form.category}
            onChange={(event) =>
              onChange("category", event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="expense-amount">Amount</label>

          <div className="amount-input">
            <span>₹</span>

            <input
              id="expense-amount"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="0.00"
              value={form.amount}
              onChange={(event) =>
                onChange("amount", event.target.value)
              }
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="expense-description">Description</label>

          <input
            id="expense-description"
            type="text"
            placeholder="What was this expense for?"
            value={form.description}
            onChange={(event) =>
              onChange("description", event.target.value)
            }
          />
        </div>

        <div className="form-actions">
          <button className="primary-button" type="submit">
            <span>{editing ? "✓" : "＋"}</span>
            {editing ? "Update Expense" : "Add Expense"}
          </button>

          {editing && (
            <button
              className="secondary-button"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ExpenseForm;